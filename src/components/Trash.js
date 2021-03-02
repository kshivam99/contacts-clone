

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
        <div className="contacts">
            <ul>
                {contacts.map(item=>item.deleted?
                    (
                        <div className="trashList">
                        <li><span>{item.name}</span>  <span>{item.email}</span> <span>{item.contact}</span></li>
                        <button onClick={()=>restoreContact(item)}>Restore</button>
                        </div>

                    ):null)}
            </ul>
        </div>
    );
};