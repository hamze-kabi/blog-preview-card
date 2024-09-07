document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.heading');
  const contentHolder = document.querySelector('.content-holder');
  
  heading.addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 376) {
      contentHolder.style.boxShadow = '3.6vw 2.4vh';
      heading.style.color = 'yellow';
    } else {
      contentHolder.style.boxShadow = '1.7vw 2.9vh';
      heading.style.color = 'yellow';
    }
  });
});
