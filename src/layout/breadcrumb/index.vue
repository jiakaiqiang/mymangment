<template>
    <div class="mangment-top-class">
        <el-breadcrumb separator="/">
            <!--            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path" :to="{ name:item.name }">
                <span class="no-redirect">{{ item.meta.title }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="mangment-top-down">

            <el-dropdown @command="handleCommand">
                <el-icon class="margin-right-8">
                    <Avatar></Avatar>
                </el-icon>
                <span class="el-dropdown-link">
      {{userInfo.name}}
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="passwordUpdate">密码修改</el-dropdown-item>
                        <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

</template>
<script lang="ts">
    import {defineComponent, watch, ref, reactive} from 'vue'
    import {useRoute, RouteLocationMatched} from "vue-router";
    import pathToRegexp from 'path-to-regexp'

    export default defineComponent({
        setup() {
            let levelList = ref<any>([])
            const route = useRoute()
            const userInfo = reactive({name: "测试"})

            const getBreadcrumb = () => {
                // only show routes with meta.title
                let matched = route.matched.filter(item => item.meta && item.meta.title)
                levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)

            }
            getBreadcrumb()
            //监听路由变化
            watch(() => route.path, () => {
                getBreadcrumb()
            })
            const loginOut = () => {
                alert('退出')
            }
            const passwordUpdate = () => {
                alert('密码更新')
            }
            const handleCommand = (type: string): void => {
                switch (type) {
                    case 'loginOut':
                        loginOut()
                        break;
                    case 'passwordUpdate':
                        passwordUpdate()
                        break

                }
            }
            return {
                getBreadcrumb,
                handleCommand,
                levelList,
                userInfo,
                loginOut,
                passwordUpdate
            }
        }
    })
</script>
<style lang="scss" scoped>
    .mangment-top-class {
        display: flex;
        justify-content: space-between;
        padding: 8px 16px;
        height:40px;
        width: 100%;
        align-items: center;
        border:1px solid #8787894d;
        .mangment-top-down{
            margin-right:32px
        }

    }

</style>
