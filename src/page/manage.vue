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
                <el-col :span="3" style="height: 100%;background-color:#545c64;">
                    <el-menu :default-active="defaultActive" background-color="#545c64" text-color="#fff"
                        active-text-color="#ffd04b" router>
                        <el-submenu index="manage">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>数据统计</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="datum">通览</el-menu-item>
                                <el-menu-item index="usageDatum">用量</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span=21 style="height: 100%;overflow:auto">
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
        computed: {
            defaultActive: function () {
                return this.$route.path.replace('/', '');
            }
        },
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

    .el-submenu .el-menu-item {
        /* background: cornsilk; */
    }

    /* .is-opened .el-menu {
        background-color: #1f2d3d;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    } */
</style>