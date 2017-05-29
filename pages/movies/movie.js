var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["内地电影", "日本电影"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        movies: [],
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
        wx.request({
	url: 'http://localhost:3000/api/v1/movies.json', 
	header: {
	    'content-type': 'application/json'
	},
	success: function(res) {
         that.setData({
            movies: res.data.movies
          });
	}
      });
 
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});
