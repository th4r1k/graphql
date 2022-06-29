import { Player as VimePlayer, Hls, DefaultUi } from '@vime/react'

const Player = () => (
  <VimePlayer theme="dark">
    <Hls crossOrigin poster="https://media.vimejs.com/poster.png">
      <source
        data-src="https://www.youtube.com/watch?v=wOxP4k9f5rk"
        type="application/x-mpegURL"
      />
    </Hls>

    <DefaultUi />
  </VimePlayer>
)

export default Player

// data-src="https://media.vimejs.com/hls/index.m3u8"
