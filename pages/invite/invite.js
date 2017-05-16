//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    user: {
        "nick_name": "gyorou",
        "gender": "male",
        "age": "26",
        "avatar_url": "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLY2XPTsa57elQajZZP2ZulZtxSpiaiaTjqLetMHia30bkJWQyPASB8Z5a3TXago2ucicqJoJTX6VHLaw/0"
      },
    date: "2017-05-27 16:00",
    movie: {
      "images": {
            "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2457983084.jpg",
            "small": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2457983084.jpg",
            "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2457983084.jpg"
       },
      "title": "摔跤吧！爸爸",
      "casts": [{"id": 1, "name": "小狗"}],
      "directors": [{"id": 1, "name": "小狗"}],
      "collect_count": 104324,
      "summary": "马哈维亚·辛格·珀尕（阿米尔·汗 Aamir Khan 饰）曾是印度国家摔跤冠军，因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想——赢得世界级金牌。结果生了 四个女儿本以为梦想就此破碎的辛格却意外发现女儿身上的惊人天赋，看到冠军希望的他决定不能让女儿的天赋浪费，像其他女孩一样只能洗衣做饭过一生 ，再三考虑之后，与妻子约定一年时间按照摔跤手的标准训练两个女儿：换掉裙子 、剪掉了长发，让她们练习摔跤，并赢得一个又一个冠军，最终赢来了成为榜样激励千千万万女性的机会……",
    }
  },
  onLoad: function () {
  },
  onShareAppMessage: function () {
    return {
      title: this.data.user.nick_name + '想找人看' + this.data.movie.title,
      path: '/pages/invite/invite?user_id=123&movie_id=234',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }
})
