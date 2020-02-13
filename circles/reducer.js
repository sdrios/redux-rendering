const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];


//creates copy of object via native JS JSON methods
//convert object to string, parse string into object
function deepClone(object){

    return JSON.parse(JSON.stringify(object));
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION: Add a random circle

    if (type === "ADD_CIRCLE"){

        //make a copy of the state and add a circle to the copy 
        let newState = deepClone(state);
        newState.push({
            radius:30,
            color:"#ffff00"
        })
        return newState;
    } else {
        return state;
    }
   
}