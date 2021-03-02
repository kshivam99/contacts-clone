import "./Header.css"

export default function Header({viewSideBar, setViewSideBar}) {
    function viewSideBarHandler(){
        setViewSideBar(!viewSideBar);
    }
    return(
        <div className="headerBody">
            <i onClick={viewSideBarHandler} className="fa fa-bars" aria-hidden="true"></i>

            <h2>Contacts</h2>
            <input />
        </div>
    )
}