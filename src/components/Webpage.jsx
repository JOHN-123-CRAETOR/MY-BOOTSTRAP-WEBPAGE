import MyLogo from '../assets/My-Logo.jpg'


export default function Webpage(){



    return(<div>
            <section>
                <nav className="navbar navbar-expand bg-dark text-light">
                    <a className="navbar-brand text-white ms-5">
                        <img src={MyLogo} 
                        alt="My official Logo"
                        style={{ height: "30px",
                                 borderRadius: "3px"
                        }}/>
                    </a>
                    <ul className="navbar-nav ms-auto d-flex gap-4 me-5">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">services</li>
                        <li className="nav-item">contact</li>
                        <li className="nav-item">About</li>
                    </ul>
                </nav>
            </section>
           </div>)
}