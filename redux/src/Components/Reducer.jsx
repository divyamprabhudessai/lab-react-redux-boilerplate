export const Reducer = (state = {Likes:0},action)=>{
    switch (action.type){
        case "INCREMENT":
            return {Likes: state.Likes + 1};
        case "DECREMENT":
            return {Likes : state.Likes -1}
        default:
            return state
    }
}