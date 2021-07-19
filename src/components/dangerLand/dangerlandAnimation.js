import * as PIXI from 'pixi.js';
import Utils from '../utils/utils';
import Tweens from '../utils/Tweens';
const DangerLand = {
    canvasHeight: 400,
    gravity: 1,
    density: 1.22,
    drag: 0.47,
    balls: [],
    ballsOnStage: [],
    ballQ: 20,
    counter: 0,
    ballInterval: 50,
    pauseBoolean: false,
    init: function (w, h) {


        Utils.setWidthAndHeight(w, h);
        const app = new PIXI.Application({
        width: w, height: this.canvasHeight,  backgroundColor: 0xFF00FF, resolution: 1,
        });
        document.getElementById("danger-land").appendChild(app.view);
        
        const container = new PIXI.Container();

        app.stage.addChild(container);
        app.stage.alpha = 0;
        this.app = app;

        if (!app.loader.resources['/ss/runningMan.json']) {
            app.loader
                .add('spritesheet', '/ss/runningMan.json')
              .load(this.onRunnerLoaded.bind(this));
          } else {
            this.onRunnerLoaded.bind(this)
          }
          
          for (let i = 0; i < this.ballQ; i++) {
              let ball = PIXI.Sprite.from('/bmps/dot.png');
              ball.vx = Utils.randomNumberBetween(2, 10)
              this.balls.push(ball);
          }
          
          Tweens.tween(app.stage, 1, {alpha: [0,1]});
       
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
        runner.vy = 0;
        runner.isJumping = false;
        runner.x = Utils.canvasWidth / 2;
        runner.y = runner.startY = this.canvasHeight - runner.height;
        this.runner = runner;
        this.app.stage.addChild(runner)
        this.app.ticker.add(this.ticker.bind(this));
        window.addEventListener('keypress', this.jump.bind(this))
    },
    jump: function (e) {
        if (this.pauseBoolean) return;
        
        if (e.keyCode === 32 && !this.runner.isJumping) {
            this.runner.isJumping = true;
            this.runner.vy = 20;
        }
    },
    pause: function () {
        this.pauseBoolean = !this.pauseBoolean;

        if (this.pauseBoolean === true) {
            this.runner.stop();
        } else {
            this.runner.play();
        }
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
        if (!this.pauseBoolean) {
            Tweens.animate();
            if (this.runner.isJumping) {
                this.runner.vy -= this.gravity;
                this.runner.y -= this.runner.vy;
                if (this.runner.y >= this.runner.startY) {
                    this.runner.isJumping = false;
                    this.runner.y = this.runner.startY;
                }
            }
            this.counter ++;
            if (this.counter % this.ballInterval === 0 && this.balls.length > 0) {
                let b = this.balls.pop()
                b.y = Utils.randomNumberBetween(400 - this.runner.height, 300);
                b.x = Utils.canvasWidth;
                this.app.stage.addChild(b)
                this.ballsOnStage.push(b)
            }
            //don't do this in production
            for (let i = 0; i < this.ballsOnStage.length; i++) {
                let b = this.ballsOnStage[i];
                b.x -= b.vx;
                if (b.x < 0) {
                    b.x = Utils.canvasWidth;
                }
            }
        }
       
   
    }
    
}
export default DangerLand;


