function toast({title = '', message = '', type = '', duration = 3000}) {    
    const main = document.getElementById('toasts')
    console.log(main)
    if(main) {
        const toast = document.createElement('div')
        toast.classList.add('toast', `toast--${type}`)
        const icons = {
            success: 'fa-solid fa-check',
            warning: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-xmark',
            info: 'fa-solid fa-info',
        }
        let delay = (duration / 1000).toFixed()
        let endTime = 1
        const icon = icons[type]
        toast.style.animation = `slideInLeft ease 0.5s, fadeOut ease ${endTime}s ${delay}s forwards`
        toast.innerHTML = `
            <div class="icon">
                    <i class='${icon}'></i>
                </div>
            <div class="body">
                <h3 class="title">${title}</h3>
                <p class="description">${message}</p>
            </div>
            <div class="close">
                <i class='bx bx-x'></i>
            </div>
        `           
        main.appendChild(toast)
        console.log(toast)
        
        const autoRemoveId = setTimeout(() => {
            toast.parentElement.removeChild(toast)
        }, duration + endTime * 1000)

        const close = toast.querySelector('.close')
        close.onclick = () => {
            toast.parentElement.removeChild(toast)
            clearTimeout(autoRemoveId)
        }
        
    }
}   