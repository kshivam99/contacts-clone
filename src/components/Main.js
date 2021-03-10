import "./Main.css";
import Header from "./Header";
import { useState } from "react";
import CreateContact from "./CreateContact";
import Trash from "./Trash";
import Contacts from "./Contacts";
import ImpContacts from "./ImpContacts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Main() {
    const [contacts, setContacts] = useState([]);
    const [viewSideBar, setViewSideBar] = useState(false);
    const [viewCreateContact, setViewCreateContact] = useState(false);

    function viewCreateContactHandler(){
        setViewCreateContact(prev=>!prev);
    }

    const labelContact = (contact) => {
        setContacts((prev) =>
          prev.map((item) =>
            item.id === contact.id ? { ...item, imp:!item.imp } : item
          )
        );
      };
    
      
    const deleteContact = (contact) => {
        setContacts((prev) =>
          prev.map((item) =>
            item.id === contact.id ? { ...item, deleted:!item.deleted } : item
          )
        );
      };

    return(
        <div className="mainBody">
            <Header viewSideBar={viewSideBar} setViewSideBar={setViewSideBar} />
            <div className="subBody">
                <Router>
                <div className={viewSideBar?"showDiv":"hideDiv"}>
                        <button onClick={viewCreateContactHandler} className="addContactBtn"><span>+</span> Create Contact</button>
                        <CreateContact contacts={contacts} setContacts={setContacts} viewCreateContact={viewCreateContact} setViewCreateContact={setViewCreateContact} />
                            <ul>     
                            <Link className="link" to="/"> <li className="stackedList">All Contacts</li></Link>
                            <Link className="link" to="/imp"> <li className="stackedList">Important</li></Link>
                            <Link className="link" to="/trash"> <li className="stackedList">Trash</li></Link>
                            </ul>
                </div>
                <div className="contacts">
                    <Switch>
                        <Route  path="/" exact>
                            <Contacts contacts={contacts} setContacts={setContacts} labelContact={labelContact} deleteContact={deleteContact} />
                        </Route>
                        <Route  path="/trash" >
                            <Trash contacts={contacts} setContacts={setContacts} />
                        </Route>
                        <Route  path="/imp">
                            <ImpContacts contacts={contacts} labelContact={labelContact} />
                        </Route>
                    </Switch>   
                </div>
                </Router>    
            </div>
        </div>
    )
}