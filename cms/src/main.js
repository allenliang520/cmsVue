import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from '@/store.js'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/font-awesome.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  data: () => {
    return {
    }
  },
  created: function () {
    var $this = this;
    this.$store.commit("checkwindowtype")

    router.beforeEach((to, from, next) => {
      if (from.name == "main" && $this.$store.state.windowtype == "top") {
        $this.$store.commit("addRouter", to)
      } else if (to.name == "main") {
        next()
      }
    })

    console.log(this)
  }
}).$mount('#app')
