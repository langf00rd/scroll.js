window.onload = function() {
    const EFFECT = document.querySelector("#effect");
    const EFFECTTWO = document.querySelector("#effect-two");
    const EFFECTTHREE = document.querySelector("#effect-three");
    const HEADER = document.querySelector("#header");

    window.addEventListener('scroll', scrollEffect);
    window.addEventListener('scroll', scrollEffectTwo);
    window.addEventListener('scroll', scrollEffectThree);
    window.addEventListener('scroll', header);

    function header(){
        if(window.scrollY >= 100){
            HEADER.style.fontSize = '13px';
            HEADER.style.height = '70px';
            HEADER.style.transition = '.5s ease-in-out'
        }else{
            HEADER.style.fontSize = '15px';
            HEADER.style.height = '60px';
        }
    }
    scrollEffect();

    function scrollEffect(){
        if(window.scrollY >= 200){
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateY(0)';
            EFFECT.style.transition = '1s ease-in-out'
        }else{
            EFFECT.style.opacity = '0';
            EFFECT.style.transform = 'translateY(110px)'
        }
    }
    window.addEventListener('scroll', scrollEffectTwo);
    scrollEffect();

    function scrollEffectTwo(){
        if(window.scrollY >= 1030){
            EFFECTTWO.style.opacity = '1';
            EFFECTTWO.style.transform = 'translateY(0)';
            EFFECTTWO.style.transition = '0.3s ease-in-out'
        }else{
            EFFECTTWO.style.opacity = '0';
            EFFECTTWO.style.transform = 'translateY(110px)'
        }
    }
    scrollEffectTwo();

    function scrollEffectThree(){
        if(window.scrollY >= 1900){
            EFFECTTHREE.style.opacity = '1';
            EFFECTTHREE.style.transform = 'translateY(0)';
            EFFECTTHREE.style.transition = '0.3s ease-in-out'
        }else{
            EFFECTTHREE.style.opacity = '0';
            EFFECTTHREE.style.transform = 'translateY(110px)'
        }
    }
    scrollEffectTwo();
}