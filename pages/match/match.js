//logs.js
Page({
  data: {
  tabs: ["一起去", "和我去"],
  activeIndex: 0,
  sliderOffset: 0,
  sliderLeft: 0,
  users: [
      {
        "nick_name": "gyorou",
        "gender": "male",
        "age": "26",
        "avatar_url": "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLY2XPTsa57elQajZZP2ZulZtxSpiaiaTjqLetMHia30bkJWQyPASB8Z5a3TXago2ucicqJoJTX6VHLaw/0"
      },
      {
        "nick_name": "gyorou",
        "gender": "male",
        "age": "26",
        "avatar_url": "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLY2XPTsa57elQajZZP2ZulZtxSpiaiaTjqLetMHia30bkJWQyPASB8Z5a3TXago2ucicqJoJTX6VHLaw/0"
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
})
