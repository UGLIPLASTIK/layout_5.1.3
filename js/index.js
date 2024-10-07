const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const toolgeButton = document.querySelector('.toolge-button');
const brandWrapper = document.querySelector('.brand-wrapper');
const brandItems = document.querySelectorAll('.brand-list__item');

const setQantityEl = function() {
  if (brandWrapper.offsetWidth < 1120) {
    for(let i = 9; i <= brandItems.length - 1; i++) {
      brandItems[i].remove();
    }
  }
}

window.addEventListener('resize', setQantityEl)

window.addEventListener('load', setQantityEl);

toolgeButton.addEventListener('click', () => {
  toolgeButton.classList.toggle('folded');
  if (toolgeButton.classList.contains('folded')) {
    toolgeButton.textContent = 'Показать все';
    brandWrapper.classList.add('brand-wrapper--folded')
  } else {
    toolgeButton.textContent = 'Скрыть';
    brandWrapper.classList.remove('brand-wrapper--folded')
  }
})




