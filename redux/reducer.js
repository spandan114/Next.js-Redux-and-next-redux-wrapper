const initialState = {
    users:null
   };
   
   export const userReducer = (state = initialState, action) => {
     switch (action.type) {
      case "FETCH_ALL_USER":
        return {
            ...state,
            users: [...action.payload.data]
        };

       default:
         return state;
     }
   }