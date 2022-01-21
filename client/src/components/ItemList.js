import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { BsPencil } from "react-icons/bs";
import { MdDeleteForever,MdOutlineDeleteOutline } from "react-icons/md";
import Axios from "axios";
import styles from "../styles/ItemList/ItemList.module.css";
import Button from "./UI/Button";

const ItemList = () => {
    const { items, removeItem } = useContext(GlobalContext);

    const removeHandler = (id) => {
        removeItem(id);
        Axios.delete(`http://localhost:3004/delete/${id}`);
    };

    return (
        <table className={styles["content-table"]}>
            <thead>
                <tr>
                    <th></th>
                    <th className={styles.title}>Name</th>
                    <th className={styles.author}>Cal count</th>
                    <th className={styles.price}>Price</th>
                    <th className={styles.category}>Category</th>
                    <th className={styles.price}>Actions</th>
                </tr>
            </thead>
            {items.length > 0 && (
                <tbody>
                    {items.map((item) => {
                        
                        return (
                            <tr key={item._id}>
                                <td><img alt="" src="https://pinchofyum.com/wp-content/uploads/Sunday-Chili-400x400.jpg" width="40" height="40"/></td>
                                <td>{item.itemName}</td>
                                <td>{item.calCount}</td>
                                <td>{item.itemPrice}</td>
                                <td>{item.itemCategory}</td>
                                <td>
                                    <div className="actions">
                                        <Link
                                            to={`/edit/${item._id}`}
                                            id={styles.link}
                                            className={styles.link}
                                        >
                                            <BsPencil />
                                            
                                        </Link>
                                        <Button
                                            onClick={() =>
                                                removeHandler(item._id)
                                            }
                                            className={styles.button}
                                        >
                                            <MdOutlineDeleteOutline />
                                            
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            )}
        </table>
    );
};

export default ItemList;
