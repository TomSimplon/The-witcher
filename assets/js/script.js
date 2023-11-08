const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    document.querySelector('.onglets').style.display = 'block';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    document.querySelector('.onglets').style.display = 'none';
    menuOpen = false;
  }
});