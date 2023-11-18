 
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.clouds')
const jump = () => {
    mario.classList.add('jump')
    setTimeout(() =>{
        mario.classList.remove('jump')

    }, 500)
}

const loop  = setInterval(() => {
    const pipe_position = pipe.offsetLeft;
    const mario_position = window.getComputedStyle(mario).bottom.replace('px', 0);
    const cloud_position = cloud.offsetLeft;
    
    if (pipe_position<=80 && pipe_position>0 && mario_position<80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipe_position}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${mario_position}px`
        
        mario.src = 'img/game-over.png'
        mario.style.width = '50px'
        mario.style.marginLeft = '35px'

        cloud.style.animation = 'none'
        cloud.style.left = `${cloud_position}px`

        clearInterval(loop)
    }
} , 10)

document.addEventListener('keydown', jump) 