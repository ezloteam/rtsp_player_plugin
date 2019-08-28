import Vue from 'nativescript-vue'
import App from './components/App'
import RtspView from 'nativescript-rtsp-player/vue'
// import { RtspPlayer }from 'nativescript-rtsp-player'

// const player = new RtspPlayer();
// player.startStream();

Vue.use(RtspView)
  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
