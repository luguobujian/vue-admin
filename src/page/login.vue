<template>
    <div class="login-page">
        <transition name="slide-fade">
            <div class="logo-container">
                <div>
                    <p>很牛X的管理系统</p>
                </div>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item prop="acco">
                        <el-input v-model.number="ruleForm.acco" placeholder="请输入账号" prefix-icon="el-icon-s-custom">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码"
                            prefix-icon="el-icon-lock"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" @click="submitForm('ruleForm')" class="submit-btn">登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            var validateAcco = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                sharedState: this.$store.state,
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
                        if (this.ruleForm.acco === 'admin' && this.ruleForm.pass === 'admin') {
                            window.localStorage.setItem('token', true)
                            this.$router.push('manage')
                        }
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '请输入正确的用户名密码',
                            offset: 100
                        });
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
        top: 40%;
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
        padding: 30px;
    }

    .demo-ruleForm {
        padding: 0 50px;
    }

    .el-form-item {
        margin-bottom: 36px;
    }

    .el-input>>>input {
        height: 50px;
        line-height: 50px;
        padding-left: 40px;
        padding-right: 30px;
    }

    .el-input>>>.el-input__prefix {
        left: 10px;
    }

    .el-input>>>.el-input__suffix {
        right: 10px;
    }

    .el-input>>>i {
        font-size: 24px;
        line-height: 50px;
    }

    .submit-btn {
        width: 100%;
        font-size: 18px;
        padding: 16px 20px;
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