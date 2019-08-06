<template>
	<div>
		<index-daohang></index-daohang>
		<index-swiper></index-swiper>
		<div>
			<p class="a1">
				<string><a href="#">首页</a></string><i class="el-icon-arrow-right">员工账套设置</i>
			</p>
		</div>
		<div>
			<el-tabs class="tabs" v-model="activeName" type="card" @tab-click="handleClick">
				<el-tab-pane label="部门管理" name="first">
					<el-input style="width: 50%;float:left;" v-model="input" placeholder="请输入内容"></el-input>
					<br />
					<br />
					<br />
					<el-tree style="width: 50%;float:left" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
				</el-tab-pane>
				<el-tab-pane label="职位管理" name="second">
					<el-input style="width: 50%;float:left;" v-model="input" placeholder="请输入内容"></el-input>
					<el-button type="primary" size="small">添加</el-button>
					<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="日期" width="120">
							<template slot-scope="scope">{{ scope.row.date }}</template>
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="120">
						</el-table-column>
						<el-table-column prop="address" label="地址" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="caozuo" label="操作" show-overflow-tooltip>
							<el-button type="primary" size="small">删除</el-button>
						</el-table-column>
					</el-table>
					</el-table>
					<div style="margin-top: 20px">
						<el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
						<el-button @click="toggleSelection()">取消选择</el-button>
					</div>
				</el-tab-pane>
				<el-tab-pane label="职称管理" name="third">
					<el-input style="width: 30%;float:left;" v-model="input" placeholder="请输入内容"></el-input>

					<el-button type="primary" size="small">添加</el-button>
					<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="日期" width="120">
							<template slot-scope="scope">{{ scope.row.date }}</template>
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="120">
						</el-table-column>
						<el-table-column prop="address" label="地址" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="caozuo" label="操作" show-overflow-tooltip>
							<el-button type="primary" size="small">删除</el-button>
						</el-table-column>
					</el-table>
					</el-table>
					<div style="margin-top: 20px">
						<el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
						<el-button @click="toggleSelection()">取消选择</el-button>
					</div>
				</el-tab-pane>
				<el-tab-pane label="奖惩规则" name="fourth">定时任务补偿</el-tab-pane>
				<el-tab-pane label="权限组" name="sss">
					<el-input style="width: 20%; float:left" placeholder="请输入内容" v-model="input1">
						<template slot="prepend">ROLE_</template>
					</el-input>
					<el-input style="width: 20%;float:left;" v-model="input" placeholder="请输入内容"></el-input>
					<el-button style="float:left;" type="primary" size="small">添加</el-button>
					<br />
					<br />
					<br />
					<div class="">
						<el-collapse style="" v-model="activeNames" @change="handleChange">
							<el-collapse-item title="一致性 Consistency" name="1">
								
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span>卡片名称</span>
										<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
									</div>
									<div v-for="o in 4" :key="o" class="text item">
										{{'列表内容 ' + o }}
									</div>
								</el-card>
								
							</el-collapse-item>
						</el-collapse>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>

	</div>
</template>

<script>
	import IndexSwiper from '../cebianlan/chebianlan.vue'
	import IndexDaohang from '../index/index.vue'
	export default {
		components: {
			IndexSwiper,
			IndexDaohang
		},
		data() {
			return {
				activeName: 'first',
				data: [{
					label: '股东会',
					children: [{
						label: '董事会',
						children: [{
							label: '总办'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				multipleSelection: []

			};
		},

		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleNodeClick(data) {
				console.log(data);
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		},

	};
</script>

<style>
	a {
		color: #000000;
		text-decoration: none
	}

	.a1 {
		font-size: 16px;
		top: 60px;
		left: 226px;
		position: absolute;
	}

	.tabs {
		width: 85.2%;
		top: 110px;
		left: 226px;
		position: absolute;
	}

	.tree {
		width: 50%;
		top: 220px;
		left: 226px;
		position: absolute;
	}

	.el-select .el-input {
		width: 20%;
	}

	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}
	 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
