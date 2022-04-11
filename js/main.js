const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');
const iframe = document.querySelector('iframe')

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    document.querySelector('iframe').remove();
    document.querySelector('.modal__inner').append(iframe);
});

