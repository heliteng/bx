<template>
  <div v-if="isWeChat">
    <div style="position: fixed;background: #000000;height: 100%;width: 100%;top: 0;left: 0;opacity: 0.85">
    </div>
    <img src="/images/open_browser.png" style="position: fixed;height: auto;width: 100%;top: 0;left: 0;"/>
  </div>

  <div :class="{'center-box':isMobile}">
    <div v-if="isWeChat">
      <div>微信无法下载文件，请复制链接到浏览器打开！</div>
      <div>下载地址：https://oaak.netlify.app/download.html</div>
      <span style="margin-left: 0px;margin-top: 20px" class="VPButton medium brand button-v1"
            rel="noreferrer" id="myButton" ref="myButton"
            @click="copyTextToClipboard('https://oaak.netlify.app/download.html')"> 复制下载链接 </span>
    </div>

    <span v-if="!isWeChat" class="VPButton medium brand button-v1"
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

.button-v1 {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  border-radius: 20px;
  padding: 8px 20px;
  line-height: 38px;
  font-size: 14px;

}
</style>

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
  return (
      typeof window.orientation !== "undefined" || // 判断是否存在window.orientation属性，此属性在移动设备上一般存在
      navigator.userAgent.indexOf('IEMobile') !== -1 || // 判断是否为Windows Phone
      navigator.userAgent.indexOf('iPhone') !== -1 || // 判断是否为iPhone
      navigator.userAgent.indexOf('Android') !== -1 && navigator.userAgent.indexOf('Mobile') !== -1 || // 判断是否为Android手机
      navigator.userAgent.indexOf('BlackBerry') !== -1 || // 判断是否为BlackBerry
      navigator.userAgent.indexOf('Opera Mini') !== -1 // 判断是否为Opera Mini浏览器
  );
}

var repeat = 0

function copyTextToClipboard(text) {
  repeat++
  if (repeat > 20) {
    repeat = 0
    return
  }
  navigator.clipboard.writeText(text)
      .then(() => {
        repeat = 0
        console.log('Text copied to clipboard');
        alert("复制成功！")
      })
      .catch(err => {
        console.log('复制失败:' + repeat);
        setTimeout(() => {
          copyTextToClipboard(text)
        }, 300)

      });
}

isMobile = checkIsMobile()

if (isWeixinBrowser()) {
  isWeChat = true
  // 在微信浏览器中，使用window.location.href进行页面跳转
  /*if (confirm('请复制链接到浏览器下载易边学APP')) {
    copyTextToClipboard("https://oaak.netlify.app/download.html")
  } else {
  }*/

} else {
  isWeChat = false
  // 在非微信浏览器中，使用window.open进行页面跳转
  // download();
}

</script>