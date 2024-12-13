<script setup>

function download() {
  const fileUrl = 'https://www.abc100.top/app/android/bx_english.apk'; // 文件的URL地址
  //window.open(fileUrl);
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', 'bx_english.apk');
  link.click();
}
// 判断是否为微信浏览器
function isWeixinBrowser() {
  let ua = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua) ? true : false;
}

if (isWeixinBrowser()) {
  // 在微信浏览器中，使用window.location.href进行页面跳转
  alert("请使用浏览器打开")
} else {
  // 在非微信浏览器中，使用window.open进行页面跳转
  download();
}
</script>

<template>
  <div>
    下载
  </div>

</template>

<style scoped lang="scss">

</style>