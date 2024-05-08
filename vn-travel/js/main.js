window.addEventListener('load', function() {
    let i = 0; // index của mảng videos
    // handle click dots btn
    const titles = [
        'Du lịch',
        'Văn Hóa',
        'Ẩm thực',
        'Con người',
    ];
    const videos = document.querySelectorAll('.slide-video');
    const title = document.querySelector('.content__title');
    const dotBtns = document.querySelectorAll('.dot-btn');
    [...dotBtns].forEach((dotBtn, index) => {
        dotBtn.addEventListener('click', function(e) {

            // xóa đi class active video
            [...videos].forEach((video => video.classList.remove('active')));

            // xóa đi acitve của dot-btn
            [...dotBtns].forEach(item => item.classList.remove('active'));

            title.firstChild.textContent = titles[index];

            e.target.classList.add('active');
            let prev = i;
            disableMute(videos[prev]); // bỏ đi âm thanh của video trước đó khi sang video mới
            
            i = index;

            videos[i].classList.add('active');

            // xử lí khi chuyển video nhưng vẫn đang còn bật âm thanh nhưng k nghe
            const switchBtn = document.querySelector('.switch-btn');
            if(switchBtn.matches('.enable')) {
                setTimeout(function() {
                    enableMute(videos[i]);
                }, 1000)
            }
        });
    }); 


    // handle underline effect
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__list a');
    const line = document.createElement('div');
    nav.appendChild(line);
    const {left, width, height} = navLinks[0].getBoundingClientRect();
    line.className = 'line-effect';
    line.style = `width: ${width}px; left: ${left}px;`;
    [...navLinks].forEach((navLink) => navLink.addEventListener('mouseenter', handleHoverLink))
    function handleHoverLink(e) {
        const {top, left, bottom, width, height} = e.target.getBoundingClientRect();
        line.style = `width: ${width}px; left: ${left}px;`
    }
    nav.addEventListener('mouseleave', function() {
        line.style = `width: ${width}px; left: ${left}px;`;
    })
    

    // handle audio video
    const controlBtns = document.querySelectorAll('.control-btn');
    [...controlBtns].forEach((item, index) => {
        item.addEventListener('click', function(e) {
            item.firstElementChild.classList.toggle('enable');
            if(item.firstElementChild.classList.contains('switch-btn--sound')) {
                handleSound(item.firstElementChild);
            }
            if(item.firstElementChild.classList.contains('switch-btn--reload')) {
                reloadVideo();
            }
            // if(item.firstElementChild.classList.contains('switch-btn--pause')) {
            //     handleVideoStatus(item.firstElementChild);
            // }
            // if(item.firstElementChild.classList.contains('switch-btn--full-screen')) {
            //     handleFullScreenVideo(item.firstElementChild);
            // }
        });
    })

    function handleSound(html) {
        if(html.classList.contains('enable')) {
            html.classList.add('fa-volume-high');
            html.classList.remove('fa-volume-xmark');
            enableMute(videos[i]);
        }
        else {
            html.classList.remove('fa-volume-high');
            html.classList.add('fa-volume-xmark');
            disableMute(videos[i]);
        }
    }

    
    function enableMute(vid) { 
        vid.muted = false;
    }      
    function disableMute(vid) { 
        vid.muted = true;
    } 
    function reloadVideo() {
        videos[i].load();
    }


    // function playVid(vid) {
    //     vid.play();
    // }
    
    // function pauseVid(vid) {
    //     vid.pause();
    // }
    // function handleVideoStatus(html) {
    //     html.classList.contains('enable') ? pauseVid(videos[i]) : playVid(videos[i]);
    // }

    // function handleFullScreenVideo(html) {
    //     videos[i].classList.toggle('full-screen');
    // }

    const tabFunc = document.querySelector('.tab-func');
    const control = document.querySelector('.control');
    tabFunc.addEventListener('click', function() {
        const {top, left} = tabFunc.getBoundingClientRect();
        control.style = `top: ${top}px; right: ${screen.width - left}px`;
        control.classList.toggle('show');
        tabFunc.classList.toggle('active')
    })



    const template = `
    <div class="map">
        <img src="./assets/img/travelPage/ban_do_vn.png" alt="map việt nam">
        <div class="location">
            <div class="location-icon an-giang">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon ba-ria-vung-tau">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon binh-dinh">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon dong-thap">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon hue">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon khanh-hoa">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon kien-giang">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon lam-dong">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon long-an">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon ninh-binh">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon ninh-thuan">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon phan-thiet">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon phu-yen">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon sapa">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon tay-nguyen">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon ben-tre">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon tp-hcm">
                <div class='pin'></div>
                <div class='pulse'></div>
            </div>
            <div class="location-icon hn">
                <div class='pin'></div>
                <div class='pulse'></div>
                <p>Hà Nội</p>
            </div>
        </div>
    </div>
    `
});