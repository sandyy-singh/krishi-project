import React from "react";
import { useState } from "react";

import Location from "./Location"
import RecentUpdates from "./RecentUpdates";
import Weathers from "./Weathers";

import "./Styles/Uppernav.css"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

import { IconContext } from 'react-icons';
import { Container, TextField } from "@mui/material";


export default function MainContent() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="maincontent">

            <IconContext.Provider value={{ color: '#fff' }}>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose
                                    style={{
                                        marginLeft: '5px'
                                    }
                                    } />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            if (index >= 4) {
                                return <div></div>;
                            }

                            return (
                                <div>
                                    {/* {console.log(item)} */}
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                </div>

                            );
                        })}
                        <div className='downbar'>
                            <li key={SidebarData[4]} className={SidebarData[4].cName}>
                                <Link to={SidebarData[4].path}>
                                    {SidebarData[4].icon}
                                    <span>{SidebarData[4].title}</span>
                                </Link>
                            </li>
                            <li key={SidebarData[5]} className={SidebarData[5].cName}>
                                <Link to={SidebarData[5].path}>
                                    {SidebarData[5].icon}
                                    <span>{SidebarData[5].title}</span>
                                </Link>
                            </li>
                        </div>


                    </ul>
                </nav>

            </IconContext.Provider>

            <div className={sidebar ? 'content' : ''}>
                <div className='navbar'>
                    <div>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>

                    {/* <Container maxWidth="md" sx={{ mt: 20 }}> */}
                    <div>
                        <TextField type="search" id="search" label="Search" sx={{
                            '& .css-1g24dm6-MuiInputBase-input-MuiOutlinedInput-input': {
                                width: '271px',
                                height: '20px',
                                flexShrink: 0,
                                borderRadius: '7px',
                                background: '#F4F4F4',
                                // border: 'none',
                                boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.15)',
                            },


                        }} />
                    </div>

                    {/* </Container> */}
                </div>
                <Location />
                <RecentUpdates />
                <Weathers />
         
            </div>

        </div>


    )
}