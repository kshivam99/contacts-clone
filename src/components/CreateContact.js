import "./CreateContact.css";
import { useState } from "react";
import uuid from "react-uuid";
import randomColor from "randomcolor";


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
            deleted:false,
            color:randomColor()
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
                <div className="formInput">
                <input type="text" name="name" autoComplete="off" value={name} onChange={(e)=>setNameHandler(e)} required />
                    <label for="name" className="labelName">
                        <span className="contentName">Name</span>
                    </label>
                </div>
                <div className="formInput">
                <input type="text" name="email" autoComplete="off" value={email} onChange={(e)=>setEmailHandler(e)} required/>
                    <label for="email" className="labelName">
                        <span className="contentName">Email</span>
                    </label>
                </div>
                <div className="formInput">
                <input type="text" name="contact" autoComplete="off" value={number} onChange={(e)=>setNumberHandler(e)} required/>
                    <label for="contact" className="labelName">
                        <span className="contentName">Contact</span>
                    </label>
                </div>
               
                <button disabled={!name.length} onClick={addContact}>Add Contact</button>

        </div>
    )
};