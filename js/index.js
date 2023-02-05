const d = document

d.addEventListener('DOMContentLoaded', () => {

    d.addEventListener('click',  (e) => {
        const $menu = d.querySelector('.nav__menu')
        if (e.target.closest('.nav__open')) {
            $menu.classList.add('active')
        }

        if (e.target.closest('.nav__close')) {
            $menu.classList.remove('active')
        }

        if (e.target.matches('.s1__link-audio')) {
            const $audio = d.querySelector('#audio')
            e.target.classList.toggle('play')

            if (e.target.classList.contains('play')) {
                $audio.muted = false
                $audio.play();
            } else {
                $audio.muted = true
                $audio.stop();
            }
        }

        if (e.target.matches('.nav__link')) {
            $menu.classList.remove('active')
        }
    })

    d.addEventListener('submit', (e) => {
        if(e.target.matches('form')){
            e.preventDefault();
        }
    })

})

d.addEventListener('scroll', () => {
    const $header = d.querySelector('.header')
    // console.log($header.clientHeight, $header.offsetHeight, $header.getBoundingClientRect().height)
    if(window.scrollY > $header.getBoundingClientRect().height){
        $header.classList.add('header--dark')
    }else{
        $header.classList.remove('header--dark')
    }
    

})