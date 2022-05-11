import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
// import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';




class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className='Navbar'>
                <ul className='nav-menu'>
                    <h1 className='logo'>Rachel Cox Art</h1>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Navbar