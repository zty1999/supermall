import {request} from "./request"
export function getHomeMultidata() {
    return request({
        url: 'home/multidata'
    })
}
export function getHomeGoods(type,page) {
    return request({
        url: 'home/data',
        params: {
            type,
            page,
        }
    })
}
//函数调用 -> 压入函数栈（保存函数调用过程中所有临时变量）
//函数调用结束 -> 弹出函数栈（释放函数所有的临时变量）
//即函数调用完毕，所有临时变量会被内存回收