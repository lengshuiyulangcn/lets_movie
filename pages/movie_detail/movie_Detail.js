Page({
  data: {
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
  edit_date: function(e) {
     wx.navigateTo({
        url: '../date/edit?id=' + this.data.movie.id,
         success: function(res){
	  console.log(res);
        },
	 fail: function(err) {
	  console.log(err);
	},
	complete: function() {
	}
     })
   }
})
