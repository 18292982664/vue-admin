
import Mock from 'mockjs'
const Random = Mock.Random
interface NavItem {
  shopId: number,
  shopMsg: string,
  shopName: string,
  food: string
}
const headerList = {
  data: [
    {
      id: 0,
      title: "仪表板",
      path:"",
      children: [
        {
          subId: 0,
          shopName: "文件1"
        }, {
          subId: 1,
          shopName: "文件2"
        },
        {
          subId: 2,
          shopName: "文件3"
        },
        {
          subId: 3,
          shopName: "文件4"
        }
      ]
    },
    {
      id: 1,
      title: "统计",
      children: [
        {
          subId: 4,
          shopName: "文件111"
        },
        {
          subId: 5,
          shopName: "文件122"
        },
        {
          subId: 6,
          shopName: "文件133"
        },
        {
          subId: 7,
          shopName: "文件144"
        }
      ]
    },
    {
      id: 2,
      title: "表单"
    },
    {
      id: 3,
      title: "表格"
    },
    {
      id: 4,
      title: "地图"
    },
    {
      id: 5,
      title: "图标"
    },
    {
      id: 6,
      title: "引导页"
    }
  ]
}

export default headerList
