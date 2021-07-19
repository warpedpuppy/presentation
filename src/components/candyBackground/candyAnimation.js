import * as PIXI from 'pixi.js';
import RainbowSwirls from './rainbowSwirls';
import Utils from '../utils/utils';

const PezAnimation = {
    rainbowSwirlsQ: 4,
    rainbowSwirlInstances: [],
    pauseBoolean: false,
    init: function (w, h) {

        this.rainbowSwirlInstances = [];
        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
        width: w, height: h,  backgroundAlpha: 0, resolution: 1,
        });
        document.getElementById("candy-canvas").appendChild(app.view);
        
        const container = new PIXI.Container();

        app.stage.addChild(container);

        this.app = app;
        
        this.startXs = ['TL', 'BL', 'TR', 'BR']
        for (let i = 0; i < this.rainbowSwirlsQ; i++) {
          this.tileColumn = RainbowSwirls()
          this.tileColumn.init(container, this.startXs[i], 30, 15)
          this.tileColumn.addToStage()
          this.rainbowSwirlInstances.push(this.tileColumn)
        }
        
        app.ticker.add(this.ticker.bind(this));
    },
    resize: function (w, h) {
        Utils.setWidthAndHeight(w, h);
        this.app.renderer.resize(w, h)
    },
    pause: function () {
        this.pauseBoolean = !this.pauseBoolean;
    },
    destroy: function () {
        this.app.destroy(true);
        for (let i = 0; i < this.rainbowSwirlsQ; i++) {
            this.rainbowSwirlInstances[i].removeFromStage()
        }
    },
    ticker: function (delta) {
        if (!this.pauseBoolean) {
            for (let i = 0; i < this.rainbowSwirlsQ; i++) {
                this.rainbowSwirlInstances[i].animate()
            }
        }
       
    }
    
}
export default PezAnimation


