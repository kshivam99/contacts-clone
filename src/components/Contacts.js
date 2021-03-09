import "./Contact.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";




export default function Contacts({contacts, labelContact, deleteContact}){
    return(    
    <div className="contactsBody">
        <h1 className="contactHeading">All Contacts {contacts.length}</h1>
        <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
        </tr>
        {contacts.map((item, index)=>!item.deleted?(
                <tr className="contactItems">
                    <td><span className="avatar" style={{backgroundColor:item.color}}>{item.name[0]}</span>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                    {!item.imp?(<AiOutlineStar onClick={()=>labelContact(item)} />):(<AiFillStar onClick={()=>labelContact(item)} />)}
                    <VscEdit className="icons"/>
                    <FaTrash className="icons" onClick={()=>deleteContact(item)}/>
                    </td>
                </tr>   
  
        ):null)}
        </table>
    </div>
    );
}