const express = require("express");
const app = express();
const Character = require("../db/model/Character.js");

app.use(express.static('doc'));

app.get('/',(req,res)=>{
  res.send("Hello API");
})


/**
 * @api {get} /characters Get List of Characters
 * @apiName GetCharacterList
 * @apiGroup Character
 *
 *
 * @apiSuccess {Number} count Count of Characters.
 */


app.get('/characters',(req,res)=>{
 //Returns a count of all the characters in the DB
 let obj = {
   count: 420
 };
 res.json(obj);
})


/**
* @api {post} /characters Create Character
* @apiName CreateCharacter
* @apiGroup Character
* @apiParam (Character JSON properties) {String} name Full Character Name.
* @apiParam (Character JSON properties) {String} gender Gender of Character.
* @apiParamExample {json} Request Body Example:
*     {
*       "name":"John Smith",
*       "gender":"Male"
*     }
*
*
*/


/* CHARACTER CRUD API */
app.post('/characters',(req,res)=>{
  let obj = req.body;
  console.log(req);
  Character.create(obj).then((result)=>{
    res.send("Object Created Successfully");
  })

})

/**
 * @api {get} /characters/name/:name Get Character By Name
 * @apiName getCharacterByName
 * @apiGroup Character
 * @apiParam (Params) {String} name Character Full Name in database.
 * @apiParamExample {json} Request URL:
 *    /characters/name/Jon%20Snow
 *
 */

app.get('/characters/name/:name',(req,res)=>{
 //READS Character
 let query = {
   name: req.params.name
 };

 Character.findOne(query).then((result)=>{
   res.json(result);
 })

})



/**
 * @api {get} /characters/id/:id Get Character By ID
 * @apiName getCharacterByID
 * @apiGroup Character
 * @apiParam (Params) {String} id Character ID in database.
 * @apiParamExample {json} Request URL:
 *    /characters/id/12345789
 *
 */


app.get('/characters/id/:id',(req,res)=>{
 //READS Character
 let query = {
   _id: req.params.id
 };

 Character.findOne(query).then((result)=>{
   res.json(result);
 })

})


/**
 * @api {put} /characters/id/:id Update Character by ID
 * @apiName updateCharacterById
 * @apiGroup Character
 * @apiParam (Params) {String} id Character ID in database.
 * @apiParamExample {json} Request URL:
 *    /characters/id/12345789
 * @apiParamExample {json} Request Body Example:
 *     {
 *       "name":"Not John Smith",
 *     }
 *
 */

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



/**
 * @api {delete} /characters/id/:id Delete Character by ID
 * @apiName deleteCharacterById
 * @apiGroup Character
 * @apiParam (Params) {String} id Character ID in database.
 * @apiParamExample {json} Request URL:
 *    /characters/id/12345789
 *
 */

app.delete('/characters/id/:id',(req,res)=>{
 //DELETE Character
 let query = {
   _id: req.params.id
 };

 Character.findOneAndDelete(query).then((result)=>{
   res.json(result);
 })

})


app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});


// app.listen(3000, ()=>{
//   console.log("Running on 300");
// })
