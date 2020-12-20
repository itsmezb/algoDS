// input 1.1.1.1
// output 1[.]1[.]1[.]1

function changeIP(address) {
  return address.split(".").join("[.]")
}

// const myIP = "1.1.1.1"

// console.log(changeIP(myIP))



const myIP1 = "1.1.302.421.43.124.12.4.42.214.1.412.124.2"

console.log(changeIP(myIP1))