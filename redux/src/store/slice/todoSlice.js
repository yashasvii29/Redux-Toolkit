import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList : [],
};

const todoReducer = createSlice({
    name: "todos",
    initialState:initialState,
    reducers:{
        // combine all the actions that you need
    }
})