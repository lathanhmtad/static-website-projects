const playlist = document.querySelector('.playlist');

const app = {
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
            <div class="song">
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
            `;
        })
        playlist.innerHTML = htmls.join('');
    },

    start: function() {

        // render bài hát
        this.render();
    }
}

app.start();