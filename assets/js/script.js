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

document.addEventListener('DOMContentLoaded', function () {
  const articles = document.querySelectorAll('.article');
  const totalPages = Math.ceil(articles.length / 4);
  let currentPage = 1;

  const prevButton = document.querySelector('.previous_page');
  const nextButton = document.querySelector('.next_page');

  function updateButtonVisibility() {
      prevButton.style.display = (currentPage > 1) ? '' : 'none';
      nextButton.style.display = (currentPage < totalPages) ? '' : 'none';
  }

  function showPage(page) {
      const start = (page - 1) * 4;
      const end = start + 4;
      articles.forEach((article, index) => {
          article.style.display = (index >= start && index < end) ? '' : 'none';
      });
      document.querySelector('.page_number').textContent = 'Page ' + page;

      updateButtonVisibility();
  }

  prevButton.addEventListener('click', function () {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  nextButton.addEventListener('click', function () {
      if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
      }
  });

  showPage(1);
});
