Page({
  data: {
  movie: { 
  "rating": {
    "max": 10,
    "average": 9.2,
    "stars": "50",
    "min": 0
  },
  "liked": false,
  "reviews_count": 2379,
  "wish_count": 52176,
  "douban_site": "",
  "year": "2016",
  "images": {
    "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2457983084.jpg",
    "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.jpg",
    "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2457983084.jpg"
  },
  "id": "26387939",
  "mobile_url": "https://movie.douban.com/subject/26387939/mobile",
  "title": "摔跤吧！爸爸",
  "collect_count": 104324,
  "summary": "马哈维亚·辛格·珀尕（阿米尔·汗 Aamir Khan 饰）曾是印度国家摔跤冠军，因生活所迫放弃摔跤。他希望让儿子可以帮他完成梦想——赢得世界级金牌。结果生了 四个女儿本以为梦想就此破碎的辛格却意外发现女儿身上的惊人天赋，看到冠军希望的他决定不能让女儿的天赋浪费，像其他女孩一样只能洗衣做饭过一生 ，再三考虑之后，与妻子约定一年时间按照摔跤手的标准训练两个女儿：换掉裙子 、剪掉了长发，让她们练习摔跤，并赢得一个又一个冠军，最终赢来了成为榜样激励千千万万女性的机会……",
  "casts": [
    {
      "alt": "https://movie.douban.com/celebrity/1031931/",
      "avatars": {
        "small": "https://img1.doubanio.com/img/celebrity/small/13628.jpg",
        "large": "https://img1.doubanio.com/img/celebrity/large/13628.jpg",
        "medium": "https://img1.doubanio.com/img/celebrity/medium/13628.jpg"
      },
      "name": "阿米尔·汗",
      "id": "1031931"
    },
   ],
  "directors": [
    {
      "alt": "https://movie.douban.com/celebrity/1031931/",
      "avatars": {
        "small": "https://img1.doubanio.com/img/celebrity/small/13628.jpg",
        "large": "https://img1.doubanio.com/img/celebrity/large/13628.jpg",
        "medium": "https://img1.doubanio.com/img/celebrity/medium/13628.jpg"
      },
      "name": "阿米尔·汗",
      "id": "1031931"
    },
   ]
  }
  },
  onLoad: function (params) {
    console.log(params.id);
  }
})
