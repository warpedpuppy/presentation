import Utils from '../../utils/utils'
import Assets from '../../utils/assetCreation'
import AirBubbles from './airBubbles'


export default function SwimAction() {
  return {
    radius: 0,
    storeRadius: 0,
    spinning: false,
    utils: Utils,
    vx: 0,
    vy: 0,
    airBubbleCounter: 0,
    airBubbleStart: 0,
    countAllow: true,
    expand: [],
    percApply: true,
    airBubbles: AirBubbles(),
    increment: 5,
    flameOn: false,

    init (stage) {
      this.hero = this.utils.hero
      this.wh = this.utils.wh
      this.stage = stage
      this.airBubbles.setupBubbles(stage)
      this.flames = Assets.ParticleContainer(this.flameQ)
    },
    start () {
      // this.maxLength = this.increment * 5
    },
    resize () {
      this.airBubbles.resize()
    },
    animate () {
      this.airBubbles.animate()
      this.airBubbles.bubblesCont.rotation = this.storeRadius;
    }
  }
}
