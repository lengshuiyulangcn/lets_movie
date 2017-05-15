var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["内地电影", "日本电影"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        movies: [
          {
              "rating": "9.2",
              "pubdate": "2017-05-05",
              "title": "摔跤吧！爸爸",
              "wish": 51979,
              "original_title": "Dangal",
              "collection": 100112,
              "orignal_title": "Dangal",
              "stars": "50",
              "images": {
                    "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2457983084.jpg",
                    "small": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2457983084.jpg",
                    "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2457983084.jpg"
                  },
              "id": "26387939",
              "description": "马哈维亚·辛格·珀尕（阿米尔·汗 Aamir Khan 饰）曾是印度国家摔跤冠军，因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想——赢得世界级金牌。结果生了 四个女儿本以为梦想就此破碎的辛格却意外发现女儿身上的惊人天赋，看到冠军希望的他决定不能让女儿的天赋浪费，像其他女孩一样只能洗衣做饭过一生 ，再三考虑之后，与妻子约定一年时间按照摔跤手的标准训练两个女儿：换掉裙子 、剪掉了长发，让她们练习摔跤，并赢得一个又一个冠军，最终赢来了成为榜样激励千千万万女性的机会……"
          },
          {
              "rating": "7.5",
                "pubdate": "2017-05-12",
                "title": "亚瑟王：斗兽争霸",
                "wish": 9879,
                "original_title": "King Arthur: Legend of the Sword",
                "collection": 2864,
                "orignal_title": "King Arthur: Legend of the Sword",
                "stars": "40",
                "images": {
                      "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2453433569.jpg",
                        "small": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2453433569.jpg",
                        "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2453433569.jpg"
                    },
                "id": "25864124"
          }
        ]
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
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});
