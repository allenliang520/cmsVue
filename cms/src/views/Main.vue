<template>
  <div>
    <div class="main" v-if="windowtype == 'top'">
      <TopBar class="top-bar"></TopBar>
      <div class="main-left">
        <Menu></Menu>
      </div>
      <div class="main-content">
        <div class="page-list">
          <div
            class="item"
            v-for="(item, key) in $store.state.routerlist"
            :key="key"
            :class="{active: item.name == $store.state.routeron}"
          >
            <div class="name" @click="changeRouter(item)">{{item.name}}</div>
            <div class="ctl">
              <span class="fa fa-close" @click="removeRouter(item)"></span>
            </div>
          </div>
        </div>
        <div class="page-content">
            <iframe 
            v-for="(item, key) in $store.state.routerlist"
            :key="key" v-show="item.name == $store.state.routeron" :src="item.fullPath" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <div class="main" v-if="windowtype == 'child'">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.top-bar {
  z-index: 2;
  position: relative;
}
.main-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  padding-top: 60px;
  z-index: 2;
}
.main-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  padding-left: 200px;
  background-color: #fff;
  z-index: 0;
  overflow: hidden;
}
.page-list {
  position: absolute;
  width: 100%;
  height: 36px;
  padding: 8px 10px 0;
  background-color: #efefef;
  text-align: left;
  font-size: 0;
  z-index: 1;
}
.page-list .item {
  display: inline-block;
  padding: 0 18px 0 10px;
  min-width: 50px;
  max-width: 150px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px 5px 0 0;
  background-color: #ddd;
  vertical-align: bottom;
  position: relative;
  font-size: 12px;
}
.page-list .item.active {
  line-height: 28px;
  height: 28px;
  background-color: #fff;
}
.page-list .item .name {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
}
.page-list .item .ctl {
  width: 14px;
  position: absolute;
  right: 4px;
  top: 0px;
  text-align: center;
  cursor: pointer;
}
.page-content {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 36px;
  z-index: 0;
}
.page-content iframe{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TopBar from "@/components/TopBar.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "mainView",
  components: {
    TopBar,
    Menu
  },
  data() {
    return {
      userinfo: this.$store.state.userinfo,
      windowtype: this.$store.state.windowtype
    };
  },
  methods: {
    changeRouter: function(router) {
      // console.log(router)
      this.$store.commit("changeRouter", router);
    },
    removeRouter: function(router) {
      // console.log(router)
      this.$store.commit("removeRouter", router);
    }
  },
  created: function() {
    console.log(this.$store.state);
  }
};
</script>
