
import Mock from 'mockjs'
const Random = Mock.Random
// const testData = function () {
//   const articles = []
//   for (let i = 0; i < 100; i++) {
//     const newArticleObject = {
//       "id|+1":1,
//       "shopId|+1": 1,//生成商品id，自增1
//       title: Random.csentence(5, 30), //  Random.csentence( min, max )
//       thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//       author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//       date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     }
//     articles.push(newArticleObject)
//   }
//   return {
//     articles: articles
//   }
// }
const testData = Mock.mock({
  'data|100': [ // 生成100条数据 数组
    {
      'shopId|+1': 1, // 生成商品id，自增1
      shopMsg: '@ctitle(10)', // 生成商品信息，长度为10个汉字
      shopName: '@cname', // 生成商品名 ， 都是中国人的名字
      shopTel: /^1(5|3|7|8)[0-9]{9}$/, // 生成随机电话号
      shopAddress: '@county(true)', // 随机生成地址
      'shopStar|1-5': '★', // 随机生成1-5个星星
      'salesVolume|30-1000': 30, // 随机生成商品价格 在30-1000之间
      date: Random.date() + ' ' + Random.time(),
      shopLogo: "@Image('100x40','#c33', '#ffffff','小北鼻')", // 生成随机图片，大小/背景色/字体颜色/文字信息
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      'food|7': [ // 每个商品中再随机生成七个food
        {
          foodName: '@cname', // food的名字
          foodPic: "@Image('100x40','#c33', '#ffffff','小可爱')", // 生成随机图片，大小/背景色/字体颜色/文字信息
          'foodPrice|1-100': 20, // 生成1-100的随机数
          'aname|14': [
            {
              aname: '@cname',
              'aprice|30-60': 20
            }
          ]
        }
      ]
    }
  ]
})

export default testData
