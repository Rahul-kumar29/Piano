const white_key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const black_key = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9'];

const keys = document.querySelectorAll('.key');
const whitekeys = document.querySelectorAll('.key.white');
const blackkeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click', () => playsound(key))
})

function playsound(key){
    const soundAudio = document.getElementById(key.dataset.sound)
   
    soundAudio.play()
    key.classList.add('active')
    soundAudio.addEventListener('ended', () =>{
        key.classList.remove('active')
    })
}
document.addEventListener('keydown', ev => {
   
    const key = ev.key
    const whiteKeyIndex = white_key.indexOf(key)
    const blackKeyIndex = black_key.indexOf(key)

    if(whiteKeyIndex > -1) playsound(whitekeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playsound(blackkeys[blackKeyIndex])
})