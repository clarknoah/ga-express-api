mongoose = require("../connection.js");
const Character = require("../model/Character.js");
const characterJson = require("../characters.json");

const parsedCharacters = characterJson.map((val)=>{
  let character = {
    name: val.name,
    gender:val.gender,
    culture:val.culture,
    born:val.born,
    died:val.died,
    titles:val.titles,
    aliases:val.aliases,
    father:val.father,
    mother:val.mother
  }
  return character;
})



Character.deleteMany().then(res=>{
  Character.create(parsedCharacters).then(created=>{
    console.log(created);
  })
})
