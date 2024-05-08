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

var animationElements = document.querySelectorAll('.show-on-scroll');

function toggleAnimationElementInWindow(element) {
    // 1 item
    var rect = element.getClientRects()[0];
    var heightScreen = window.innerHeight;

    // check xem element có bên trong màn hình hay không

    
    if(rect.bottom < 0 || rect.top > heightScreen) {
        // bên ngoài thì vào đây
        element.classList.remove('start');
    }
    else {
        // bên trong thì vào đây
        element.classList.add('start')
    }
}

const h1 = document.querySelector('#home h1');
console.log(h1.getClientRects()[0])
function checkAnimaton() {
    animationElements.forEach(el => {
        toggleAnimationElementInWindow(el);
    })    
}

window.onscroll = debounce(checkAnimaton, 50)
    
