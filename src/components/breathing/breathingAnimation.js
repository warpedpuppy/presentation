import * as PIXI from 'pixi.js';
import Utils from './utils';

const BreathingAnimation = {
  
    init: function (w, h) {
     

        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
        width: w, height: h,  backgroundAlpha:0, resolution: window.devicePixelRatio || 1, autoResize:true
        });
        document.getElementById("breathing").appendChild(app.view);
        
        const container = new PIXI.Container();
       
        app.stage.addChild(container);

        this.app = app;
       
        

     
        app.ticker.add(this.ticker.bind(this));
    },
   
    resize: function (w, h) {
       
        Utils.setWidthAndHeight(w, h);
        this.app.renderer.resize(w, h)
       
    },
    stop: function () {

        this.app.destroy(true);
        
    },
    ticker: function (delta) {
        
    }
    
}
export default BreathingAnimation;


