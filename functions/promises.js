const getDataCallback = (callback) => {
    setTimeout(() => {
      callback(undefined, "this is the data!")
    }, 5500)
  }
  
  getDataCallback((error, data) => {
    if (error) {
      console.log("there's been an error")
    } else {
      console.log(data)
    }
  })
  
  console.log('this came second')
  
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('this is the promise data')
      reject('this is the promise error')
    }, 5000)
  })
  
  myPromise.then((value) => {
    console.log(value)
  })
  
  
  
  