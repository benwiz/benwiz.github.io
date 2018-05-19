// Card selectors
const setProfileCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Ben Wisialowski';
  subtitleElement.innerHTML = 'Senior Engineer at Lucid';
  secondaryElement.innerHTML = 'Software developer enjoying the food, music, and culture of New Orleans.';
  actionIconsElement.innerHTML = `
    <a class="link-icon" href="https://github.com/benwiz" target="_blank" label="GitHub">
      <img src="/assets/images/mark-github.svg" height="24">
    </a>
    <a class="link-icon" href="https://www.linkedin.com/in/benwiz" target="_blank" label="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
    </a>
    <a class="link-icon" href="/assets/resume.pdf" target="_blank" label="Resume">
      <img src="/assets/images/resume.svg" height="24">
    </a>
  `;
};
const setTulaneCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Tulane University';
  subtitleElement.innerHTML = 'B.S. in Economics and Computer Science';
  secondaryElement.innerHTML = '';
  actionIconsElement.innerHTML = `
    <a class="link-icon" href="https://tulane.edu" target="_blank" label="Tulane">
      <img src="/assets/images/tulane.png" height="24">
    </a>
  `;
};
const setBragOnCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'BragOn, LLC';
  subtitleElement.innerHTML = 'Founder & iOS Developer';
  secondaryElement.innerHTML = '';
  actionIconsElement.innerHTML = '';
};
const setGrokAndBanterCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Grok + Banter';
  subtitleElement.innerHTML = 'Information Analyst and Software Developer';
  secondaryElement.innerHTML = '';
  actionIconsElement.innerHTML = `
    <a class="link-icon" href="https://www.linkedin.com/company/grok-&-banter-llc/" target="_blank" label="Grok + Banter">
      <img src="/assets/images/gb.png" height="24">
    </a>
  `;
};
const setLucidCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Lucid';
  subtitleElement.innerHTML = 'Senior Engineer';
  secondaryElement.innerHTML = '';
  actionIconsElement.innerHTML = `
    <a class="link-icon" href="https://luc.id" target="_blank" label="Lucid">
      <img src="/assets/images/lucid-large.png" height="24">
    </a>
  `;
};
const setWWOZToSpotifyCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'WWOZ-to-Spotify';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'An AWS Lambda function written in Clojure that reads WWOZ\'s RSS feed then adds each song to a Spotify playlist';
  actionIconsElement.innerHTML = `
    <a class="link-icon" href="https://github.com/benwiz/wwoz_to_spotify/" target="_blank" label="GitHub - WWOZ-to-Spotify">
      <img src="/assets/images/mark-github.svg" height="24">
    </a>
    <a class="link-icon" href="https://open.spotify.com/user/bwisialowski/playlist/3vjFwtIxnPkNXk0XWTj0wy?si=98jhghgARwCK3FnRX3rcNQ" target="_blank" label="Spotify">
      <img src="/assets/images/spotify.svg" height="24">
    </a>
  `;
  // TODO: Link to spotify playlist.
};
const setLowpolyCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Lowpoly';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'A collection of AWS Lambda functions written in Clojure and Python that turn an image into a lowpoly version made of triangles.';
  actionIconsElement.innerHTML = `
    <a class="link-icon" href="https://github.com/benwiz/lowpoly/" target="_blank" label="GitHub - Lowpoly">
      <img src="/assets/images/mark-github.svg" height="24">
    </a>
    <a class="link-icon" href="http://benwiz.io/lowpoly/" target="_blank" label="Lowpoly">
      <img src="/assets/images/lowpoly.png" height="24">
    </a>
  `;
};
const setSquiggleCard = () => {
  const titleElement = document.querySelector('.mdc-card__title');
  const subtitleElement = document.querySelector('.mdc-card__subtitle');
  const secondaryElement = document.querySelector('.mdc-card__secondary');
  const actionIconsElement = document.querySelector('.mdc-card__action-icons');

  titleElement.innerHTML = 'Squiggle';
  subtitleElement.innerHTML = '';
  secondaryElement.innerHTML = 'A ClojureScript website that uses Quil, a Processing wrapper, to for several small drawings and animations.';
  actionIconsElement.innerHTML = `
    <a class="link-icon" href="https://github.com/benwiz/squiggle/" target="_blank" label="GitHub - Squiggle">
      <img src="/assets/images/mark-github.svg" height="24">
    </a>
    <a class="link-icon" href="http://benwiz.io/squiggle/" target="_blank" label="Squiggle">
      <img src="/assets/images/squiggle.png" height="24">
    </a>
  `;
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
