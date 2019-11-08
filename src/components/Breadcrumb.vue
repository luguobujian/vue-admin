<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta.breadcrumb" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .breadcrumb {
        height: 40px;
        /* padding-left: 27px; */

    }

    .el-breadcrumb {
        font-size: 14px;
        line-height: 40px;
    }
</style>