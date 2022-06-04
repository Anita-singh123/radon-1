const trim = function(){
    let strings = " functionup "
    strings.trim()
    console.log(strings)
}

const lower = 'FUNCTIONUP IS ONE OF THE BEST BOOTCAMP'
let string1 = function(){
   console.log(lower.toLowerCase())
}

const upper = 'functionup is one of the best bootcamp'
let string2 = function(){
    console.log(upper.toUpperCase())
}


module.exports.trim = trim
module.exports.string1 = string1
module.exports.string2 = string2
