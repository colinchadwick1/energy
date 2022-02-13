import logo from "../images/logo.png"

function CTA() {
    return (  
        <div className="nav">
        <div>
            <img className="logo" src={logo} alt="logo"/>
        </div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#">ABOUT</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#">TASKS</a>

      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">NEWS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONTACT US</a>
      </li>
      
    </ul>
   
  </div>
</nav>

        </div>
        </div>

    )
}

export default CTA;