import styles from '../../styles/UI/SelectCategory/SelectCategory.module.css'

const SelectCategory = (props) => {
    return(
        <article className={styles.select}>
                <select name={props.name} onChange={props.onChange} value={props.value}>
                    <option value="" selected disabled>
                        Categories
                    </option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Multiple">Multiple</option>
                    <option value="Snack 1">Snack 1</option>
                    <option value="Snack 2">Snack 2</option>
                    <option value="Snack 3">Snack 3</option>
                    
                </select>
            </article>
    )
}

export default SelectCategory;