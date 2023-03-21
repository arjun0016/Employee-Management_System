 const mongoose =require('mongoose')

 mongoose.connect('mongodb://localhost:27017/ems_db')

 const Employee =mongoose.model('Employee',{
    id:String,
    empname:String,
    age:String,
    designation:String,
    salary:String
 })

module.exports={
    Employee
}