// 開啟 HMR 支持 (全部模組)
// if (module.hot) {
//   module.hot.accept();
// }

import '@/sass/main.sass'
import '@/sass/index.sass'
import '@/utils/ud-components.sass'

import Vue from 'vue'
import { udAxios } from '@/utils/ud-axios.js'
import '@/utils/ud-components.js'
import { getRandom } from '@/utils/ud-tools.js'
import { udLoading, udAlert } from '../utils/ud-components';

window.vm = new Vue({
  el: '#app',
  data: {
    title: "Index",
    name: "UDON"
  },
  mounted(){
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
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
