<script setup>
var isWeChat = false;

function download() {
  const fileUrl = 'http://182.42.152.143:8000/word/version/download/android'; // 文件的URL地址
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
  isWeChat = true
  // 在微信浏览器中，使用window.location.href进行页面跳转
  if (confirm('确定要继续吗？')) {
    alert("点击了确定")
   // 用户单击了确定按钮
  } else {
   // 用户单击了取消按钮
    alert("点击了取消按钮")
  }

} else {
  isWeChat = false
  // 在非微信浏览器中，使用window.open进行页面跳转
  // download();
}
</script>

<template>
  <div class="download-box">
    <span v-if="!isWeChat" data-v-2dba8ca9="" data-v-72cc4481="" class="VPButton medium brand"
          rel="noreferrer"> 点击立即下载 </span>
  </div>

</template>

<style scoped>
.download-box {
  text-align: center;
}

a {
  text-decoration: none;
}
</style>