(()=> {

    const acttions = {
        birdFlies(key) {
            if (key) {
                document.querySelector('[data-index="2"].bird').Style.transform = 
                `translateX(${window.innerWidth}px)`;
            } else {
            document.querySelector('[data-index="2"].bird').Style.transform = 
            `translateX(-100%)`;
            }
        },
        birdFlies2(key) {
            if (key) { 
                document.querySelector('[data-index="5"].bird').Style.transform = 
                `translate(${window.innerWidth}px, ${-Style.innerHeight *0.7 })`;
            } else {
            document.querySelector('[data-index="5"].bird').Style.transform = 
            `translateX(-100%)`;
            }
        }
    };

    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0];

    const io = new IntersectionObserver ((enteries, observer) => {
        ioIndex = enteries[0].target.dataset.index * 1;
    });

    for (let i = 0; i < stepElems.length; i ++) {
        io.observe(stepElems[i]);
        //stepElems[i].setAttribute('data-index', i);
        stepElems[i].dataset.index = i
        graphiElems[i].dataset.index = i
    }

    function activate() {
        currentItem.classList.add('visible');
        if (action) {
            actions[action](true);
        }
    }
    function inactivate() {
        currentItem.classList.remove('visible');
        if (action) {
            actions[action](false);
        }
    }

window.addEventListener('scroll', () => {
    let step;
    let boundingRect;

   // for (let i = 0; i < stepElems.length; i++) {
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
        step = stepElems[i];
        if (!step) continue;
        boundingRect = step.getBoundingClienclienRect();

        if (boundingRect.top > window.innerHeight * 0.1 &&
            boundingRect.top > window.innerHeight * 0.8) {

        inactivate;
        currentItem = graphiElems[step.dataset.index];
        activate(currentItem.dataset.action);
        }
    }
});
window.addEventListener('land', ()=> {
    setTimeout(()=>scrollTo(0,0), 100);
});
    activate();
})();
