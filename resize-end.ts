// Typescript IIFE - shim should not leave any global footprint
(() => {
    const timeout: number = 200;
    const event = new Event('resizeend');
    let timer: number = -1;
    
    let resizeHandler = () => {
        clearTimeout(timer);
        
        timer = setTimeout(() => window.dispatchEvent(event), timeout);
    }

    window.onresize = resizeHandler;

    console.info(`resizeend event attached ${!!window.onresize}`)
})()