

export default function Trash({contacts, setContacts}) {

    return(
        <div className="contacts">
            <ul>
                {contacts.map(item=>item.imp?
                    (
                        <div className="impList">
                        <li><span>{item.name}</span>  <span>{item.email}</span> <span>{item.contact}</span></li>
                        </div>

                    ):null)}
            </ul>
        </div>
    );
};