<script setup>
var isWeChat = false;
var isMobile = false;

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

function checkIsMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
        alert("复制成功！")
      })
      .catch(err => {
        console.error('Error in copying text: ', err);
        alert("复制失败！")
      });
}

isMobile = checkIsMobile()

if (isWeixinBrowser()) {
  isWeChat = true
  // 在微信浏览器中，使用window.location.href进行页面跳转
  if (confirm('请复制链接到浏览器下载易边学APP')) {
    copyTextToClipboard("https://oaak.netlify.app/download.html")
    //alert("复制成功")
    // 用户单击了确定按钮+
  } else {
    // 用户单击了取消按钮
    //alert("点击了取消按钮")
  }

} else {
  isWeChat = false
  // 在非微信浏览器中，使用window.open进行页面跳转
  // download();
}
</script>

<template>


  <div :class="{'center-box':isMobile}">
    
    <div v-if="isWeChat">
      <div>下载地址：https://oaak.netlify.app/download.html</div>
      <span data-v-2dba8ca9="" data-v-72cc4481="" style="margin-left: 0px;margin-top: 20px" class="VPButton medium brand"
          rel="noreferrer" @click="copyTextToClipboard('https://oaak.netlify.app/download.html')"> 微信无法下载，请点击这里复制链接到浏览器下载。 </span>
      </div>

    <span v-if="!isWeChat" data-v-2dba8ca9=""  data-v-72cc4481="" class="VPButton medium brand"
          rel="noreferrer" @click="download()"> 点击立即下载 </span>

  </div>

</template>

<style scoped>
.center-box {
  text-align: center;
}

a {
  text-decoration: none;
}
</style>