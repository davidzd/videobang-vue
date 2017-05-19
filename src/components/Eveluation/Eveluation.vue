<template>
  <div class="eveluation">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="嵌入方式">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="视频前贴片" name="type"></el-checkbox>
          <el-checkbox label="视频后贴片" name="type"></el-checkbox>
          <el-checkbox label="持续悬浮" name="type"></el-checkbox>
        </el-checkbox-group>

        <p class="comment"><i class="el-icon-warning"></i>
          示例</p>
        <p class="comment">注: 视频的植入方式， 您可以选择将广告插入至短视频的前端，尾端，或者持续悬浮您的广告图标在短视频的某个位置， 您也可以同时选择多项，将您的广告信息更加完整的覆盖在投放的短视频中, 同时将会影响您的最终价格.</p>
      </el-form-item>

      <el-form-item label="植入时间">
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"></el-time-picker>
        </el-col>
        <p class="comment">注: 视频的植入时间， 根据您所选择植入时间进行估价.</p>
      </el-form-item>

      <el-form-item label="定制标题">
        <el-switch on-text="" off-text="" v-model="form.link"></el-switch>
        <p class="comment">注: 您的广告描述是否需要被包含在短视频的标题中.</p>
      </el-form-item>

      <el-form-item label="包含链接">
        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        <p class="comment">注: 您的广告描述是否需要被包含链接</p>
      </el-form-item>

      <el-form-item label="预算">
        <el-select v-model="form.region" placeholder="请选择广告预算">
          <el-option label="一个亿" value="一个亿"></el-option>
          <el-option label="去你妈" value="去你妈"></el-option>
        </el-select>
        <p class="comment">注: 您当前准备的预算, 计算能够给您带来多少的浏览量。</p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          link: false,
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.eveluation {
  padding: 2% 2%;
  padding-top: 10px;
  text-align: left;
}

.comment {
  clear: both;
  width: 80%;
  color: gray;
  font-size: 11px;
  line-height: 15px
}


</style>
