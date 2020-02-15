const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, value } = action;

    // Add a Name Tag
    if (type === "NEW_NAME"){
        newState = state.concat(action.value);
        console.log(newState);        
        return newState;

    } else{

    return state;
}}