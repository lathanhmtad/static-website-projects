const loader = document.getElementById('preloader');
window.addEventListener('load', function() {
    setTimeout(function() {
        loader.style.display = 'none';
    }, 2000);
})
 
// Lấy các element từ dom
const app = document.getElementById('app');

const header = document.getElementById('header');
const banner = document.getElementById('banner');

const menuMobile = document.querySelector('.js-menu-mobile');
const mobileOverlay = document.querySelector('.js-mobile-overlay');
const slideBarMobile = document.querySelector('.js-sidebar-mobile');
const closeMenuMobile = document.querySelector('.js-menu-close');
const menuLinks = document.querySelectorAll('.js-menu-link');

const categoryItems = document.querySelectorAll('.js-category li');
const foodDescription = document.querySelector('.js-food-description');

const comment = document.querySelector('.js-comment');
const galleryContent = document.querySelector('.js-gallery-content');
const moreGalleriesBtn = document.querySelector('.js-more-galleries');

const dotsSlideAssessor = document.querySelectorAll('.js-slide-assessor');
const dotsSlideEvents = document.querySelectorAll('.js-slide-events');

const lightBox = document.querySelector('.js-lightbox');
const lightBoxImg = lightBox.querySelector('.js-lightbox-img');
const lightBoxClose = document.querySelector('.js-lightbox-close');
const lightBoxPrev = document.querySelector('.js-lightbox-prev');
const lightBoxNext = document.querySelector('.js-lightbox-next');

const aElements = document.getElementsByTagName('a');

const assessorInner = document.querySelector('.js-assessor-inner');

const eventsInner = document.querySelector('.js-events-inner');

const animationElementsWhenScrolling = document.querySelectorAll('.js-show-on-scroll');

function renderBannerImgs() {
    const bannerImgs = [
        './assets/img/banner/food.webp',
        './assets/img/banner/food2.webp',
        './assets/img/banner/3.jpg',
        './assets/img/banner/2.jpg',
    ]
    let i = 0;
    const bannerImg = document.querySelector('.js-banner-img');
    setInterval(function() {
        if(i >= bannerImgs.length) {
            i = 0;
        }
        bannerImg.src = bannerImgs[i];
        i++;
    }, 4000);
}
renderBannerImgs();


// constructor PopularFoods thực hiện các thao tác tạo nội dung sản phẩm.....
function PopularFoods() {
    function renderProductContent(el, data) {
        const htmls = data.map((item) => {
            return `
            <div class="col l-6 m-6 c-6">
                <div class="product__img">
                    <img src="${item.image}" alt="">
                </div>
                <p class="product__name">${item.name}</p>
                <span class="product__price">${item.price}</span>
            </div>       
            `;
        }) 
        el.innerHTML = htmls.join('');
    }
    const firstProductLine = document.querySelector('.js-first-product-line');
    const lastProductLine = document.querySelector('.js-last-product-line');
    renderProductContent(
        firstProductLine, 
        [
            {
                name: 'Italian Sauce Mushroom',
                image: './assets/img/foods/breakfast/1.webp',
                price: '$19.00',
            },
            {
                name: 'Rice gruel with Fish',
                image: './assets/img/foods/breakfast/2.webp',
                price: '$120.00',
            },
            {
                name: 'Meretrix Rice gruel',
                image: './assets/img/foods/lunch/1.webp',
                price: '$12.00',
            },
            {
                name: 'Steamed sticky rice',
                image: './assets/img/foods/lunch/2.webp',
                price: '$15.00',
            },
            {
                name: 'Girdle-cake',
                image: './assets/img/foods/dinner/1.webp',
                price: '$17.00',
            },
            {
                name: 'Pancako',
                image: './assets/img/foods/dinner/2.webp',
                price: '$15.00',
            },
            {
                name: 'Rabbit',
                image: './assets/img/foods/drinks/1.webp',
                price: '$32.00',
            },
            {
                name: 'Steamed sticky rice',
                image: './assets/img/foods/drinks/2.webp',
                price: '$15.00',
            },
        ],
    );

    renderProductContent(
        lastProductLine, 
        [
            {
                name: 'Girdle-cakem',
                image: './assets/img/foods/breakfast/3.webp',
                price: '$19.00',
            },
            {
                name: 'Rice gruel with Fish',
                image: './assets/img/foods/breakfast/4.webp',
                price: '$120.00',
            },
            {
                name: 'Meretrix Rice gruel',
                image: './assets/img/foods/lunch/3.webp',
                price: '$12.00',
            },
            {
                name: 'Steamed sticky rice',
                image: './assets/img/foods/lunch/4.webp',
                price: '$15.00',
            },
            {
                name: 'Girdle-cake',
                image: './assets/img/foods/dinner/3.webp',
                price: '$17.00',
            },
            {
                name: 'Pancako',
                image: './assets/img/foods/dinner/4.webp',
                price: '$15.00',
            },
            {
                name: 'Rabbit',
                image: './assets/img/foods/drinks/3.webp',
                price: '$32.00',
            },
            {
                name: 'Steamed sticky rice',
                image: './assets/img/foods/drinks/4.webp',
                price: '$15.00',
            },
        ],
    );
}
// PopularFoods();


// constructor PopularDesserts thực hiện các thao tác tạo nội dung sản phẩm.....
function PopularDesserts() {
    const dessertList = document.querySelector('.js-popular-desserts .js-product-list');
    function renderProductContent(el, data) {
        const htmls = data.map((item) => {
            return `
                <div class="col l-3 m-6 c-6">
                    <a href="#" class="product-item">
                        <img src="${item.image}" alt="">
                        <div class="product-item-desc">
                            <h4 class="name">${item.name}</h4>
                            <span class="price">${item.price}</span>
                        </div>
                    </a>
                </div>   
            `;
        }) 
        el.innerHTML = htmls.join('');
    }
    renderProductContent(dessertList, [
        {
            name: 'Cherry Muffin',
            price: '$20',
            image: './assets/img/desserts/1.webp',
        },
        {
            name: 'Rose Muffin',
            price: '$20',
            image: './assets/img/desserts/2.webp',
        },
        {
            name: 'Sweet Donut',
            price: '$20',
            image: './assets/img/desserts/3.webp',
        },
        {
            name: 'Choco Cake',
            price: '$20',
            image: './assets/img/desserts/4.webp',
        },
    ])
}
PopularDesserts();

// constructor AssessorContainer thực hiện các thao tác tạo nội dung assessor
function AssessorContainer() {
    function renderAssessors(el, data) {
        const htmls = data.map(item => {
            return `
            <div class="assessor">
                <div class="author">
                    <img src="${item.image}" alt="">
                    <h3 class="name">${item.name}</h3>
                    <p class="work">${item.work}</p>
                    <div class="quote">“</div>
                </div>
                <p class="desc">
                    ${item.desc}
                </p>
            </div>
            `
        })
        el.innerHTML = htmls.join('');
    }
    renderAssessors(assessorInner, [
        {
            image: './assets/img/user/1.jpg',
            name: 'Eimi fukada',
            work: 'Product Designer at Twitter',
            desc: ' “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”'
        },
        {
            image: './assets/img/user/2.jpg',
            name: 'Eimi FUKADA',
            work: 'Designer at Facebook',
            desc: ' “When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”'
        },
        {
            image: './assets/img/user/3.webp',
            name: 'HIHI',
            work: 'Product Designer at Twitter',
            desc: ' “A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”'
        },
    ])
}
AssessorContainer();


// func sài chung
function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
        var context = this;
        var args = arguments;
            
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
    
        var callNow = immediate && !timeout;
        
        clearTimeout(timeout);
    
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
};

// Băng chuyền slider
function conveyorBelt(el, pos) {
    let number = 100;
    if(HTMLCollection.prototype.isPrototypeOf(el)) {
        [...el].forEach(item => item.style.transform = `translateX(-${number * (pos - 1)}%)`);
    }
    else {
        el.style.transform = `translateX(-${number * (pos)}%)`
    }
} 

// xử lí click vào nút dấu chấm
function handleClickDot(e) {
    let i;
    if(e.target.matches('.js-slide-assessor')) {
        [...dotsSlideAssessor].forEach(el => {
            el.classList.remove('active');
        });
        e.target.classList.add('active');
        i = [...dotsSlideAssessor].findIndex(item => item.matches('.active'));
        conveyorBelt(assessorInner, i);
    }
    else {
        [...dotsSlideEvents].forEach(el => {
            el.classList.remove('active');
        })
        e.target.classList.add('active');
        i = [...dotsSlideEvents].findIndex(item => item.matches('.active'));
        conveyorBelt(eventsInner, i);
    }
}

// xử lí cuộn 
function toggleAnimationElementInWindow(element) {
    const rect = element.getBoundingClientRect();
    let screenHeight = window.innerHeight;
    if(rect.bottom < 0 || rect.top > innerHeight) {
        element.classList.remove('start');
    }
    else {
        element.classList.add('start');
    }
}

let indexGalleryImg = 0;
const galleryImgs = [
    './assets/img/foods/breakfast/1.webp',
    './assets/img/foods/breakfast/2.webp',
    './assets/img/foods/breakfast/3.webp',
    './assets/img/foods/breakfast/4.webp',
    './assets/img/foods/lunch/1.webp',
    './assets/img/foods/lunch/2.webp',
    './assets/img/foods/lunch/3.webp',
    './assets/img/foods/lunch/4.webp',
    './assets/img/foods/drinks/1.webp',
    './assets/img/foods/drinks/2.webp',
    './assets/img/foods/drinks/3.webp',
    './assets/img/foods/drinks/4.webp',
]

function renderGalleryContent(numberOfDisplays = 4) {
    
    const htmls = galleryImgs.map((galleryImg, index) => {
        if(index < numberOfDisplays) {
            return `
            <div class="col l-6 m-6 c-6">
                <div class="gallery-img">
                    <img src="${galleryImg}" alt="">
                </div>
            </div>
            `
        }
    })
    galleryContent.innerHTML = htmls.join('');
}
renderGalleryContent();

 
function renderContentEventsInner() {
    const eventsContents = [
        {
            image: './assets/img/family/1.webp',
            price: '$200.99',
            eventName: 'Birthday Party',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
        {
            image: './assets/img/family/2.webp',
            price: '$200.99',
            eventName: 'Birthday Party',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },

        {
            image: './assets/img/family/1.webp',
            price: '$200.99',
            eventName: 'Birthday Party',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
    ]
    const htmls = eventsContents.map((item, index) => {
        return `
            <div class="events-content js-events-content">
                <img style="${index % 2 !== 0 ? 'order: 1' : ''}" src="${item.image}" alt="">
                <div style="${index % 2 !== 0 ? 'margin: 0 120px 0 0' : ''}" class="text-content">
                <h5>${item.price}</h5>
                <span>${item.eventName}</span>
                <p>${item.desc}
                </p>
                <ul>
                    <li><i class="fa-solid fa-check"></i>
                        Away behind the word
                    </li>
                    <li><i class="fa-solid fa-check"></i>
                        Bookmarksgrove right at the coast
                    </li>
                    <li><i class="fa-solid fa-check"></i>
                        Separated they live
                    </li>
                </ul>
                </div>
            </div>
        `
    })
    eventsInner.innerHTML = htmls.join('');
}
renderContentEventsInner();

const main = {
    handleEvents: function() {
        // khi cuộn trang sẽ active header
        window.addEventListener('scroll', debounce(function() {
            let bannerHeight = banner.offsetHeight;
            if(window.pageYOffset >= bannerHeight) {
                header.classList.add('is-fixed');
                app.style.marginTop = 'var(--height-header)';
            }
            else {
                header.classList.remove('is-fixed');
                app.style.marginTop = '0';
            }
        }, 100));

        // xử lí click vào category item của popular-foods
        categoryItems.forEach(categoryItem => categoryItem.addEventListener('click', function(e) {
            categoryItems.forEach(categoryItem => categoryItem.classList.remove('active'));
            e.target.classList.add('active');
            let i = e.target.dataset.index;
            conveyorBelt(foodDescription.children, i);
            document.querySelector('.js-meal').textContent = e.target.innerText;
            document.querySelector('.js-page').textContent = `${i} / ${categoryItems.length}`;
        }));

        // Khi click vào menu mobile
        menuMobile.onclick = function() {
            slideBarMobile.classList.add('active'); 
            mobileOverlay.style.display = 'block';
        };

        // Khi click vào nút close trên menu
        closeMenuMobile.onclick = function() {
            slideBarMobile.classList.remove('active'); 
            mobileOverlay.style.display = 'none';
        };

        // hủy bỏ toàn bộ hành vi mặc định chuyển trang của thẻ a
        [...aElements].forEach(aElement => aElement.addEventListener('click', function(e) {
            if(!(e.target.matches('.allow-next-page'))) {
                e.preventDefault();
            }
        }))

        // Khi click vào overlay trên mobile menu sẽ ẩn đi menu
        mobileOverlay.onclick = function() {
            slideBarMobile.classList.remove('active'); 
            mobileOverlay.style.display = 'none';
        }

        // kích vào galleryContent show lightbox
        galleryContent.onclick = function(e) {
            if(!e.target.src) return;
            lightBox.classList.add('show');
            lightBoxImg.src = e.target.getAttribute('src');
            indexGalleryImg = galleryImgs.findIndex(item => item === lightBoxImg.getAttribute('src'));
        }

        // khi click vào ngoài thì sẽ ẩn lightboxx
        lightBox.onclick = function(e) {
            if(e.target.matches('.lightbox-content')) {
                lightBox.classList.remove('show');
            }
        }

        // kích vào nút close trên lightbox sẽ ẩn đi
        lightBoxClose.onclick = function() {
            lightBox.classList.remove('show');
        }

        // khi click vào nút next trên lightbox
        lightBoxPrev.onclick = function() {
            indexGalleryImg--;
            if(indexGalleryImg < 0) {
                indexGalleryImg = galleryImgs.length - 1;
            }
            lightBoxImg.src = galleryImgs[indexGalleryImg];
        }

        // khi click vào nút prev trên lightbox
        lightBoxNext.onclick = function() {
            indexGalleryImg++;
            if(indexGalleryImg >= galleryImgs.length) {
                indexGalleryImg = 0;
            }
            lightBoxImg.src = galleryImgs[indexGalleryImg];
        }

        // khi click vào nút more galleries
        moreGalleriesBtn.onclick = function() {
            if(moreGalleriesBtn.textContent === 'MORE GALLERIES') {
                renderGalleryContent(galleryImgs.length);
                this.textContent = 'HIDE AWAY';
            }
            else {
                renderGalleryContent();
                this.textContent = 'MORE GALLERIES';
                comment.scrollIntoView()
                // comment.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }   
        };

        // khi click vào btn dot
        [...dotsSlideAssessor].forEach(item => item.addEventListener('click', handleClickDot));
        [...dotsSlideEvents].forEach(item => item.addEventListener('click', handleClickDot));

        // xử lí animation khi cuộn cho các element
        window.onscroll = debounce(function() {
            animationElementsWhenScrolling.forEach(item => toggleAnimationElementInWindow(item));
        }, 10)
    },
    start: function() {
        this.handleEvents();
    }
}

main.start();
