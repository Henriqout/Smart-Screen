// Adiciona um evento de clique para cada imagem com a classe 'lightbox-trigger'
const images = document.querySelectorAll('.lightbox-trigger');
images.forEach(image => {
  image.addEventListener('click', () => {
    // Obtem o ID do lightbox a ser exibido a partir do atributo 'data-lightbox' da imagem
    const lightboxId = image.getAttribute('data-lightbox');
    
    // Exibe o lightbox correspondente ao ID obtido
    const lightbox = document.getElementById(lightboxId);
    lightbox.style.display = 'block';

    // Define a imagem a ser exibida no lightbox a partir do atributo 'data-image' da imagem
    const lightboxImage = lightbox.querySelector('img');
    lightboxImage.src = image.getAttribute('data-image');
  });
});


// Adiciona um evento de clique para fechar o lightbox
const lightboxes = document.querySelectorAll('.lightbox');
lightboxes.forEach(lightbox => {
  const closeButton = lightbox.querySelector('.lightbox-close');
  closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});

