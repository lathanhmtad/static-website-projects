const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $('.player')
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist')


const app = {

    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Nevada',
            singer: 'Attention',
            path: './assets/music/song1.mp3',
            image: './assets/imgs/song1.jpg',
        },
        {
            name: 'Summertime',
            singer: 'My Love',
            path: './assets/music/song2.mp3',
            image: './assets/imgs/song2.jpg',
        },
        {
            name: 'TheFatRat',
            singer: 'Vicetone',
            path: './assets/music/song3.mp3',
            image: './assets/imgs/song3.jpg',
        },
        {
            name: 'Lost Frequencies',
            singer: 'Giang Pham, Triple D',
            path: './assets/music/song4.mp3',
            image: './assets/imgs/song4.jpg',
        },
        {
            name: 'Đen',
            singer: 'Nevada',
            path: './assets/music/song5.mp3',
            image: './assets/imgs/song5.jpg',
        },
        {
            name: 'Lemon Tree',
            singer: 'Ngày Khác Lạ ',
            path: './assets/music/song6.mp3',
            image: './assets/imgs/song6.jpg',
        },
        {
            name: ' Maroon 5',
            singer: 'Reality',
            path: './assets/music/song7.mp3',
            image: './assets/imgs/song7.jpg',
        },
        {
            name: 'Westlife',
            singer: 'My Love',
            path: './assets/music/song8.mp3',
            image: './assets/imgs/song8.jpg',
        },
        {
            name: 'Charlie Puth',
            singer: 'Attention',
            path: './assets/music/song9.mp3',
            image: './assets/imgs/song9.jpg',
        },
        {
            name: 'Monsters',
            singer: 'Katie Sky',
            path: './assets/music/song10.mp3',
            image: './assets/imgs/song10.jpg',
        },
    ],
    
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `   
                <div class="song ${index === this.currentIndex ? 'active' : ''}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join(''); 
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },

    handleEvents: function() {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        // Xử lí CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 30000, // 10 seconds
            iterations: Infinity,
        })
        cdThumbAnimate.pause();

        // Xử lí phóng to / thu nhỏ CD
        document.onscroll = function() {
            const scrollTop =  window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }


        // Xử lí khi click play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            }
            else {
                audio.play();
            }
        }

        // Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }

        // Khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }

        // Xử lí khi tua song 
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }

        // Khi next song
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }
            else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        // Khi prev song
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }
            else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        // Xử lí bật / tắt random song
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom);
            _this.playRandomSong();
        }

        // Xử lí lặp lại một song
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // Xử lí next song khi audio ended
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play();
            }
            else {
                nextBtn.click();
            }
        }

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function(e) {
            if(e.target.closet('.song')) {
                
            }
            console.log(e.target)
        }
    },

    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }, 200)
    },

    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url(${this.currentSong.image})`;
        audio.src = this.currentSong.path;
    },

    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong(); 
    },

    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong(); 
    },

    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },


    start: function() {
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties();

        // Lắng nghe / xử lí các sự kiện (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render playlist
        this.render();
    },
}

app.start();