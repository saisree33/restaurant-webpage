import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from 'react-router-dom';
import styles from '../styles/EditItem/EditItem.module.css';
import { BsPencil } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import Button from  './UI/Button';
import UserFormField from './UI/ItemFormField';
import Axios from "axios";
import SelectCategory from './UI/SelectCategory';

const EditItem = (props) => {
    const [selectedItem, setSelectedItem] = useState({
        itemName: '',
        calCount:0,
        itemPrice: 0,
        itemCategory: ''
    })
    const { items, editItem } = useContext(GlobalContext);
    const history = useHistory();
    const currentItemId = props.match.params.id;

    useEffect(() => {
        const itemId = currentItemId;
        const selectedItem = items.find(item => item._id === itemId)
        setSelectedItem(selectedItem);
    }, [currentItemId, items])

    const updateFood = function (id) {
        const {itemName, calCount, itemPrice, itemCategory} = selectedItem

        Axios.put("http://localhost:3004/update", {
            id: id,
            itemName: itemName,
            calCount: Number(calCount),
            itemPrice: Number(itemPrice),
            itemCategory: itemCategory
        });
    };

    const onSubmit = function(e){

        editItem(selectedItem)
        history.push('/')
        updateFood(currentItemId)
    }

    const onitemNameChange = function(e){
        setSelectedItem({...selectedItem,[e.target.name]: e.target.value})
    }

    const oncalCountChange = function(e){
        setSelectedItem({...selectedItem,[e.target.name]: e.target.value})
    }

    const onitemPriceChange = function(e){
        setSelectedItem({...selectedItem,[e.target.name]: e.target.value})
    }

    const onitemCategoryChange = function(e){
        setSelectedItem({...selectedItem,[e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={onSubmit} className={styles.form}>
            <UserFormField
                label="Item Name"
                name="itemName"
                value={selectedItem.itemName}
                type="text"
                placeholder="enter item name"
                onChange={onitemNameChange}
            />

            <UserFormField
                label="Cal count"
                name="calCount"
                value={selectedItem.calCount}
                type="number"
                placeholder="enter Cal count"
                onChange={oncalCountChange}

            />

            <UserFormField
                label="Price"
                name="itemPrice"
                value={selectedItem.itemPrice}
                type="number"
                placeholder="enter Item price"
                onChange={onitemPriceChange}

            />
            <SelectCategory label="Category" name="itemCategory" onChange={onitemCategoryChange} value={selectedItem.itemCategory}/>

            <div className={styles.buttons}>
                <Button type="submit" className={styles.edit_item}>Update</Button> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <Link to="/" className={styles.link}>  Cancel</Link>
            </div>
        </form>
    )
}

export default EditItem