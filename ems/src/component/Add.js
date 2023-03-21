import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Empolyee';
import uuid from 'react-uuid';
import axios from 'axios'

function Add() {

  const [id,setId]= useState('');
  const [empname,setEmpname]= useState('');
  const [age,setAge]= useState('');
  const [designation,setDesignation]= useState('');
  const [salary,setSalary]= useState('');

  const history=useNavigate()
  useEffect(()=>{
    setId(uuid().slice(0,3))
  })

  const handleAdd=async(e)=>{
    e.preventDefault();

    // let ids=uuid();
    // console.log(ids);

    // let uniqueId=ids.slice(0,8)
    // console.log(uniqueId);
    setId(uuid().slice(0,3));

    
    const body={
      id,
      empname,
      age,
      designation,
      salary

    }
      const result= await axios.post('http://localhost:8000/addemployees',body)
      console.log(result);
    history('/')
  }

  return (
    <>
    <h1 className=' mt-3 mx-5'><b>ADD Employee</b></h1>
    <p className='p-4'>
    An employee management system is technology designed to streamline core HR services and <br></br> improve workforce productivity. It accomplishes these goals largely by automating labor-intensive,<br></br> administrative tasks and using analytics to drive business decisions.
    </p>

    <Row>
        <Col>
        <img className='mx-5 w-50 h-75' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png'></img> <br></br><br></br><br></br><br></br>
        </Col>
        <Col>
        <Form className='w-75'>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Id"
        // value={id}
        onChange={(e)=>setId(e.target.value)}
        required />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Name"
        // value={empname} 
        onChange={(e)=>setEmpname(e.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Age"
        // value={age} 
        onChange={(e)=>setAge(e.target.value)}
        required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Designation" 
        // value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Salary"
        // value={salary} 
        onChange={(e)=>setSalary(e.target.value)}
        required/>
      </Form.Group>
      <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
        ADD
      </Button>
    </Form></Col>
    </Row>

    </>
  )
}

export default Add