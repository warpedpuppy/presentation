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

        if (!app.loader.resources['/ss/runningMan.json']) {
            app.loader
                .add('spritesheet', '/ss/runningMan.json')
              .load(this.onRunnerLoaded.bind(this));
          } else {
            this.onRunnerLoaded.bind(this)
          }

      

     
        app.ticker.add(this.ticker.bind(this));
    },
    onRunnerLoaded: function () {
        const runningTextures = [];
        for (let i = 0; i < 4; i++) {
            const texture = PIXI.Texture.from(`man${i + 1}.png`);
            runningTextures.push(texture);
        }
        const runner = new PIXI.AnimatedSprite(runningTextures);
        runner.animationSpeed = 0.15;
        runner.scale.set(0.5)
        runner.play();
        runner.x = Utils.canvasWidth / 2;
        runner.y = this.canvasHeight - runner.height;
        this.runner = runner;
        this.app.stage.addChild(runner)

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


