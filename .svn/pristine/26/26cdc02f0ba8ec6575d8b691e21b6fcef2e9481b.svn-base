import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Vconsole 移动端调试
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)

// ---- 静态资源
import '@/assets/css/main.css'

//添加Fastclick移除移动端点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//vue-scroller刷新组件
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// -- 全局组件(g-)
import gNav from '@/components/g-nav'
import gFooter from '@/components/g-footer'
Vue.component('g-nav', gNav);
Vue.component('g-footer', gFooter);

// ---- vue-vant
import 'vant/lib/index.css'
import { NavBar } from 'vant'                                   // NavBar 导航栏
Vue.use(NavBar);
import { Icon } from 'vant'                                     // Icon 图标
Vue.use(Icon);
import { Swipe, SwipeItem } from 'vant'                         // Swipe 轮播
Vue.use(Swipe).use(SwipeItem);
import { Collapse, CollapseItem } from 'vant';                  //Collapse 折叠面板
Vue.use(Collapse);
Vue.use(CollapseItem);
import { Col, Row } from 'vant';                                //Layout 布局
Vue.use(Col);
Vue.use(Row);
import { Image } from 'vant';                                   //Image 图片
Vue.use(Image);
import { Loading } from 'vant';                                 //Loading 加载
Vue.use(Loading);
import { ImagePreview } from 'vant';
Vue.use(ImagePreview); 
import { Toast } from 'vant';
Vue.use(Toast);                                                 //Toast 轻提示
import { List } from 'vant';
Vue.use(List);                                                  //List 列表
import { Divider } from 'vant';
Vue.use(Divider)                                                //Divider 分割线
import { Cell, CellGroup } from 'vant';
Vue.use(Cell);                                                  //Cell 单元格
Vue.use(CellGroup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
