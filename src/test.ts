let p1 = new Promise((resolve, reject) => {
    reject("错误")
    resolve("正确")
})
console.log(p1)
p1.then(res => {
    console.log('res:', res)
}).catch(err => {
    console.log('err:', err)
})
