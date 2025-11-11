// = Polaroid Image Switcher =
(function () {
  const images = [
    'photo/showcase/1.jpg',
    'photo/showcase/2.jpg',
    'photo/showcase/3.jpg',
    'photo/showcase/4.jpg',
    'photo/showcase/5.jpg'
  ];

  let currentIndex = 0;
  const photo = document.getElementById('showcase-photo');
  const counter = document.getElementById('showcase-counter');
  const prevBtn = document.getElementById('showcase-prev');
  const nextBtn = document.getElementById('showcase-next');

  function updateSlider() {
    photo.src = images[currentIndex];
    counter.textContent = `Image ${currentIndex + 1} of ${images.length}`;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  // cyclic 
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    });
  }

  // next button with cyclic 
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });
  }

  // Init slider on page load
  document.addEventListener('DOMContentLoaded', updateSlider);
})();

// = Table Styler =
(function () {
  const table = document.getElementById('scoreTable');
  const widthButtons = document.querySelectorAll('[data-width]');
  const borderButtons = document.querySelectorAll('[data-border]');
  const colorSwatches = document.querySelectorAll('[data-color]');
  const resetButton = document.getElementById('resetTable');

  const defaults = {
    width: '500px',
    border: '2px',
    spacing: '1px',
    background: '#fffda9'
  };

  // Width control buttons
  widthButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const width = button.getAttribute('data-width');
      table.style.width = `${width}px`;
    });
  });

  // Border and spacing control buttons
  borderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const border = button.getAttribute('data-border');
      table.style.borderWidth = `${border}px`;
      table.style.borderSpacing = `${border}px`;
    });
  });

  // Color swatch 
  colorSwatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      table.style.backgroundColor = swatch.getAttribute('data-color');
    });
  });

  // Reset button functionality
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      table.style.width = defaults.width;
      table.style.borderWidth = defaults.border;
      table.style.borderSpacing = defaults.spacing;
      table.style.backgroundColor = defaults.background;
    });
  }
})();
