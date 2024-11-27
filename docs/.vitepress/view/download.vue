<script setup>

function download() {
  const fileUrl = 'https://www.abc100.top/app/android/bx_english.apk'; // 文件的URL地址
  //window.open(fileUrl);
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'bx_english.apk');
  link.click();
}
</script>

<template>
  <div>
    下载
  </div>

</template>

<style scoped lang="scss">

</style>