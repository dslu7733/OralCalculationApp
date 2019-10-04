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

					<el-row>
						<el-col :span="9">
							<div class="grid-content bg-purple-dark">练习范围</div>
						</el-col>

						<el-col :span="15">
							<div class="grid-content bg-purple-dark">
								题目
							</div>
						</el-col>
					</el-row>


					<el-row>
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


				</div>
			</el-main>

		</el-container>
	</div>

</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'

	export default {
		name: 'pratice',
		data() {
			return {
				problemNumOpt: [10, 20, 30, 60, 100],
				problemNum: 30
			}
		},
		components: {
			NavBar
		}
	}
</script>

<style>
	#pratice {
		background-color: #f5f6f7;
		height: 100vh;
		position: relative;
	}

	.main {
		background-color: whitesmoke;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		border-radius: 4px;
		height: 80vh;
		weight: 70vh;
		position: relative;

	}

	.main .title {
		top: 10px;
		left: 10px;
		position: relative;
	}

	.grid-content {
		font-size: small;
		top: 30px;
		left: 10px;
		position: relative;
	}
</style>
