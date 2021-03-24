// 開啟 HMR 支持 (全部模組)
// if (module.hot) {
//   module.hot.accept();
// }

console.log('page頁');

import '@/sass/main.sass'
import '@/sass/page.sass'
import '@/utils/ud-components.sass'

import Vue from 'vue'
import { udAxios } from '@/utils/ud-axios.js'
import { udLoading, udAlert } from '@/utils/ud-components.js'
import { getRandom } from '@/utils/ud-tools.js'

let vm = new Vue({
  el: '#app',
  data: {
    title: "page"
  },
  mounted(){
  },
  methods: {
    toUrl(url) {
      location.href = url;
    },
    // nl2br: function(val){
    //   return nl2br(val)
    // },
  },
});