import {request} from "./request"
export function getCategory() {
  return request ({
    url:'/category',
    params: {

    }
  })
}
export function getPopGoods(type,page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page,
    }
  })
}
