<template>
  <div class="menu">
    <div class="menu-list">
      <div class="menu-block-top">
        <a href="javascript:;" class>
            
          <span class="fa fa-list"></span> 
          测试
          <span class="pull-right fa fa-chevron-right"></span>
        </a>
      </div>
      <div class="menu-block-list">
        <div class="menu-block" v-for="(item, key) in list" :key="key">
          <router-link :to="item.path">
            {{item.name}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu {
  height: 100%;
  background-color: rgb(55, 55, 109);
  border-top: 1px solid rgb(12, 12, 46);
  color: #fff;
  overflow-x: hidden;
}
.menu a {
  color: #fff;
}
.menu-block {
}
.menu-block-top .pull-right {
  margin-top: 5px;
}
.menu-block-top {
  height: 35px;
  line-height: 25px;
  padding: 5px 12px;
  background-color: rgb(48, 48, 99);
  /* border-bottom: 1px solid rgb(48, 48, 99); */
  box-shadow: 2px 2px 3px rgb(42, 42, 87);
  font-size: 13px;
  border-left: 2px solid rgb(75, 75, 145);
  cursor: pointer;
}
.menu-block {
  height: 35px;
  line-height: 25px;
  padding: 3px 2.5em;
  background-color: rgb(75, 75, 145);
  font-size: 13px;
  border-bottom: 1px solid rgb(48, 48, 99);
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Menu",
  //   props: ['userinfo'],
  data() {
    return {
      list: [
          {
              name: "测试1",
              path: "/main/test1"
          },
          {
              name: "测试2",
              path: "/main/test2"
          },
      ]
    };
  },
  created: () => {}
};
</script>
