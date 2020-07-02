const isAddingReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_FORM') return !state;
    return state;
}

export default isAddingReducer;
