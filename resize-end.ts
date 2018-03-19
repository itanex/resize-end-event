// Typescript IIFE - shim should not leave any global footprint
() => {
    const TIMEOUT = 200;
    const EVENT_KEY = new Event('resizeend');
    let timer: number = -1;

    window.addEventListener('resize',  () => {
        clearTimeout(timer);
debugger;
        timer = setTimeout(() => window.dispatchEvent(EVENT_KEY), TIMEOUT);
    });
}
