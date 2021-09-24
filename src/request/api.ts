import { get, post } from './service'
export const apiAddress = (p: any = {}) => get('/getMockData', p)
export const headerList = (p: any = {}) => get('/headerList', p)