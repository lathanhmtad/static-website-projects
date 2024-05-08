const header = document.querySelector('.js-header');
const switchTheme = document.querySelector('.js-change-theme');

const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const services = document.getElementById('services');
const product = document.getElementById('product');
const contact = document.getElementById('contact');
const myCustomers = document.getElementById('my-customers');

const navLinks = document.querySelectorAll('.js-nav-link');

const servicesBtns = document.querySelectorAll('.js-btn-services');
const servicesModals = document.querySelectorAll('.js-services-modal');

const closeServicesModalBtns = document.querySelectorAll('.js-services-modal-close');

const dotBtns = document.querySelectorAll('.js-dot');
const testimonialContent = document.querySelector('.js-testimonial-content');
const testimonialCard = document.querySelectorAll('.js-testimonial__card');

const animationElementsScroll = document.querySelectorAll('.js-show-on-scroll');

const filterProductItems = document.querySelectorAll('.js-product-item');

const productCards = document.querySelectorAll('.js-product-card');

const btnShowProductWeb = document.querySelector('.js-btn-show-box-product-web');

const boxProductWeb = document.querySelector('.js-box-product-web');

const closeBoxProductWebBtn = document.querySelector('.js-box-product-web .js-icon-close');

const nextTestimonialBtn = document.querySelector('.js-next-testimonial');
const prevTestimonialBtn = document.querySelector('.js-prev-testimonial');

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

const app = {
    indexServicesModals: 0,
    indexTestimonialCard: 0,

    checkElementInSection: function(element) {
        let rect = element.getBoundingClientRect();
        let heightScreen = window.innerHeight;
        let totalPaddingTopAndBottomOfElement = 248;
        if((rect.bottom - totalPaddingTopAndBottomOfElement) < 0 || (rect.top + totalPaddingTopAndBottomOfElement) > heightScreen) {
            // Không nằm trong màn hình thì vào đây
            return false;
        }
        return true;
    },

    checkElementInWindow: function(element) {
        let rect = element.getBoundingClientRect();
        let heightScreen = window.innerHeight;
        if(rect.bottom < 0 || rect.top > heightScreen) {
            // Không nằm trong màn hình thì vào đây
            return false;
        }
        return true;
    },

    addClassActiveForMenuLink: function(currentSection) {
        navLinks.forEach(navLink => {
            if(navLink.getAttribute('href') === currentSection) {
                navLink.classList.add('active');
            }
        })
    },

    removeClassActiveOfMenuLink: function(currentSection) {
        navLinks.forEach(navLink => {
            if(navLink.getAttribute('href') === currentSection) {
                navLink.classList.remove('active');
            }
        })
    },

    currentTheme: function() {
        const currentTheme = localStorage.getItem('theme');
        if(currentTheme === 'light') {
            switchTheme.classList.add('bx-sun');
            document.body.classList.add('light-theme');
        }
    },

    sectionCurrentContent: function() {
        this.checkElementInSection(home) ? this.addClassActiveForMenuLink('#home') : this.removeClassActiveOfMenuLink('#home');
        this.checkElementInSection(about) ? this.addClassActiveForMenuLink('#about') : this.removeClassActiveOfMenuLink('#about');
        this.checkElementInSection(skills) ? this.addClassActiveForMenuLink('#skills') : this.removeClassActiveOfMenuLink('#skills');
        this.checkElementInSection(services) ? this.addClassActiveForMenuLink('#services') : this.removeClassActiveOfMenuLink('#services');
        this.checkElementInSection(product) ? this.addClassActiveForMenuLink('#product') : this.removeClassActiveOfMenuLink('#product');
        this.checkElementInSection(myCustomers) ? this.addClassActiveForMenuLink('#my-customers') : this.removeClassActiveOfMenuLink('#my-customers');
        this.checkElementInSection(contact) ? this.addClassActiveForMenuLink('#contact') : this.removeClassActiveOfMenuLink('#contact');
    },

    activeHeader: function() {
        let headerHeight = header.offsetHeight;
        if(window.pageYOffset >= headerHeight) {
            header.classList.add('active');
        }
        else {
            header.classList.remove('active');
        }
    },

    showServicesModal: function(e) {
        this.indexServicesModals = parseInt(e.target.dataset.index);
        servicesModals[this.indexServicesModals].classList.add('show');
    },

    hideServicesModal: function() {
        servicesModals[this.indexServicesModals].classList.remove('show');
    },

    changeTestimonialCard: function(number) {
        let percent = 100;
        testimonialContent.style.transform = `translateX(-${number * percent}%)`
    },

    toggleAnimationElementWhenScrollInWindow: function() {
        animationElementsScroll.forEach(el => {
            if(this.checkElementInWindow(el)) {
                el.classList.add('start');
            }
            else {
                el.classList.remove('start');
            }
        })
    },

    changeProductCard: function(e) {
        filterProductItems.forEach(productItem => productItem.classList.remove('active'));
        e.target.classList.add('active');
        let filter = e.target.dataset.filter;
        productCards.forEach(item => item.classList.remove('show'));
        for(let productCard of productCards) {
            if(productCard.matches(`.${filter}`)) {
                productCard.classList.add('show');
            };
            if(filter === 'product-all') {
                for(let productCard of productCards) {
                    productCard.classList.add('show');
                }
            }
        }
    },

    handleEvents: function() {
        // xử lí click vào moon thì chuyển màu cho web
        switchTheme.onclick = function() {
            switchTheme.classList.toggle('bx-sun');
            if(switchTheme.matches('.bx-sun')) {
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            }
            else {
                document.body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
            }
        }

        // xử lí các sự kiện khi cuộn
        window.onscroll = debounce(() => {
            
            // xử lí khi scroll active menu-link và cuộn đến các section hiện tại
            this.sectionCurrentContent();
            
            // Xử lí thêm box-shadow cho header khi cuộn
            this.activeHeader();

            // xử lí animation khi scroll
            this.toggleAnimationElementWhenScrollInWindow();
        }, 1)

        // xử lí click vào nút button dịch vụ hiện modal
        servicesBtns.forEach(servicesBtn => servicesBtn.addEventListener('click', (e) => {
            this.showServicesModal(e);
        }))

        // xử lí click vào nút close đóng đi modal dịch vụ
        closeServicesModalBtns.forEach(item => item.addEventListener('click', () => {
            this.hideServicesModal()
        }))

        // xử lí click ở ngoài thì ẩn đi servicesModals
        servicesModals.forEach(item => item.addEventListener('click', (e) => {
            if(e.target.matches('.js-services-modal')) {
                this.hideServicesModal();
            }
        }))

        // xử lí click vào nút dấu chấm chỗ mục lời chứng thực
        dotBtns.forEach(dotBtn => dotBtn.addEventListener('click', (e) => {
            // xóa đi class active cho cái cũ và khi click vào dấu chấm active nó
            dotBtns.forEach(dotBtn => dotBtn.classList.remove('active'));
            e.target.classList.add('active');

            // xử lí thanh trượt
            this.changeTestimonialCard(parseInt(e.target.dataset.index));
        }))

        // xử lí click vào mục lọc sản phẩm filters
        filterProductItems.forEach(filterProductItem => filterProductItem.addEventListener('click', this.changeProductCard))
        
        // xử lí click vào btn thì show product web
        btnShowProductWeb.onclick = function() {
            boxProductWeb.classList.toggle('show');
        }

        // xử lí click nút close đóng product web 
        closeBoxProductWebBtn.onclick = function() {
            boxProductWeb.classList.remove('show');
        }

        // xử lí click vào nút next lời chứng thực
        nextTestimonialBtn.onclick = () => {
            if(this.indexTestimonialCard === testimonialCard.length - 2) {
                nextTestimonialBtn.classList.add('hide');
            }
            this.indexTestimonialCard++;
            prevTestimonialBtn.classList.remove('hide');
            this.changeTestimonialCard(this.indexTestimonialCard);
        };

        prevTestimonialBtn.onclick = () => {
            this.indexTestimonialCard--;
            if(this.indexTestimonialCard === 0) {
                prevTestimonialBtn.classList.add('hide');
            }
            nextTestimonialBtn.classList.remove('hide');
            this.changeTestimonialCard(this.indexTestimonialCard);
        }
    },

    start: function() {
        this.handleEvents();
        this.currentTheme();
    }
}


app.start();