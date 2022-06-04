const printDate = function(){
    let currentDate = new Date()
    console.log(currentDate)
}
const printMonth = function(){
   const currentMonth = new Date()
   let curreMonth = currentMonth.getMonth()
    console.log('The current Month is',+curreMonth)
}
const getBatchInfo = function(){
   console.log('Radon,W3D3,the topic for today is Nodejs module system')

}


module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo