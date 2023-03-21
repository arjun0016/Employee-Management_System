import React from 'react'
import Employee from './Empolyee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import { FaUserEdit,FaUserTimes,FaUserPlus, FaUser } from "react-icons/fa";
import axios from 'axios'
import { useState,useEffect } from 'react';
import './home.css'

function Home() {


  const [allEmployees,setAllEmployees]=useState([])

  const fetchData=async()=>{
   const result= await axios.get('http://localhost:8000/allemployees')
   console.log( result);
   console.log(result.data.employees);
   setAllEmployees(result.data.employees);

  }
  console.log(allEmployees);
  useEffect(()=>{
    fetchData()
  },[])


  const history=useNavigate()

  const handleDelete=async(id)=>{
   const result= await axios.delete('http://localhost:8000/deleteemployees/'+id)
    alert(result.data.message)
    fetchData()
    history('/')// refresh


  }
  const handleEdit=(id,empname,age,designation,salary)=>{
    localStorage.setItem("ID",id)
    localStorage.setItem("NAME",empname)
    localStorage.setItem("AGE",age)
    localStorage.setItem("DESIGNATION",designation)
    localStorage.setItem("SALARY",salary)





  }

  return (
    <>
    <h1 className=' mt-3 mx-5 d-flex align-items-center justify-content-center'><FaUser/>Employee Management System</h1>
    <p className='p-4'>
    An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive,administrative tasks and using analytics to drive business decisions.
    It also securely stores and manages personal and other work-related details for your employees. That makes it easier to store and access the data when there is a need.

In the employee management system, you can manage admin activities in an easier and quicker way. Employees are an important part of your organization it is their work that ultimately contributes to the bottom line of the company. It is an important part of HR management.
 It also helps to employee engagement and performance management brings down costs and increases productivity.
    </p>

    <h4 className=' ms-5'>List of Employee</h4>
    <hr className='w-25'></hr>
    <div className='d-flex align-items-center justify-content-center'>

    <Link to='/add'> <Button className='my-5 mx-3 ms-5' variant="success">Add Employee<FaUserPlus/></Button></Link>
   </div>

    <div className='d-flex align-items-center justify-content-center'>


    <Table className='w-75 ms-5 ' striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee Name</th>
          <th>Age Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        
            {
              
                allEmployees.map((item)=>(
                    <tr>
                           <td>{item.id}</td>
          <td>{item.empname}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <td><Link to={'/Edit/'+item.id}> <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)} className='mx-2' variant="primary"><FaUserEdit/> Edit</Button> </Link>
           <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaUserTimes/> Delete</Button></td>


        </tr>

                ))
            }
       



      </tbody>

    </Table>
    </div>
    </>
  )
}

export default Home