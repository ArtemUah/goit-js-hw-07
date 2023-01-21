import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item => {
  return  `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
    `
}).join('');

gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', event => {
    if (event.target.nodeName === 'IMG') {
        event.preventDefault();
        const lightBox = basicLightbox.create(`<img width="800" height="600" src="${event.target.dataset.source}">`, {
            onShow: (lightBox) => {
                document.addEventListener('keydown', event => {
                    if (event.code === 'Escape') {
                        lightBox.close();
                    }
                })
                },
        });
        lightBox.show();
    }
});
