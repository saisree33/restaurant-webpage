import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Heading/heading.module.css";
import { ImSearch} from "react-icons/im";
import {MdOutlineNotificationAdd} from "react-icons/md"
import {FiUser} from "react-icons/fi"

const Heading = () => {
    return (
        <>
        <div className={styles.header1}>
       <b className={styles.red}>Vendor Dashboard</b>
       &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
       <b><ImSearch/>&nbsp;Search</b>
       <b><MdOutlineNotificationAdd/>&nbsp;Notifications</b>
       <b><FiUser/>&nbsp;Sign out</b>
       </div>
       
       
       <br></br><br></br><br></br>
            <header className={styles.header}>
            <b>Items</b>
            &ensp; &ensp; &ensp;
            
                <nav>
                
                    <li>
                    <button className={styles.import}>
                            &ensp;   &ensp;&ensp;  Import &ensp;&ensp;&ensp;
                        </button> &ensp;&ensp;&ensp;
                        <Link className={styles.link} to="/add">
                            &ensp;   &ensp;&ensp;  create &ensp;&ensp;&ensp;
                        </Link>
                    </li>
                    
                </nav>
                
            </header>
            <br></br>
        </>
    );
};

export default Heading;
