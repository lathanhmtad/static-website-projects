const tabItems = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');
const line = document.querySelector('.tabs .line');

const tabActive = document.querySelector('.tab-item.active');

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'


tabItems.forEach((tabItem, index) => tabItem.addEventListener('click', function(e) {
    const pane = panes[index]
    if(document.querySelector('.tab-item.active')) {
        document.querySelector('.tab-item.active').classList.remove('active');
    }
    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'
    document.querySelector('.tab-pane.active').classList.remove('active');
    pane.classList.add('active');
    e.target.classList.add('active');
}))