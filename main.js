mario.onclick = function() {
    let start = Date.now();
    let timer = setInterval(superMario, 20);
    
    function superMario() {
    let timePassed = Date.now() - start;
    
    if (timePassed > 2000) {
    clearInterval(timer);
    } else {
    mario.style.left = timePassed / 5 + 'px';
    }
    }
   }
   console.log("walk")