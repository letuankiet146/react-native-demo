
defaultState = {
    stateValueArr: [],
    modalContent: null
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                stateValueArr: state.stateValueArr.concat({
                    key: action.key,
                    value: action.inputValue,
                    image: action.image
                })
            }

        case "DELETE":
    modalContent: null
                console.log('Kiet reducer delete: '+ state.modalContent);
            return {
                ...state,
                stateValueArr: state.stateValueArr.filter((stateObj) => {
                    if (stateObj.key !== state.modalContent.key) {
                        return true;
                    }
                }),
                modalContent: null
            }
        case "SELECTED": 
            return {
                ...state,
                modalContent: state.stateValueArr.find((stateObj) => {
                    return stateObj.key === action.keyData;
                })
            }
        case "DESELECTED":
                console.log('Kiet reducer De selected: '+ state.modalContent);
            return {
                ...state,
                modalContent: null
            }
        default:
            break;
    }
    return state;
}

export default reducer