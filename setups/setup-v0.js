const setup = (options) => {
    const settings = {
        width: options.width,
        height: options.height,
        backgroundColor: options.backgroundColor
        };
        
    let app;

    if(PIXI.utils.isWebGLSupported()) {
        app = new PIXI.Application(settings);
    } else {
        settings.forceCanvas = true;
        app = new PIXILegacy.Application(settings);
    }
    
    document.querySelector(
        options.targetSelector
    ).appendChild(app.view);

    return app;
}