import * as PIXI from 'pixi.js';
import Utils from './utils';

const DangerLand = {
    canvasHeight: 400,
    init: function (w, h) {


        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
        width: w, height: this.canvasHeight,  backgroundColor: 0xFF00FF, resolution: window.devicePixelRatio || 1,
        });
        document.getElementById("danger-land").appendChild(app.view);
        
        const container = new PIXI.Container();

        app.stage.addChild(container);

        this.app = app;

        

        app.loader
            .add('spritesheet', '/bmps/dangerLand.json')
            .load(this.onRunnerLoaded);
    const runningTextures = [];
    let i;

    for (i = 0; i < 3; i++) {
        const texture = PIXI.Texture.from(`runner${i + 1}.png`);
        runningTextures.push(texture);
    }
    const runner = new PIXI.AnimatedSprite(runningTextures);
    runner.animationSpeed = 0.15;
    runner.play();
    runner.x = Utils.canvasWidth / 2;
    runner.y = this.canvasHeight - runner.height;
    this.runner = runner;
    app.stage.addChild(runner)
     
        app.ticker.add(this.ticker.bind(this));
    },
    onRunnerLoaded: function () {

    },
    resize: function (w, h) {
       
        Utils.setWidthAndHeight(w, h);
        this.runner.x = Utils.canvasWidth / 2;
        this.app.renderer.resize(w, this.canvasHeight)
    },
    stop: function () {

        this.app.destroy(true);
        
    },
    ticker: function (delta) {
       
    }
    
}
export default DangerLand;


