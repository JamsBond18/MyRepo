import React, { useState, useEffect } from "react";
import Model from "../../Components/Model";
const About = () => {
    const [empName, setEmpName] = useState('');
    const [open, setOpen] = useState(false);
    const [empLastName, setEmpLastName] = useState('');
    const [demoData1, setDemoData1] = useState({});
    const [loding, setLoding] = useState(false);
    const demoData = {
        prodName: 'bajaj',
        prodId: 132
    }

    useEffect(() => {
        handleLoder(true);

        setTimeout(() => {
            setDemoData1(demoData);
            handleLoder(false);
        }, 3000);

    }, [])

    const handleLoder = (value) => {
        setLoding(value);

    }

    const hanldeopen = (value) => {
        setOpen(value);
        if (!value) {
            setEmpName("");
            setEmpLastName("");
        }
    }

    const handleEmpNameChange = (event) => {
        setEmpName(event.target.value)
    }

    const handleEmpLastNameChange = (event) => {
        setEmpLastName(event.target.value)
    }

    const myEmpData = {
        empName,
        empLastName
    }
    return (

        <div className="containter">
            <label>Employee Name</label>
            <input type="text" value={empName} id="empName"
                name="empName" onChange={handleEmpNameChange} />
            <label>Employee last Name</label>
            <input type="text" value={empLastName} id="empLastName"
                name="empLastName" onChange={handleEmpLastNameChange} />
            &nbsp;
            <button type="button" id="open" onClick={() => hanldeopen(true)} > Open</button>

            <Model show={open} handleToggle={hanldeopen} empData={myEmpData} />
            <div>
                {
                    loding ? 'Loding' : <div><span>Product name :  {demoData1.prodName}</span></div>
                }
            </div>
        </div>
    )
}
export default About;