window.addEventListener('load', function() {
    const switchBtn = document.querySelector('.sidebar .switch');
    const playList = document.querySelector('.play-list');

    const media = document.querySelector('.media.player-controls-left');

    // lấy ra các element trong gallery
    const galleryList = document.querySelector('.gallery__list');
    const prevImgSwitchBtn = document.querySelector('.gallery .control.prev-btn');
    const nextImgSwitchBtn = document.querySelector('.gallery .control.next-btn');

    // lấy các element trong main-controls
    const playBtn = document.querySelector('.player-controls-center .btn-toggle-play');
    const prevSongSwitchBtn = document.querySelector('.player-controls-center .btn-prev')
    const nextSongSwitchBtn = document.querySelector('.player-controls-center .btn-next');
    const repeatBtn = document.querySelector('.player-controls-center .btn-repeat');
    const randomBtn = document.querySelector('.player-controls-center .btn-random');
    const remaining = document.querySelector('.player-controls-center .time .time-start');
    const originalSongTime = document.querySelector('.player-controls-center .time .time-right')
    const audio = document.querySelector('.audio');
    const progress = document.querySelector('.progress');
    const progressVolume = document.querySelector('.player-controls-right .progress-volume');
    const volumeIcon = document.querySelector('.player-volume-icon');


    const app = {
        currentIndex: 0,
        isPlaying: false,
        galleryItems: [],
        widthGalleryItem: 0,
        widthAllGalleryItem: 0,
        count: 0,
        spacing: 0,
        isRepeat: false,
        currentSoundValue: 100,

        songs: [
            {
                id: 01,
                name: 'Nonstop',
                singer: 'Công kiên',
                path: './assets/music/song1.mp3',
                image: './assets/imgs/imgs-thumb/song1.jpg',
                songTime: '30:34',
            },
            {
                id: 02,
                name: 'Summertime',
                singer: 'K-391',
                path: './assets/music/song2.mp3',
                image: './assets/imgs/imgs-thumb/song2.jpg',
                songTime: '04:45',
            },
            {
                id: 03,
                name: 'Never Be Alone',
                singer: 'TheFatRat ',
                path: './assets/music/song3.mp3',
                image: './assets/imgs/imgs-thumb/song3.jpg',
                songTime: '04:20',
            },
            {
                id: 04,
                name: 'Reality',
                singer: 'Lost Frequencies',
                path: './assets/music/song4.mp3',
                image: './assets/imgs/imgs-thumb/song4.jpg',
                songTime: '02:38',

            },
            {
                id: 05,
                name: 'Save Me',
                singer: 'DEAMN',
                path: './assets/music/song5.mp3',
                image: './assets/imgs/imgs-thumb/song5.jpg',
                songTime: '03:04',
            },
            {
                id: 06,
                name: 'Lemon Tree',
                singer: 'Fools Garden (Lyrics)',
                path: './assets/music/song6.mp3',
                image: './assets/imgs/imgs-thumb/song6.jpg',
                songTime: '04:57',
            },
            {
                id: 07,
                name: 'Ghé qua',
                singer: 'Dick x PC x Tofu',
                path: './assets/music/song7.mp3',
                image: './assets/imgs/imgs-thumb/song7.jpg',
                songTime: '04:28',
            },
            {
                id: 08,
                name: 'Nevada',
                singer: 'Vicetone',
                path: './assets/music/song8.mp3',
                image: './assets/imgs/imgs-thumb/song8.jpg',
                songTime: '03:28',
            },
            {
                id: 09,
                name: 'Thằng hầu',
                singer: 'Nhật Phong | Dunghoangpham Cover',
                path: './assets/music/song9.mp3',
                image: './assets/imgs/imgs-thumb/song9.jpg',
                songTime: '04:01',
            },
            {
                id: 10,
                name: 'Monsters',
                singer: 'Katie Sky',
                path: './assets/music/song10.mp3',
                image: './assets/imgs/imgs-thumb/song10.jpg',
                songTime: '03:48',
            },
        ],

        createSongs: function() {
            const htmls = this.songs.map((song, index) => {
                return `
                    <div class="song">
                        <span class="order">${song.id}</span>
                        <div class="info">
                            <div class="thumb" style="background-image: url('${song.image}')"></div>
                            <div>
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                        </div>
                        <div class="time">${song.songTime}</div>
                    </div>
                    `;
                })
            playList.innerHTML = htmls.join('');     
        },

        formatTimer: function(time) {
            let minute = Math.floor(time / 60);
            let second = Math.floor(time % 60);
            return `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
        },

        saveCurrentTheme: function() {
            const currentTheme = localStorage.getItem('data-theme');
            if(currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);
                if(currentTheme === 'light') {
                    switchBtn.classList.remove('active');
                }
            }
        },

        displayTimer: function() {
            remaining.textContent = this.formatTimer(audio.currentTime);
        },

        displayDurationTime: function() {
            originalSongTime.textContent = this.songs[this.currentIndex].songTime;
        },

        makeDarkMode: function(btn) {
            function switchTheme(btn) {
                btn.classList.toggle('active');
                if(btn.matches('.active')) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('data-theme', 'dark');
                }
                else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('data-theme', 'light');
                }
            }
            switchTheme(btn);         
        },

        createGalleryItems: function() { 
            const srcImgs = [
                './assets/imgs/gallery/1.jpg',
                './assets/imgs/gallery/2.jpg',
                './assets/imgs/gallery/3.jpg',
                './assets/imgs/gallery/4.jpg',
                './assets/imgs/gallery/5.jpg',
                './assets/imgs/gallery/6.jpg',
                './assets/imgs/gallery/7.jpg',
            ]
            const htmls = srcImgs.map((srcImg) => {
                return `
                    <div class="gallery__item">
                        <a href="#">
                            <img src="${srcImg}" alt="">
                        </a>
                    </div>
                `;
            })
            galleryList.innerHTML = htmls.join('');
        },

        makeSlide: function(quantity) { 
            this.galleryItems = document.querySelectorAll('.gallery__item'); 

            this.widthGalleryItem = galleryList.offsetWidth / quantity;

            this.widthAllGalleryItem = this.widthGalleryItem * this.galleryItems.length;

            galleryList.style.width = `${this.widthAllGalleryItem}px`;

            [...this.galleryItems].forEach(el => {
                el.style.marginRight = `20px`;
                el.style.width = `${this.widthGalleryItem - 20}px`;
            })

            // tính ra khoảng cách 
            this.spacing = this.widthAllGalleryItem - this.widthGalleryItem * 3;
        },
        
        handleEvents: function() {

            // xử lí click nút swich sẽ chuyển màu cho web
            switchBtn.onclick = () => {
                this.makeDarkMode(switchBtn);            
            }
            
            // xử lí kích vào nút next sang ảnh kế tiếp
            nextImgSwitchBtn.onclick = () => {
                this.count += this.widthGalleryItem;
                if(this.count > this.spacing) {
                    this.count = 0;
                }
                galleryList.style.transform = `translateX(${-this.count}px)`;
            }

            // xử lí kích vào nút prev về ảnh trước
            prevImgSwitchBtn.onclick = () => {
                this.count -= this.widthGalleryItem;
                if(this.count < 0) {
                    this.count = this.spacing;
                }
                galleryList.style.transform = `translateX(${-this.count}px)`;
            }

            // xử lí khi click play
            playBtn.onclick = () => {   
                if(this.isPlaying) {
                    audio.pause();
                }
                else {
                    audio.play();
                }
            }

            // khi xong được play
            audio.onplay = () => {
                this.isPlaying = true;
                playBtn.classList.add('playing');
                this.cdThumbAnimate();
            }

            // khi song bị pause
            audio.onpause = () => {
                this.isPlaying = false;
                playBtn.classList.remove('playing');
                this.cdThumbAnimate();
            }

            // Khi next song
            nextSongSwitchBtn.onclick = () => {
                this.currentIndex++;
                if(this.currentIndex >= this.songs.length) {
                    this.currentIndex = 0;
                }
                this.loadCurrentSong();
                audio.play();
                this.scrollToActiveSong();
            }

            // Khi prev song
            prevSongSwitchBtn.onclick = () => {
                this.currentIndex--;
                if(this.currentIndex < 0) {
                    this.currentIndex = this.songs.length - 1;
                }
                this.loadCurrentSong();
                audio.play();
                this.scrollToActiveSong();
            }

            // khi click vào từng song 
            document.body.onclick = (e) => {
                if(!e.target.matches('.song')) return;
                else {
                    const playItems = document.querySelectorAll('.song');
                    [...playItems].forEach(el => el.classList.remove('active'));

                    e.target.classList.add('active');
                    let i = [...playItems].findIndex(item => item === e.target);
                    let prevIndex = this.currentIndex;
                    if(i === prevIndex) {
                        if(this.isPlaying) {
                            audio.pause();
                        }
                        else {
                            audio.play();
                        }
                        return;
                    }
                    this.currentIndex = i;
                    this.loadCurrentSong();
                    audio.play();
                }        
            }

            // Tiến độ bài hát thay đổi
            audio.ontimeupdate = () => {
                percent = audio.currentTime * 100 / audio.duration;
                if(percent) {
                    progress.value = percent;
                }
                this.displayTimer(audio.duration);
            }

            // xử lí tua video
            progress.onchange = (e) => {
                const seekTime = e.target.value * audio.duration / 100;
                audio.currentTime = seekTime;
            }

            // lắng nghe hành vi dừng lại trên nút dấu cách
            document.onkeydown = (e) => {
                if(!( (e.code || e.keyCode) === 'Space') ) return;
                e.preventDefault();
                if(this.isPlaying) {
                    audio.pause();
                }
                else {
                    audio.play();
                }
            }

            // sử lí next song khi kết thúc 
            audio.onended = () => {
                if(this.isRepeat) {
                    audio.play();
                }
                else {
                    this.currentIndex++;
                    this.loadCurrentSong();
                    audio.play();
                }
            }

            // xử lí khi kích vào nút repeat
            repeatBtn.onclick = () => {
                repeatBtn.classList.toggle('active');
                this.isRepeat = false;
                if(repeatBtn.classList.contains('active')) {
                    this.isRepeat = true;
                }
            }

            // xử lí khi kích vào nút random
            randomBtn.onclick = () => {
                randomBtn.classList.toggle('active');
            }

            // xử lí âm thanh video
            progressVolume.onchange = () => {
                audio.volume = progressVolume.value / 100;
            }

            // xử lí các trạng thái của icon volume thì tắt âm thanh 
            volumeIcon.onclick = () => {
                volumeIcon.classList.toggle('bxs-volume-mute');
                if(volumeIcon.matches('.bxs-volume-mute')) {
                    this.currentSoundValue = progressVolume.value; // lưu lại giá trị âm thanh cũ
                    progressVolume.value = 0;
                    audio.volume = progressVolume.value;
                }
                else {
                    progressVolume.value = this.currentSoundValue;
                    audio.volume = progressVolume.value / 100;
                }
            }
        },
        
        cdThumbAnimate: function() {
            const cdThumb = document.querySelector('.player-controls-left .thumb');
            if(this.isPlaying) {
                cdThumb.style.animation = 'rotate 30s linear infinite';
            }
            else {
                cdThumb.style.animation = 'unset'
            }
        },

        scrollToActiveSong: function() {
            const song =  document.querySelector('.song.active');
            song.scrollIntoView(
                {
                    behavior: "smooth", 
                    block: "end", 
                    inline: "nearest",
                },
            );
        },

        loadCurrentSong: function() {
            audio.src = this.songs[this.currentIndex].path;

            const template = `
                <div class="info">
                    <div class="thumb" style="background-image: url('${this.songs[this.currentIndex].image}')"></div>
                    <div class="wrapper">
                        <h3 class="title">${this.songs[this.currentIndex].name}</h3>    
                        <p class="author">${this.songs[this.currentIndex].singer}</p>
                    </div>
                </div>
            `;
            media.innerHTML = template;

            const playItems = document.querySelectorAll('.song');
            [...playItems].forEach(el => el.classList.remove('active'));
            playItems[this.currentIndex].classList.add('active');

            this.displayDurationTime();
        },

        autoRunSlide: function() {
            this.count += this.widthGalleryItem;
            if(this.count > this.spacing) {
                this.count = 0;
            }
            galleryList.style.transform = `translateX(${-this.count}px)`;
        },

        start: function() {
            this.createSongs();
            this.createGalleryItems();
            this.makeSlide(3);
            this.handleEvents();
            this.loadCurrentSong();
            this.saveCurrentTheme();
        },
    }

    app.start();
     
    setInterval(() => {
        app.autoRunSlide();
    }, 7000)
})
