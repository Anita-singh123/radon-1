const express = require ('express')
const logger = require ('../logger/logger')
const logger1 = require ('../util/helper')
const logger2 = require('../validtor/formatter')
const _ = require('lodash')

const router = express.Router()

router.get('/test-me', function(req,res){
   logger.welcome() 
   res.send('This is my first question')
})

router.get('/test-me1', function(req,res){
    logger1.printDate()
    logger1.printMonth()
    logger1.getBatchInfo()
    res.send('This is my second question')
})

router.get('/test-me2', function(req,res){
    logger2.trim()
    logger2.string1()
    logger2.string2()
    res.send('This is my third question')
})


const month = ['january','february','march','april','may','june','july','august','september','october','november','december']

const odd = [1,3,5,7,9,11,13,15,17,19]

router.get('/hello', function(req,res){
    console.log(_.chunk(month,3))
    console.log(_.tail(odd))
    console.log(_.union([1,2,3],[4,5,6],[3,2,1],[4,6,5],[2,5,4]))
    console.log(_.fromPairs([ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
]))
    res.send('hi my 2nd api')


})


module.exports=router;