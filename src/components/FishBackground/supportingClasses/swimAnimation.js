
import Utils from '../../utils/utils'
import Assets from '../../utils/assetCreation'
import Tweens from '../../utils/Tweens'
import Clock from './clock'
import Swim from './indexSwim'
import Gears from './gears'
import Resize from './swimResize'

export default function SwimAnimations() {
  return {
    mode: ['swim'],
    activeModeIndex: 0,
    resize: Resize(),
    activeMode: undefined,
    filterContainer: Assets.Container(),
    action: true,
    gears: Gears(),
    clock: Clock(),
    transitionAnimationPlaying: false,
    utils: Utils,
    loader: Assets.Loader(),
    activeAction: undefined,
    swim: Swim(),
    dbData: {},
    storeAction: true,
    timeOut: undefined,
    fullStop: false,
    kingCont: Assets.Container(),
    frame: Assets.Graphics(),
    kingContBackground: Assets.Graphics(),
    showFPS: false,
    init () {
      this.utils.root = this
      this.activeMode = this.mode[this.activeModeIndex]



      if (!this.isMobile) {
        this.utils.getWidthAndHeight()
      } else {
        const test1 = this.utils.returnCanvasWidth()
        const test2 = this.utils.returnCanvasHeight()

        if (test1 > test2) {
          // landscape
          this.orientationChange.makeLandscape()
        } else {
          // portrait
          this.orientationChange.makePortrait()
        }
      }

      const app = this.app = Assets.Application({
        width: this.utils.canvasWidth,
        height: this.utils.canvasHeight,
        backgroundAlpha: 0,
        resolution: 1
      })
      document.getElementById('fish-canvas').appendChild(app.view)
      this.stage = app.stage
      this.stage.addChild(this.kingCont)

      this.kingCont.alpha = 0;
      this.kingCont.addChild(this.filterContainer)
      this.buildGame = this.buildGame.bind(this)
      this.startGame = this.startGame.bind(this)
      this.animate = this.animate.bind(this)

      if (!this.loader.resources['/ss/ss.json']) {
        this.loader
          .add('/ss/ss.json')
          .load(this.buildGame)
      } else {
        this.buildGame()
      }
    },
    pause (boolean) {
      this.action = !this.action;
    },
    buildGame () {
      const { spritesheet } = this.loader.resources['/ss/ss.json']

      this.utils.setProperties({
        isMobileOnly: this.isMobileOnly,
        isMobile: this.isMobile,
        spritesheet,
        canvasWidth: this.utils.canvasWidth,
        canvasHeight: this.utils.canvasHeight,
        app: this.app,
        root: this
      })

      Assets.init()
      this.gears.init().addToStage()
      this.clock.init().addToStage()
      this.swim.init(this.kingCont)
      this.activeAction = this[this.activeMode].addToStage()
      window.onresize = this.resize.resizeHandler.bind(this.resize)
      this.startGame()
    },
    startGame () {
      Tweens.tween(this.kingCont, 1, { alpha: [0, 0.5] })
      this.app.ticker.add(this.animate)
    },
    stop () {
      window.onresize = undefined
      if (this.app) this.app.destroy(true)
      Tweens.killAll()
    },
    animate () {
      Tweens.animate()

      if (this.fullStop) return

      if (this.action) {
        if (this.rotateLeftBoolean) {
          this.activeAction.rotate('left')
        } else if (this.rotateRightBoolean) {
          this.activeAction.rotate('right')
        }
        this.clock.animate()
        this.gears.animate()
        this[this.activeMode].animate()
      }
    }
  }
}
