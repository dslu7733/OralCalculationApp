<template>
  <div class="block">
    <el-cascader v-model="value"
                 :options="options"
                 placeholder="请选择年级"
                 :props="{ expandTrigger: 'hover' }"
                 @change="handleChange"></el-cascader>
  </div>
</template>

<script>
export default {
  name: 'selectGrade',
  props: {
    grade: {
      type: Array
    }
  },
  data () {
    return {
      value: this.grade || [],
      options: [
        {
          value: 'gradeOne',
          label: '一年级',
          children: [{
            value: 'firstSemester',
            label: '上册'          },
          {
            value: 'secondSemester',
            label: '下册'
          }]
        },
        {
          value: 'gradeTwo',
          label: '二年级',
          children: [{
            value: 'firstSemester',
            label: '上册'          },
          {
            value: 'secondSemester',
            label: '下册'
          }]
        },
        {
          value: 'gradeThree',
          label: '三年级',
          children: [{
            value: 'firstSemester',
            label: '上册'          },
          {
            value: 'secondSemester',
            label: '下册'
          }]
        }
      ]
    }
  },
  methods: {
    handleChange (value) {
      this.$data.value = value
    }
  }
  // created () {
  //   if (this.$store.state.user.name !== '') {
  //     this.$data.value = this.$store.state.user.grade.slice()
  //   }
  // }
}
</script>

<style>
</style>
