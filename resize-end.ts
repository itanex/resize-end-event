// Typescript IIFE - shim should not leave any global footprint
(() => {
    // Cross-browser support for event creation
    let eventPoly = (eventName: string): Event => {
        const config:EventInit = <EventInit>{bubbles: false, cancelable: false, scoped: false };

        if (typeof(Event) === 'function') {
            return new Event(eventName, config);
        } else {
            let event = document.createEvent('event');
            event.initEvent(eventName, <boolean>config.bubbles, <boolean>config.cancelable);
            return event;
        }
    }

    // RESIZEDEND event configuration
    const timeout: number = 200;
    const event = eventPoly('resizeend');
    let timer: number = -1;
    
    let resizeHandler = () => {
        clearTimeout(timer);
        
        timer = setTimeout(() => window.dispatchEvent(event), timeout);
    }

    // cannot use window.addEventListner in Edge
    window.onresize = resizeHandler;

    // Debug report used to tell if handler was attached
    //console.info(`resizeend event attached ${!!window.onresize}`)
})();