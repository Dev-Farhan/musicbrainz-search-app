import { createSlice } from '@reduxjs/toolkit'

const shortlistSlice = createSlice({
    name:'shortlist',
    initialState:{
        items:[],
    },
    reducers:{
        addToShortlist:(state,action)=>{
            if(!state.items.find(item=>item.id===action.payload.id)){
                state.items.push(action.payload);
            }
        },
        removeFromShortlist:(state,action)=>{
            state.items = state.items.filter(item=>item.id !==action.payload)
        },
        clearShortList:(state)=>{
            state.items = [];
        }
    }
})

export const { addToShortlist,removeFromShortlist,clearShortList} = shortlistSlice.actions;
export default shortlistSlice.reducer;
