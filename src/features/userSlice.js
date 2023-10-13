import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';




// Get user :


export const getUser = createAsyncThunk('getUser', async () => {

    const fetchUser = await fetch('https://652696e3917d673fd76c9825.mockapi.io/crud', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    try {
        const response = await fetchUser.json();
        return response;
    } catch (error) {
        return error.message;
    }

});



// Add User: 

export const addUser = createAsyncThunk('addUser', async (data, { rejectWithValue }) => {

    const add = await fetch('https://652696e3917d673fd76c9825.mockapi.io/crud', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    })
    try {
        const response = await add.json();
        return response;

    } catch (error) {
        return rejectWithValue(error);
    }
});


// Delete User  :

export const deleteUser = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {




    const deleteUser = await fetch(`https://652696e3917d673fd76c9825.mockapi.io/crud/${id}`, { method: 'DELETE' });

    try {
        const response = await deleteUser.json();
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Update User : 

export const updateUser = createAsyncThunk('updateUser', async (data, { rejectWithValue }) => {

    const updateUser = await fetch(`https://652696e3917d673fd76c9825.mockapi.io/crud/${data.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    try {
        const response = await updateUser.json();
        return response;
    } catch (error) {

        return rejectWithValue(error);
    }
})


const userSlice = createSlice({

    name: 'userSlice',
    initialState: {
        loading: false,
        error: null,
        user: []
    },
    reducers: {

    },

    // Adding User : 

    extraReducers: {
        [addUser.pending]: (state) => {
            state.loading = true;
        },
        [addUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user.push(action.payload);
        },
        [addUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Showing User : 

        [getUser.pending]: (state) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        // Delete User from List :

        [deleteUser.pending]: (state) => {
            state.loading = true
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;

            if (id) {
                state.user = state.user.filter((val) => val.id !== id);
            }

        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Update User : 

        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = state.user.map((val) => (
                val.id === action.payload.id ? action.payload : val
            ))

        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }

    }

});

export default userSlice.reducer;