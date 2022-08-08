const openBtn = document.querySelector('.cardAdd');
const closeBtn = document.querySelector('#close');
const mediaClose = document.getElementById('mediaClose')
const modal = document.querySelector('.modal');
const mediaModal = document.querySelector('.mediaModal')
const mquery = window.matchMedia("(max-width: 600px)");

openBtn.addEventListener('click', openModal)


function openModal() {
    if (mquery.matches) {
        openMediaModal()
    } else {
        modal.style.display = 'grid'
        mediaModal.style.display = 'none'
        document.querySelector('.homePage').style.display = 'none'
    }
};

closeBtn.addEventListener('click', closeModal);
mediaClose.addEventListener('click', closeModal);


function closeModal() {
    if (mquery.matches) {
        mediaModal.style.display = 'none'
    } else {
        modal.style.display = 'none'
    }
};

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});



function openMediaModal() {
    modal.style.display = 'none'
    mediaModal.style.display = 'block'
}

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('mediaModal')) {
        closeModal();
    }
});







