$(function(){
    //给所有页面的img图片加上path路径
    var imgPath = "images/";
    $("img").each(function(){
        imgName = this.name;
        this.src = imgPath+imgName;
    })
    // 解决ios音乐不自动播放的问题
    autoPlayAudio();
})
// 背景音乐播放
function Mplay(){
	$(".music-play").hide()
	$(".music-pause").show()
	var globalAudio=document.getElementById("myaudio");
    globalAudio.pause();
}
// 背景音乐暂停
function Mpause(){
	$(".music-play").show()
	$(".music-pause").hide()
	var globalAudio=document.getElementById("myaudio");
    globalAudio.play();
}
// 微信接口初始化背景音乐
function autoPlayAudio() {
    wx.config({
         debug: false,
         appId: '',
         timestamp: 1,
         nonceStr: '',
         signature: '',
         jsApiList: []
     });
     wx.ready(function() {
         var globalAudio=document.getElementById("myaudio");
         globalAudio.play();
     });
 };

