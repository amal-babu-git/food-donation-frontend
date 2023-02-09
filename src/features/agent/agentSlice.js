import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: [],

}

const agentSlice = createSlice({
    name: 'agent',
    initialState,
    reducers: {
        setAgentOrders: (state, action) => {
            state.orders = action.payload
        }
    }
});

export const { setAgentOrders } = agentSlice.actions

export const selectAgentOrders = (state) => state.agent.orders

export default agentSlice.reducer