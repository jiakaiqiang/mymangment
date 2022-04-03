<template>
  <div class="nav-container-class">
    <div class="nav-class">
      <template v-for="(item, index) in tagViews" :key="index">
        <router-link
          :to="{ path: item.path, query: item.query }"
          :class="['nav-class-tag', isActivw(item) ? 'currentPath' : '']"
        >
          <span class="nav-link-class"> {{ item.meta.title }}</span>
          <el-icon
            color="#409EFC"
            class="nav-tag-close"
            @click.stop.prevent="closeRouteLink(item, index)"
          >
            <CloseBold />
          </el-icon>
        </router-link>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { Router } from "../../types/rotuer";
import { useRoute } from "vue-router";
import { key } from "@/store/store";
export default defineComponent({
  setup() {
    const userInfo = reactive({ name: "测试" });
    const store = useStore(key);
    let currentPath = ref<String>("");
    console.log(currentPath);
    const tagViews = computed(() => {
      return store.state.app.TagView;
    });
    const isActivw = (tag: Router) => {
      return tag.path == useRoute().path;
    };
    const closeRouteLink = (item: Router, index: number) => {
      //更新
      store.commit("DELETE_TAGVIEW", item);
    };
    return {
      closeRouteLink,
      isActivw,
      tagViews,
      userInfo,
      currentPath,
    };
  },
});
</script>
<style lang="scss">
.currentPath {
  background: #0fc2df;
  color: white;
}
.nav-container-class {
  box-sizing: border-box;
  margin: 3px 3px 3px 3px;
  font-size: 14px;

  .nav-class {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    
    padding: 5px;
    .nav-class-tag {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e8e9ec;
      .nav-tag-close {
        visibility: hidden;
      }
    }
    a {
      color: black;
      height: 100%;
      display: inline-block;
      text-decoration: none;
      
    }
    a:link {
      /*color:white;*/
      /*background-color: pink;*/
    }
    a:hover {
      background: #2471df;
      color: white;
      .nav-tag-close {
        visibility: visible;
        border-radius: 8px;

      }
    }
    .nav-tag-close:hover {
      background: #e8e9ec;
    }
    .nav-link-class {
      display: inline-block;
      height: 100%;
      padding: 4px 4px 4px 4px;
    }
  }
}
</style>
