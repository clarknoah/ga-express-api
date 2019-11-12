const express = require("express");
const app = express();
const Character = require("../db/model/Character.js");

app.use(express.static('doc'));

app.get('/',(req,res)=>{
  res.send("Hello API");
})


/**
 * @api {get} /characters Request User information
 * @apiName GetCharacterList
 * @apiGroup Character
 *
 *
 * @apiSuccess {String} name Name of Character.
 */


app.get('/characters',(req,res)=>{
 //Returns a count of all the characters in the DB
 let obj = {
   count: 420
 };
 res.json(obj);
})


/**
 * @api {post} /characters Request User information
 * @apiName CreateCharacter
 * @apiGroup Character
 *
 *
 * @apiSuccess {String} name Name of Character.
 */


/* CHARACTER CRUD API */
app.post('/characters',(req,res)=>{
  let obj = req.body;
  Character.create(obj).then((result)=>{
    res.json(result);
  })

})

app.get('/characters/name/:name',(req,res)=>{
 //READS Character
 let query = {
   name: req.params.name
 };

 Character.findOne(query).then((result)=>{
   res.json(result);
 })

})



app.get('/characters/id/:id',(req,res)=>{
 //READS Character
 let query = {
   _id: req.params.id
 };

 Character.findOne(query).then((result)=>{
   res.json(result);
 })

})


app.put('/characters/id/:id',(req,res)=>{
 //UPDATE Character
 let query = {
   _id: req.params.id
 };

 let update = {
   $set: req.body
 }

 Character.findOneAndUpdate(query, update).then((result)=>{
   res.json(result);
 })

})

app.delete('/characters/id/:id',(req,res)=>{
 //DELETE Character
 let query = {
   _id: req.params.id
 };

 Character.findOneAndDelete(query).then((result)=>{
   res.json(result);
 })

})



app.listen(3000, ()=>{
  console.log("Running on 300");
})
