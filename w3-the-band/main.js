const btns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const closeBtn = document.querySelector('.js-modal-close');


function showModal() {
    modal.classList.add('open');
}

function hideModal() {
    modal.classList.remove('open');
}

btns.forEach(function(btn) {
    btn.addEventListener('click', showModal);
})

closeBtn.onclick = function() {
    hideModal();
}


var sliders = [
    {
        id: 1,
        img: './assets/img/slider/ny.jpg',
        heading: 'New York',
        desc: 'The atmosphere in New York is lorem ipsum.',
    },
    {
        id: 2,
        img: './assets/img/slider/chicago.jpg',
        heading: 'Chicago',
        desc: "Thank you, Chicago - A night we won't forget.",
    },
    {
        id: 3,
        img: './assets/img/slider/la.jpg',
        heading: 'Los Angeles',
        desc: 'We had the best time playing at Venice Beach!',
    }
]

var sliderNode = document.getElementById('slider');

var htmls = sliders.map(function(slider) {
    return `
        <img class="img" src="${slider.img}" alt="">
        <div class="content">
            <h2 class="heading">${slider.heading}</h2>
            <p class="des">${slider.desc}</p>
        </div>
    `
})


let i = 0;
setInterval(function() {
    if(i <= 2) {
        sliderNode.innerHTML = htmls[i];
        i++;
    }
    else  {
        i = 0;
    }
}, 4000)



