const axios = require("axios");
var fs=require('fs');
var readline = require('readline-sync');
console.log("\n**Welcome in course meraki page**\n")
var data=axios.get("https://api.merakilearn.org/courses").then((res) => {
    fs.writeFileSync(__dirname+"/mareki coursese.json",JSON.stringify(res.data,null,2))

  let courses = res.data;
  let list = [];
  let no = 1;
  for (var i of courses){
      console.log(no + " : " + i.name ,i.id);
      no++
      list.push(i.name,i.id);
  }
  let user=readline.questionInt("enter the course id no: ")-1
  console.log(courses[user].name,courses[user].id)
  let user1=courses[user].id
  
  var data1=axios.get("https://api.merakilearn.org/courses/"+user1+"/exercises").then((res) => {
    fs.writeFileSync(__dirname+"/mareki parents.json",JSON.stringify(res.data,null,2))

  let courses1=res.data;
  var counter=1;
  course_name = courses1.course.exercises
  for (var i = 0 ; i <  course_name.length;i++){
      console.log("   ",counter+" : "+course_name[i].name)
      counter++;
  }
  let user_choice= readline.questionInt("enter the parents or child no which you want contant: ")-1
  console.log("  ",course_name[user_choice].name)
  console.log("       ",course_name[user_choice]["content"][0]["value"])
})
})



