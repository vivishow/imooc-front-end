<template>
  <div>
    <h1>这里是返回结果</h1>
    <div>
      <!-- 这里已经完成了双向绑定 -->
      <!-- 用户输入的page与num，可以通过send方法传递HTTP请求 -->
      <label>
        <span>页码：</span>
        <input type="text" v-model.number="page" />
      </label>
      <label>
        <span>数量：</span>
        <input type="text" v-model.number="num" />
      </label>
      <!-- 这里有事件的绑定 -->
      <button type="button" @click="send()">提交</button>
    </div>
    <!-- 通过JSON.stringify格式化显示 -->
    <button
      type="button"
      v-for="index of this.page"
      :key="index"
      @click="switchPage(index)"
    >{{index}}</button>
    <pre v-html="JSON.stringify(items, null, 2)"></pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      page: 1,
      num: 10,
      // 这里是数据体
      items: [],
      datas: []
    };
  },
  methods: {
    send() {
      // 使用axios作为http客户端，发送HTTP的GET请求
      // 传递参数num和page
      axios
        .get("lists", {
          params: {
            page: this.page,
            num: this.num
          }
        })
        .then(res => {
          this.datas = res.data.data;
          this.switchPage(1);
        });
    },
    switchPage(key) {
      let singlePageNum = this.num / this.page;
      this.items = this.datas.slice(
        (key - 1) * singlePageNum,
        key * singlePageNum
      );
    }
  },
  watch: {
    page: function() {
      this.switchPage(1);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
