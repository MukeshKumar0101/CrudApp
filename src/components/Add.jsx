import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { v4 as uuid } from "uuid"
import { Link, useNavigate } from "react-router-dom"

function Add() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let a = name,
            b = age;
        Employees.push({ id: uniqueId, name: a, age: b })
        history("/")
    }


    return (
        <>
            <form className="space-x-4 mb-4 flex justify-center">
                <input className="border w-full bg-[#535C91] placeholder:text-white h-10 lg:w-[608px] pl-3 outline-none focus:ring-2 focus:ring-[#387ADF] text-white" type="text" placeholder="Enter Name" required onChange={(e) => { setName(e.target.value) }} />
                <input className="border w-full bg-[#535C91] placeholder:text-white h-10 lg:w-[608px] pl-3 outline-none focus:ring-2 focus:ring-[#387ADF] text-white" type="text" placeholder="Age" required onChange={(e) => { setAge(e.target.value) }} />
            </form>
            <Button className="bg-[#387ADF]  w-full text-white font-bold px-5" onClick={(e) => { handleSubmit(e) }} type="submit">Submit</Button>

        </>
    )
}

export default Add;


