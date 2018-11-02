<template>
	<div class="media">
		<el-upload
		  class="upload-demo"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :on-preview="handlePreview"
		  :on-remove="handleRemove"
		  :file-list="fileList2"
		  list-type="picture">
		  <el-button size="small" type="primary">点击上传</el-button>
		  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>

		 <el-button type="text" @click="open">点击打开 Message Box</el-button>
	</div>
</template>
<script type="text/javascript">
	export default {
	    data() {
	      return {
	        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
	      };
	    },
	    methods: {
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePreview(file) {
	        console.log(file);
	      },
	      open() {
	              this.$alert('这是一段内容', '标题名称', {
	                confirmButtonText: '确定',
	                callback: action => {
	                  this.$message({
	                    type: 'info',
	                    message: `action: ${ action }`
	                  });
	                  this.$notify({
	                           title: '提示',
	                           message: '这是一条不会自动关闭的消息',
	                           duration: 0
	                         });
	                }
	              });
	            }
	    }
	  }
</script>
<style lang="scss" scoped="scoped">
	input[type=file]{
		display: none;
	}
</style>