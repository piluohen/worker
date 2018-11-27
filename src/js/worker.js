// worker 内部加载脚本, 可加载多个
importScripts('fibo.js')

// 在worker内部接受消息
self.onmessage = (e) => {
  // console.dir(e.data)
  let data = e.data
  var result = fibo(data)
  // if (ev.data >= 12) {
  //   // 关闭进程
  //   self.close()
  // }
  // 将数据发送给主线程
  postMessage(result)
}