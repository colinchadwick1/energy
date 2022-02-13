import contact from '../images/contacts.png';
import clipboard from '../images/clipboard.png';
import speaker from '../images/megaphone.png';

function Icons() {
    return ( 
        <div className="icons">
            <div className="task">
            <div className="circle">
                <img className="icon" src={contact} alt=""/>
                
            </div>
                <p className="task-text">TASK FORCE CONTACTS</p>
            </div>
            <div className="task">
            <div className="circle">
            <img className="icon" src={clipboard} alt=""/>

            </div>
                <p className="task-text">TASK FORCE TASKS</p>
            </div> 
            <div className="task">
            <div className="circle">
            <img className="icon" src={speaker} alt=""/>

            </div>
                <p className="task-text">TASK FORCE NEWS</p>
            </div>
        </div>
     );
}

export default Icons;