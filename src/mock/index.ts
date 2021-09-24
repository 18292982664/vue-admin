
import Mock from 'mockjs'
import testData from './home'
import headerList from './Header'
Mock.mock('/getMockData', 'get', testData)
Mock.mock('/headerList', 'get', headerList)
export default Mock
