<template>
    <div class="manage-page">
        <div class="head">
            <div class="content">
                <i class="el-icon-s-help"></i>
                管理系统
            </div>
            <div class="admin">
                <img src="../assets/logo.png" alt="" class="avatar">
                <span class="name">
                    <span>admin</span>
                    <!-- <i class="el-icon-setting"></i> -->
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <i class="el-icon-setting"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>首页</el-dropdown-item>
                            <el-dropdown-item divided>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
            </div>
        </div>
        <div class="container">
            <el-row style="height: 100%;">
                <el-col :span="3" style="min-height: 100%;background-color: rgb(84, 92, 100);">
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                        background-color="#545c64" text-color="#fff">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-data"></i>
                                <span>数据统计</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">数据统计</el-menu-item>
                                <el-menu-item index="1-2">用量统计</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-s-data"></i>
                                <span>单位管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">数据统计</el-menu-item>
                                <el-menu-item index="2-2">用量统计</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :span="21" style="height: 100%;overflow: auto;">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .manage-page {
        height: 100%;
        position: relative;
    }

    .head {
        width: 100%;
        height: 50px;
        background-color: rgba(102, 102, 102, 0.898039);
        position: absolute;
    }

    .container {
        width: 100%;
        position: absolute;
        top: 50px;
        bottom: 0;
    }

    .el-menu {
        border-right: none;
    }

    .content {
        float: left;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 50px;
        padding-left: 20px;
    }

    .content i {
        font-size: 22px;
        line-height: 50px;
        vertical-align: top;
    }

    .admin {
        float: right;
        color: #fff;

    }

    .admin .name {
        display: inline-block;
        font-size: 12px;
        line-height: 50px;
        vertical-align: top;
    }

    .admin .name span {
        padding: 0 14px;
        border-right: 1px solid #444343;
    }

    .admin .name span:last-child {
        border-right: none;
    }

    .admin .name i {
        font-size: 20px;
        /* margin: 0 14px; */
        line-height: 50px;
        vertical-align: top;
    }

    .admin .avatar {
        width: 30px;
        height: 30px;
        padding: 10px 0;
        border-radius: 50%;
    }

    .is-opened .el-menu {
        background-color: #1f2d3d;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>