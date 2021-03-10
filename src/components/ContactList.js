import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";
import EditContact from "./EditContact";

function ContactList({ item, setContacts, viewEditContact, setViewEditContact, labelContact, deleteContact }) {
    return (
        <div>
            <table>
            <tr className="contactItems">
                    <td>
                        <span className="avatar" style={{backgroundColor:item.color}}>{item.name[0]}</span>{item.name}
                    </td>
                    <td>
                        {item.email}
                    </td>
                    <td>
                        {item.contact}
                    </td>
                    <td>
                         {!item.imp?(<AiOutlineStar onClick={()=>labelContact(item)} />):(<AiFillStar onClick={()=>labelContact(item)} />)}
                        <VscEdit className="icons" onClick={()=>setViewEditContact(prev=>!prev)}/>
                         <EditContact className="editContact" contact={item} setContacts={setContacts} viewEditContact={viewEditContact} setViewEditContact={setViewEditContact}/>
                          <FaTrash className="icons" onClick={()=>deleteContact(item)}/>
                    </td>
                </tr>  
            </table>
        </div>
    )
}

export default ContactList
