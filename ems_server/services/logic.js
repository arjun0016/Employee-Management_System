const db =require('./db')

const allEmployees =()=>{
    return db.Employee.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"employee not found"
                }
                
            }
        }
    )
}
const addEmployees =(id,empname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:401,
                    message:'Employee already exist'
                }
            }
            else{
                const newEmployee=new db.Employee({id,empname,age,designation,salary})
                newEmployee.save()
                return{
                    statusCode:200,
                    message:"Employee added"
                }
                
            }
        }
    )
}

const deleteEmployees =(id)=>{
    return db.Employee.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:'Delete successfully'
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"no data"
                }
                
            }
        }
    )
}

const editEmployees =(id)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employee:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"no data"
                }
                
            }
        }
    )
}
const updateEmployee=(id,empname,age,designation,salary)=>{
  return  db.Employee.findOne({id}).then((result)=>{
        if(result){
            result.id=id;
            result.empname=empname;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            result.save();
            return{
                statusCode:200,
                message:"Data saved successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Employee not found"
            }
        }
    })

}

module.exports={
    allEmployees,
    addEmployees,
    deleteEmployees,
    editEmployees,
    updateEmployee
}