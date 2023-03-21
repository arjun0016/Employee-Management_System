import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Employee from './Empolyee';
import axios from 'axios';
function Edit() {

  const [id,setId]= useState('');
  const [empname,setEmpname]= useState('');
  const [age,setAge]= useState('');
  const [designation,setDesignation]= useState('');
  const [salary,setSalary]= useState('');

const params=useParams()
console.log(params.id);
  const fetchEmployee = async()=>{
    const result= await axios.get('http://localhost:8000/editemployees/'+params.id)
    console.log(result.data.employee);
    setId(result.data.employee.id)
     setEmpname(result.data.employee.empname)
    setAge(result.data.employee.age)
    setDesignation(result.data.employee.designation)
    setSalary(result.data.employee.salary)
  }

  useEffect(()=>{
    fetchEmployee()
    // setId(localStorage.getItem('ID'))
    // setEmpname(localStorage.getItem('NAME'))
    // setAge(localStorage.getItem('AGE'))
    // setDesignation(localStorage.getItem('DESIGNATION'))
    // setSalary(localStorage.getItem('SALARY'))
  },[])

console.log(id);

// var index=Employee.map(item=>item.id).indexOf(id);
// console.log(index);//0

let history=useNavigate()
const handleUpdate=async(e)=>{
  e.preventDefault();//avoid refreshing
  console.log(e);

  const body={
    id,
    empname,
    age,
    designation,
    salary
  }

  const result= await axios.post('http://localhost:8000/updateemployees',body)
  alert(result.data.message)
  // let emp=Employee[index]
  // console.log(emp);
  // emp.empname=empname;
  // emp.age=age;
  // emp.designation=designation;
  // emp.salary=salary
  // console.log(emp);//updated values of employee
  history('/')
}


  return (
    <>
    <h1 className=' mt-3 mx-5'><b>Update System </b></h1>
    <p className='p-4'>
    An employee management system is technology designed to streamline core HR services and <br></br> improve workforce productivity. It accomplishes these goals largely by automating labor-intensive,<br></br> administrative tasks and using analytics to drive business decisions.
    </p>

    <Row >

        <Col>
        <img className='mx-5 w-50 h-75' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png'></img> <br></br><br></br><br></br><br></br>
        </Col>
        <Col>
        <Form className='w-75 mt-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Id"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Name"
        value={empname} 
        onChange={(e)=>setEmpname(e.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Age"
        value={age} 
        onChange={(e)=>setAge(e.target.value)}
        required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Designation" 
        value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Salary"
        value={salary} 
        onChange={(e)=>setSalary(e.target.value)}
        required/>
      </Form.Group>
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form></Col>
    </Row>

    </>
  )
}

export default Edit