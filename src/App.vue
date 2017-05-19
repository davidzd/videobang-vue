<template>
  <div id="app">
    <div class="steps">
      <el-steps :space="300" :active="active" finish-status="success" :align-center=true :center=true>
        <el-step v-for="step in steps" :title=step.text :key=step.id></el-step>
      </el-steps>
    </div>
    <router-view class="content"></router-view>
    <router-link :to="{ path: path }">
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </router-link>
  </div>
</template>

<script>
const steps = [
  {
    id: "1",
    text: "价格估算",
    icon: "edit"
  },
  {
    id: "2",
    text: "账号筛选",
    icon: "edit"
  },
  {
    id: "3",
    text: "签约发布",
    icon: "edit"
  },
  {
    id: "4",
    text: "数据监控",
    icon: "edit"
  },
]

export default {
  name: 'app',
  data() {
      return {
        steps,
        path: '',
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 3) this.active = 0;
        this.path = String(this.active);
      }
    }
}





</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9f9f9;
}

.steps {
  margin: auto;
  padding-top: 2%;
  width: 80%
}

.content {
  margin: auto;
  width: 80%;
  background-color: white;
  margin-top: 3%;
}





</style>
