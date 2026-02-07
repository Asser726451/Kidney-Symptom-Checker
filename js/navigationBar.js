const nav = document.querySelector('nav');

document.addEventListener('mousemove', (e) => {
  if (e.clientY < 100) {   
    nav.classList.add('show');
  } else {
    nav.classList.remove('show');
  }
});
