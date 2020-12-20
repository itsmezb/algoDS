const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));
 
promise.then(res => {
  return res === 'Alan' ? Promise.resolve('Hey Alan !') : Promise.reject('Who are you?')
}).then((res) => {
  console.log(res)
}, (err) => {
  alert(err)
});