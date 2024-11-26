<script setup>

function download(){
  const fileUrl = 'https://www.abc100.top/app/android/bx_english.apk'; // 文件的URL地址
  //window.open(fileUrl);
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'bx_english.apk');
  link.click();
}
</script>

<template>
  <div style="margin: 10px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <b>安装包信息</b>
        <el-button style="float: right; padding: 3px 0" type="text"></el-button>
      </div>
      <div>
        <p>当前版本：1.0.0</p>
        <p>发布时间：2024年7月17日</p>
        <p>安装包大小：22M</p>
        <p>支持的平台：安卓</p>
      </div>
    </el-card>

    <div style="margin-top: 20px">
      <el-alert
          title="系统支持说明"
          type="warning"
          description="当前只有安卓版本，后续会发布IOS版本，如果有软件相关疑问，请直接联系我！ "
          show-icon>
      </el-alert>
      <div style="margin-top: 10px">
        <el-alert
            title="微信号：  QQ185656746  "
            type="success"
            :closable="false">
        </el-alert>
      </div>
    </div>

    <div style="margin-top: 30px;text-align: center">
      <el-button @click="download()" type="success" size="large">立即下载</el-button>
    </div>

  </div>

</template>

<style scoped lang="scss">

</style>