// pages/swiper/index.js
Page({
    
      /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    autoplay: true,//自动滚动
    indicator: true,//亮出指示器
    //  text: "巴黎 （法国首都） 编辑巴黎（Paris），是法兰西共和国的首都和最大城市，也是法国的政治、经济、文化和商业中心，世界四个国际大都市之一，其余三个分别为纽约、伦敦和东京。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸，城市中心坐标为北纬48°52′、东经2°25′。广义的巴黎有小巴黎和大巴黎之分。小巴黎指大环城公路以内的巴黎城市内，面积105.4平方公里，人口200多万；大巴黎包括城区周围的上塞纳省、瓦勒德马恩省、塞纳-圣但尼省、伊夫林省、瓦勒德瓦兹省、塞纳-马恩省和埃松省七个省，共同组成巴黎大区，这片地区在古代就已经被称作“法兰西岛”（ile-de - france），面积达12000平方公里，人口约1100万（2016年），几乎占全国人口的五分之一。[1] 巴黎建都已有1400多年的历史，它不仅是法国，也是西欧的政治、经济和文化中心。2016年，巴黎的地区生产总值已达到7350.6亿美元。2017年8月1日，国际奥委会宣布，巴黎成为2024年奥运会主办城市。2018年1月20日，法国总理爱德华·菲利普正式向法国负责世博会申办工作的部际代表帕斯卡尔·拉米提出，出于财政预算方面的考虑，巴黎将退出申办2025年世博会。[2] "
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("解剖JSON数据中========生命周期函数--监听页面加载》》》onLoad》")
      var self = this
      self.setData({
          loading: true
      })
      wx.request({
          url: 'http://app.stfzsc.com/ProductWebService.asmx/GetProduct?productCode=LYHZ17801',
// http://app.stfzsc.com/ProductWebService.asmx/GetProduct
//http://news-at.zhihu.com/api/4/news/latest
          header: {
              'content-type': 'application/json'
          },

          success: function (res) {

              wx.showToast({
                  title: "成功",
                  icon: 'success',
                  duration: 2000

              })
              console.log("解剖JSON数据中========》》》》")
              self.setData({
                  ttt: res.data.stories,
                  imgUrls: res.data.stories
              })
            
              console.log(res.data)
          },
          fail: function (res) {
              wx.showToast({
                  title: res.data,
                  icon: 'success',
                  duration: 2000
              })
          }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("解剖JSON数据中========生命周期函数--监听页面初次渲染完成》》》onReady》")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log("解剖JSON数据中========生命周期函数--监听页面显示》》》onShow》")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
      console.log("解剖JSON数据中========生命周期函数--监听页面隐藏》》》onHide》")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
      console.log("解剖JSON数据中========生命周期函数--监听页面卸载》》》onUnload》")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      console.log("解剖JSON数据中========页面相关事件处理函数--监听用户下拉动作》》》onPullDownRefresh》")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log("解剖JSON数据中========页面上拉触底事件的处理函数》》》onReachBottom》")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      console.log("解剖JSON数据中========用户点击右上角分享》》》onShareAppMessage》")
  }
})