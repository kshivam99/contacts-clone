import "./Main.css";
import Header from "./Header";
import { useState } from "react";
import CreateContact from "./CreateContact";
import Trash from "./Trash";
import Contacts from "./Contacts";
import ImpContact from "./ImpContacts";

export default function Main() {
    const [contacts, setContacts] = useState([]);
    const [viewSideBar, setViewSideBar] = useState(false);
    const [viewCreateContact, setViewCreateContact] = useState(false);

    function viewCreateContactHandler(){
        setViewCreateContact(prev=>!prev);
        console.log(contacts);
    }

    const labelContact = (contact) => {
        setContacts((prev) =>
          prev.map((item) =>
            item.id === contact.id ? { ...item, imp:!item.imp } : item
          )
        );
        setContacts(prev=>{
            console.log(prev);
            return prev;
        })
      };
    
      
    const deleteContact = (contact) => {
        setContacts((prev) =>
          prev.map((item) =>
            item.id === contact.id ? { ...item, deleted:!item.deleted } : item
          )
        );
        setContacts(prev=>{
            console.log(prev);
            return prev;
        })
      };

    return(
        <div className="mainBody">
            <Header viewSideBar={viewSideBar} setViewSideBar={setViewSideBar} />
            <div className="subBody">
                <div className="hideDiv" style={{display:viewSideBar?"":"none"}}>
                        <button onClick={viewCreateContactHandler}> + Create Contact</button>
                        <CreateContact contacts={contacts} setContacts={setContacts} viewCreateContact={viewCreateContact} setViewCreateContact={setViewCreateContact} />
                        <button>All Contacts</button>
                        <button>Important</button>
                        <button>Trash</button>
                </div>
                <Contacts contacts={contacts} labelContact={labelContact} deleteContact={deleteContact} />
            </div>
        </div>
    )
}