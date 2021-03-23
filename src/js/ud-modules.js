/*
==================== TODO ====================
寫說明文件
彈窗組件支援自定義top高度
彈窗組件支援自定義body固定
彈窗組件支援多重彈窗
彈窗組件支援多種動畫效果
表單組件樣式重整
表單組件支援disabled
編寫表格ud-table
編寫分頁ud-pagination
Alert,Confirm,Modal統一修改樣式

==================== Vue組件庫(Basic)目錄 ====================
Form
  Button 按鈕 -----> ud-button
  Input 輸入框 -----> ud-input
  Textarea 多行輸入框 -----> ud-textarea
  Radio 單選框 -----> ud-radio
  Checkbox 多選框 -----> ud-checkbox
  Select 下拉框 -----> ud-select
  SelectMultiple 下拉多選框 -----> ud-select-multiple
  SelectLink 連動下拉框 -----> ud-select-link
  SelectDate 日期連動下拉框 -----> ud-select-date
  SelectTwzip 台灣行政區連動下拉框 -----> ud-select-twzip
  Switch 開關 -----> ud-switch
  DatePicker 日期選擇器 -----> ud-date-picker
  Captcha 圖形驗證碼 -----> ud-captcha
  FormItem 表單驗證容器 -----> ud-form-item
  Form 表單驗證 -----> ud-form

Layout
  Flex 通用排版容器 -----> ud-flex
  Arrow CSS箭頭 -----> ud-arrow
  Collapse 摺疊容器 -----> ud-collapse
  Ratio 等比例自適應容器 -----> ud-ratio

Notice
  Alert 警告彈窗 -----> ud-alert
  Confirm 確認彈窗 -----> ud-confirm
  AlertConfirm 警告確認彈窗(調用式) -----> ud-alertConfirm
  Modal 通用彈窗 -----> ud-modal
  Loading 載入中 -----> ud-loading

Tools
  Html 用戶自定義訊息 -----> ud-html
  Backtop 回到頂部 -----> ud-backtop
  Ellipsis 文字省略 -----> ud-ellipsis
  Phone 撥打電話 -----> ud-phone
  Countdown 倒數計時 -----> ud-countdown
  QrCode 取得QRcode圖片 -----> ud-qrcode

==================== 工具函數目錄 ====================
String
  將字串內換行符\n轉為<br> -----> nl2br
  取得隨機十六進制顏色 -----> randomHexColorCode
  取得隨機字串 -----> randomString
  金錢加入千分位逗號 -----> formatNumber
  複製文字至剪貼簿 -----> copyTextToClipboard
  轉義HTML(防XSS攻擊) -----> escapeHTML
  駝峰式轉換 -----> convertCamelCase
  將字串內URL轉為超連結 -----> replaceURLToLink

Number
  取得範圍內隨機整數 -----> getRandom
  四捨五入到指定位數 -----> round

Image
  預載單張圖片 -----> imageLoaded
  預載多張圖片 -----> imageAllLoaded

Array
  陣列是否有重複值(不分型別) -----> isRepeat
  移除陣列中的重複元素 -----> uniqArray
  二維陣列扁平化(第二參數可指定深度) -----> flatArray
  返回陣列中某值的所有索引 -----> indexOfAll
  兩陣列的交集 -----> intersection
  洗牌陣列 -----> shuffle

Object
  精準型別判斷 -----> typeOf
  過濾物件鍵值 -----> filterObj
  刪除物件鍵值 -----> deleteObj
  深拷貝(簡易版) -----> deepCloneSimple
  深拷貝(完全版) -----> deepClone

Time
  檢查是否為閏年 -----> isLeapYear
  檢查日期是否存在 -----> isExistDate
  返回當前24小時制時間的字符串 -----> getColonTimeFromDate
  返回日期間的天數 -----> getDaysDiffBetweenDates
  檢查是否在某日期後 -----> isAfterDate
  檢查是否在某日期前 -----> isBeforeDate
  返回幾天前後的日期 -----> getDiffDate
  時間個性化輸出功能 -----> timeFormat
  隨機數時間戳 -----> uniqueId
  解析時間 -----> parseTime
  時間人性化 -----> formatTime
  時間格式化 -----> Date.prototype.format

DOM
  滾動至指定位置 -----> scrollTo
  取得頁面當前捲動高度(寬度) -----> getPageScroll
  取得頁面總高度(寬度) -----> getPage
  取得頁面可視高度(寬度) -----> getPageView

Verify
  各式驗證函式 -----> isRegex
  精準數字驗證 -----> isNumber
  未填入驗證 -----> isEmpty

Browser
  動態加載css文件 -----> loadStyle
  取得LocalStorage的值 -----> getLocalStorage
  設定LocalStorage的值 -----> setLocalStorage
  取得Cookie的值 -----> getCookie
  設置cookie值 -----> setCookie
  動態載入插件 -----> insertPlugin
  函式防抖 -----> debounce
  函式節流 -----> throttle

Web
  查詢網址所帶參數 -----> queryString
  解析網址 -----> parseUrl
  HTTP跳轉HTTPS -----> httpsRedirect
  檢驗URL連接是否有效 -----> getUrlState
  網址跳轉 -----> toUrl
  跳頁重整 -----> jumpReload
  Axios封裝 -----> axiosPackage
  CDN備援 -----> cdnBackup

Device
  判斷是否移動裝置 -----> isMobileUserAgent
  判斷是否蘋果移動裝置 -----> isAppleMobileDevice
  判斷是否安卓移動裝置 -----> isAndroidMobileDevice

Animation
  RAF通用動畫函式 -----> animate
*/

// 初始化執行
// cdnBackup();
// Vue.use(VueFormulate);
jumpReload();


//-----------------------Form-----------------------
// Button 按鈕
Vue.component('ud-button', {
  name: 'UdButton',
  template: `
    <button
      class="ud-button"
      @click="handleClick"
      :disabled="disabled || loading"
      :type="type"
      :class="{
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      }"
      :style="{
        'border-radius': radius,
        'width': width,
        'min-width': minWidth,
        'max-width': maxWidth,
      }"
    >
      <i class="fas fa-spinner fa-pulse" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span><slot>按鈕</slot></span>
    </button>
  `,
  props: {
    icon: { default: '' }, // icon
    type: { default: 'button' }, // 原始類型 (button, submit, reset)
    radius: { default: '5px' }, // 圓角
    width: { default: '100%' }, // 寬度
    minWidth: { default: '0px' }, // 最小寬度
    maxWidth: { default: '100%' }, // 最大寬度
    loading: Boolean, // 載入中
    disabled: Boolean, // 禁止點擊
    plain: Boolean, // 線條化
    round: Boolean, // 圓角
    circle: Boolean, // 圓型
    throttle: Boolean // 函式節流
  },
  methods: {
    handleClick(evt) {
      if(this.throttle) return;
      this.$emit('click', evt);
    }
  },
  mounted() {
    if(!this.throttle) return;
    this.$el.addEventListener('click', throttle(
        (evt) => {this.$emit('click', evt)}
      )
    );
  },
})

// Input 輸入框
Vue.component('ud-input', {
  name: 'UdInput',
  inheritAttrs: false,
  template: `
    <div class="ud-input">
      <input
        v-model="modelValue"
        v-bind="$attrs"
        @input="onInput"
        ref="input"
      >
    </div>
  `,
  props: {
    value: null,
    center: Boolean // 是否置中
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
  },
  mounted() {
    if(this.center) this.$refs.input.style.textAlign = 'center';
  },
  methods: {
    onInput: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    },
    focus() {
      this.$refs.input.focus();
    }
  },
})

// Textarea 多行輸入框
Vue.component('ud-textarea', {
  name: "UdTextarea",
  inheritAttrs: false,
  template: `
    <div class="ud-textarea">
      <textarea
        type="text"
        v-model="modelValue"
        v-bind="$attrs"
        @input="onInput"
      >
      </textarea>
    </div>
  `,
  props: {
    value: null,
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onInput: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
})

// Radio 單選框
Vue.component('ud-radio', {
  name: "UdRadio",
  inheritAttrs: false,
  template: `
    <div class="ud-radio" :class="{'is-flex': flex}">

      <label v-if="option">
        <input
          type="radio"
          v-model="modelValue"
          :value="option"
          v-bind="$attrs"
          @change="onChange"
          ref="radio"
        >
        <div class="radio-decorator"
          :style="{'border-radius': radius}"
        ></div>
        <p v-if="combine">{{ option }}</p>
      </label>

      <label v-for="option in options" :key="option.value" v-if="options">
        <input
          type="radio"
          v-model="modelValue"
          :value="option.value"
          v-bind="$attrs"
          @change="onChange"
          ref="radio"
        >
        <div class="radio-decorator"
          :style="{'border-radius': radius}"
        ></div>
        <p>{{ combine ? option.value : option.label }}</p>
      </label>

    </div>
  `,
  props: {
    value: null, // value值
    option: null, // 單選項[string, number]
    options: null, // 多選項[object]
    flex: Boolean, // 是否並排
    radius: { default: "1em" }, // 圓角
    combine: Boolean // 使用value做為label
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onChange: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
      this.$emit('change', this.$refs.radio.value);
    }
  },
})

// Checkbox 多選框
Vue.component('ud-checkbox', {
  name: "UdCheckbox",
  inheritAttrs: false,
  template: `
    <div class="ud-checkbox" :class="{'is-flex': flex}">
      <template v-if="option">
        <label>
          <input
            type="checkbox"
            v-model="modelValue"
            :value="option"
            v-bind="$attrs"
            @change="onChange"
            ref="checkbox"
          >
          <div class="checkbox-decorator"></div>
          <p v-if="!noLabel"><slot>{{ options }}</slot></p>
        </label>
      </template>
      <template v-else>
        <label v-for="option in options" :key="option.value">
          <input
            type="checkbox"
            :value="option.value"
            v-model="modelValue"
            v-bind="$attrs"
            @change="onChange"
            ref="checkbox"
          >
          <div class="checkbox-decorator"></div>
          <p v-if="!noLabel">{{ combine ? option.value : option.label }}</p>
        </label>
      </template>
    </div>
  `,
  props: {
    value: null, // value值 單個時綁定Boolean 多個時綁定Array
    option: null, // 單選項
    options: null, // 多選項
    flex: Boolean, // 是否並排
    combine: Boolean, // 使用value做為label
    noLabel: Boolean, // 是否有label
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onChange: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
      this.$emit('change', this.$refs.checkbox.value);
    }
  },
})

// Select 下拉框
Vue.component('ud-select', {
  name: "UdSelect",
  inheritAttrs: false,
  template: `
    <div class="ud-select">
      <select 
        v-model="modelValue" 
        :data-placeholder-selected="modelValue.length === 0"
        v-bind="$attrs"
        @change="onChange"
        ref="select"
      >
        <option value="" disabled selected>{{ placeholder }}</option>
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ combine ? option.value : option.label }}
        </option>
      </select>
    </div>
  `,
  props: {
    value: null, // value值
    options: null, // 選項
    placeholder: { default: "請選擇一項" }, // 取代文字
    combine: Boolean, // 使用value做為label
    center: Boolean, // 是否置中
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
  },
  mounted() {
    if(this.center) this.centerSelect();
    window.addEventListener("resize", this.centerSelect);
  },
  destroyed() {
    window.removeEventListener("resize", this.centerSelect);
  },
  methods: {
    onChange() {
      if(this.center) this.centerSelect();
      this.$parent.$emit('validate'); // 通知FormItem校驗
      this.$emit('change', this.$refs.select.value);
    },
    getTextWidth(text, target) {
      let el = document.createElement('span');
      let fontSize = window.getComputedStyle(target).fontSize || '14px';
      el.textContent = text;
      el.style.display = 'inline-block';
      el.style.fontSize = fontSize;
      document.body.appendChild(el);
      let elmWidth = el.offsetWidth;
      el.remove();
      return elmWidth;
    },
    centerSelect() {
      let el = this.$refs.select;
      let text = "";
      el.value ? text = this.options.find(item => item.value == el.value).label : text = this.placeholder;
      let emptySpace = el.offsetWidth - this.getTextWidth(text, el);
      el.style.textIndent = `${ ( emptySpace / 2 ) - 10 }px`;
    }
  },
})

// SelectMultiple 下拉複選框 (依賴：element-ui)
Vue.component('ud-select-multiple', {
  name: "UdSelectMultiple",
  inheritAttrs: false,
  template: `
    <div class="ud-select-multiple">
      <el-select
        v-model="modelValue"
        multiple
        collapse-tags
        :placeholder="placeholder"
        ref="select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  `,
  props: {
    value: null, // value值
    options: null, // 選項
    placeholder: { default: "請選擇一項" }, // 取代文字
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
  },
  methods: {
    onChange() {
      this.$parent.$emit('validate'); // 通知FormItem校驗
      this.$emit('change', this.$refs.select.value);
    },
  },
})

// SelectLink 連動下拉框
Vue.component('ud-select-link', {
  name: "UdSelectLink",
  template: `
    <div class="ud-select-link" :class="{'is-flex': flex}">
      <ud-select v-model="modelValue[0]" :options="firstArr" :placeholder="placeholder[0]" :combine="combine"></ud-select>
      <slot></slot>
      <ud-select v-model="modelValue[1]" :options="secondArr" :placeholder="placeholder[1]" :combine="combine"></ud-select>
      <slot name="second"></slot>
      <ud-select v-model="modelValue[2]" :options="thirdArr" :placeholder="placeholder[2]" :combine="combine" v-if="third"></ud-select>
      <slot name="third"></slot>
    </div>
  `,
  props: {
    value: null, // value值
    options: null, // 選項 [Array]
    placeholder: { // placeholder值 [Array]
      default: () => {
        return ["請選擇一項", "請選擇一項", "請選擇一項"];
      }
    },
    third: Boolean, // 是否有第三項
    flex: Boolean, // 是否並排
    combine: Boolean, // 是否label直接使用value值
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
    firstValue: function(){
      return this.modelValue[0];
    },
    secondValue: function(){
      return this.modelValue[1];
    },
    thirdValue: function(){
      return this.modelValue[2];
    },
    firstArr: function(){
      let temp = this.options;
      return temp;
    },
    secondArr: function(){
      let temp = [];
      if(this.modelValue[0]){
        temp = this.options.find(option => option.value === this.modelValue[0]).children;
      }
      return temp;
    },
    thirdArr: function(){
      let temp = [];
      if(this.modelValue[1]){
        temp = this.secondArr.find(option => option.value === this.modelValue[1]).children;
      }
      return temp;
    },
  },
  watch: {
    firstValue: function(){
      this.modelValue.splice(1, 1, "");
    },
    secondValue: function(){
      if(this.third) this.modelValue.splice(2, 1, "");
    },
  },
  mounted() {
    this.$on('validate', () => {
      this.$nextTick(() => {
        this.$parent.$emit('validate'); // 通知FormItem校驗
      })
    })
  },
})

// SelectDate 日期連動下拉框
Vue.component('ud-select-date', {
  name: "UdSelectDate",
  template: `
    <div class="ud-select-date" :class="{'is-flex': flex}">
      <ud-select v-model="modelValue[0]" :options="firstArr" :placeholder="placeholder[0]" combine></ud-select>
      <slot></slot>
      <ud-select v-model="modelValue[1]" :options="secondArr" :placeholder="placeholder[1]" combine></ud-select>
      <slot name="second"></slot>
      <ud-select v-model="modelValue[2]" :options="thirdArr" :placeholder="placeholder[2]" combine v-if="third"></ud-select>
      <slot name="third"></slot>
    </div>
  `,
  props: {
    value: null, // value值
    placeholder: { // placeholder值 [Array]
      default: () => {
        return ["年", "月", "日"];
      }
    },
    third: Boolean, // 是否有第三項
    flex: Boolean, // 是否並排
    roc: Boolean // 是否為民國年
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
    firstValue: function(){
      return this.modelValue[0];
    },
    secondValue: function(){
      return this.modelValue[1];
    },
    thirdValue: function(){
      return this.modelValue[2];
    },
    firstArr: function(){
      let temp = [];
      let time = new Date();
      let year = time.getFullYear();
      if(this.roc) year = year - 1911;
      let yearAfter = year - 120;
      if(this.roc && yearAfter <= 0) yearAfter = 1;
      for(let i = year; i >= yearAfter; i--){
        temp.push({value: i});
      }
      return temp;
    },
    secondArr: function(){
      let temp = [];
      if(this.firstValue){
        for(let i = 1; i <= 12; i++){
          temp.push({value: i});
        }
      }
      return temp;
    },
    thirdArr: function(){
      let temp = [];
      if(this.firstValue && this.secondValue){
        let year = parseInt(this.firstValue);
        if(this.roc) year = year + 1911;
        let date = new Date(year, this.secondValue, 0).getDate();
        for(let i = 1; i <= date; i++){
          temp.push({value: i});
        }
      }
      return temp;
    },
  },
  watch: {
    firstValue: function(){
      this.modelValue.splice(1, 1, "");
    },
    secondValue: function(){
      if(this.third) this.modelValue.splice(2, 1, "");
    },
  },
  mounted() {
    this.$on('validate', () => {
      this.$nextTick(() => {
        this.$parent.$emit('validate'); // 通知FormItem校驗
      })
    })
  },
})

// SelectTwzip 台灣行政區連動下拉框
Vue.component('ud-select-twzip', {
  name: "UdSelectTwzip",
  template: `
    <div class="ud-select-twzip" :class="{'is-flex': flex}">
      <ud-select v-model="modelValue[0]" :options="firstArr" :placeholder="placeholder[0]" :combine="combine"></ud-select>
      <slot></slot>
      <ud-select v-model="modelValue[1]" :options="secondArr" :placeholder="placeholder[1]" :combine="combine"></ud-select>
      <slot name="second"></slot>
    </div>
  `,
  props: {
    value: null, // value值
    placeholder: { // placeholder值 [Array]
      default: () => {
        return ["請選擇縣市", "請選擇行政區"];
      }
    },
    flex: Boolean, // 是否並排
    combine: Boolean, // 是否label直接使用value值
  },
  data() {
    return {
      options: [
        { 
          label: "基隆市", value: "01",
          children: [{ label: "仁愛區", value: "200" },{ label: "信義區", value: "201" },{ label: "中正區", value: "202" },{ label: "中山區", value: "203" },{ label: "安樂區", value: "204" },{ label: "暖暖區", value: "205" },{ label: "七堵區", value: "206" }]
        },
        { 
          label: "台北市", value: "02", 
          children: [{ label: "中正區", value: "100" },{ label: "大同區", value: "103" },{ label: "中山區", value: "104" },{ label: "松山區", value: "105" },{ label: "大安區", value: "106" },{ label: "萬華區", value: "108" },{ label: "信義區", value: "110" },
          { label: "士林區", value: "111" },{ label: "北投區", value: "112" },{ label: "內湖區", value: "114" },{ label: "南港區", value: "115" },{ label: "文山區", value: "116" }]
        },
        { 
          label: "新北市", value: "03", 
          children: [{ label: "萬里區", value: "207" },{ label: "金山區", value: "208" },{ label: "板橋區", value: "220" },{ label: "汐止區", value: "221" },{ label: "深坑區", value: "222" },{ label: "石碇區", value: "223" },{ label: "瑞芳區", value: "224" },
          { label: "平溪區", value: "226" },{ label: "雙溪區", value: "227" },{ label: "貢寮區", value: "228" },{ label: "新店區", value: "231" },{ label: "坪林區", value: "232" },{ label: "烏來區", value: "233" },{ label: "永和區", value: "234" },
          { label: "中和區", value: "235" },{ label: "土城區", value: "236" },{ label: "三峽區", value: "237" },{ label: "樹林區", value: "238" },{ label: "鶯歌區", value: "239" },{ label: "三重區", value: "241" },{ label: "新莊區", value: "242" },
          { label: "泰山區", value: "243" },{ label: "林口區", value: "244" },{ label: "蘆洲區", value: "247" },{ label: "五股區", value: "248" },{ label: "八里區", value: "249" },{ label: "淡水區", value: "251" },{ label: "三芝區", value: "252" },
          { label: "石門區", value: "253" }]
        },
        { 
          label: "桃園縣", value: "04",
          children: [{ label: "中壢市", value: "320" },{ label: "平鎮市", value: "324" },{ label: "龍潭鄉", value: "325" },{ label: "楊梅市", value: "326" },{ label: "新屋鄉", value: "327" },{ label: "觀音鄉", value: "328" },{ label: "桃園市", value: "330" },
          { label: "龜山鄉", value: "333" },{ label: "八德市", value: "334" },{ label: "大溪鎮", value: "335" },{ label: "復興鄉", value: "336" },{ label: "大園鄉", value: "337" },{ label: "蘆竹鄉", value: "338" }]
        },
        {
          label: "新竹市", value: "05",
          children: [{ label: "東區", value: "300" },{ label: "北區", value: "300" },{ label: "香山區", value: "300" }]
        },
        {
          label: "新竹縣", value: "06",
          children: [{ label: "竹北市", value: "302" },{ label: "湖口鄉", value: "303" },{ label: "新豐鄉", value: "304" },{ label: "新埔鎮", value: "305" },{ label: "關西鎮", value: "306" },{ label: "芎林鄉", value: "307" },{ label: "寶山鄉", value: "308" },
          { label: "竹東鎮", value: "310" },{ label: "五峰鄉", value: "311" },{ label: "橫山鄉", value: "312" },{ label: "尖石鄉", value: "313" },{ label: "北埔鄉", value: "314" },{ label: "峨眉鄉", value: "315" }]
        },
        {
          label: "苗栗縣", value: "07",
          children: [{ label: "竹南鎮", value: "350" },{ label: "頭份鎮", value: "351" },{ label: "三灣鄉", value: "352" },{ label: "南庄鄉", value: "353" },{ label: "獅潭鄉", value: "354" },{ label: "後龍鎮", value: "356" },{ label: "通霄鎮", value: "357" },
          { label: "苑裡鎮", value: "358" },{ label: "苗栗市", value: "360" },{ label: "造橋鄉", value: "361" },{ label: "頭屋鄉", value: "362" },{ label: "公館鄉", value: "363" },{ label: "大湖鄉", value: "364" },{ label: "泰安鄉", value: "365" },
          { label: "銅鑼鄉", value: "366" },{ label: "三義鄉", value: "367" },{ label: "西湖鄉", value: "368" },{ label: "卓蘭鎮", value: "369" }]
        },
        {
          label: "台中市", value: "08",
          children: [{ label: "中區", value: "400" },{ label: "東區", value: "401" },{ label: "南區", value: "402" },{ label: "西區", value: "403" },{ label: "北區", value: "404" },{ label: "北屯區", value: "406" },{ label: "西屯區", value: "407" },
          { label: "南屯區", value: "408" },{ label: "太平區", value: "411" },{ label: "大里區", value: "412" },{ label: "霧峰區", value: "413" },{ label: "烏日區", value: "414" },{ label: "豐原區", value: "420" },{ label: "后里區", value: "421" },
          { label: "石岡區", value: "422" },{ label: "東勢區", value: "423" },{ label: "和平區", value: "424" },{ label: "新社區", value: "426" },{ label: "潭子區", value: "427" },{ label: "大雅區", value: "428" },{ label: "神岡區", value: "429" },
          { label: "大肚區", value: "432" },{ label: "沙鹿區", value: "433" },{ label: "龍井區", value: "434" },{ label: "梧棲區", value: "435" },{ label: "清水區", value: "436" },{ label: "大甲區", value: "437" },{ label: "外埔區", value: "438" },
          { label: "大安區", value: "439" }]
        },
        {
          label: "彰化縣", value: "09",
          children: [{ label: "彰化市", value: "500" },{ label: "芬園鄉", value: "502" },{ label: "花壇鄉", value: "503" },{ label: "秀水鄉", value: "504" },{ label: "鹿港鎮", value: "505" },{ label: "福興鄉", value: "506" },{ label: "線西鄉", value: "507" },
          { label: "和美鎮", value: "508" },{ label: "伸港鄉", value: "509" },{ label: "員林鎮", value: "510" },{ label: "社頭鄉", value: "511" },{ label: "永靖鄉", value: "512" },{ label: "埔心鄉", value: "513" },{ label: "溪湖鎮", value: "514" },
          { label: "大村鄉", value: "515" },{ label: "埔鹽鄉", value: "516" },{ label: "田中鎮", value: "520" },{ label: "北斗鎮", value: "521" },{ label: "田尾鄉", value: "522" },{ label: "埤頭鄉", value: "523" },{ label: "溪州鄉", value: "524" },
          { label: "竹塘鄉", value: "525" },{ label: "二林鎮", value: "526" },{ label: "大城鄉", value: "527" },{ label: "芳苑鄉", value: "528" },{ label: "二水鄉", value: "530" }]
        },
        {
          label: "南投縣", value: "10",
          children: [{ label: "南投市", value: "540" },{ label: "中寮鄉", value: "541" },{ label: "草屯鎮", value: "542" },{ label: "國姓鄉", value: "544" },{ label: "埔里鎮", value: "545" },{ label: "仁愛鄉", value: "546" },{ label: "名間鄉", value: "551" },
          { label: "集集鎮", value: "552" },{ label: "水里鄉", value: "553" },{ label: "魚池鄉", value: "555" },{ label: "信義鄉", value: "556" },{ label: "竹山鎮", value: "557" },{ label: "鹿谷鄉", value: "558" }]
        },
        {
          label: "雲林縣", value: "11",
          children: [{ label: "斗南鎮", value: "630" },{ label: "大埤鄉", value: "631" },{ label: "虎尾鎮", value: "632" },{ label: "土庫鎮", value: "633" },{ label: "褒忠鄉", value: "634" },{ label: "東勢鄉", value: "635" },{ label: "台西鄉", value: "636" },
          { label: "崙背鄉", value: "637" },{ label: "麥寮鄉", value: "638" },{ label: "斗六市", value: "640" },{ label: "林內鄉", value: "643" },{ label: "古坑鄉", value: "646" },{ label: "莿桐鄉", value: "647" },{ label: "西螺鎮", value: "648" },
          { label: "二崙鄉", value: "649" },{ label: "北港鎮", value: "651" },{ label: "水林鄉", value: "652" },{ label: "口湖鄉", value: "653" },{ label: "四湖鄉", value: "654" },{ label: "元長鄉", value: "655" }]
        },
        {
          label: "嘉義市", value: "12",
          children: [{ label: "東區", value: "600" },{ label: "西區", value: "600" }]
        },
        {
          label: "嘉義縣", value: "13",
          children: [{ label: "番路鄉", value: "602" },{ label: "梅山鄉", value: "603" },{ label: "竹崎鄉", value: "604" },{ label: "阿里山鄉", value: "605" },{ label: "中埔鄉", value: "606" },{ label: "大埔鄉", value: "607" },{ label: "水上鄉", value: "608" },
          { label: "鹿草鄉", value: "611" },{ label: "太保市", value: "612" },{ label: "朴子市", value: "613" },{ label: "東石鄉", value: "614" },{ label: "六腳鄉", value: "615" },{ label: "新港鄉", value: "616" },{ label: "民雄鄉", value: "621" },
          { label: "大林鎮", value: "622" },{ label: "溪口鄉", value: "623" },{ label: "義竹鄉", value: "624" },{ label: "布袋鎮", value: "625" }]
        },
        {
          label: "台南市", value: "14",
          children: [{ label: "中西區", value: "700" },{ label: "東區", value: "701" },{ label: "南區", value: "702" },{ label: "北區", value: "704" },{ label: "安平區", value: "708" },{ label: "安南區", value: "709" },{ label: "永康區", value: "710" },
          { label: "歸仁區", value: "711" },{ label: "新化區", value: "712" },{ label: "左鎮區", value: "713" },{ label: "玉井區", value: "714" },{ label: "楠西區", value: "715" },{ label: "南化區", value: "716" },{ label: "仁德區", value: "717" },
          { label: "關廟區", value: "718" },{ label: "龍崎區", value: "719" },{ label: "官田區", value: "720" },{ label: "麻豆區", value: "721" },{ label: "佳里區", value: "722" },{ label: "西港區", value: "723" },{ label: "七股區", value: "724" },
          { label: "將軍區", value: "725" },{ label: "學甲區", value: "726" },{ label: "北門區", value: "727" },{ label: "新營區", value: "730" },{ label: "後壁區", value: "731" },{ label: "白河區", value: "732" },{ label: "東山區", value: "733" },
          { label: "六甲區", value: "734" },{ label: "下營區", value: "735" },{ label: "柳營區", value: "736" },{ label: "鹽水區", value: "737" },{ label: "善化區", value: "741" },{ label: "大內區", value: "742" },{ label: "山上區", value: "743" },
          { label: "新市區", value: "744" },{ label: "安定區", value: "745" }]
        },
        {
          label: "高雄市", value: "15",
          children: [{ label: "新興區", value: "800" },{ label: "前金區", value: "801" },{ label: "苓雅區", value: "802" },{ label: "鹽埕區", value: "803" },{ label: "鼓山區", value: "804" },{ label: "旗津區", value: "805" },{ label: "前鎮區", value: "806" },
          { label: "三民區", value: "807" },{ label: "楠梓區", value: "811" },{ label: "小港區", value: "812" },{ label: "左營區", value: "813" },{ label: "仁武區", value: "814" },{ label: "大社區", value: "815" },{ label: "岡山區", value: "820" },
          { label: "路竹區", value: "821" },{ label: "阿蓮區", value: "822" },{ label: "田寮區", value: "823" },{ label: "燕巢區", value: "824" },{ label: "橋頭區", value: "825" },{ label: "梓官區", value: "826" },{ label: "彌陀區", value: "827" },
          { label: "永安區", value: "828" },{ label: "湖內區", value: "829" },{ label: "鳳山區", value: "830" },{ label: "大寮區", value: "831" },{ label: "林園區", value: "832" },{ label: "鳥松區", value: "833" },{ label: "大樹區", value: "840" },
          { label: "旗山區", value: "842" },{ label: "美濃區", value: "843" },{ label: "六龜區", value: "844" },{ label: "內門區", value: "845" },{ label: "杉林區", value: "846" },{ label: "甲仙區", value: "847" },{ label: "桃源區", value: "848" },
          { label: "那瑪夏區", value: "849" },{ label: "茂林區", value: "851" },{ label: "茄萣區", value: "852" }]
        },
        {
          label: "屏東縣", value: "16",
          children: [{ label: "屏東市", value: "900" },{ label: "三地門鄉", value: "901" },{ label: "霧台鄉", value: "902" },{ label: "瑪家鄉", value: "903" },{ label: "九如鄉", value: "904" },{ label: "里港鄉", value: "905" },{ label: "高樹鄉", value: "906" },
          { label: "鹽埔鄉", value: "907" },{ label: "長治鄉", value: "908" },{ label: "麟洛鄉", value: "909" },{ label: "竹田鄉", value: "911" },{ label: "內埔鄉", value: "912" },{ label: "萬丹鄉", value: "913" },{ label: "潮州鎮", value: "920" },
          { label: "泰武鄉", value: "921" },{ label: "來義鄉", value: "922" },{ label: "萬巒鄉", value: "923" },{ label: "崁頂鄉", value: "924" },{ label: "新埤鄉", value: "925" },{ label: "南州鄉", value: "926" },{ label: "林邊鄉", value: "927" },
          { label: "東港鎮", value: "928" },{ label: "琉球鄉", value: "929" },{ label: "佳冬鄉", value: "931" },{ label: "新園鄉", value: "932" },{ label: "枋寮鄉", value: "940" },{ label: "枋山鄉", value: "941" },{ label: "春日鄉", value: "942" },
          { label: "獅子鄉", value: "943" },{ label: "車城鄉", value: "944" },{ label: "牡丹鄉", value: "945" },{ label: "恆春鎮", value: "946" },{ label: "滿州鄉", value: "947" }]
        },
        {
          label: "台東縣", value: "17",
          children: [{ label: "台東市", value: "950" },{ label: "綠島鄉", value: "951" },{ label: "蘭嶼鄉", value: "952" },{ label: "延平鄉", value: "953" },{ label: "卑南鄉", value: "954" },{ label: "鹿野鄉", value: "955" },{ label: "關山鎮", value: "956" },
          { label: "海端鄉", value: "957" },{ label: "池上鄉", value: "958" },{ label: "東河鄉", value: "959" },{ label: "成功鎮", value: "961" },{ label: "長濱鄉", value: "962" },{ label: "太麻里鄉", value: "963" },{ label: "金峰鄉", value: "964" },
          { label: "大武鄉", value: "965" },{ label: "達仁鄉", value: "966" }]
        },
        {
          label: "花蓮縣", value: "18",
          children: [{ label: "花蓮市", value: "970" },{ label: "新城鄉", value: "971" },{ label: "秀林鄉", value: "972" },{ label: "吉安鄉", value: "973" },{ label: "壽豐鄉", value: "974" },{ label: "鳳林鎮", value: "975" },{ label: "光復鄉", value: "976" },
          { label: "豐濱鄉", value: "977" },{ label: "瑞穗鄉", value: "978" },{ label: "萬榮鄉", value: "979" },{ label: "玉里鎮", value: "981" },{ label: "卓溪鄉", value: "982" }]
        },
        {
          label: "宜蘭縣", value: "19",
          children: [{ label: "宜蘭市", value: "260" },{ label: "頭城鎮", value: "261" },{ label: "礁溪鄉", value: "262" },{ label: "壯圍鄉", value: "263" },{ label: "員山鄉", value: "264" },{ label: "羅東鎮", value: "265" },{ label: "三星鄉", value: "266" },
          { label: "大同鄉", value: "267" },{ label: "五結鄉", value: "268" },{ label: "冬山鄉", value: "269" },{ label: "蘇澳鎮", value: "270" },{ label: "南澳鄉", value: "272" }]
        },
        {
          label: "澎湖縣", value: "20",
          children: [{ label: "馬公市", value: "880" },{ label: "西嶼鄉", value: "881" },{ label: "望安鄉", value: "882" },{ label: "七美鄉", value: "883" },{ label: "白沙鄉", value: "884" },{ label: "湖西鄉", value: "885" }]
        },
        {
          label: "金門縣", value: "21",
          children: [{ label: "金沙鎮", value: "890" },{ label: "金湖鎮", value: "891" },{ label: "金寧鄉", value: "892" },{ label: "金城鎮", value: "893" },{ label: "烈嶼鄉", value: "894" },{ label: "烏坵鄉", value: "896" }]
        },
        {
          label: "連江縣", value: "22",
          children: [{ label: "南竿鄉", value: "209" },{ label: "北竿鄉", value: "210" },{ label: "莒光鄉", value: "211" },{ label: "東引鄉", value: "212" }]
        }
      ]
    }
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
    firstValue: function(){
      return this.modelValue[0];
    },
    secondValue: function(){
      return this.modelValue[1];
    },
    thirdValue: function(){
      return this.modelValue[2];
    },
    firstArr: function(){
      let temp = this.options;
      return temp;
    },
    secondArr: function(){
      let temp = [];
      if(this.modelValue[0]){
        temp = this.options.find(option => option.value === this.modelValue[0]).children;
      }
      return temp;
    },
    thirdArr: function(){
      let temp = [];
      if(this.modelValue[1]){
        temp = this.secondArr.find(option => option.value === this.modelValue[1]).children;
      }
      return temp;
    },
  },
  watch: {
    firstValue: function(){
      this.modelValue.splice(1, 1, "");
    },
    secondValue: function(){
      if(this.third) this.modelValue.splice(2, 1, "");
    },
  },
  methods: {
    onChange: function(){
      this.$parent.$emit('validate'); // 通知FormItem校驗
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.$nextTick(() => {
        this.$parent.$emit('validate'); // 通知FormItem校驗
      })
    })
  },
})

// Switch 開關
Vue.component('ud-switch', {
  name: "UdSwitch",
  inheritAttrs: false,
  template: `
    <div class="ud-switch">
      <label>
        <input 
          type="checkbox"
          v-model="modelValue"
          v-bind="$attrs"
        >
        <div class="switch-decorator">
          <div class="circle"></div>
        </div>
        <p><slot>開關</slot></p>
      </label>
    </div>
  `,
  props: {
    value: { default: false }, // value值
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
})

// DatePicker 日期選擇器 (依賴：element-ui)
Vue.component('ud-date-picker', {
  name: 'UdDatePicker',
  inheritAttrs: false,
  template: `
    <div class="ud-date-picker">
      <el-date-picker
        class="ud-select"
        v-model="modelValue"
        v-bind="$attrs"
        type="date"
        :value-format="valueFormat"
        :align="align"
        :placeholder="placeholder"
        :editable="editable"
        ref="date"
        @change="onChange"
      >
      </el-date-picker>
    </div>
  `,
  props: {
    value: null,
    center: Boolean, // 是否置中
    valueFormat: { // 時間格式化
      default: "yyyy-MM-dd"
    },
    align: { // 對齊
      default: "center"
    },
    placeholder: {
      default: "請選擇日期"
    },
    editable: {
      default: false
    }
  },
  computed: {
    modelValue: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    },
  },
  mounted() {
    if(this.center) this.centerSelect();
    window.addEventListener("resize", this.centerSelect);
  },
  destroyed() {
    window.removeEventListener("resize", this.centerSelect);
  },
  methods: {
    onChange() {
      if(this.center) this.centerSelect();
      this.$parent.$emit('validate'); // 通知FormItem校驗
      this.$emit('change', this.$refs.date.$el.querySelector('.el-input__inner').value);
    },
    getTextWidth(text, target) {
      let el = document.createElement('span');
      let fontSize = window.getComputedStyle(target).fontSize || '14px';
      el.textContent = text;
      el.style.display = 'inline-block';
      el.style.fontSize = fontSize;
      document.body.appendChild(el);
      let elmWidth = el.offsetWidth;
      el.remove();
      return elmWidth;
    },
    centerSelect() {
      let el = this.$refs.date.$el.querySelector('.el-input__inner');
      let elValue = this.$refs.date.value;
      let text = "";
      elValue ? text = elValue : text = this.placeholder;
      let emptySpace = el.offsetWidth - this.getTextWidth(text, el);
      el.style.textIndent = `${ ( emptySpace / 2 ) }px`;
    }
  },
})

// Captcha 圖形驗證碼
Vue.component('ud-captcha', {
  name: "UdCaptcha",
  template: `
    <div class="ud-captcha">
      <div class="canvas-area" ref="canvasArea">
        <canvas id="verify-canvas" width="100" height="38" style="display: none;"></canvas>
        <img ref="codeimg" @click="refresh">
        <input type="hidden" v-model="inputVal">
      </div>
      <div class="refresh" @click="refresh" v-if="!noRefresh">
        <img src="img/icon_04.png">
      </div>
    </div>
  `,
  computed: {
    inputVal: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  props: {
    value: String,
    color: { default: "#989799" }, // 字體顏色
    bgColor: { default: "#000" }, // 背景顏色
    randomColor: { default: "#777" }, // 隨機點線的顏色
    font: { default: "20px Arial" }, // 字體設定
    noLine: Boolean, // 無隨機線
    noDots: Boolean, // 無隨機點
    noRefresh: Boolean, //無刷新鈕
  },
  mounted() {
    this.drawCode();
  },
  methods: {
    drawCode() { // 繪製驗證碼
      let nums = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".split("");
      let canvas = document.getElementById('verify-canvas'); // 取得HTML端畫布
      let context = canvas.getContext("2d"); // 取得畫布2D上下文
      context.fillStyle = this.bgColor; // 畫布填充色
      context.fillRect(0, 0, canvas.width, canvas.height); // 清空畫布
      context.fillStyle = this.color; // 設置字體顏色
      context.font = this.font; // 設置字體
      let rand = new Array();
      let x = new Array();
      let y = new Array();
      for (let i = 0; i < 4; i++) {
          rand[i] = nums[Math.floor(Math.random() * nums.length)]
          x[i] = i * 16 + 16;
          y[i] = Math.random() * 20 + 15;
          context.fillText(rand[i], x[i], y[i]);
      }
      let code = rand.join('');
      this.inputVal = code;
      
      if(!this.noLine){ // 畫3條隨機線
        for (let i = 0; i < 3; i++) {
          this.drawline(canvas, context);
        }
      }
      if(!this.noDots){ // 畫30個隨機點
        for (let i = 0; i < 30; i++) {
          this.drawDot(canvas, context);
        }
      }
      this.convertCanvasToImage(canvas);
    },
    drawline: function(canvas, context) { // 隨機線
      context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的起點x座標是畫布x座標0位置 y座標是畫布高度的隨機數
      context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)); // 隨機線的終點x座標是畫布寬度 y座標是畫布高度的隨機數
      context.lineWidth = 0.5; // 隨機線寬
      context.strokeStyle = this.randomColor; // 隨機線描邊屬性
      context.stroke(); // 描邊 即起點描到終點
    },
    drawDot: function(canvas, context) { // 隨機點(所謂畫點其實就是畫1px像素的線)
      let px = Math.floor(Math.random() * canvas.width);
      let py = Math.floor(Math.random() * canvas.height);
      context.moveTo(px, py);
      context.lineTo(px + 1, py + 1);
      context.lineWidth = 0.2;
      context.strokeStyle = this.randomColor;
      context.stroke();
    },
    convertCanvasToImage: function(canvas) { // 繪製圖片
      let image = this.$refs.codeimg;
      image.src = canvas.toDataURL("image/png");
      return image;
    },
    refresh: function() { // 刷新驗證碼
      document.getElementById('verify-canvas').remove();
      this.$refs.canvasArea.insertAdjacentHTML('afterbegin', '<canvas width="100" height="38" id="verify-canvas" style="display: none;"></canvas>')
      this.drawCode();
    }
  },
})

// FormItem 表單驗證容器
Vue.component('ud-form-item', {
  name: "UdFormItem",
  template: `
    <div class="ud-form-item" :class="{'is-error': errorMessage, 'is-flex': flex}">
      <div class="ud-form-item-left" :style="{ 'flex-basis': labelWidth, 'text-align': labelAlign }">  
        <label v-if="label">{{ label }}</label>
      </div>
      <div class="ud-form-item-right">  
        <slot></slot>
        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </div>
  `,
  data() {
    return {
      errorMessage: '',
      lock: false,
    }
  },
  inject: ["form"],
  props: {
    label: { // 標籤內容
      type: String,
    },
    prop: { // 驗證名稱
      type: String
    },
    flex: { // 是否並排
      type: Boolean
    },
    labelWidth: { // 標籤寬度
      type: String,
      default: "30%"
    },
    labelAlign: { // 標籤對齊
      type: String,
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate(false);
    })
  },
  methods: {
    validate(submit) {
      if(this.form.submitLock) return;
      const rules = this.form.rules[this.prop]; // 獲取校驗規則
      const value = this.form.model[this.prop]; // 獲取數據

      for(let rule of rules){
        this.errorMessage = "";
        switch (rule.type) {
          case "required": // 必填驗證
            if(Array.isArray(value) && value.length != 0){
              if(value.some(i => i.length === 0)) this.errorMessage = rule.message || "此欄位為必填項目";
            }else if(value === null){
              this.errorMessage = rule.message || "此欄位為必填項目";
            }else{
              if(value.length === 0 || value === false) this.errorMessage = rule.message || "此欄位為必填項目";
            }
            break;
          case "name": // 姓名驗證
            if(value && !new RegExp('^[a-zA-Z0-9_\u4e00-\u9fa5]+$').test(value)) this.errorMessage = rule.message || "姓名格式有誤，不接受特殊符號";
            break;
          case "phone": // 電話驗證
            if(value && !new RegExp('^09[0-9]{8}$').test(value)) this.errorMessage = rule.message || "電話格式有誤，例: 0929123456";
            break;
          case "email": // 電子郵件驗證
            if(value && !new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$').test(value)) this.errorMessage = rule.message || "Email格式有誤，需包含'@'符號";
            break;
          case "idcard": // 身分證字號驗證
            if(value && !new RegExp('^[A-Z](1|2)[0-9]{8}$').test(value)) this.errorMessage = rule.message || "身分證字號格式有誤，例: A123456789";
            break;
          case "date": // 日期驗證
            if(value && !new RegExp('^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$').test(value)) this.errorMessage = rule.message || "日期格式有誤或不存在，例: 2020-03-04";
            break;
          case "number": // 數字驗證
            if(value && !new RegExp('^[0-9]+$').test(value)) this.errorMessage = rule.message || "格式有誤，只接受數字";
            break;
          case "url": // 網址驗證
            if(value && !new RegExp('^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$').test(value)) this.errorMessage = rule.message || "網址格式有誤，例: https://www.google.com";
            break;
          case "ip": // IP地址驗證
            if(value && !new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$').test(value)) this.errorMessage = rule.message || "IP地址格式有誤，例: 115.28.47.26";
            break;
          case "hex": // Hex色碼驗證
            if(value && !new RegExp('^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$').test(value)) this.errorMessage = rule.message || "Hex色碼格式有誤，例: #ff0000";
            break;
          case "equal": // 相等驗證
            if(rule.caseIgnore){ // 不區分大小寫
              if(value && value.toLowerCase() !== this.form.model[rule.equalTo].toLowerCase()) this.errorMessage = rule.message || "驗證碼錯誤";
            }else{ // 區分大小寫
              if(value && value !== this.form.model[rule.equalTo]) this.errorMessage = rule.message || "驗證碼錯誤";
            }
            break;
          default:
            if(!new RegExp(rule.type).test(value)) this.errorMessage = rule.message || "格式有誤，請重新輸入";
            break;
        }
        if(this.errorMessage) break;
      }

      if(!submit) return;
      return new Promise((resolve, reject) => {
        this.errorMessage ? reject() : resolve();
      })
    }
  }
})

// Form 表單驗證
Vue.component('ud-form', {
  name: "UdForm",
  inheritAttrs: false,
  template: `
    <div class="ud-form" :class="{'is-no-error-msg': noErrorMsg}">
      <form v-bind="$attrs">
        <slot></slot>
      </form>
    </div>
  `,
  provide() {
    return {
      form: this  // 傳遞Form實例给後代，比如FormItem用來校驗
    }
  },
  data() {
    return {
      submitLock: true
    }
  },
  props: {
    model: { // 驗證資料
      type: Object,
      required: true
    },
    rules: { // 驗證規則
      type: Object
    },
    noErrorMsg: {
      type: Boolean // 有無錯誤提示
    }
  },
  methods: {
    validate(successCb = () => {console.log('驗證成功')}, failedCb = () => {console.log('驗證失敗')}) {
      this.submitLock = false;
      const tasks = this.$children.filter(item => item.prop).map(item => item.validate(true));
      // console.log('tasks: ', tasks);
      Promise.all(tasks)
        .then(() => successCb())
        .catch(() => failedCb())
    }
  }
})

//-----------------------Layout-----------------------
// Flex 通用排版容器
Vue.component('ud-flex', {
  name: "UdFlex",
  template: `
    <div class="ud-flex">
      <slot></slot>
    </div>
  `,
  props: {

  },
})

// Arrow CSS箭頭
Vue.component('ud-arrow', {
  template: `
    <i 
      class="ud-arrow"
      :class=[direction]
      :style="{
        'border-color': bdColor,
        'border-width': '0 ' + bdWidth + 'px ' + bdWidth + 'px 0',
        padding: padding + 'px'
      }">
    </i>
  `,
  props: {
    bdColor: { default: "#333" }, // 顏色
    bdWidth: { default: "3" }, // 寬度
    padding: { default: "3" }, // 大小
    direction: { default: "right" } //方向
  }
})

// Collapse 摺疊容器
Vue.component('ud-collapse', {
  name: "UdCollapse",
  template: `
    <div class="ud-collapse" :style="{'transition-duration': durationSecond}">
      <div class="ud-collapse-wrapper">
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    value: {
      default: false
    },
    duration: {
      default: 0.2
    }
  },
  computed: {
    durationSecond: function(){
      return `${this.duration}s`
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(){
        this.$nextTick(() => {
          this.collapse();
        })
      }
    }
  },
  methods: {
    collapse: function(){
      let el = this.$el;
      if (this.value) {
        el.style.height = el.querySelector('.ud-collapse-wrapper').clientHeight + "px";
      } else {
        el.style.height = 0;
      }
    }
  },
})

// Ratio 等比例自適應容器
Vue.component('ud-ratio', {
  template: `
    <div class="ud-ratio">
      <div class="ud-ratio-bg" :style="{
        backgroundImage: 'url(' + src + ')', 
        paddingBottom: height + '%', 
        borderRadius: radius,
        backgroundSize: bgSize
      }">
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    src: { default: "https://i.imgur.com/s3w1Sm3.jpg" }, // 背景圖片
    height: { default: 100 }, // 高度比例
    radius: { default: '0px' }, // 圓角
    bgSize: { default: "cover" } // 背景尺寸 (cover, contain, 100%...等)
  },
})


//-----------------------Notice-----------------------
// Alert 警告彈窗
Vue.component("ud-alert", {
  name: "UdAlert",
  template: `
    <transition name="fade">
      <div class="ud-alert" v-if="value" v-cloak>
        <div class="modal-wrapper" @click.self="maskCancel && $emit('input', 0)">
          <div class="modal-content">
            <div class="modal-close" v-if="hasCancel" @click="$emit('input', 0)">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header">
              <p>{{ title }}</p>
            </div>
            <div class="modal-body">
              <p>{{ message }}</p>
              <slot></slot>
            </div>
            <div class="modal-footer">
              <div class="button-area">
                <ud-button @click="$emit('input', 0)">OK</ud-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  props: {
    title: { default: "警告標題" }, // 警告標題
    message: { default: "警告訊息" }, // 警告訊息
    value: { default: false }, // 開關值
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
});

// Confirm 確認彈窗
Vue.component("ud-confirm", {
  name: "UdConfirm",
  template: `
    <transition name="fade">
      <div class="ud-confirm" v-if="value" v-cloak>
        <div class="modal-wrapper" @click.self="maskCancel && $emit('input', 0)">
          <div class="modal-content">
            <div class="modal-close" v-if="hasCancel" @click="$emit('input, 0')">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header">
              <p>{{ title }}</p>
            </div>
            <div class="modal-body">
              <p>{{ message }}</p>
              <slot></slot>
            </div>
            <div class="modal-footer">
              <div class="button-area">
                <ud-button plain @click="$emit('input', 0)">{{ cancelText }}</ud-button>
                <ud-button @click="$emit('confirm')">{{ confirmText }}</ud-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  props: {
    title: { default: "確認標題" }, // 確認標題
    message: { default: "確認訊息" }, // 確認訊息
    value: { default: false }, // 開關值
    cancelText: { default: "取消" }, // 取消鈕文字
    confirmText: { default: "確定" }, // 確定鈕文字
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
});

// AlertConfirm 警告確認彈窗(調用式) ud-alertConfirm
let UdModalExtend = Vue.extend({
  template: `
    <transition name="fade">
      <div class="ud-alert" v-if="isShow">
        <div class="modal-wrapper" @click.self="maskHandler">
          <div class="modal-content">
            <div class="modal-close" v-if="btnClose" @click="destroy">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header" v-if="title">
              <p v-html="nl2br(title)"></p>
            </div>
            <div class="modal-body">
              <p v-html="nl2br(msg)"></p>
            </div>
            <div class="modal-footer">
              <ud-flex>
                <ud-button @click="cancelHandler" plain v-if="isConfirm">{{ cancelText }}</ud-button>
                <ud-button @click="confirmHandler">{{ confirmTextAfter }}</ud-button>
              </ud-flex>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false,
      isConfirm: false,
      maskClose: false, // 遮罩關閉
      btnClose: false, // 按鈕關閉
      title: "", // 警告標題
      msg: "網路通信錯誤，請稍候再試", // 警告訊息
      cancelText: "取消", // 取消鈕文字
      cancel: () => {}, // 取消鈕動作
      confirmText: "", // 確認鈕文字
      confirm: () => {}, // 確認鈕動作
    }
  },
  computed: {
    confirmTextAfter: function(){
      if(this.confirmText) return this.confirmText;
      return this.isConfirm ? "確定" : "OK";
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    nl2br: function(val){
      return nl2br(val);
    },
    confirmHandler: function() {
      if(typeof this.confirm === 'function') this.confirm();
      this.destroy();
    },
    cancelHandler: function() {
      if(typeof this.cancel === 'function') this.cancel();
      this.destroy();
    },
    maskHandler: function() {
      if(this.maskClose) this.destroy();
    },
    destroy: function() {
      this.isShow = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 200);
    },
  },
});

Vue.prototype.udAlert = options => { // 加到vue原型方法
  let UdAlert = new UdModalExtend({
    el: document.createElement('div'),
    data() {
      return options;
    }
  })
  document.body.appendChild(UdAlert.$el);
};

Vue.prototype.udConfirm = options => { // 加到vue原型方法
  options.isConfirm = true;
  let UdConfirm = new UdModalExtend({
    el: document.createElement('div'),
    data() {
      return options;
    }
  })
  document.body.appendChild(UdConfirm.$el);
};

// Modal 通用彈窗
Vue.component("ud-modal", {
  name: "UdModal",
  template: `
    <transition name="fade">
      <div class="ud-modal" v-show="isShow" v-cloak>
        <div class="modal-wrapper" @click.self="onMaskClick">
          <div class="modal-content">
            <div class="modal-close" v-if="hasCancel" @click="isShow = 0">
              <i class="fas fa-times"></i>
            </div>
            <div class="modal-header" v-if="!$slots.default">
              <p>{{ title }}</p>
            </div>
            <div class="modal-body">
              <p v-if="!$slots.default">{{ message }}</p>
              <slot></slot>
            </div>
            <div class="modal-footer" v-if="!$slots.default">
              <div class="button-area">
                <ud-button @click="isShow = 0">OK</ud-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  props: {
    title: { default: "通用標題" }, // 通用標題
    message: { default: "通用訊息" }, // 通用訊息
    value: { default: 0 }, // 開關值
    maskCancel: Boolean, // 遮罩關閉
    hasCancel: Boolean, // 按鈕關閉
  },
  computed: {
    isShow: {
      get(){ return this.value },
      set(val){ this.$emit('input', val) }
    }
  },
  methods: {
    onMaskClick: function(){
      if(this.maskCancel) this.isShow = 0;
    }
  },
});

// Loading 載入中
Vue.component('ud-loading', {
  name: "UdLoading",
  template: `
    <transition name="loading">
      <div class="ud-loading" v-show="isShow" :class="{'theme-white': theme === 'white'}">
        <div class="modal-wrapper">
          <div class="modal-content">
            <div class="modal-header">
              <i :class="icon"></i>
            </div>
            <div class="modal-body">
              <p v-html="nl2br(msg)"></p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false
    }
  },
  props: {
    label:{ default: "載入中..." } // 載入中文字
  },
  methods: {
    nl2br: function(val){
      return nl2br(val);
    },
  },
})

// Loading 載入中(調用式) ud-loading
let UdLoadingExtend = Vue.extend({
  template: `
    <transition name="loading">
      <div class="ud-loading" v-show="isShow" :class="{'theme-white': theme === 'white'}">
        <div class="modal-wrapper">
          <div class="modal-content">
            <div class="modal-header">
              <div v-if="iconType === 'css'" class="icon-css"></div>
              <i v-else-if="iconType === 'font'" class="icon-font" :class="iconFont"></i>
              <img v-else class="icon-img" :src="iconImg">
            </div>
            <div class="modal-body">
              <p v-html="nl2br(msg)"></p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      isShow: false,
      fixed: false, // 是否固定body
      theme: "", // 戴入主題 [white]
      iconType: "css", // icon類型 [css:CSS, font:字型, img:圖片]
      iconFont: "fas fa-spinner fa-pulse", // 字型icon的class
      iconImg: "https://image.flaticon.com/icons/svg/553/553265.svg", // 圖片icon的路徑
      msg: "", // 載入訊息
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    nl2br: function(val){
      return nl2br(val);
    },
    destroy: function() {
      this.isShow = false;
      document.body.style.overflowY = 'auto';
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 200);
    },
  },
});

let UdLoading;
Vue.prototype.udLoading = { // 加至vue原型方法
  open: (options = {}) => {
    UdLoading = new UdLoadingExtend({
      el: document.createElement("div"),
      data() {
        return options;
      }
    })
    if(UdLoading.fixed) document.body.style.overflowY = 'hidden';
    document.body.appendChild(UdLoading.$el);
  },
  close: () => {
    UdLoading.destroy();
  }
};


//-----------------------Tools-----------------------
// Html 用戶自定義訊息
Vue.component('ud-html', {
  template: `
    <div class="ud-html" v-html="nl2br(text)"></div>
  `,
  props: {
    text: { default: "<h1>H1 用戶自定義訊息</h1><h2>H2 用戶自定義訊息</h2><h3>H3 用戶自定義訊息</h3><h4>H4 用戶自定義訊息</h4><h5>H5 用戶自定義訊息</h5><h6>H6 用戶自定義訊息</h6>\n<p>p 用戶自定義訊息</p><span>span 用戶自定義訊息</span>" } // 文字
  },
  methods: {
    nl2br: function(str, is_xhtml) {
      if (typeof str === 'undefined' || str === null) {
          return '';
      }
      let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
      return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    }
  }
})

// Backtop 回到頂部
Vue.component('ud-backtop', {
  name: "UdBacktop",
  template: `
    <ud-button @click="scrollToTop">回最頂</ud-button>
  `,
  methods: {
    scrollToTop: function(){
      scrollTo();
    }
  },
})

// Ellipsis 文字省略
Vue.component('ud-ellipsis', {
  name: "UdEllipsis",
  template: '<p class="ud-ellipsis" :style="{webkitLineClamp: maxLine}"><slot></slot></p>',
  props: {
    maxLine: { default: 1, } // 指定省略行數
  },
})

// Phone 撥打電話
Vue.component('ud-phone', {
  name: "UdPhone",
  template: `
    <div class="ud-phone">
      <a :href="phoneHref">
        <slot>{{ number }}</slot>
      </a>
    </div>
  `,
  props: {
    number: { default: "0912345678" } // 電話號碼
  },
  computed: {
    phoneHref: function(){
      return `tel:${this.number}`
    }
  },
})

// Countdown 倒數計時
Vue.component('ud-countdown', {
  name: "UdCountdown",
  template: `
    <span class="ud-countdown" ref="count">{{cTime}}</span>
  `,
  props: {
    time: { default: 60 }, // 時間
    delay: Boolean // 延遲
  },
  data() {
    return {
      cTime: this.time
    }
  },
  mounted() {
    if(!this.delay) this.countdown();
  },
  methods: {
    countdown: function(){
      let _this = this;
      let countdown = setInterval(function(){
        _this.cTime -= 1;
        if(_this.cTime <= 0){
          _this.$emit("timeup");
          clearInterval(countdown);
        }
      }, 1000);
    },
    reset: function(){
      this.cTime = 10;
      this.countdown();
    }
  },
})

// QrCode 取得QRcode圖片
Vue.component('ud-qrcode', {
  template: `
    <div class="ud-qrcode">
      <div v-if="!ready" class="icon-css"></div>
      <img v-show="ready" ref="img" :src="QrCodeSrc" :alt="url">
    </div>
  `,
  mounted() {
    this.$refs.img.onload = () => {
      this.ready = 1;
    }
  },
  data() {
    return {
      ready: 0,
    }
  },
  props: {
    url: { default: "https://www.google.com.tw/" }, // 網址
    width: { default: "300" }, // 寬度
    height: { default: "300" }, // 高度
  },
  computed: {
    QrCodeSrc: function(){
      return `http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=${this.width}x${this.height}&chl=${this.url}`
    }
  },
})


//-----------------------String-----------------------
/**
 * 將字串內換行符\n轉為<br>
 * @param  {String} val 傳入值
 * @param  {Boolean} is_xhtml 是否為xhtml
 */
function nl2br(val, is_xhtml = false) {
  if (typeof val === 'undefined' || val === null) {
      return '';
  }
  let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (val + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

/**
 * 取得隨機十六進制顏色碼
 */
function randomHexColorCode(){
  let temp = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + temp.slice(0, 6);
};

/**
 * 取得隨機字串
 * @param  {Number} length 指定字串長度
 */
function randomString(length = 10) {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let temp = "";
  for (let i = 0; i < length; i++) {
    temp += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return temp;
}

/**
 * 數字加入千分位逗號
 * 例：formatNumber(99999) -> 99,999
 * @param  {Number} val 傳入值
 */
function formatNumber(val = 0){
  let temp = val.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while(pattern.test(temp)){
    temp = temp.replace(pattern, "$1,$2");
  }
  return temp;
}

/**
 * 複製文字至剪貼簿
 * @param  {String} id 要複製文字的元素id
 */
function copyTextToClipboard(id) {
  let textRange = document.createRange();
  textRange.selectNode(document.getElementById(id));
  let sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(textRange);
  document.execCommand("copy");
  vm.udAlert({msg: '文字已複製到剪貼簿'});
}

/**
 * 轉義HTML(防XSS攻擊)
 * @param  {String} str 代入值
 * escapeHTML('<a href="#">Me & you</a>'); -> '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
 */
function escapeHTML(str){
  return str.replace(/[&<>'"]/g,tag =>({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
    }[tag] || tag)
  );
}

/**
 * 駝峰式轉換
 * @param  {String} str 代入值
 * convertCamelCase("camelCase"); -> camel-case
 */
function convertCamelCase(str = ''){
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * 將字串內URL轉為超連結
 * @param  {String} text 代入值
 */
function replaceURLToLink(text) {
  text = text.replace(URL, function (url) {
    let urlText = url;
    if (!url.match('^https?://')) url = 'http://' + url;
    return '' + urlText + '';
  });
  return text;
};

//-----------------------Number-----------------------
/**
 * 取得範圍內隨機整數
 * @param {Number} min 隨機數最小值 預設為0
 * @param {Number} max 隨機數最小值 預設為100
 */
function getRandom(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 四捨五入到指定位數
 * @param  {String} n 代入值 預設為0
 * @param  {Number} decimals 指定位數 預設為0
 * round(1.235, 2); -> 1.24
 */
function round(n = 0, decimals = 0){
  return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
}

//-----------------------Image-----------------------
/**
 * 預載單張圖片
 * @param  {String} url 圖片路徑
 * imageLoaded('imgUrl').then(...);
 */
function imageLoaded(url) {
  let img = new Image();
  img.src = url;
  return new Promise((resolve, reject) => {
    if(img.complete) {
      resolve(img);
    }else {
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
    }
  })
}

/**
 * 預載多張圖片
 * @param  {Array} arr 多張圖片路徑陣列
 * imageAllLoaded(['imgUrl1','imgUrl2']).then(...);
 */
function imageAllLoaded(arr) {
  let result = [];
  arr.forEach(item => {
    result.push(imageLoaded(item));
  });
  return new Promise((resolve, reject) => {
    Promise.all(result)
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
}

//-----------------------Array-----------------------
/**
 * 陣列是否有重複值(不分型別)
 * @param  {Array} arr 代入值
 */
function isRepeat(arr){
  let obj = {};
  for(let i in arr) {
    if(obj[arr[i]]) return true;
    obj[arr[i]] = true;
  }
  return false;
}

/**
 * 移除陣列中的重複元素
 * @param  {Array} arr 代入值
 */
function uniqArray(arr) {
  let newArr = arr.filter((el, i, arr) => arr.indexOf(el) === i);
  return newArr;
}

/**
 * 二維陣列扁平化(第二參數可指定深度)
 * @param  {Array} arr 代入值
 * @param  {Number} depth 指定深度
 * flatArray([1, [2], 3, 4]); -> [1, 2, 3, 4]
 * flatArray([1, [2, [3, [4, 5], 6], 7], 8], 2); -> [1, 2, 3, [4, 5], 6, 7, 8]
 */
function flatArray(arr, depth = 1){
  return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatArray(v, depth - 1) : v), []);
}

/**
 * 返回陣列中某值的所有索引
 * @param  {Array} arr 代入值
 * @param  {Number} val 指定值
 * indexOfAll([1, 2, 3, 1, 2, 3], 1); -> [0,3]
 * indexOfAll([1, 2, 3], 4); -> []
 */
function indexOfAll(arr, val){
  return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
}

/**
 * 兩陣列的交集
 * @param  {Array} a 陣列A
 * @param  {Array} b 陣列B
 * intersection([1, 2, 3], [4, 3, 2]); -> [2, 3]
 */
function intersection(a, b){
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

/**
 * 洗牌陣列
 * @param  {Array} a 陣列A
 * @param  {Array} b 陣列B
 * shuffle([1, 2, 3]); -> [2, 3, 1];
 */
function shuffle([...arr]){
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

//-----------------------Object-----------------------
/**
 * 精準型別判斷
 * @param  {Any} v 代入值
 */
function typeOf(v){
  return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
}

/**
 * 過濾物件鍵值
 * @param  {Object} obj 代入值
 * @param  {Array} arr 過濾值的陣列
 * filterObj(obj,["name","gender"]);
 */
function filterObj(obj, arr){
  let tempObj = JSON.parse(JSON.stringify(obj));
  for(let i in tempObj){
    if(arr.indexOf(i) === -1) delete tempObj[i];
  }
  return tempObj;
}

/**
 * 刪除物件鍵值
 * @param  {Object} obj 代入值
 * @param  {Array} arr 刪除值的陣列
 * deleteObj(test,["name","gender"]);
 */
function deleteObj(obj, arr){
  let tempObj = JSON.parse(JSON.stringify(obj));
  for(let i in tempObj){
    if(arr.indexOf(i) !== -1) delete tempObj[i];
  }
  return tempObj;
}

/**
 * 深拷貝(簡易版)
 * @param  {Object} obj 代入值
 * 無法拷貝特殊類型值與funciton
 */
function deepCloneSimple(obj){
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 深拷貝(完全版)
 * @param  {Object} obj 代入值
 */
function deepClone(obj, hash = new WeakMap()) {
  if(obj == null){
    return obj;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if(obj instanceof Error) {
    return new Error(obj);
  }
  if(typeof obj !== 'object'){
    return obj;
  }
  if(hash.get(obj)) return hash.get(obj); 
  let cloneObj = new obj.constructor;
  hash.set(obj, cloneObj);
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}

//-----------------------Time-----------------------
/**
 * 檢查是否為閏年
 * @param  {Number} year 年份
 */
function isLeapYear(year){
  return new Date(year, 1, 29).getDate() === 29;
}

/**
 * 檢查日期是否存在
 * @param  {String} dateStr 日期字串
 * @param  {String} split 分割符 預設為"-"
 * isExistDate("2020-02-29"); -> true
 * isExistDate("2019/02/29","/"); -> false
 */
function isExistDate(dateStr, split = "-") {
  let dateArr = dateStr.split(split);
  let limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let theYear = parseInt(dateArr[0]);
  let theMonth = parseInt(dateArr[1]);
  let theDay = parseInt(dateArr[2]);
  let isLeap = new Date(theYear, 1, 29).getDate() === 29; 
  if (isLeap) limitInMonth[1] = 29;
  return theDay > 0 && theDay <= limitInMonth[theMonth - 1];
}

/**
 * 返回當前24小時制時間的字符串
 * @param  {Any} date 時間物件
 * getColonTimeFromDate(new Date()); -> "08:38:00"
 */
function getColonTimeFromDate(date){
  return date.toTimeString().slice(0, 8);
}

/**
 * 返回日期間的天數
 * @param  {Any} dateInitial 開始時間物件
 * @param  {Any} dateFinal 結束時間物件
 * getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')); -> 286
 */
function getDaysDiffBetweenDates(dateInitial, dateFinal){
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}

/**
 * 檢查是否在某日期後
 * @param  {Any} dateA 時間物件A
 * @param  {Any} dateB 時間物件B
 * isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); -> true
 */
function isAfterDate(dateA, dateB){
  return dateA > dateB;
}

/**
 * 檢查是否在某日期前
 * @param  {Any} dateA 時間物件A
 * @param  {Any} dateB 時間物件B
 * isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); -> true
 */
function isBeforeDate(dateA, dateB){
  return dateA < dateB;
}

/**
 * 返回幾天前後的日期
 * @param  {Number} days 指定天數 可為負值
 * getDiffDate(1); -> "2020-07-01"
 * getDiffDate(0); -> "2020-06-30"
 * getDiffDate(-2); -> "2020-06-28"
 */
function getDiffDate(days){
  let t = new Date();
  t.setDate(t.getDate() + days);
  return t.toISOString().split('T')[0];
};

/**
 * 時間個性化輸出功能
 * @param  {Any} time 時間物件
 */
function timeFormat(time) {
  let date = new Date(time),
    curDate = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 10,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    curYear = curDate.getFullYear(),
    curHour = curDate.getHours(),
    timeStr;
  if (year < curYear) {
    timeStr = year + "年" + month + "月" + day + "日 " + hour + ":" + minute;
  } else {
    let pastTime = curDate - date,
      pastH = pastTime / 3600000;
    if (pastH > curHour) {
      timeStr = month + "月" + day + "日 " + hour + ":" + minute;
    } else if (pastH >= 1) {
      timeStr = "今天 " + hour + ":" + minute + "分";
    } else {
      let pastM = curDate.getMinutes() - minute;
      if (pastM > 1) {
        timeStr = pastM + "分鐘前";
      } else {
        timeStr = "剛剛";
      }
    }
  }
  return timeStr;
}

/**
 * 隨機數時間戳
 */
function uniqueId() {
  return (
    Number(new Date()).toString() + parseInt(10 * Math.random()) + parseInt(10 * Math.random()) + parseInt(10 * Math.random())
  );
}

/**
 * 解析時間
 * @param  {Any} time 時間物件
 * @param  {Any} cFormat 轉換格式
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * 時間人性化
 * @param  {Any} time 時間物件
 * @param  {Any} option 轉換格式
 */
function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '剛剛'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分鐘前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小時前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '時' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * 時間格式化
 * @param  {Any} format 轉換格式
 * new Date().format('yyyyMMdd') -> "20200921"
 * new Date().format('yyyy-MM-dd') -> "2020-09-21"
 * new Date().format('yyyy-MM-dd hh:mm:ss') -> "2020-09-21 16:07:59"
 */
Date.prototype.format = function (format) {
  if(!format){
    format = "yyyy-MM-dd hh:mm:ss";
  }
  let o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "H+": this.getHours(), // 小時
    "h+": this.getHours(), // 小時
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if(/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if(new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
};

//-----------------------DOM-----------------------
/**
 * 滾動至指定位置
 * @param  {String, Number} el 滾動位置(預設為'top',可選：'top', 'bottom', '.foobar', 300)
 * @param  {Number} speed 滾動時間(預設為5,瞬移為1)
 * @param  {Number} offset 自定偏移(可接受正負數字)
 * @param  {Function} callback 回調函式
 * scrollTo();
 * scrollTo('top', 1);
 * scrollTo('.foobar', 10, -30, () => {console.log('滾動完成')});
 */
function scrollTo(el = "top", speed = 5, offset = 0, callback = () => {}) {
  let scrollTop = document.scrollingElement.scrollTop;
  let top = 0;
  if(typeof el === 'number'){
    top = el + offset;
  }else{
    if(el === 'top'){
      top = 0 + offset;
    }else if(el === 'bottom'){
      top = document.body.scrollHeight - document.body.clientHeight + offset;
    }else{
      top = document.querySelector(el).offsetTop + offset;
    }
  }
  function scroll() {
    scrollTop = scrollTop + (top - scrollTop) / speed;
    if (Math.abs(scrollTop - top) <= 1) {
      document.scrollingElement.scrollTop = top;
      callback && callback();
      return;
    }
    document.scrollingElement.scrollTop = scrollTop;
    requestAnimationFrame(scroll);
  };
  scroll();
};

/**
 * 取得頁面當前捲動高度(寬度)
 * @param  {Any} direction 改取寬度
 */
function getPageScroll(direction){
  if(direction){
    return document.documentElement.scrollLeft || document.body.scrollLeft;
  }else{
    let bodyTop = 0;
    if(typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
    }else if(typeof document.compatMode != "undefined"
        && document.compatMode != "BackCompat") {
      bodyTop = document.documentElement.scrollTop;
    }else if(typeof document.body != "undefined") {
      bodyTop = document.body.scrollTop;
    }
    return bodyTop;
  }
}

/**
 * 取得頁面總高度(寬度)
 * @param  {Any} direction 改取寬度
 */
function getPage(direction) {
  let el = document.compatMode == "BackCompat" ? document.body : document.documentElement;
  if(direction){
    return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, el.clientWidth);
  }else{
    return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, el.clientHeight);
  }
}

/**
 * 取得頁面可視高度(寬度)
 * @param  {Any} direction 改取寬度
 */
function getPageView(direction) {
  let el = document.compatMode == "BackCompat" ? document.body : document.documentElement;
  if(direction){
    return el.clientWidth;
  }else{
    return el.clientHeight;
  } 
}

//-----------------------Verify-----------------------
/**
 * 各式驗證函式
 * @param  {String} type 驗證類型
 * @param  {Any} val 要驗證的值
 * @param  {String} regex 指定正則表達式
 */
function isRegex(type, val, regex){
  switch (type) {
    // 姓名驗證
    case "name":
      return /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(val);
      break;
    // 電話驗證
    case "phone":
      return /^09[0-9]{8}$/.test(val);
      break;
    // 電子郵件驗證
    case "email":
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val);
      break;
    // 身分證字號驗證
    case "idcard":
      return /^[A-Z](1|2)[0-9]{8}$/.test(val);
      break;
    // 日期驗證(1988-05-27)
    case "date":
      return /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(val);
      break;
    // 數字驗證
    case "number":
      return !isNaN(val);
      break;
    // 網址驗證
    case "url":
      return /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(val);
      break;
    // IP地址驗證
    case "ip":
      return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(val);
      break;
    // Hex色碼驗證
    case "hex":
      return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(val);
      break;
    //校驗是否為指定正則表達式
    case "regex":
      let regexMode = new RegExp(regex);
      return regexMode.test(val);
      break;
  }
}

/**
 * 精準數字驗證
 * @param  {Any} val 要驗證的值
 */
function isNumber(val){
  if(typeOf(val) !== "number"){
    return false;
  }else{
    return !isNaN(val);
  }
}

/**
 * 未填入驗證
 * @param  {Any} val 要驗證的值
 */
function isEmpty(val){
  switch(typeOf(val)){
    case "string":
      if(val.trim().length === 0) return true;
      break;
    case "number":
      break;
    case "boolean":
      if(!val) return true;
      break;
    case "array":
      if(val.length === 0) return true;
      if(val.some(i => i.length === 0)) return true;
      break;
    case "object":
      break;
    case "null":
      return true;
      break;
    case "undefined":
      return true;
      break;
  }
  return false;
}

// 身分證驗證
function isIdCard(idStr){
  // 依照字母的編號排列，存入陣列備用。
  let letters = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z', 'I', 'O');
  // 儲存各個乘數
  let multiply = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
  let nums = new Array(2);
  let firstChar;
  let firstNum;
  let lastNum;
  let total = 0;
  // 撰寫「正規表達式」。第一個字為英文字母，
  // 第二個字為1或2，後面跟著8個數字，不分大小寫。
  let regExpID=/^[a-z](1|2)\d{8}$/i; 
  // 使用「正規表達式」檢驗格式
  if(idStr.search(regExpID)==-1) {
    // 基本格式錯誤
    // alert("請仔細填寫身份證號碼");
    return false;
  }else {
    // 取出第一個字元和最後一個數字。
    firstChar = idStr.charAt(0).toUpperCase();
    lastNum = idStr.charAt(9);
  }
  // 找出第一個字母對應的數字，並轉換成兩位數數字。
  for(var i=0; i<26; i++) {
    if(firstChar == letters[i]) {
      firstNum = i + 10;
      nums[0] = Math.floor(firstNum / 10);
      nums[1] = firstNum - (nums[0] * 10);
      break;
    } 
  }
  // 執行加總計算
  for(var i=0; i<multiply.length; i++){
    if(i<2) {
      total += nums[i] * multiply[i];
    }else {
      total += parseInt(idStr.charAt(i-1)) * multiply[i];
    }
  }
  // 和最後一個數字比對
  if((10 - (total % 10))!= lastNum) {
    // alert("身份證號碼寫錯了！");
    return false;
  } 
  return true;
}

//-----------------------Browser-----------------------
/**
 * 動態加載css文件
 * @param  {String} url 文件路徑
 */
function loadStyle(url) {
  try {
    document.createStyleSheet(url);
  } catch (e) {
    let cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = url;
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(cssLink);
  }
}

/**
 * 取得LocalStorage的值
 * @param  {String} key 鍵值
 */
function getLocalStorage(key) {
  return localStorage.getItem(key);
}

/**
 * 設定LocalStorage的值
 * @param  {String} key 鍵值
 * @param  {String} val 屬性值
 */
function setLocalStorage(key, val) {
  localStorage.setItem(key, val);
}

/**
 * 取得Cookie的值
 * @param  {String} name 名稱值
 */
function getCookie(name) {
  let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null;
}

/**
 * 設置cookie值
 * @param  {String} name 名稱值
 * @param  {String} value 屬性值
 * @param  {String} Hours 過期時間
 */
function setCookie(name, value, Hours) {
  var d = new Date();
  var offset = 8;
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = utc + 3600000 * offset;
  var exp = new Date(nd);
  exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
  document.cookie =
    name +
    "=" +
    escape(value) +
    ";path=/;expires=" +
    exp.toGMTString() +
    ";domain=360doc.com;";
}

/**
 * 動態載入插件
 * @param  {String} src 路徑
 */
function insertPlugin(src){
  let script = document.createElement('script');
  script.setAttribute('src', src);
  document.head.appendChild(script);
}

/**
 * 函式防抖
 * @description 將幾次操作合併為一次操作進行
 * @param  {Function} fn 處理函式
 * @param  {Number} wait 停止後等待時間 預設為200ms
 * window.addEventListener('scroll', debounce(() => console.log(getRandom), 500));
 */
function debounce(fn, wait = 200) {
  let timeout = null;
  return function() {
    if(timeout !== null)
      clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}

/**
 * 函式節流
 * @description 一定時間內只觸發一次函式
 * @param  {Function} fn 處理函式
 * @param  {Number} delay 處理間隔時間 預設為1000ms
 * window.addEventListener('scroll', throttle(() => console.log(getRandom), 2000));
 */
function throttle(fn, delay = 1000) {
  let prev = Date.now();
  return function() {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, args);
      prev = Date.now();
    }
  }
}

function throttle2(fn, delay){
  let timer; 
  let prevTime;
  return function(...args){
    let currTime = Date.now();
    let context = this;
    if(!prevTime) prevTime = currTime;
    clearTimeout(timer);
    
    if(currTime - prevTime > delay){
        prevTime = currTime;
        fn.apply(context,args);
        clearTimeout(timer);
        return;
    }

    timer = setTimeout(function(){
        prevTime = Date.now();
        timer = null;
        fn.apply(context,args);
    },delay);
  }
}

//-----------------------Web-----------------------
/**
 * 查詢網址所帶參數
 * @param  {String} key 鍵值
 * @param  {String} url 網址
 */
function queryString(key = "", url = location.href) {
  let parseUrl = new URL(url);
  return parseUrl.searchParams.get(key);
}

/**
 * 解析網址
 * @param  {String} url 網址
 */
function parseUrl(url = location.href) {
  let parseUrl = new URL(url);
  return parseUrl;
}

/**
 * HTTP跳轉HTTPS
 */
function httpsRedirect(){
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

/**
 * 檢驗URL連接是否有效
 * @param  {String} URL 網址
 */
function getUrlState(URL) {
  var xmlhttp = new ActiveXObject("microsoft.xmlhttp");
  xmlhttp.Open("GET", URL, false);
  try {
    xmlhttp.Send();
  } catch (e) {
  } finally {
    var result = xmlhttp.responseText;
    if (result) {
      if (xmlhttp.Status == 200) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

/**
 * 網址跳轉
 * @param  {String} url 欲跳轉的網址
 */
function toUrl(url){
  window.location.href = url;
}

/**
 * 跳頁重整
 */
function jumpReload(){
  window.onpageshow = event => {
    if(event.persisted) window.location.reload();
  };
}

/**
 * Axios封裝
 * axiosPackage
 */
const udApi = axios.create({
  // baseURL: baseURL,
  timeout: 10000, // 請求超時時間
  // withCredentials: true, // 充許攜帶cookie
  // headers: {"Content-Type": "application/x-www-form-urlencoded"}, //改用formdata格式發送
})

let ajaxCount = 0;

// 請求攔截器
udApi.interceptors.request.use(
  config => {
    if(ajaxCount === 0) vm.udLoading.open();
    ajaxCount++;
    
    // config.data = JSON.stringify(config.data);

    // 每次發送請求之前判斷是否存在token，如果存在，則統一在http請求的header都加上token，不用每次請求都手動添加了
    // 即使本地存在token，也有可能token是過期的，所以在響應攔截器中要對返回狀態進行判斷
    // if(token) config.headers.Authorization = "This is token";
  
    // 讓每個請求攜帶token--['X-Token']為自定義key 請根據實際情況自行修改
    // if (store.getters.token) config.headers['X-Token'] = getToken();

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
)

// 響應攔截器
udApi.interceptors.response.use(
  response => {
    ajaxCount--;
    if(ajaxCount === 0) vm.udLoading.close();

    // errorMsg處理
    // 後端可回傳errorMsg, errorTitle, errorAct("reload": 重整頁面, "url": 跳轉至url)
    if(response.data.errorMsg){
      if(response.data.errorAct){
        if(response.data.errorAct === 'reload'){
          vm.udAlert({ msg: response.data.errorMsg, title: response.data.errorTitle, confirm: () => location.reload() });
        }else{
          vm.udAlert({ msg: response.data.errorMsg, title: response.data.errorTitle, confirm: () => toUrl(response.data.errorAct) });
        }
      }else{
        vm.udAlert({msg: response.data.errorMsg, title: response.data.errorTitle});
      }
    }

    return Promise.resolve(response);

    // if (response.status === 200) { // 200
    //   return Promise.resolve(response);
    // } else { // 2xx
    //   return Promise.reject(response);
    // }
  },
  error => {
    ajaxCount--;
    if(ajaxCount === 0) vm.udLoading.close();

    console.log('error', error);
    if (error && error.response) {
      switch (error.response.status) {
        case 404:
          vm.udAlert({title: error.message, msg: "找不到該頁面，請稍候再試"});
          break;
        case 500:
          vm.udAlert({title: error.message, msg: "伺服器出錯，請稍候再試"});
          break;
        case 503:
          vm.udAlert({title: error.message, msg: "服務失效，請稍候再試"});
          break;
        default:
          vm.udAlert({title: error.message, msg: `連接錯誤：${error.response.status}，請稍候再試`});
      }
    } else {
      vm.udAlert({title: error.message, msg: "連接到伺服器失敗，請稍候再試"});
    }
    return Promise.reject(error)
  }
);

// let udApi = {
//   /** 
//    * get方法，對應GET請求
//    * @param  {String} url 請求的url地址
//    * @param  {Object} config 請求的config
//    * @param  {Boolean} next 有errorMsg時是否繼續執行
//    * @param  {Boolean} detail 是否回傳完整response
//    */
//   get(url, config = {}, next = false, detail = false){
//     return new Promise((resolve, reject) =>{
//       service.get(url, config)
//       .then(res => {
//         if(res.data.errorMsg){
//           if(!next) return;
//         }
//         detail ? resolve(res) : resolve(res.data);
//       })
//       .catch(err => {
//         detail ? reject(err) : reject(err.data);
//       })
//     });
//   },
//   /** 
//    * post方法，對應POST請求
//    * @param  {String} url 請求的url地址
//    * @param  {Object} data 請求時攜帶的資料
//    * @param  {Object} config 請求的config
//    * @param  {Boolean} next 有errorMsg時是否繼續執行
//    * @param  {Boolean} detail 是否回傳完整response
//    */
//   post(url, data = {}, config = {}, next = false, detail = false) {
//     return new Promise((resolve, reject) => {
//       service.post(url, data, config)
//       .then(res => {
//         if(res.data.errorMsg){
//           if(!next) return;
//         }
//         detail ? resolve(res) : resolve(res.data);
//       })
//       .catch(err => {
//         detail ? reject(err) : reject(err.data);
//       })
//     });
//   },
//   /** 
//    * put方法，對應PUT請求
//    * @param  {String} url 請求的url地址
//    * @param  {Object} data 請求時攜帶的資料
//    * @param  {Object} config 請求的config
//    * @param  {Boolean} next 有errorMsg時是否繼續執行
//    * @param  {Boolean} detail 是否回傳完整response
//    */
//   put(url, data = {}, config = {}, next = false, detail = false) {
//     return new Promise((resolve, reject) => {
//       service.put(url, data, config)
//       .then(res => {
//         if(res.data.errorMsg){
//           if(!next) return;
//         }
//         detail ? resolve(res) : resolve(res.data);
//       })
//       .catch(err => {
//         detail ? reject(err) : reject(err.data);
//       })
//     });
//   },
//   /** 
//    * delete方法，對應DELETE請求
//    * @param  {String} url 請求的url地址
//    * @param  {Object} config 請求的config
//    * @param  {Boolean} next 有errorMsg時是否繼續執行
//    * @param  {Boolean} detail 是否回傳完整response
//    */
//   delete(url, config = {}, next = false, detail = false) {
//     return new Promise((resolve, reject) => {
//       service.delete(url, config)
//       .then(res => {
//         if(res.data.errorMsg){
//           if(!next) return;
//         }
//         detail ? resolve(res) : resolve(res.data);
//       })
//       .catch(err => {
//         detail ? reject(err) : reject(err.data);
//       })
//     });
//   }
// }

// 掛載到Vue原型上
Vue.prototype.udApi = udApi;

/**
 * CDN備援
 */
function cdnBackup(){
  if(!window.Vue){
    document.write(`
      <link href="https://pro.fontawesome.com/releases/v5.13.1/css/fontawesome.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/theme-chalk/index.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/@braid/vue-formulate@2.4.3/dist/formulate.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/index.js"><\/script>
      <script src="js/ud-modules.js"><\/script>
    `);
    console.log("CDN Error!!");
  }
}

//-----------------------Device-----------------------
/**
 * 判斷是否移動裝置
 */
function isMobileUserAgent() {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
    window.navigator.userAgent.toLowerCase()
  );
}

/**
 * 判斷是否蘋果移動裝置
 */
function isAppleMobileDevice() {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase());
}

/**
 * 判斷是否安卓移動裝置
 */
function isAndroidMobileDevice() {
  return /android/i.test(navigator.userAgent.toLowerCase());
}

//-----------------------Animation-----------------------
/** 
 * RAF通用動畫函式
 * @param  {String} timing 指定時間
 * @param  {Object} draw 繪製
 * @param  {Object} duration 持續時間
 * animate({
 *   duration: 1000,
 *   timing(timeFraction) {
 *     return timeFraction;
 *   },
 *   draw(progress) {
 *     elem.style.width = progress * 100 + '%';
 *   }
 * });
 * progress = 0 表示開始動畫狀態，progress = 1 表示結束狀態。
 */
function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction 從 0 增加到 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // 計算當前動畫狀態
    let progress = timing(timeFraction);

    draw(progress); // 繪製

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

export { getRandom, nl2br }