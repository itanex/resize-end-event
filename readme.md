# Resize End Event

This library adds a simple resize-end event to any solution so that you can bind to the event in any browser. Written as pure JavaScript without any need for a third party library.

## Usage

    window.addEventListener('resizeend', function () {
        console.log('Resize end Event -- ' + new Date().toISOString())
    })

## Problems?

Report any issues or suggestions through the github issue tracker.

## License

> MIT 2018-03-19