<template>
    <div class="login-page">
        <transition name="slide-fade">
            <div class="logo-container">
                <div>
                    <p>很牛X的管理系统</p>
                </div>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item prop="acco">
                        <el-input v-model.number="ruleForm.acco" placeholder="请输入账号" size="large"
                            prefix-icon="el-icon-s-custom">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" size="large"
                            prefix-icon="el-icon-lock"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="info" @click="submitForm('ruleForm')">登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            var validateAcco = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
            };
            return {
                ruleForm: {
                    acco: '',
                    pass: ''
                },
                rules: {
                    acco: [
                        { validator: validateAcco, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .login-page {
        width: 100%;
        height: 100%;
        background-color: rgba(244, 244, 244, 1);
    }

    .logo-container {
        width: 420px;
        height: 400px;
        background-color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
        -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.34902);
    }

    .logo-container p {
        font-size: 28px;
        font-weight: 700;
        padding: 28px;
    }

    .demo-ruleForm {
        padding: 0 50px;
    }

    .el-form-item {
        margin-bottom: 30px;
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to

    /* .slide-fade-leave-active for below version 2.1.8 */
        {
        transform: translateX(10px);
        opacity: 0;
    }
</style>