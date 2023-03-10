const navToggle = document.querySelector('.nav-toggle');
const closeBtn = document.querySelector('.close-btn');
const navigations = document.querySelector('.navigations');
const header = document.querySelector('#header');

const openNav = () => {
  navigations.style.display = 'flex';
  navToggle.style.display = 'none';
  closeBtn.style.display = 'inline-block';
  header.classList.add('bottom');
};

const closeNav = () => {
  navigations.style.display = 'none';
  navToggle.style.display = 'inline-block';
  closeBtn.style.display = 'none';
  header.classList.remove('bottom');
};


navToggle.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);