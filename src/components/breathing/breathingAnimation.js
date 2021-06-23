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
    brickWidth: 150,
    brickHeight: 5,
    brickBuffer: 5,
    brickVerticalSpacer: 10,
    brickQ: 10,
    init: function (w, h) {
     

        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
        width: w, height: h,  backgroundAlpha:0, resolution: window.devicePixelRatio || 1, autoResize:true
        });
        document.getElementById("breathing").appendChild(app.view);
        
        const container = new PIXI.Container();
       
        app.stage.addChild(container);

        this.app = app;

       this.brickQ = (Utils.canvasHeight / 2 ) / this.brickHeight;
        
        
        let currentX = 0;
        let limit = Utils.canvasWidth / 2;
        while (currentX < limit) {
            let column = this.column();
            column.cont.alpha = 0.5;
            column.cont.x = limit + currentX;
            this.app.stage.addChild(column.cont)
            this.columns.push(column)

           

            column = this.column();
            column.cont.alpha = 0.5;
            column.cont.x = limit - this.brickWidth - this.brickBuffer - currentX;
            this.app.stage.addChild(column.cont)
            currentX += this.brickWidth + this.brickBuffer;
            this.columns.push(column)
        }
        
        let cover = new PIXI.Graphics();
        cover.alpha = 0.25;
        cover.beginFill(0x000821).drawRect(0,0,Utils.canvasWidth, Utils.canvasHeight).endFill();
        app.stage.addChild(cover)
     
        app.ticker.add(this.ticker.bind(this));
    },
    column: function () {
        let cont = new PIXI.Container();
        let cols = [];
        let inverseCols = [];
        for (let i = 0; i < this.brickQ; i ++) {
            let b = this.brick();
            b.width = this.brickWidth;
            b.height = this.brickHeight
            b.x = this.brickWidth / 2;

            b.y = (Utils.canvasHeight / 2) - (i * this.brickVerticalSpacer);
            cont.addChild(b)
            cols.push(b)

            let b2 = this.brick();
            b2.x = this.brickWidth / 2;

            b2.y = 35 + (Utils.canvasHeight / 2) + (i * this.brickVerticalSpacer);
            b2.width = this.brickWidth;
            b2.height = this.brickHeight
            cont.addChild(b2);
            inverseCols.push(b2)
            b2.alpha = 0.35;
            this.colorCounter ++;
            if (this.colorCounter > this.colors.length - 1) this.colorCounter = 0;
        }
        return {cont, cols, inverseCols };
    },
    increase: function () {
        this.increaseCounter ++;
        if (this.increaseCounter % 1 === 0) {
            this.columns.forEach( column => {
                if (column.cols[this.brickCounter]) {
                    let brick = column.cols[this.brickCounter];
                    brick.tint = this.colors[this.colorCounter];

                    let brick2 = column.inverseCols[this.brickCounter];
                    brick2.tint = this.colors[this.colorCounter];

                    
                }
            })
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
        if (this.decreaseCounter % 1 === 0) {
            this.columns.forEach( column => {
                if (column.cols[this.brickDownCounter]) {
                    let brick = column.cols[this.brickDownCounter];
                    brick.tint = 0xFFFFFF;

                    let brick2 = column.inverseCols[this.brickDownCounter];
                    brick2.tint = 0xFFFFFF;
                }
            })
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
        if (this.counter < 400) {
            this.increase();
            // console.log('inhale', this.counter)
        } else if (this.counter < 500) {
            // console.log('hold', this.counter)
        } else if (this.counter < 800) {
            this.decrease();
            // console.log('exhale', this.counter)
        }  else {
            this.counter = 0;
        }
    }
    
}
export default BreathingAnimation;


