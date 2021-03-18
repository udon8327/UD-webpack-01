declare var $: (selector: string) => any;

let ACT_ID;
let baseURL = HOSTNAME + "/cashapon";

let vm = new Vue({
  el: '#app',
  data: {
    user: {
      status: 1,
      isError: 0,
      isWinning: 1,
      giftAll: 0,
      winning: {
        prizeName: "LINE POINTS 10點",
        prizeImage: "img/prize_01.jpg",
      },
      titleImage: "img/title.jpg",
      startImage: "img/start.jpg",
      coverImage: "img/cover.jpg",
      descriptionImage: "img/description.jpg",
      errorImage: "img/error.jpg",
      isShare: 1,
      shareImage: "img/share.jpg",
      shareNotes: "http://line.naver.jp/R/msg/text/?這是好友分享訊息!!https://google.com?a=1%26b=2",
    },
    isStart: 0,
    isShowResult: 0,
    playStatus: "c" // c: 未玩過 d: 已玩過
  },
  mounted(){
    ACT_ID = queryString('actid');
    this.udLoading.open({ msg: "遊戲載入中..." });
    window.addEventListener("load", () => {
      this.udLoading.close();
      // lineApp.login(LIFF_ID.gameGacha)
      //   .then(res => this.playerData())
      //   .then(res => this.actInfo())
      //   .then(res => {
      //     this.user.winning.prizeName = res.gift.gift_name;
      //     this.user.winning.prizeImage = res.gift.gift_url;
      //     this.user.titleImage = res.info.title_image_url;
      //     this.user.startImage = res.info.start_image_url;
      //     this.user.coverImage = res.info.cover_image_url;
      //     this.user.descriptionImage = res.info.description_image_url;
      //     this.user.isError = res.info.limit === 'y' ? 1 : 0;
      //     this.user.errorImage = res.info.error_image_url;
      //     this.user.isShare = res.info.share === 'y' ? 1 : 0;
      //     this.user.shareImage = res.info.share_image_url;
      //     this.user.shareNotes = res.info.share_notes;
      //     this.user.isWinning = res.gift.gift_type === 'w' ? 1 : 0;
      //     this.user.giftAll = res.info.gift_all === 'y' ? 1 : 0;
      //     this.playStatus === "c" ? this.initScratch() : this.showResult();
      //   })
      this.initScratch();
    });
  },
  methods: {
    // 使用者紀錄
    playerData() {
      return new Promise((resolve, reject) => {
        udAxios.get(`${ baseURL }/frontend/api/shiseido/player/${ ACT_ID }`, {
            params: {
              channelId: MSG_CHANNEL_ID,
              uid: lineApp.lineUid
            },
          }).then(res => {
            if (res.data) {
              this.playStatus = res.data.status; // 帶回紀錄狀態
            } else {
              this.playStatus = 'c'; // 都沒有, 改為 c
            }
            resolve(res);
          }).catch(err => {
            this.udAlert({msg: err.response.data.message || '系統錯誤，請聯絡管理員'});
            reject(err);
          });
      });
    },
    // 微服務資料
    actInfo() {
      return new Promise((resolve, reject) => {
        udAxios.post(`${ baseURL }/frontend/api/shiseido/cashapon/${ ACT_ID }`, {
          channelId: lineApp.msgChannelId,
          uid: lineApp.lineUid,
          name: encodeURIComponent(lineApp.displayName),
          photo: encodeURIComponent(lineApp.pictureUrl),
        }).then(res => {
          resolve(res);
        }).catch(err => {
          let axiosResData = err.response,
          respData = axiosResData.data;

          if (respData.hasOwnProperty('status')) {
            this.udAlert({msg: respData.message})
            return false;
          }
          this.udAlert({msg: err.response.data.message || '系統錯誤，請聯絡管理員'});
          reject(err);
        });
      });
    },
    // 更改使用者遊玩狀態
    changePlayerStatus(status) {
      return new Promise((resolve, reject) => {
        udAxios.put(`${ baseURL }/frontend/api/shiseido/player/${ ACT_ID }`, {
          channelId: lineApp.msgChannelId,
          uid: lineApp.lineUid,
          status: status,
          name: encodeURIComponent(lineApp.displayName),
          photo: encodeURIComponent(lineApp.pictureUrl),
        }).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      });
    },
    // 初始化刮刮卡
    initScratch: function(){
      const scContainer = document.getElementById('js--sc--container')
      const sc = new ScratchCard('#js--sc--container', {
        scratchType: SCRATCH_TYPE.BRUSH,
        containerWidth: scContainer.offsetWidth * 2,
        containerHeight: scContainer.offsetWidth * 2,
        brushSrc: './img/brush.png',
        imageForwardSrc: this.user.coverImage,
        imageBackgroundSrc: this.user.winning.prizeImage,
        percentToFinish: 30,
        callback: this.showResult
      })
      sc.init().then(() => {
        sc.canvas.addEventListener('scratch.move', () => {
          this.percent = sc.getPercent().toFixed(2)
        })
      })
    },
    showResult: function(){
      // this.changePlayerStatus('d').then(() => {
        this.isShowResult = 1;
        scrollTo('top', 1);
        // $('.mask-black').removeClass('hide');
        // if(this.user.giftAll) {
        //   $('.result-prize').removeClass('hide').hide().fadeIn(300);
        // }else if(this.user.isWinning) {
        //   $('.result-prize').removeClass('hide').hide().fadeIn(300);
        // }else {
        //   $('.result-noprize').removeClass('hide').hide().fadeIn(300);
        // }
      // })
    },
    friendShare() {
      alert(this.user.shareNotes);
      location.href = this.user.shareNotes;
    },
    useCoupon() {

    },
    toUrl(url) {
      location.href = url;
    },
    nl2br: function(val){
      return nl2br(val)
    },
  },
});
