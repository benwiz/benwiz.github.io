// Card selectors
const setTulaneCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Tulane University';
  subtitleElement.innerHTML = 'B.S. in Economics and Computer Science';
  secondaryElement.innerHTML = 'Something about why I like Tulane.';
};
const setBragOnCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'BragOn, LLC';
  subtitleElement.innerHTML = 'Founder & iOS Developer 2014-2015';
  secondaryElement.innerHTML = 'Something about why I started BragOn.';
};
const setGrokAndBanterCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Grok + Banter';
  subtitleElement.innerHTML = 'Information Analyst and Software Developer | 2016';
  secondaryElement.innerHTML = 'Something about why I think G+B was a good experience.';
};
const setLucidCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Lucid';
  subtitleElement.innerHTML = 'Senior Engineer';
  secondaryElement.innerHTML = 'Something about why I was valuable to Lucid.';
};
const setWWOZToSpotifyCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'WWOZ-to-Spotify';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'An AWS Lambda function written in Clojure that reads WWOZ\'s RSS feed then adds each song to a Spotify playlist';
  // NOTE: When adding links, make sure there is one to the spotify playlist.
};
const setLowpolyCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Lowpoly';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'A collection of AWS Lambda functions written in Clojure and Python that turn an image into a lowpoly version made of triangles.';
};
const setSquiggleCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Squiggle';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'A ClojureScript website that uses Quil (a Processing wrapper) to for several small drawings and animations.';
};
const setProfileCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionsElement = document.querySelector('.mdc-card__actions');

  titleElement.innerHTML = 'Ben Wisialowski';
  subtitleElement.innerHTML = 'Senior Engineer at Lucid';
  secondaryElement.innerHTML = 'Software developer enjoying the food, music, and culture of New Orleans.';
};

// Initialize click handlers to toggle between cards
const initCardSelectors = () => {
  const cardSelectors = document.querySelectorAll('.card-selector');
  const onCardSelectorClick = (e) => {
    const cardSelector = e.target.parentNode;
    const label = cardSelector.getAttribute('label');
    if (label === 'Tulane University') setTulaneCard();
    else if (label === 'BragOn') setBragOnCard();
    else if (label === 'Grok + Banter') setGrokAndBanterCard();
    else if (label === 'Lucid') setLucidCard();
    else if (label === 'WWOZ-to-Spotify') setWWOZToSpotifyCard();
    else if (label === 'Lowpoly') setLowpolyCard();
    else if (label === 'Squiggle') setSquiggleCard();
    else setProfileCard();
  };
  cardSelectors.forEach((cardSelector) => {
    cardSelector.addEventListener('click', onCardSelectorClick);
  });
};

// Initialize the tooltip at the bottom
const initTooltip = () => {
  const tooltip = document.querySelector('#tooltip');
  const links = document.querySelectorAll('a');
  const onLinkMouseover = (e) => {
    tooltip.style.visibility = 'visible';
    tooltip.textContent = e.target.getAttribute('label');
  };
  const onLinkMouseleave = (_e) => {
    tooltip.style.visibility = 'hidden';
    tooltip.textContent = 'nothing';
  };
  links.forEach((link) => {
    link.addEventListener('mouseenter', onLinkMouseover);
    link.addEventListener('mouseleave', onLinkMouseleave);
  });
};

// Init everything
setProfileCard();
initCardSelectors();
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // Do nothing if mobile
} else {
  // Initialize tooltip if not mobile
  initTooltip();
}
