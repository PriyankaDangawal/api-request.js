const axios = require("axios");
const fs=require('fs');
const readline= require("readline-sync");
console.log("\n**Welcome in course page**\n")
var data =axios.get("http://saral.navgurukul.org/api/courses").then((res) => {
    fs.writeFileSync(__dirname+"/courses data.json",JSON.stringify(res.data,null,2))
  let course = res.data.availableCourses;
  let list = [];
  let increament = 1;
  for (var i of course){
      console.log(increament + " : " + i.name,i.id);
      increament++
      list.push(i.id);
  }
  let user = readline.question("Enter the course number :- ");
  let user_name = list[user - 1];
  axios.get("http://saral.navgurukul.org/api/courses/"+user+"/exercises").then((rest) =>{
    let course1 = rest.data.data;
    var slug_list = [];
    var counter = 0;
    var dict = {};
    for (j of course1){
        counter++
        console.log(counter + " : " + j.name)
        dict[counter] = j["slug"]
        var counter1 = 1; 
        for (l of j.childExercises){
            slug_list.push(l.slug);
            console.log("   ",counter + "."+counter1, l.name);
            dict[counter + "."+counter1] = l.slug;
            counter1++
        }
    }
    let user1 = readline.question("Enter the course number :- ");
    for (a in dict){
    if (user1 == a){
        console.log(a,"read down")
        axios.get("http://saral.navgurukul.org/api/courses/"+user1+"/exercise/getBySlug?slug="+dict[a]).then((rest) => {
            let course2 = rest.data.content;
            console.log(course2);
          })
          .catch((err)=>console.log(err));
      }
  }
  })
});
