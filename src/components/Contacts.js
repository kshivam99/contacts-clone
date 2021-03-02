
export default function Contacts({contacts, labelContact, deleteContact}){
    return(    
    <div className="contacts">
    <ul>
        {contacts.map((item, index)=>!item.deleted?(
            <div key={index} className="contactList">
                 <li><span>{item.name}</span>  <span>{item.email}</span> <span>{item.contact}</span></li>
                 <button onClick={()=>labelContact(item)}>Important</button> <button>Edit</button> <button onClick={()=>deleteContact(item)}>Delete</button>
            </div>
        ):null)}
    </ul>
</div>
    );
}