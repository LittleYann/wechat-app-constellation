//index.js
//获取应用实例
var app = getApp()
Page({

  data: {
    constellation: [
      {
        astroid: "1",
        astroname: "白羊座",
        date: "3-21~4-19",
        pic: "http://api.jisuapi.com/astro/static/images/baiyang.png"
      },
      {
        astroid: "2",
        astroname: "金牛座",
        date: "4-20~5-20",
        pic: "http://api.jisuapi.com/astro/static/images/jinniu.png"
      },
      {
        astroid: "3",
        astroname: "双子座",
        date: "5-21~6-21",
        pic: "http://api.jisuapi.com/astro/static/images/shuangzi.png"
      },
      {
        astroid: "4",
        astroname: "巨蟹座",
        date: "6-22~7-22",
        pic: "http://api.jisuapi.com/astro/static/images/juxie.png"
      },
      {
        astroid: "5",
        astroname: "狮子座",
        date: "7-23~8-22",
        pic: "http://api.jisuapi.com/astro/static/images/shizi.png"
      },
      {
        astroid: "6",
        astroname: "处女座",
        date: "8-23~9-22",
        pic: "http://api.jisuapi.com/astro/static/images/chunv.png"
      },
      {
        astroid: "7",
        astroname: "天秤座",
        date: "9-23~10-23",
        pic: "http://api.jisuapi.com/astro/static/images/tianping.png"
      },
      {
        astroid: "8",
        astroname: "天蝎座",
        date: "10-24~11-22",
        pic: "http://api.jisuapi.com/astro/static/images/tianxie.png"
      },
      {
        astroid: "9",
        astroname: "射手座",
        date: "11-23~12-21",
        pic: "http://api.jisuapi.com/astro/static/images/sheshou.png"
      },
      {
        astroid: "10",
        astroname: "摩羯座",
        date: "12-22~1-19",
        pic: "http://api.jisuapi.com/astro/static/images/mojie.png"
      },
      {
        astroid: "11",
        astroname: "水瓶座",
        date: "1-20~2-18",
        pic: "http://api.jisuapi.com/astro/static/images/shuiping.png"
      },
      {
        astroid: "12",
        astroname: "双鱼座",
        date: "2-19~3-20",
        pic: "http://api.jisuapi.com/astro/static/images/shuangyu.png"
      }
    ],
    hidden: false,
    imgUrls: [  
       {  
          link:'/pages/index/index',  
          url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'   
       },{  
          link:'/pages/logs/logs',  
          url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'   
       },{  
          link:'/pages/test/test',  
          url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'   
       }   
    ],  
    indicatorDots: true,  
    autoplay: true,  
    interval: 5000,  
    duration: 1000,  
    userInfo: {}  
  },
  
  formSubmit: function(e) {
    if(e.detail.value.name == 'admin' && e.detail.value.password =='admin') {
      console.log('登录成功')
       wx.navigateTo({
        url: '../student/student'
       }) 
    } else {
      console.log('登录失败')
    }
  },

  test: function() {
    wx.chooseAddress({
  success: function (res) {
    console.log(res.userName)
    console.log(res.postalCode)
    console.log(res.provinceName)
    console.log(res.cityName)
    console.log(res.countyName)
    console.log(res.detailInfo)
    console.log(res.nationalCode)
    console.log(res.telNumber)
  }
})
  }
})
