import "./ImpContact.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


export default function ImpContacts({contacts, labelContact}) {

    return(
        <div className="contactsBody">
        <h1 className="contactHeading">Important</h1>
        <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
        </tr>
        {contacts.map((item)=>item.imp&&!item.deleted?(
                <tr className="contactItems">
                    <td><span className="avatar" style={{backgroundColor:item.color}}>{item.name[0]}</span>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{!item.imp?(<AiOutlineStar onClick={()=>labelContact(item)} />):(<AiFillStar onClick={()=>labelContact(item)} />)}</td>
                </tr>  
        ):null)}
        </table>
        </div>
    );
};