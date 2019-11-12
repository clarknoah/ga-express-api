const app = require("express")();




app.get('/',(req,res)=>{
  res.send("Hello API");
})


app.get('/characters',(req,res)=>{
 //Returns a count of all the characters in the DB
})


/* CHARACTER CRUD API */
app.post('/characters/id/:id',(req,res)=>{
 //CREATES Character

})


app.get('/characters/id/:id',(req,res)=>{
 //READS Character

})


app.put('/characters/id/:id',(req,res)=>{
 //UPDATE Character

})

app.delete('/characters/id/:id',(req,res)=>{
 //DELETE Character

})



app.listen(3000, ()=>{
  console.log("Running on 300");
})
