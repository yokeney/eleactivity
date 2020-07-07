import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      openid:'',    //用户的唯一标识
      nickname:'',  //用户昵称
      sex:'',       //用户的性别，值为1时是男性，值为2时是女性，值为0时是未知
      province:'',  //用户个人资料填写的省份
      city:'',      //普通用户个人资料填写的城市
      country:'',   //国家，如中国为CN
      headimgurl:'', //用户头像
      privilege:[],  //用户特权信息，json 数组，如微信沃卡用户为（chinaunicom）
      unionid:'',    //只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。
    }    
  },
  mutations: {
    getNickName(state,nickname){
      state.userInfo.nickname = nickname
    }
  },
  actions: {
  },
  modules: {
  }
})
