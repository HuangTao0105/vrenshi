<template>
	<div>
		<index-daohang></index-daohang>
		<index-swiper></index-swiper>
		<div>
			<p class="a1">
				<string><a href="#">首页</a></string><i class="el-icon-arrow-right">工资账套管理</i>
			</p>
		</div>
		<div class="demo-input-suffix">
			<el-row class="button1">
				<el-button type="primary">添加账单</el-button>
			</el-row>
			<el-row class="button2">
				<el-button type="success" icon="el-icon-refresh" @click="dialogTableVisible = true"></el-button>
				<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
					<el-table :data="gridData">
						<el-table-column property="date" label="日期" width="150"></el-table-column>
						<el-table-column property="name" label="姓名" width="200"></el-table-column>
						<el-table-column property="address" label="地址"></el-table-column>
				</el-table>
				</el-dialog>
			</el-row>
		</div>

		<div class="table">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 70%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="日期" width="120">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="address" label="地址" show-overflow-tooltip>
				</el-table-column>
				<el-table-column prop="caozuo" label="删除" show-overflow-tooltip>
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="primary" size="small">删除</el-button>

					</template>
				</el-table-column>
				<el-table-column prop="caozuo" label="编辑" show-overflow-tooltip>
					<el-button type="primary" size="small">编辑</el-button>
				</el-table-column>
			</el-table>
			<div class="button3">
				<el-button type="danger " round>危险按钮</el-button>
			</div>
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
				input2: '',
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
					address: '上海市普陀区金沙江路 1518 弄',
				}],
				multipleSelection: []
			}
		},
		methods: {
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
		
		
	}
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

	.input {
		top: 120px;
		left: 226px;
		position: absolute;
		width: 350px;
	}

	.button1 {
		top: 120px;
		left: 230px;
		position: absolute;
	}

	.button2 {
		top: 120px;
		right: 100px;
		position: absolute;
	}

	.button3 {
		margin-top: 20px;
		position: absolute;
	}

	.table {
		top: 170px;
		left: 230px;
		width: 100%;
		position: absolute;
	}
</style>
