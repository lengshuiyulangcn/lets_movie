//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  user_token: function(){
   return wx.getStorageSync('access_token');
  },
  getUserInfo:function(cb){
    var that = this
    if(that.user_token != "" && this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
        wx.login({
        success: function (res) {
	  wx.getUserInfo({
	    success: function(resp) {
            that.globalData.userInfo = resp.userInfo;
              wx.request({
                url: 'http://localhost:3000/user_token',
                data: {
                  code: res.code,
                  user_info: that.globalData.userInfo
                },
                method: "POST",
                success: function(res) {
                    wx.setStorageSync('access_token', res.data["jwt"]);
                cb(this.globalData.userInfo);
                }
              })
            }})
        }});
    }
  },
  globalData:{
    userInfo:null
  }
})
