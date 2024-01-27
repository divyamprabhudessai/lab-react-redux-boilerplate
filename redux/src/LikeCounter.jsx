import { Reducer } from "./Components/Reducer"
import { incrementLike,decrementLike } from "./Components/Actions"
import {configureStore} from "@reduxjs/toolkit"
import { Provider,useDispatch,useSelector } from "react-redux"


export const store = configureStore({
    reducer: Reducer
 });

export  const LikeCounter = () =>{

    const Likes = useSelector(state => state.Likes);
    const dispatch = useDispatch()

    return(
        
        <>
            <h2>LIKES COUNTER:{Likes}</h2>
            <button onClick={()=>dispatch(incrementLike())}> Increment </button>
            <button onClick={()=>dispatch(decrementLike())}> Decrement </button>
        </>
        
    )
}