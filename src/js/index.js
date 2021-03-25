// 開啟 HMR 支持 (全部模組)
// if (module.hot) {
//   module.hot.accept();
// }

console.log('index頁');

import '@/sass/main.sass'
import '@/sass/index.sass'
import '@/utils/ud-components.sass'

import Vue from 'vue'
import { udAxios } from '@/utils/ud-axios.js'
// import { udLoading, udAlert } from '@/utils/ud-components.js'
import '@/utils/ud-components.js'
import { getRandom } from '@/utils/ud-tools.js'
import { udLoading } from '../utils/ud-components';

window.vm = new Vue({
  el: '#app',
  data: {
    title: "Index",
    name: "UDON"
  },
  mounted(){
    udLoading123.open()
    console.log(getRandom());
    udAxios.get('https://udon8327.synology.me/ajax/success.php')
      .then(res => console.log(res))
  },
  methods: {
    toUrl(url) {
      location.href = url;
    },
  },
});
