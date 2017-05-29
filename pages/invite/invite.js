//logs.js
var app = getApp()
Page({
  data: {
    user: {},
    id: 1,
    inviter: {},
    date: "2017-05-27 16:00",
    movie: {}
  },
  onLoad: function (params) {
    var that = this;
    if(!app.user_token()){
      app.getUserInfo((userInfo)=>{
        wx.request({
         url: 'http://localhost:3000/api/v1/invites/1',
         method: "get",
         header: {
                   'content-type': 'application/json',
                   'Authorization': 'Bearer ' + wx.getStorageSync('access_token') 
                 },
         success: function(res) {
           console.log(res);
           that.setData({inviter: res.data.invite.inviter, user: res.data.invite.user, movie: res.data.invite.movie});
         }
         })
     })
    }   
    wx.request({
     url: 'http://localhost:3000/api/v1/invites/1',
     method: "get",
     header: {
               'content-type': 'application/json',
               'Authorization': 'Bearer ' + wx.getStorageSync('access_token') 
             },
     success: function(res) {
       console.log(res);
       that.setData({inviter: res.data.invite.inviter, user: res.data.invite.user, movie: res.data.invite.movie});
     }
     })
  },
  onShareAppMessage: function () {
    return {
      title: this.data.user.nick_name + '想找人看' + this.data.movie.title,
      path: '/pages/invite/invite?id='+ this.data.id,
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }
})
