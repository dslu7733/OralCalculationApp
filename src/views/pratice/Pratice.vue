<template>

	<div id='pratice' class="wrapper">
		<el-container>

			<el-header height='30'>
				<nav-bar>
					<div slot="center">每日一练</div>
				</nav-bar>
			</el-header>

			<el-main>
				<div class="main">
					<p class="title">口算练习</p>

					<pratice-swiper :banners='banners' class="pratice-swiper"></pratice-swiper>

					<div class="select-grade">
						<select-grade />
					</div>

					<el-row class='el-row1'>
						<el-col :span="9">
							<div class="grid-content bg-purple-dark">练习范围</div>
						</el-col>

						<el-col :span="15">
							<div class="grid-content bg-purple-dark">
								<el-button type="primary" plain>10以内加法</el-button>
							</div>
						</el-col>
					</el-row>


					<el-row class='el-row2'>
						<el-col :span="9">
							<div class="grid-content bg-purple-dark">题目数量</div>
						</el-col>
						<el-col :span="12">
							<div class="grid-content bg-purple-dark">

								<el-select v-model="problemNum" filterable :placeholder="String(problemNum)">
									<el-option v-for="item in problemNumOpt" :key="item" :value="item">
									</el-option>
								</el-select>

							</div>
						</el-col>
					</el-row>

					<div class='el-row3'>
						<el-button type="success" round>开始练习</el-button>
					</div>
					
				</div>
			</el-main>

		</el-container>
	</div>

</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import PraticeSwiper from 'views/pratice/childComps/praticeSwiper'
	import SelectGrade from 'views/pratice/childComps/selectGrade'

	export default {
		name: 'pratice',
		data() {
			return {
				problemNumOpt: [10, 20, 30, 60, 100],
				problemNum: 30,

				banners: [{
						id: 1,
						imge: 'http://img5.imgtn.bdimg.com/it/u=1539145928,3460546129&fm=11&gp=0.jpg'
					},
					{
						id: 2,
						imge: 'http://img5.imgtn.bdimg.com/it/u=1539145928,3460546129&fm=11&gp=0.jpg'
					}
				]
			}
		},
		components: {
			NavBar,
			PraticeSwiper,
			SelectGrade
		}
	}
</script>

<style>
	#pratice {
		background-color: #f5f6f7;
		height: 100vh;
		position: relative;
	}

	#pratice .main {
		background-color: whitesmoke;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		border-radius: 4px;
		height: 75vh;
		weight: 70vh;
		position: relative;

	}

	#pratice .main .title {
		top: 10px;
		left: 10px;
		position: relative;
	}

	#pratice .grid-content {
		font-size: small;
		top: 30px;
		left: 10px;
		position: relative;
	}

	#pratice .pratice-swiper {
		top: 7%;
		position: relative;
	}

	#pratice .select-grade {
		top: 13%;
		position: relative;
	}

	#pratice .el-row1 {
		top: 14%;
		position: relative;
	}

	#pratice .el-row2 {
		top: 20%;
		position: relative;
	}

	#pratice .el-row3 {
		top: 30%;
		position: relative;
		text-align: center;
	}
</style>
