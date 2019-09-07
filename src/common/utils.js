//一般用来放置一些公共的方法

//防抖函数
export function debounce(func,delay) {//传入一个函数，函数在delay单位时间内等多久。
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer) 
        timer = setTimeout(()=> {
            func.apply(this,args)
        }, delay)

    }
}

// //时间戳转时间
export function dateFormat(sj)
{
    var now = new Date(sj*1000);
    var   year=now.getFullYear();    
      var   month=now.getMonth()+1;    
      var   date=now.getDate();    
      var   hour=now.getHours();    
      var   minute=now.getMinutes();    
      var   second=now.getSeconds();    
      return   year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;    
     
}


// 定义私有过滤器
// 过滤器有两个条件[过滤器名称 和处理函数] 

// export function dateFormat(date,pattern ='yyyy-MM-dd') {
//     let dt = new Date (date)
//     let y = dt.getfullYear()
//     let M = dt. getMonth() + 1
//     let d = dt.getDate()
//     if(pattern && pattern.toLowerCase() === 'yyyy-MM-dd') {
//         return `${y}-${M}-${d}`
//     }
//     else {
//         let hh = dt.getHours()
//         let mm = dt.getMinutes()
//         let ss = dt.getSeconds()
//         return `${y}-${M}-${d} ${hh}:${mm}:${ss}`
//     }
// }