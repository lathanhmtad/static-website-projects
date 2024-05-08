const images = document.querySelectorAll('.image');
[...images].forEach(item => item.addEventListener('click', handleZoomImage))
function handleZoomImage(e) {
    const template = `
    <div class="gallery show">
        <span class="control prev">
            <i class='bx bxs-chevron-left icon-prev'></i>
        </span>
        <span class="control next">
            <i class='bx bxs-chevron-right icon-next'></i>
        </span>
        <i class='control close bx bx-x' ></i>
        <div class="gallery-inner">
            <img src="${e.target.src}" alt="">
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', template);
}

let i = 0;

document.addEventListener('click', function(e) {
    const galleryImage = document.querySelector('.gallery-inner img');
    if(!galleryImage) {
        return;
    }
    let galleryImageSrc = galleryImage.getAttribute('src');
    i = [...images].findIndex(item => item.firstElementChild.getAttribute('src') === galleryImageSrc);

    if(e.target.matches('.gallery') || e.target.matches('.close')) {
        const gallery = document.querySelector('.gallery');
        gallery.parentNode.removeChild(gallery);
    } 
    else if(e.target.matches('.icon-next')) {
        console.log(123)
        //handle next image
        i++;
        if(i > images.length - 1) {
            i = 0;
        }
        displayGalleryImg(galleryImage, i);
    }
    else if(e.target.matches('.icon-prev')) {
        // handle prev image     
        i--;
        if(i < 0) {
            i = images.length - 1;
        }
        displayGalleryImg(galleryImage, i)
    }
})

function displayGalleryImg(galleryImage, index) {
    const newSrc = [...images][i].firstElementChild.getAttribute('src');
    galleryImage.setAttribute('src', newSrc);
}