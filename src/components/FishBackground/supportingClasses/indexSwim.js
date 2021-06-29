import SwimAction from './swimAction'
import SwimBackground from './swimBackground'
import Ripples from './ripples'
import Utils from '../../utils/utils'

export default function IndexSwim() {
  return {
    ripples: Ripples(),
    swimAction: SwimAction(),
    swimBackground: SwimBackground(),
    onGridCoins: [],
    utils: Utils,
    init (cont) {
      this.background = this.swimBackground
      this.swimBackground.init(cont)
      if (!this.utils.isMobile) this.ripples.init()
      this.swimAction.init(cont)
    },
    addToStage () {
      if (!this.utils.isMobile) this.ripples.on(true)
      this.swimBackground.addToStage()
      this.swimAction.start()

      this.swimAction.vx = this.swimAction.vy = 0

      return this.swimAction
    },
    removeFromStage () {
      this.ripples.on(false)
    },
    resize () {
      this.swimAction.resize()
      this.swimBackground.resize()
    },
    animate () {
      if (!this.utils.isMobile) this.ripples.animate()
      this.swimBackground.animate()
      this.swimAction.animate()
    }
  }
}
