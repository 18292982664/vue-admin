
import Mock from 'mockjs'
const Random = Mock.Random
const headerList = Mock.mock({
  'data|10': [ // 生成100条数据 数组
    {
      'shopId|+1': 1, // 生成商品id，自增1
      'shopMsg': '@ctitle(4)', // 生成商品信息，长度为10个汉字
      'shopName': '@cname', // 生成商品名 ， 都是中国人的名字
      'food|7': [ // 每个商品中再随机生成七个food
        {
          'foodName': '@cname', // food的名字
          'foodPic': "@Image('100x40','#c33', '#ffffff','小可爱')", // 生成随机图片，大小/背景色/字体颜色/文字信息
          'aname|14': [
            {
              'aname': '@cname',
              'aprice|30-60': 20
            }
          ]
        }
      ]
    }
  ]
})

export default headerList
