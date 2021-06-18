import * as PIXI from 'pixi.js';
import Utils from './utils';

const DangerLand = {
    colors: [0x446996,0x2d4264,0x182033,0xb2826,0x1f3423,0xb482a,0x364a2b,0x262a16,0x3a4016,0x888136,0x635021,0x533217,0x5c2a1d],
    init: function (w, h) {


        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
        width: w, height: h,  backgroundAlpha:0, resolution: window.devicePixelRatio || 1,
        });
        document.getElementById("frustration").appendChild(app.view);
        
        const container = new PIXI.Container();

        app.stage.addChild(container);

        this.app = app;
        let arr = Utils.distributeAroundCircle ({x:200, y: 200}, 1000, 300)

        let particleContainer = new PIXI.ParticleContainer();
        let index = 0;
        for (let i = 0; i < arr.length; ++i)
        {
            
            let sprite = PIXI.Sprite.from("/bmps/dot.png");
            sprite.x = arr[i].x;
            sprite.y = arr[i].y;
            sprite.anchor.set(0.5)
            sprite.scale.set((Math.random()*1)+0.2)
            sprite.tint = this.colors[index];
            index ++;
            if (index > this.colors.length - 1)index = 0;
            particleContainer.addChild(sprite);
        }

        app.stage.addChild(particleContainer);
console.log(particleContainer)
      

     
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


