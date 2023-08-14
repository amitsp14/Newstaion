// import { hover } from '@testing-library/user-event/dist/hover';
// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
    static propTypes = {}

    render() {
        return (
            <div>



                <nav className="navbar  navbar-expand-lg " style={{ backgroundColor : '#2d2d2d'}} data-bs-theme="dark" >
                    <div className="container-fluid">
                        <Link className="navbar-brand mb-0 h1" to="/home">NewStation</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                                <li className="nav-item" ><Link className="nav-link" style={{ color : '#23C4AE'}}  to="/home">Home</Link></li>
                                {/* <li className="nav-iem"><Link className="nav-lin style={{ color : '#23C4AE'}} to="/about">About</Link></li> */}
                                <li className="nav-item "><Link className="nav-link" style={{ color : '#23C4AE'}} to="/business" >Business</Link></li>
                                <li className="nav-item "><Link className="nav-link" style={{ color : '#23C4AE'}} to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item "><Link className="nav-link" style={{ color : '#23C4AE'}} to="/health">Health</Link></li>
                                <li className="nav-item "><Link className="nav-link" style={{ color : '#23C4AE'}} to="/science">Science</Link></li>
                                <li className="nav-item "><Link className="nav-link" style={{ color : '#23C4AE'}} to="/sports">Sports</Link></li>
                                <li className="nav-item "><Link className="nav-link" style={{ color : '#23C4AE'}} to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>



            </div>
        )
    }
}

export default Navbar