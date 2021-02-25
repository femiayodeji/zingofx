const container = document.querySelector('.container');
for(var i = 0; i <= 50; i++){
    const block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);
}

function animateBlocks(){
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-0,700);
        },
        translateY: function(){
            return anime.random(-500,500);
        },
        scale: function(){
            return anime.random(1,3)
        },
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks,
    });
}

animateBlocks();
