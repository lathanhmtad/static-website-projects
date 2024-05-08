function Toast({type, message, duration}) {
    const main = document.getElementById('toasts');
    if(main) {
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast--${type}`);
        const delay = (duration / 1000).toFixed()
        toast.style.animation = `toastShow 0.3s linear, toastHide linear 0.6s ${delay}s forwards`;
        toast.innerHTML = `
            <p>${message}</p>
        `
        main.appendChild(toast);
        setTimeout(function() {
            main.removeChild(toast)
        }, duration + 600)
    }
}