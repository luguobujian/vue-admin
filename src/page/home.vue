<template>
    <div style="height: 100%;">
        <el-container style="height: 100%;position: relative;">
            <el-header style="height: 40px;position: absolute;">
                <breadcrumb></breadcrumb>
            </el-header>
            <el-main style="width:100%;padding: 10px 30px;position: absolute;top: 40px;bottom: 0;">
                <div class="page-container">
                    <page-top></page-top>
                    <div>
                        <div class="page-container-title">任务统计</div>
                        <el-row>
                            <el-col :span=9 class="data-box">
                                <div id="left_echarts" style="width: 100%;height:100%"></div>
                            </el-col>
                            <el-col :span=14 class="data-box data-box-right"></el-col>
                        </el-row>
                    </div>
                    <div>
                        <div class="page-container-title">单位统计</div>
                        <div>
                            <div>
                                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                    <el-button slot="append" icon="el-icon-search"></el-button>
                                </el-input>
                            </div>
                            <div>
                                <el-table :data="tableData" style="width: 100%">
                                    <el-table-column prop="date" label="日期" width="150">
                                    </el-table-column>
                                    <el-table-column prop="name" label="姓名" width="120">
                                    </el-table-column>
                                    <el-table-column prop="province" label="省份" width="120">
                                    </el-table-column>
                                    <el-table-column prop="city" label="市区" width="120">
                                    </el-table-column>
                                    <el-table-column prop="address" label="地址">
                                    </el-table-column>
                                    <el-table-column prop="zip" label="邮编" width="120">
                                    </el-table-column>
                                    <el-table-column label="操作" width="100">
                                        <template slot-scope="scope">
                                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看
                                            </el-button>
                                            <el-button type="text" size="small">编辑</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="paginatio">
                                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                    :current-page="4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>


    </div>
</template>
<script>
    import breadcrumb from '../components/Breadcrumb'
    import pageTop from '../components/PageTop'
    import echarts from 'echarts'
    import 'echarts/lib/chart/bar';
    export default {
        data() {
            return {
                input3: '',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }]
            }
        },
        mounted() {
            this.leftEcharts = echarts.init(document.getElementById('left_echarts'));
            this.leftEch()
        },
        methods: {
            handleClick(row) {
                return row
            },
            leftEch() {
                this.leftEcharts.setOption({
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        },
        components: {
            breadcrumb,
            pageTop
        }
    }
</script>
<style>
    .page-container {
        /* padding: 20px 30px; */
    }

    .page-container-title {
        color: #666;
        font-weight: 700;
        padding: 20px 0;
    }

    .data-box {
        height: 327px;
        border: 1px solid rgb(204, 204, 204);
        border-radius: 4px;
    }

    .data-box-right {
        margin-left: 20px;
    }
</style>