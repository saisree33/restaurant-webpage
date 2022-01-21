export const AppReducer =  (state, action) => {

    switch (action.type) {
        case 'INITIAL_DATA':
            const data = []
            action.payload.forEach((app) => {
                data.unshift(app);
            })
            return {
                items: data
            }

        case 'REMOVE_ITEM':
            return {
                items: state.items.filter(item => {
                    return(
                        item._id !== action.payload
                    )
                })
            }
        case 'ADD_ITEM':
            return{
                items: [action.payload, ...state.items]
            }

        case 'EDIT_ITEM':
            const updateItem = action.payload;
            const updateItems = state.items.map(item => {
                if(item._id === updateItem._id){
                    return updateItem; 
                }

                return item
            })
            return{
                items: updateItems
            }
        default:
            return state
    }
}; 