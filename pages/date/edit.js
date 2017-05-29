//logs.js
var app = getApp();
Page({
  data: {
    wechat_id: '',
    date_date: '',
    date_time: '',
    date_location: '',
    date_memo: '',
    movie: {}
  },
  onLoad: function (params) {
    var that = this;
    wx.request({
    url: 'http://localhost:3000/api/v1/movies/'+ params.id, 
    header: {
        'content-type': 'application/json'
    },
    success: function(res) {
     console.log(res.data);
     that.setData({
        movie: res.data.movie
      });
    }
  });
   },
  wechatInput: function(e){
   this.setData({
      wechat_id: e.detail.value
    })
  },
  dateInput: function(e){
   this.setData({
      date_date: e.detail.value
    })
  },
  timeInput: function(e){
   this.setData({
      date_time: e.detail.value
    })
  },
  locationInput: function(e){
   this.setData({
      date_location: e.detail.value
    })
  },
  memoInput: function(e){
   this.setData({
      date_memo: e.detail.value
    })
  },
  inviteHer: function(e){
   var that = this;
   // send invite request      
   wx.request({
     url: 'http://localhost:3000/api/v1/invites',
     data: {
        wechat_id: that.data.wechat_id,
        meet_at: that.data.date_date + " " + that.data.date_time,
        location: that.data.date_location,
        memo: that.data.date_memo,
        movie_id: that.data.movie["id"]
     },
     method: "POST",
     header: {
               'content-type': 'application/json',
               'Authorization': 'Bearer ' + wx.getStorageSync('access_token') 
             },
     success: function(res) {
        console.log(res);
     } });
  },
})
