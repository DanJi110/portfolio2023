$(document).ready(function(){
    let ev = 0;
    setInterval(function(){
        ev++;
        if(ev==3)ev=0
        console.log(ev)
        $('.eventImgBox li').eq(ev-1).stop().animate({'opacity':'0'},800)
        $('.eventImgBox li').eq(ev).stop().animate({'opacity':'1'},800)
    },2500)
})