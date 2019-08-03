<template>
	<div>
		<el-container>
			<el-container>
				<el-header style="text-align: right; font-size: 12px; background-color: #20a0ff;" width="100%">
					<span style="float: left; font-size: 21px; color: #fff;">微人事</span>
				  <el-dropdown>
					<i class="el-icon-setting"></i>
					<el-dropdown-menu slot="dropdown">
					  <el-dropdown-item>查看</el-dropdown-item>
					  <el-dropdown-item>新增</el-dropdown-item>
					  <el-divider></el-divider>
					  <el-dropdown-item>删除</el-dropdown-item>
					</el-dropdown-menu>
				  </el-dropdown>
				  <span>系统管理员</span>
				  <i class="el-icon-user-solid"></i>
				</el-header>
			</el-container>
		</el-container>
		</div>
</template>

<script>
export default {
	name:'ccw',
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>
