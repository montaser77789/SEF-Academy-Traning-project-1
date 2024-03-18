import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchUsers = createAsyncThunk(
//     "usersSlice/fetchUsers",
//     async () => {
//       const response = await api('/products/categories'
//       );
//       return response.data;
//     }
//   );

export const UsersSlice= createSlice({
    name:"UsersSlice",
    initialState:[
        {
        fName: 'ahmed',
        lName: 'ahmed',
        status: 'inActive',
        email: 'montaser@gmail',
        role: 'instructor',
        mobNum: '01090251773',
        userId: 0,
        password: '123456',
        passwordConfirmation: '123456',
        score: 20,
        online:false,
        },
        {
        fName: 'ahmed',
        lName: 'ahmed',
        status: 'Active',
        email: 'montaser1@gmail',
        role: 'Admin',
        mobNum: '01090251773',
        userId: 1,
        password: '123456',
        passwordConfirmation: '123456',
        score: 20,
        online:false,
        },
        {
        fName: 'ahmed',
        lName: 'ahmed',
        status: 'Active',
        email: 'montaser2@gmail',
        role: 'Student',
        mobNum: '01090251773',
        userId: 2,
        password: '123456',
        passwordConfirmation: '123456',
        score: 20,
        online:false,
      }
    ],
    reducers:{
        addUser:(state,action)=>{
            const userExists = state.find((user) => user.userId === action.payload.userId);
            if (userExists) {
              return state.map((user) =>
                user.userId === action.payload.userId ? { ...user, ...action.payload } : user
              );
            } else {
              state.push({ ...action.payload, userId: state.length });
            }
        },
        setOnline:(state,action)=>{
            const index = state.findIndex(user=>user.userId === action.payload.userId)
            state[index] = {...action.payload,online:true}
            return state
        },
        logOut:(state,action)=>{
            const index = state.findIndex(user=>user.userId === action.payload)
            state[index].online = false;
        },
        removeUser:(state,action)=>{
            return state.filter(user=>user.userId!==action.payload.userId)
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //     state.all = action.payload;
    //     })}
})

export const {addUser,setOnline,logOut , removeUser} = UsersSlice.actions;
export default UsersSlice.reducer;