import { useState, useEffect } from "react";


export default function EditContact({contact, setContacts, viewEditContact, setViewEditContact}) {
    const [editName, setEditName] = useState(contact.name);
    const [editEmail, setEditEmail] = useState(contact.email);
    const [editNumber, setEditNumber] = useState(contact.contact);


    function editContact(){
        console.log(contact);
        setContacts(prev=>
            prev.map(item=>
                item.id===contact.id?{...item, name:editName, email:editEmail, contact:editNumber }:item));
        setViewEditContact(false);
    }

    function setNameHandler(e)
    {
        setEditName(e.target.value);
    }

    function setEmailHandler(e)
    {
        setEditEmail(e.target.value);
    }

    function setNumberHandler(e)
    {
        setEditNumber(e.target.value);
    }
    return (
        <div className="editContactBody" style={{display:viewEditContact?"":"none"}}>
            <button onClick={()=>{setViewEditContact(false)
            console.log(contact)}}>close</button>
                <div className="formInput">
                <input type="text" name="name" autoComplete="off" value={editName} onChange={(e)=>setNameHandler(e)} required />
                    <label for="name" className="labelName">
                        <span className="contentName">Name</span>
                    </label>
                </div>
                <div className="formInput">
                <input type="text" name="email" autoComplete="off" value={editEmail} onChange={(e)=>setEmailHandler(e)} required/>
                    <label for="email" className="labelName">
                        <span className="contentName">Email</span>
                    </label>
                </div>
                <div className="formInput">
                <input type="text" name="contact" autoComplete="off" value={editNumber} onChange={(e)=>setNumberHandler(e)} required/>
                    <label for="contact" className="labelName">
                        <span className="contentName">Contact</span>
                    </label>
                </div>
               
                <button  onClick={editContact}>Edit Contact</button>

        </div>
    )
};