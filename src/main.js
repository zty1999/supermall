import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import toast from 'components/common/toast'
// import { TabContainer } from 'mint-ui'
// Vue.component(TabContainer);
// import 'mint-ui/lib/style.css'
import  FastClick from  'fastclick'
import  VueLazyLoad from 'vue-lazyload'


// 导入格式化时间的插件
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
});



let cartList = JSON.parse(localStorage.getItem('cartList') || '[]')







Vue.config.productionTip = false;

//事件总线  默认情况下$bus没有值，所以新建一个vue实例，将实例赋值给$bus
Vue.prototype.$bus = new Vue();

//安装toast插件
Vue.use(toast);

//解决移动端300ms延迟问题
FastClick.attach(document.body);
Vue.use(VueLazyLoad,{
  // loading: 'assets/img/common/lazy-load-placeHolder.gif',//不使用require则未加载图片无高度
  loading: require('./assets/img/common/lazy-load-placeHolder.gif')
});
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
