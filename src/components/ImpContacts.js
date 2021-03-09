import "./ImpContact.css";

export default function Trash({contacts, setContacts}) {

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
                <tr>
                    <td><span className="avatar" style={{backgroundColor:item.color}}>{item.name[0]}</span>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                </tr>  
        ):null)}
        </table>
        </div>
    );
};