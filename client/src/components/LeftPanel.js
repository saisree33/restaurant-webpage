import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Heading/heading.module.css";
import { RiDashboardLine } from "react-icons/ri";
import {MdOutlineRestaurantMenu,MdSettings} from "react-icons/md"
import {ImUserTie} from "react-icons/im"


const LeftPanel = () => {
    return (
        <>
        
        <div className={styles.sidenav}>
       <img src="https://www.leadscrape.com/images/Lead-Scrape-logo.png" alt="" height="50px"/> <br></br><br></br><br></br>
        
        <Link to="/" className={styles.links1}>&ensp;&ensp;&ensp;&ensp;<RiDashboardLine/>&ensp;Dashboard</Link><br></br><br></br><br></br>
        <Link to="/" className={styles.links1}>&ensp;&ensp;&ensp;&ensp;<MdOutlineRestaurantMenu/>&ensp;Items</Link><br></br><br></br><br></br>
        <Link to="/" className={styles.links1}>&ensp;&ensp;&ensp;&ensp;<ImUserTie/>&ensp;Help/Support</Link><br></br><br></br><br></br>
        <Link to="/" className={styles.links1}>&ensp;&ensp;&ensp;&ensp;<MdSettings/>&ensp;Account settings</Link><br></br><br></br><br></br>
       
  
</div>
        </>
    );
};

export default LeftPanel;
