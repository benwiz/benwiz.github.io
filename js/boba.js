const bobaOptions = Boba.getDefaultOptions();

// Vertex configs
bobaOptions.numVertices = 40;
bobaOptions.drawVertices = true;
bobaOptions.vertexMinSize = 8;
bobaOptions.vertexMaxSize = 16;
bobaOptions.vertexMinSpeed = 0.2;
bobaOptions.vertexMaxSpeed = 1.5;
bobaOptions.vertexColors = [
  {
    r: 30,
    g: 144,
    b: 255,
    a: 0.04,
  },
];

// Edge configs
bobaOptions.numNeighbors = 2;
bobaOptions.drawEdges = true;
bobaOptions.edgeColors = [
  {
    r: 30,
    g: 144,
    b: 255,
    a: 0.04,
  },
];

// Shape configs
bobaOptions.drawShapes = false;
bobaOptions.shapeColors = [
  {
    r: 30,
    g: 144,
    b: 255,
    a: 0.015,
  },
];

// Start the animation
Boba.start(bobaOptions);
