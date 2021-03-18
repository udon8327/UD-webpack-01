console.log('page');

import '../sass/main.sass'
import '../sass/ud-modules.sass'
import '../sass/index.sass'
import './ud-modules.js'
import './ud-axios.js'

let vm = new Vue({
  el: '#app',
  data: {
    title: "INDEX"
  },
  mounted(){
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