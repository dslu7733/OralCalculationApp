<template>
	<div class="block">
	  <el-cascader
	    v-model="value"
	    :options="options"
		:placeholder="grade"
		:props="{ expandTrigger: 'hover' }"
	    @change="handleChange"></el-cascader>
	</div>
</template>

<script>
	export default {
		name:'selectGrade',
		data(){
			return {
				grade: '选择年级',
				options: [
					{
						value: 'grageOne',
						label: '一年级',
						children: [{
							value: 'firstSemester',
							label: '上册' },
							{
							value: 'secondSemester',
							label: '下册'
						}]
					},
					{
						value: 'grageTwo',
						label: '二年级',
						children: [{
							value: 'firstSemester',
							label: '上册' },
							{
							value: 'secondSemester',
							label: '下册'
						}]
					},
					{
						value: 'grageThree',
						label: '三年级',
						children: [{
							value: 'firstSemester',
							label: '上册' },
							{
							value: 'secondSemester',
							label: '下册'
						}]
					}
				],
				value: []
			}
		},
		methods:{
			handleChange(value){
				console.log(value)
			}
		}
	}
</script>

<style>
</style>
