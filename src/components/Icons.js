import contact from '../images/contacts.png';
function Icons() {
    return ( 
        <div className="icons">
            <div>
            <div className="circle">
                <img className="icon" src={contact} alt=""/>
                
            </div>
                <p>TASK FORCE CONTACTS</p>
            </div>
            <div>
            <div className="circle">
            </div>
                <p>TASK FORCE TASKS</p>
            </div> <div>
            <div className="circle">
            </div>
                <p>TASK FORCE NEWS</p>
            </div>
        </div>
     );
}

export default Icons;