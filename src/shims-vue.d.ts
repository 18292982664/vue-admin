/* eslint-disable */
declare module '*.vue'
declare module 'mockjs'
{
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
