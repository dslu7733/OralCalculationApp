<template>
	<div id="profile">
		
		<el-header height='30px'  >
			<img src="~assets/img/profile/bg-img.jpeg" class='bg-img'/>
		</el-header>
		
		<el-main class='el-main'>
			
<div class="options">
							<el-row>错题本</el-row>
				<el-row>练习历史</el-row>
				<el-row>我的消息</el-row>
			</div>
			
		</el-main>
		
	</div>
</template>

<script>
</script>

<style>
	#profile{
		background-color: #f5f6f7;
		height: 100vh;
		position: relative;
	}
	
	#profile .bg-img{
		position: absolute;
		top: -5%;
		left: 0;
		right: 0;
		max-width: 100%;
	}
	
	#profile .el-main{
		background-color: whitesmoke;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		border-radius: 20px;
		height: 60vh;
		top: 20%;
		margin: 5%;
		position: relative;
		text-align: center;
	}
</style>
