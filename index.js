// Card selectors
const setTulaneCard = () => {
  console.log('setTulaneCard()');
};
const setBragOnCard = () => {
  console.log('setBragOnCard()');
};
const setGrokAndBanterCard = () => {
  console.log('setGrokAndBanterCard()');
};
const setLucidCard = () => {
  console.log('setLucidCard()');
};
const setWWOZToSpotifyCard = () => {
  console.log('setWWOZToSpotifyCard()');
};
const setLowpolyCard = () => {
  console.log('setLowpolyCard()');
};
const setSquiggleCard = () => {
  console.log('setSquiggleCard()');
};
const setProfileCard = () => {
  console.log('setProfileCard()');
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
initCardSelectors();
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // Do nothing if mobile
} else {
  // Initialize tooltip if not mobile
  initTooltip();
}
