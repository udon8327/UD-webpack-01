console.log('index');
if (module.hot) {
  module.hot.accept();
}

import '@/sass/main.sass'
import '@/sass/ud-modules.sass'
import '@/sass/index.sass'
import '@/js/ud-modules.js'
import '@/js/ud-axios.js'

import { getRandom, nl2br } from './ud-modules.js'

let vm = new Vue({
  el: '#app',
  data: {
    title: "INDEX"
  },
  mounted(){
    console.log(getRandom());
  },
  methods: {
    toUrl(url) {
      location.href = url;
    },
    nl2br: function(val){
      return nl2br(val)
    },
  },
});
