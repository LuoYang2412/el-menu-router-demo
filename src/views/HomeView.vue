<template>
  <div class="home">
    <el-menu :default-active="activeIndex" router class="el-menu-demo">
      <template v-for="(item1,index1) of menuData">
        <el-submenu v-if="item1.children.length > 0" :index="`${index1}`">
          <template slot="title">{{ item1.name }}</template>
          <template v-for="(item2,index2) of item1.children">
            <el-submenu v-if="item2.children.length > 0" :index="`${index1}-${index2}`">
              <template slot="title">{{ item2.name }}</template>
            </el-submenu>
            <!-- 菜单跳转两种方式：Menu的router模式 eg.一级菜单， 自己处理点击事件 eg.二级菜单-->
            <!-- :route="{}" 只是为了防止Menu的路由模式跳转，实际使用中一般只用一种模式-->
            <el-menu-item v-else :index="`${index1}-${index2}`" :route="{}" @click="itemMenuClick(item2)">
              {{ item2.name }}
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="`${index1}`" :route="{path:item1.path}">{{ item1.name }}</el-menu-item>
      </template>
    </el-menu>
    <!--    这个是子路由，@/router/index.js home下的children都会出现在这个位置，注意路径。参考：https://router.vuejs.org/ 嵌套路由章节-->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }, data() {
    return {
      activeIndex: "0",
      menuData: [{
        name: "处理中心",
        path: "ProcessingCenter",
        children: []
      },
        {
          name: "我的工作台",
          path: "",
          children: [
            {
              name: "选项一",
              path: "/OptionOne",
              children: []
            },
            {
              name: "选项二",
              path: "",
              children: []
            },
            {
              name: "选项三",
              path: "",
              children: []
            }
          ]
        },
        {name: "消息中心", path: "8899", children: []}
      ]
    }
  },
  methods: {
    itemMenuClick(item) {
      this.$message.info(item.name)
      if (item.path) {
        this.$router.push({path: item.path})
      }
    }
  },
}
</script>
<style>
.el-menu {
  width: 200px;
}
</style>