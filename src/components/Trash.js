import "./Trash.css";

export default function Trash({contacts, setContacts}) {

    function restoreContact(contact)
    {
        setContacts((prev) =>
          prev.map((item) =>
            item.id === contact.id ? { ...item, deleted:!item.deleted } : item
          )
        );
        setContacts(prev=>{
            console.log(prev);
            return prev;
        })
    }
    return(
        <div className="contactsBody">
        <h1 className="contactHeading">Trash</h1>
        <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
        </tr>
        {contacts.map((item, index)=>item.deleted?(
                <tr>
                    <td><span className="avatar" style={{backgroundColor:item.color}}>{item.name[0]}</span>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td><button onClick={()=>restoreContact(item)}>Restore</button></td>
                </tr>   
        ):null)}
        </table>
        </div>
    );
};