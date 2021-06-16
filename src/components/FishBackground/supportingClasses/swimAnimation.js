
import Utils from './utils/utils'
import Assets from './utils/assetCreation'
import Tweens from './utils/Tweens'
import Clock from './clock'
import Swim from './indexSwim'
import Gears from './gears'
import Resize from './swimResize'

// import Config from './animationsConfig'


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
      console.log("here")
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
        backgroundAlpha: 0
      })
      document.getElementById('fish-canvas').appendChild(app.view)
      this.stage = app.stage
      this.stage.addChild(this.kingCont)

    


      this.kingCont.addChild(this.filterContainer)

      this.loadDB = this.loadDB.bind(this)
      this.buildGame = this.buildGame.bind(this)
      this.startGame = this.startGame.bind(this)
      this.animate = this.animate.bind(this)
      this.animateDesktopIpad = this.animateDesktopIpad.bind(this)
      this.animateMobile = this.animateMobile.bind(this)

      if (!this.loader.resources['/ss/ss.json']) {
        this.loader
          .add('/ss/ss.json')
          .load(this.loadDB)
      } else {
        this.loadDB()
      }
    },
    async loadDB () {
      try {
       // const res = await MazeServices.getOneMaze(this.id)
        // this.grid.boards = [...this.grid.boards, ...res]
        this.buildGame()
      } catch (e) {
        // this.grid.boards = [...this.grid.boards, ...DefaultMaze]//
        this.buildGame()
      }
    },
    changeGrid (obj) {
      this.id = obj.id
 
        this.buildGame()

    },
    pause (boolean) {
      this.action = boolean
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

      if (this.isMobile) {
        this.controlPanel.init(this)
        this.controlPanel.addToStage()
      }

      if (this.isMobile) {
        // mobile
        this.orientationChange.init(this)
      } else {
        window.onresize = this.resize.resizeHandler.bind(this.resize)
      }

      this.startGame()
    },
    startGame () {
      if (!this.isMobile) {
        this.app.ticker.add(this.animateDesktopIpad)
        // this.keyHandler.addToStage()
      } else {
        this.app.ticker.add(this.animateMobile)
      }

     
    },
    stop () {
      window.onresize = undefined

      if (this.app) this.app.destroy(true)

      if (!this.isMobile && this.keyHandler) {
        this.keyHandler.removeFromStage()
      }

      Tweens.killAll()
    },
    earnToken (t) {
      this.action = false
      this.tokens.fillSlot(t)
      setTimeout(this.resumePlayAfterEarnToken.bind(this), 2000)
    },
    resumePlayAfterEarnToken () {
      // this.tokens.clearText();
      this.action = true
    },
    animateMobile () {
      this.orientationChange.animate()
      this.animate()
    },
    animateDesktopIpad () {
      this.animate()
    },
    levelCompleteHandler () {
      this.levelComplete.boardComplete()
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
