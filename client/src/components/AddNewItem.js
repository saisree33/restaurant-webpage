import React, { useState, useContext, useReducer, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import styles from "../styles/AddNewItem/AddNewItem.module.css";
import { GiCancel } from "react-icons/gi";
import Button from "./UI/Button";
import ItemFormField from "./UI/ItemFormField";
import SelectCategory from "./UI/SelectCategory";

const AddItem = () => {
    const { addItem } = useContext(GlobalContext);
    const history = useHistory();
    const [isFormValid, setIsFormValid] = useState(false);

    const [itemTitle, dispatchitemTitle] = useReducer(
        (state, action) => {
            if(action.type === "ITEM_INPUT"){
                return {value: action.val, isValid: action.val.length > 5}
            }
            
            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    
    const [calCount, dispatchcalCount] = useReducer(
        (state, action) => {
            if(action.type === "ITEM_INPUT"){
                return {value: action.val, isValid: action.val.length >= 1}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    const [itemPrice, dispatchitemPrice] = useReducer(
        (state, action) => {
            if(action.type === "ITEM_INPUT"){
                return {value: action.val, isValid: action.val.length >= 1}
            }
 return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    const [itemCategory, dispatchitemCategory] = useReducer(
        (state, action) => {
            if(action.type === 'ITEM_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )

    const { isValid: itemTitleIsValid} = itemTitle;
    const { isValid: calCountIsValid} = calCount;
    const { isValid: itemPriceIsValid} = itemPrice;
    const { isValid: itemCategoryIsValid} = itemCategory;

 
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormValid(
                itemTitleIsValid &&
                calCountIsValid &&
                itemPriceIsValid &&
                itemCategoryIsValid !== false
            );
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [itemTitleIsValid, calCountIsValid, itemPriceIsValid, itemCategoryIsValid]);


    const onSubmit = function (e) {
        e.preventDefault()
        if(isFormValid !== true) return

        const newItem = {
            itemName: itemTitle.value,
            calCount: calCount.value,
            itemPrice: itemPrice.value,
            itemCategory: itemCategory.value,
        };

        Axios.post("http://localhost:3004/insert", {
            itemName: itemTitle.value,
            itemPrice: itemPrice.value,
            calCount: calCount.value,
            itemCategory: itemCategory.value,
        });
        addItem(newItem);
        history.push("/");
    };

    const onitemTitleChange = function (e) {
        dispatchitemTitle({type: "ITEM_INPUT", val: e.target.value} )
    };

    const onAuthorChange = function (e) {
        dispatchcalCount({type: 'ITEM_INPUT', val: e.target.value});
    };

    const onPriceChange = function (e) {
        dispatchitemPrice({type: "ITEM_INPUT", val: e.target.value})
        
    };

    const onCategoryChange = function (e) {
        dispatchitemCategory({type: "ITEM_INPUT", val: e.target.value});
    };

    return (
        <form onSubmit={onSubmit} className={`${styles.form}`}>
            <ItemFormField
                label="Item Name"
                value={itemTitle.value}
                type="text"
                placeholder="enter Item Name"
                onChange={onitemTitleChange}
                className={`${itemTitle.isValid === false ? styles.invalid : ''}`}
            />

            <ItemFormField
                label="Cal Count"
                value={calCount.value}
                type="number"
                placeholder="enter Cal Count"
                onChange={onAuthorChange}
                className={`${calCount.isValid === false ? styles.invalid : ''}`}
            />

            <ItemFormField
                label="Price"
                value={itemPrice.value}
                type="number"
                placeholder="enter Item price"
                onChange={onPriceChange}
                className={`${itemPrice.isValid === false ? styles.invalid : ''}`}
            />

            <SelectCategory onChange={onCategoryChange}/>

            <div className={styles.buttons}>
                <Button type="submit" className={`${isFormValid ? styles.submit : styles.disabled}`}>
                    Submit
                </Button>
                <Link to="/" className={styles.link}>
                    <GiCancel /> Cancel
                </Link>
            </div>
        </form>
    );
};

export default AddItem;
