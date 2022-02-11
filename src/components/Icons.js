import contact from '../images/contacts.png';
import clipboard from '../images/clipboard.png';
import speaker from '../images/speaker.png'
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
            <img className="icon" src={clipboard} alt=""/>

            </div>
                <p>TASK FORCE TASKS</p>
            </div> <div>
            <div className="circle">
            <img className="icon" src={speaker} alt=""/>

            </div>
                <p>TASK FORCE NEWS</p>
            </div>
        </div>
     );
}

export default Icons;