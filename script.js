const scrollViewport = document.querySelector('.main-scroll-viewport');
const adBanner       = document.getElementById('smartChannelAd');
const imgBorder      = document.querySelector('.sca-img-border');

function onScroll() {
  if (scrollViewport.scrollTop > 0) {
    adBanner.classList.add('is-expanded');
    imgBorder.classList.add('is-visible');
    scrollViewport.removeEventListener('scroll', onScroll);
  }
}

scrollViewport.addEventListener('scroll', onScroll, { passive: true });
