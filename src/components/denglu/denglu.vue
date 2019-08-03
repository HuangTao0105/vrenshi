<template>
	<div>
		<div class="beijing">
		<p class="p1">系统登录</p>
		<form  action="">
			<input class="username" type="text" name="" size="40px">
			<input class="password" type="password" name="" size="40px">
			<button class="button">登录</button>
		</form>
		</div>
	</div>
	
</template>

<script>
</script>

<style>
	body{
		margin: 0px;
	}
	.p1{
		top: 30px;
		color: black;
		font-size: 20px;
		position:relative ;
	}
	.beijing{
		width: 400px;
		height: 350px;
		left: 580px;
		top: 110px;
		position:relative;
		color: white;
		border-radius:5%;
		box-shadow: -3px 2px 10px 8px gainsboro;
	}
	.username{
		top: 50px;
		height: 30px;
		position:relative;
	}
	.password{
		top: 80px;
		height: 30px;
		position:relative;
	}
	.button{
		color: white;
		top: 150px;
		width: 300px;
		height: 40px;
		background-color:dodgerblue;
		position:relative;
	}
	.checkbox{
		top: 140px;
		position:relative;
	}
</style>
