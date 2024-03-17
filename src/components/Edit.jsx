import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom"


export const Edit = () => {

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [id, setId] = useState();
    let history = useNavigate()
    let index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        let a = Employees[index];
        a.name = name;
        a.age = age;
        history("/")
    }

    useEffect(() => {
        setName(localStorage.getItem("name"))
        setAge(localStorage.getItem("age"))
        setId(localStorage.getItem("id"))
    }, [])



    return (
        <>
            <div>
                <form className="space-x-4 mb-4 flex justify-center">
                    <input className="border w-full bg-[#535C91] placeholder:text-white h-10 lg:w-[608px] pl-3 outline-none focus:ring-2 focus:ring-[#387ADF] text-white" type="text" placeholder="Enter Name" value={name} required onChange={(e) => { setName(e.target.value) }} />
                    <input className="border w-full bg-[#535C91] placeholder:text-white h-10 lg:w-[608px] pl-3 outline-none focus:ring-2 focus:ring-[#387ADF] text-white" type="text" placeholder="Enter Age" value={age} required onChange={(e) => { setAge(e.target.value) }} />
                </form>
                <Button className="bg-[#387ADF] w-full text-white font-bold " onClick={(e) => { handleSubmit(e) }} type="submit">Update</Button>

            </div>
        </>
    )
}

export default Edit;