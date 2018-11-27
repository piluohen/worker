const addElement = (text) => {
  let li = document.createElement('li')
  li.innerText = text
  document.getElementById('ol').appendChild(li)
}

let n = 1

// 一般方法
const generalFn = () => {
  setInterval(() => {
    n++
    addElement(fibo(n))
  }, 0)
}

// 开辟worker线程方法
const workerFn = () => {
  var worker = new Worker('/js/worker.js')

  setInterval(function(){
    // 将数据发送给worker线程
    worker.postMessage(n++)
    // 监听worker线程
    worker.onmessage = (e) => {
      // console.log(e)
      let time = e.timeStamp.toFixed(2)
      addElement(`值：${e.data}  时间：${time}ms`)
    }
  }, 0)

  // 监听worker错误
  worker.onerror = (e) => {
    console.log(e.message)
    worker.terminate()
  }

  // 监听停止按钮
  document.getElementById('btn').addEventListener('click', () => {
    // 停止work线程
    worker.terminate()
  })
}

// generalFn()
workerFn()