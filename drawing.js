// Config as a global var
var CONFIG = {
  numPoints: 55,
  numEdges: 2, // K-nearest neighbors. Use "0" for no lines. Use "Infinity" for all.
  speedMultiplier: 1,
  rMin: 8,
  rMax: 16,
  lineStrokeWeight: 1,
  color: {
    r: 30,
    g: 144,
    b: 255,
    a: 16,
  },
  cursorRadius: 30,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  ),
};
//
// Utility functions
//

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(getRandomFloat(min, max));
}

function degToRadians(angle) {
  return angle * (Math.PI / 180);
}

function radiansToDeg(angle) {
  return angle * (180 / Math.PI);
}

function distance(point1, point2) {
  // sqrt( (x1 - x2)^2 + (y1 - y2)^2 )
  var x1 = point1[0];
  var y1 = point1[1];
  var x2 = point2[0];
  var y2 = point2[1];
  var dist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  return dist;
}

function lineContainsPoint(line, point) {
  for (var i = 0; i < line.length; i++) {
    var dist = distance(point, line[i]);
    if (dist === 0) {
      return i;
    }
  }

  return -1;
}

//
// Creation, updating, and drawing functions
//

function createPoint() {
  var speedMultiplier = CONFIG.speedMultiplier;
  var rMin = CONFIG.rMin;
  var rMax = CONFIG.rMax;

  var point = {
    // Init location. Consider rMax to ensure that no points are generated partially offscreen.
    x: getRandomFloat(20, windowWidth - 20), // windowWidth / 2,
    y: getRandomFloat(20, windowHeight - 20), // windowHeight / 2,
    // Init velocity
    velocity: {
      angle: getRandomInt(0, 360),
      speed: getRandomFloat(0.2, 1) * speedMultiplier,
      runAwayMultiplier: 1,
    },
    // Radius of point
    r: getRandomFloat(rMin, rMax),
    // Set color. NOTE: consider switching to HSB rather than using Alpha as a value controller
    color: {
      r: CONFIG.color.r,
      g: CONFIG.color.g,
      b: CONFIG.color.b,
      a: CONFIG.color.a,
    },
  };
  return point;
}

function createPoints(n) {
  var points = [];
  for (var i = 0; i < n; i++) {
    var point = createPoint();
    points.push(point);
  }
  return points;
}

function drawPoint(point) {
  if (point.r > 0) {
    strokeWeight(1);
    stroke(point.color.r, point.color.g, point.color.b, point.color.a);
    fill(point.color.r, point.color.g, point.color.b, point.color.a / 2);
    ellipse(point.x, point.y, 2 * point.r); // Set diameter
  }
}

function updatePoint(point, cursorRadius) {
  // Update location
  point.x +=
    point.velocity.speed *
    Math.cos(degToRadians(point.velocity.angle)) *
    point.velocity.runAwayMultiplier;
  point.y +=
    point.velocity.speed *
    Math.sin(degToRadians(point.velocity.angle)) *
    point.velocity.runAwayMultiplier;

  // Constrain the point to within the borders
  if (point.x < 0 + point.r) point.x = 0 + point.r;
  if (point.x > windowWidth - point.r) point.x = windowWidth - point.r;
  if (point.y < 0 + point.r) point.y = 0 + point.r;
  if (point.y > windowHeight - point.r) point.y = windowHeight - point.r;

  // Ensure that the angle hasn't gone into a crazy range, even though that shouldn't cause an issue
  if (point.velocity.angle >= 360) {
    point.velocity.angle -= 360;
  }

  // Update angle if hit wall. Account for radius.
  if (point.x <= 0 + point.r || windowWidth - point.r <= point.x) {
    point.velocity.angle = 180 - point.velocity.angle;
  } else if (point.y <= 0 + point.r || windowHeight - point.r <= point.y) {
    point.velocity.angle = 0 - point.velocity.angle;
  }

  // Make point run away from mouse
  var mousePos = [mouseX, mouseY];
  var pointPos = [point.x, point.y];
  var dist = distance(mousePos, pointPos);
  if (dist < cursorRadius) {
    // Calculate angle to mousePos from point. Then reverse it and set as new angle.
    var a = mouseX - point.x;
    var o = mouseY - point.y;
    var h = dist;

    // Determine angle based on quadrant. I'm sure there is a generic solution out there, but this works.
    if (a > 0 && o > 0) {
      var angle = radiansToDeg(Math.asin(o / h)) + 180;
    } else if (a > 0 && o <= 0) {
      var angle = radiansToDeg(Math.acos(-a / h));
    } else if (a <= 0 && o > 0) {
      var angle = radiansToDeg(Math.acos(a / h)) + 180;
    } else if (a <= 0 && o <= 0) {
      var angle = radiansToDeg(Math.asin(-o / h));
    }

    point.velocity.angle = angle;

    // Increment the runAwayMultiplier (look into using inverse square of distance)
    point.velocity.runAwayMultiplier += 0.5;
  } else {
    if (point.velocity.runAwayMultiplier > 1) {
      point.velocity.runAwayMultiplier *= 0.95;
    }
    if (point.velocity.runAwayMultiplier < 1) {
      point.velocity.runAwayMultiplier = 1;
    }
  }
}

function createLines(k, points) {
  var linesForPoints = [];

  // Create all pairs of points
  for (var i = 0; i < points.length; i++) {
    var linesForPoint = [];
    for (var j = 0; j < points.length; j++) {
      if (i === j) continue;
      var point1 = points[i];
      var point2 = points[j];
      var line = [[point1.x, point1.y], [point2.x, point2.y]];
      line.sort(function(a, b) {
        return a[0] - b[0];
      });
      linesForPoint.push(line);
    }
    linesForPoints.push(linesForPoint);
  }

  // Store the flattened list of lines
  var lines = [];

  // Sort points using distance function
  for (var i = 0; i < linesForPoints.length; i++) {
    // Sort the lines for each point
    var linesForPoint = linesForPoints[i];
    linesForPoint.sort(function(line1, line2) {
      var dist1 = distance(line1[0], line1[1]);
      var dist2 = distance(line2[0], line2[1]);
      return dist1 - dist2;
    });

    // Keep first k elements
    linesForPoint.splice(k);

    // Store in flattened list
    lines = lines.concat(linesForPoint);
  }

  // Dedupe
  for (var i = 0; i < lines.length; i++) {
    var baseLine = lines[i];
    for (var j = 0; j < lines.length; j++) {
      if (i === j) continue;
      var testLine = lines[j];
      if (
        baseLine[0][0] === testLine[0][0] &&
        baseLine[0][1] === testLine[0][1] &&
        baseLine[1][0] === testLine[1][0] &&
        baseLine[1][1] === testLine[1][1]
      ) {
        lines.splice(j, 1);
      }
    }
  }

  return lines;
}

function drawLine(l) {
  strokeWeight(CONFIG.lineStrokeWeight);
  stroke(CONFIG.color.r, CONFIG.color.g, CONFIG.color.b, CONFIG.color.a);
  line(l[0][0], l[0][1], l[1][0], l[1][1]);
}

function findTriangles(lines) {
  // High level: For each line, for each point on the line, find the points connections. For every
  // shared connection point we have a triangle using that shared point as the third vertex.

  var triangles = [];

  for (var i = 0; i < lines.length; i++) {
    var baseLine = lines[i];
    var basePoint1 = baseLine[0];
    var basePoint2 = baseLine[1];

    var matches1 = [];
    var matches2 = [];

    // Find connections
    for (var j = 0; j < lines.length; j++) {
      if (i === j) continue;
      var testLine = lines[j];

      // Find connections for first base point
      var index = lineContainsPoint(testLine, basePoint1);
      if (index > -1) {
        if (index === 0) {
          var match = testLine[1];
        } else {
          var match = testLine[0];
        }
        matches1.push(match);
      }

      // Find connections for second base point
      index = lineContainsPoint(testLine, basePoint2);
      if (index > -1) {
        if (index === 0) {
          var match = testLine[1];
        } else {
          var match = testLine[0];
        }
        matches2.push(match);
      }
    }

    // Get matches
    var matches = [];
    for (var k = 0; k < matches1.length; k++) {
      for (var l = 0; l < matches2.length; l++) {
        var dist = distance(matches1[k], matches2[l]);
        if (dist === 0) {
          matches.push(matches1[k]);
          break;
        }
      }
    }

    // Create the triangles
    for (var k = 0; k < matches.length; k++) {
      var triangle = [basePoint1, basePoint2, matches[k]];
      triangles.push(triangle);
    }
  }

  return triangles;
}

function drawPolygons(polygons) {
  strokeWeight(0);
  fill(CONFIG.color.r, CONFIG.color.g, CONFIG.color.b, CONFIG.color.a / 2);

  for (var i = 0; i < polygons.length; i++) {
    var polygon = polygons[i];

    beginShape();
    for (var j = 0; j < polygon.length; j++) {
      var point = polygon[j];
      vertex(point[0], point[1]);
    }
    endShape(CLOSE);
  }
}

function createOrKillPoints(points, numPoints) {
  var diff = points.length - numPoints;
  // If the difference is positive, kill points. If negative, create points.
  if (diff > 0) {
    while (diff > 0) {
      var randomIndex = Math.floor(Math.random() * points.length);
      points.splice(randomIndex, 1);
      diff -= 1;
    }
  } else if (diff < 0) {
    var newPoints = createPoints(-1 * diff);
    points = points.concat(newPoints);
  }

  return points;
}

function drawCursorBubble(isMobile) {
  if (isMobile) {
    return;
  }

  strokeWeight(1);
  fill(CONFIG.color.r, CONFIG.color.b, CONFIG.color.g, CONFIG.color.a);
  ellipse(mouseX, mouseY, CONFIG.cursorRadius);
}

//
//
// Main functions below. The above code should really be in its own module.
// Only in setup() and draw() will I ever touch global variables.
//
//
var POINTS = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  POINTS = createPoints(CONFIG.numPoints);
}

function draw() {
  background(255);

  // Draw bubble around cursor
  drawCursorBubble(CONFIG.isMobile);

  // Create or kill points until the number matches the CONFIG.numPoints
  POINTS = createOrKillPoints(POINTS.slice(), CONFIG.numPoints);

  // Draw and update points
  for (var i = 0; i < POINTS.length; i++) {
    var point = POINTS[i];
    drawPoint(point);
    updatePoint(point, CONFIG.cursorRadius);
  }

  // Calculate and draw lines
  var lines = createLines(CONFIG.numEdges, POINTS);
  for (var i = 0; i < lines.length; i++) {
    var l = lines[i];
    drawLine(l);
  }

  // Find and draw closed polygons
  var triangles = findTriangles(lines);
  drawPolygons(triangles);
}

//
// JS Event Listeners
//
var containerDiv = document.querySelector('#container');
const numPointsSlider = new mdc.slider.MDCSlider(
  container.querySelector('#num-points'),
);
numPointsSlider.listen('MDCSlider:change', () => {
  CONFIG.numPoints = numPointsSlider.value;
});
const numEdgesSlider = new mdc.slider.MDCSlider(
  container.querySelector('#num-edges'),
);
numEdgesSlider.listen('MDCSlider:change', () => {
  CONFIG.numEdges = numEdgesSlider.value;
});
