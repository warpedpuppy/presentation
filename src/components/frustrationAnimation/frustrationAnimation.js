import * as PIXI from 'pixi.js';
import Utils from './utils';

const DangerLand = {
    canvasHeight: 400,
    init: function (w, h) {


        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
        width: w, height: this.canvasHeight,  backgroundColor: 0xFF00FF, resolution: window.devicePixelRatio || 1,
        });
        document.getElementById("frustration").appendChild(app.view);
        
        const container = new PIXI.Container();

        app.stage.addChild(container);

        this.app = app;

       

      

     
        app.ticker.add(this.ticker.bind(this));
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


