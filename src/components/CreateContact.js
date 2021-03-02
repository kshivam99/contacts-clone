import "./CreateContact.css";
import { useState } from "react";
import uuid from "react-uuid";


export default function CreateContact({contacts, setContacts, viewCreateContact, setViewCreateContact}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    function addContact(){

        let newObj={
            id: uuid(),
            name:name,
            email:email,
            contact:number,
            imp:false,
            deleted:false
        };
        setContacts([...contacts, newObj]);
        setName("");
        setEmail("");
        setNumber("");
        setViewCreateContact(prev=>!prev);
    }

    function setNameHandler(e)
    {
        setName(e.target.value);
    }

    function setEmailHandler(e)
    {
        setEmail(e.target.value);
    }

    function setNumberHandler(e)
    {
        setNumber(e.target.value);
    }
    return (
        <div className="createContactBody" style={{display:viewCreateContact?"":"none"}}>
                <input placeholder="Enter Name" value={name} onChange={(e)=>setNameHandler(e)} />
                <input placeholder="Enter Email" value={email} onChange={(e)=>setEmailHandler(e)}/>
                <input placeholder="Enter Mobile Number" value={number} onChange={(e)=>setNumberHandler(e)}/>
                <button onClick={addContact}>Add Contact</button>

        </div>
    )
};