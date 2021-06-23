

import Utils from '../utils/utils';
import Tweens from '../utils/Tweens';
import * as PIXI from 'pixi.js';
import PixiFps from "pixi-fps";
 

const Firework  = {
        utils: Utils,
        fs: [],
        fq: 200,
        starQ: 500,
        range: 100,
        colors: [ 0xff7575, 0xffb775, 0xfff175, 0xc3ff76, 0x7bffb8, 0x7de8ff, 0x799fff, 0xff93f7],
        init: function (w,h) {
            // this.resize = this.resize.bind(this);
            // window.onresize = this.resize;
            this.canvasWidth = Utils.canvasWidth;
            this.canvasHeight = Utils.canvasHeight;
            this.halfHeight = this.canvasHeight / 2;
            this.halfWidth = this.canvasWidth / 2;

            Utils.setWidthAndHeight(w, h);

            const app = new PIXI.Application({
                    width: w, height: h,  backgroundAlpha: 0, resolution: window.devicePixelRatio || 1, autoResize: true
            });
            document.getElementById("breathing").appendChild(app.view);

           
           app.ticker.add(this.ticker.bind(this));
           this.app = app;
           this.stage = app.stage;
           const fpsCounter = new PixiFps();
 
           this.stage.addChild(fpsCounter);
           this.build();
        },
        build: function () {
            
            let i, firework, star, delay, shape, width, height, widthCheck = 0;
            for (i = 0; i < this.fq; i ++) {

                firework = this.FireworkInstance();
                firework.start = firework.start.bind(firework);
                firework.restart = firework.restart.bind(firework);
                firework.x = Utils.randomNumberBetween(100, Utils.canvasWidth - 100);
                firework.y = Utils.randomNumberBetween(100, Utils.canvasHeight - 100);
                this.stage.addChild(firework);
                this.fs.push(firework);
                delay = Utils.randomIntBetween(0, 1);
                setTimeout(firework.start, delay);
            }
            // for (i = 0; i < this.starQ; i ++) {
            //     star = new PIXI.Graphics();
            //     star.beginFill(0xFFFF00).drawCircle(0,0,0.25).endFill();
            //     star.x = Utils.randomNumberBetween(0,this.canvasWidth);
            //     star.y = Utils.randomNumberBetween(0,this.canvasHeight);
            //     this.stage.addChild(star);
            // }
            // while (widthCheck < this.canvasWidth) {
            //     shape = new PIXI.Graphics();
            //     width = Utils.randomNumberBetween(10, 30);
            //     height =  Utils.randomNumberBetween(10, 50);
            //     shape.beginFill(0x333333).drawRect(0,0,width, height).endFill();
            //     shape.x = widthCheck;
            //     shape.y = Utils.canvasHeight - height;
            //     this.stage.addChild(shape);
            //     widthCheck += width;
            // }
        },
        stop: function () {
            this.app.destroy(true);
        },
        resize: function (w, h) {
            this.canvasWidth = Utils.returnCanvasWidth();
            this.canvasHeight = 400;
            this.halfHeight = this.canvasHeight / 2;
            this.halfWidth = this.canvasWidth / 2;
            this.stage.removeChildren();
            Utils.setWidthAndHeight(w, h);
            this.app.renderer.resize(w, h)
            this.fs = [];
            this.build();
        },
        FireworkInstance: function () {
            let cont = new PIXI.Container(),
                i = 0,
                cf = 0,
                numberOfBeams = 20,
                myBeam1,
                colorArray =this.colors,
                color = colorArray[Utils.randomIntBetween(0, colorArray.length-1)],
                that = this,
                fps = 60,
                fps2 = fps * 5,
                frames = that.utils.randomIntBetween(fps, fps2);
            cont.beams = [];
            for ( i = 0; i < numberOfBeams; i++) {
                myBeam1 = this.Beam(color);
                myBeam1.rotation = Utils.deg2rad(Math.random()*360);
                myBeam1.scaleX = Utils.randomNumberBetween(0.2,1)
                myBeam1.scaleY = Utils.randomNumberBetween(0.2,1)
                cont.addChild(myBeam1);
                cont.beams.push(myBeam1);
            }
            cont.cf = cf;
            cont.numberOfBeams = numberOfBeams;
            cont.twinkleStart = Math.floor(frames * 0.33);
            cont.fadeOutStart = Math.floor(frames * 0.66);
            cont.end = frames;
            cont.start = function () {
                let beam;
                for (i = 0; i < numberOfBeams; i++) {
                    beam = this.beams[i];
                    beam.shape.rotation = that.utils.deg2rad(Math.random() * 360);
                    this.distance = that.utils.randomNumberBetween(50, 150);
                    Tweens.tween(beam.shape, frames / 60, {x: [0, this.distance]})
                }
            }
            cont.restart = function () {
                console.log("restart")
                this.cf = 0;
                this.x = Utils.randomNumberBetween(100, Utils.canvasWidth - 100);
                this.y = Utils.randomNumberBetween(100, Utils.canvasHeight - 100);
                for ( i = 0; i < numberOfBeams; i++) {
                    this.beams[i].shape.x = this.beams[i].shape.y = 0;
                    this.beams[i].alpha = 1;
                }
                this.start();
            }
            return cont;
        },
        alphaOne: function (mc) {
           mc.alpha = 1;
        },
        Beam: function (color) {
            let cont = new PIXI.Container();
            let shape = new PIXI.Graphics();
            shape.beginFill(color).drawCircle(0,0,1).endFill();
            cont.addChild(shape);
            cont.shape = shape;
            return cont;
        },
        ticker: function () {
            Tweens.animate();
            let i, j, f, twinkleStart, fadeOutStart, end;

            for (j = 0; j < this.fq; j++) {

                f =  this.fs[j]
                f.cf ++;
                twinkleStart = f.twinkleStart;
                fadeOutStart = f.fadeOutStart;
                end = f.end;
                if (f.cf >= twinkleStart && f.cf < fadeOutStart) {
                    for (i = 0; i < f.numberOfBeams; i++) {
                        f.beams[i].alpha = Math.random() * 1;
                        f.alpha = 1;
                    }
                }
                if (f.cf >= fadeOutStart) {
                    for (i = 0; i < f.numberOfBeams; i++) {
                        f.beams[i].alpha *= 0.75;
                    }
                }
                if (f.cf >= end) {
                    f.restart();
                }
            }
        }
    }
export default Firework;