const express=require('express');

const cors = require('cors')

const logic = require('./services/logic')

const server=express();

server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json());

server.listen(8000,()=>{
    console.log("listening on the port 8000");
})

server.get('/allemployees',(req,res)=>{
    logic.allEmployees().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        )
})

server.post('/addemployees',(req,res)=>{
    logic.addEmployees(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        )
})
server.delete('/deleteemployees/:id',(req,res)=>{
    logic.deleteEmployees(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        )
})

server.get('/editemployees/:id',(req,res)=>{
    logic.editEmployees(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        )
})

server.post('/updateemployees',(req,res)=>{
    logic.updateEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
        )
})