import * as PIXI from 'pixi.js';
import Utils from '../utils/utils'

const BreathingAnimation = {
    colors: [ 0xff7575, 0xffb775, 0xfff175, 0xc3ff76, 0x7bffb8, 0x7de8ff, 0x799fff, 0xff93f7],
    colorCounter: 0,
    columns: [],
    counter: 0,
    increaseCounter: 0,
    decreaseCounter: 0,
    brickCounter: 0,
    brickDownCounter: 0,
    init: function (w, h) {
     

        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
        width: w, height: h,  backgroundAlpha:0, resolution: window.devicePixelRatio || 1, autoResize:true
        });
        document.getElementById("breathing").appendChild(app.view);
        
        const container = new PIXI.Container();
       
        app.stage.addChild(container);

        this.app = app;

      
        
        let currentX = 0;
        let limit = (Utils.canvasWidth / 2) ;
        while (currentX < limit) {
            let column = this.column();
            column.cont.alpha = 0.5;
            column.cont.x = limit + currentX;
            this.app.stage.addChild(column.cont)
            this.columns.push(column)

            column = this.column();
            column.cont.alpha = 0.5;
            column.cont.x = limit - 210 -currentX;
            this.app.stage.addChild(column.cont)
            currentX += 210;
            
        }
        
     
        app.ticker.add(this.ticker.bind(this));
    },
    column: function () {
        let cont = new PIXI.Container();
        let cols = []
        for (let i = 0; i < 20; i ++) {
            let b = this.brick();
            b.x = 100;

            b.y = (Utils.canvasHeight / 2) - (i * 15);
            cont.addChild(b)
            cols.push(b)

            let b2 = this.brick();
            b2.x = 100;
           // b2.tint = this.colors[this.colorCounter];
           // b2.alpha = 0.15;
            b2.y = 35 + (Utils.canvasHeight / 2) + (i * 15);
            cont.addChild(b2);

            this.colorCounter ++;
            if (this.colorCounter > this.colors.length - 1) this.colorCounter = 0;
        }
        return {cont,cols };
    },
    increase: function () {
        this.increaseCounter ++;
        // this.columns.forEach( column =>)
        if (this.increaseCounter % 3 === 0) {
            if (!this.columns[0].cols[this.brickCounter]) return
            let brick = this.columns[0].cols[this.brickCounter];
            brick.tint = this.colors[this.colorCounter];
            this.colorCounter ++;
            if (this.colorCounter > this.colors.length - 1) this.colorCounter = 0;
            this.brickCounter ++;
        }
        this.decreaseCounter = 0;
        this.brickDownCounter = this.columns[0].cols.length - 1;
    },
    decrease: function () {
        this.decreaseCounter ++;
        this.colorCounter = 0;
        if (this.decreaseCounter % 3 === 0 && this.columns[0].cols[this.brickDownCounter]) {
            let brick = this.columns[0].cols[this.brickDownCounter];
            brick.tint = 0xFFFFFF;
            this.brickDownCounter --;
        }
        this.brickCounter = 0;
    },
    brick: function () {
        const s = new PIXI.Sprite.from('/bmps/brick.png')
        s.counter = 0
        s.curveCounter = 0;
        // s.width = 200;
        // s.height = 100;
        s.anchor.set(0.5)
        return s
      },
    resize: function (w, h) {
       
        Utils.setWidthAndHeight(w, h);
        this.app.renderer.resize(w, h)
       
    },
    stop: function () {

        this.app.destroy(true);
        
    },
    ticker: function (delta) {
        this.counter ++;
        if (this.counter < 100) {
            this.increase();
            // console.log('inhale', this.counter)
        } else if (this.counter < 200) {
            // console.log('hold', this.counter)
        } else if (this.counter < 300) {
            this.decrease();
            // console.log('exhale', this.counter)
        }  else {
            this.counter = 0;
        }
    }
    
}
export default BreathingAnimation;


