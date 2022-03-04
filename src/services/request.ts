/*
 * @Author: hsl
 * @Descripttion: request
 * @Date: 2022-03-04 13:39:24
 * @LastEditTime: 2022-03-04 13:57:14
 */
const Request = async (url: string, method: string, params: object = {}) => {
  const result = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  if (result.status >= 200 && result.status < 300) {
    return {
      suc: true,
      data: await result.json(),
    }
  }
  return { suc: false, msg: '数据请求错误' }
}
export default Request
