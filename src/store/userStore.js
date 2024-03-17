import produce from "immer"

let id = 5;
export const doId = () => { return id++ };

const initialState = {
    users: [{ id: 1, name: "dan", password: "111" },
    { id: 2, name: "ran", password: "111" },
    { id: 3, name: "avi", password: "111" },
    { id: 4, name: "eli", password: "111" },],
    currentUser: { id: -1, name: "-1", password: "-1" },
    manager: { id: 1, name: "dan", password: "111" },
    isManager: false
};

const userReducer = produce((state = initialState, action) => {

    switch (action.type) {
        case 'addUser':
            return {
                ...state, users: [...state.users, action.payload], currentUser: action.payload, isManager: false
            };

        case 'login':
            let IsloginId = -1;
            if (action.payload.name === state.manager.name && action.payload.password === state.manager.password)
                return { ...state, currentUser: state.manager, isManager: true };
            state.users.map((a) => {
                if ((a.name === action.payload.name && a.password === action.payload.password))
                    IsloginId = a.id;
            });
            if (IsloginId !== -1) {
                action.payload.id = IsloginId;
                return { ...state, currentUser: action.payload, isManager: false };
            }
            else {
                action.payload.id = doId();
                return {
                    ...state, users: [...state.users, action.payload], currentUser: action.payload, isManager: false
                };
            }
        case 'updateUser':
            state.users.map((a) => {
                if (a.id === action.payload.id) {
                    a.name = action.payload.name;
                    a.password = action.payload.password;
                }
            });
            state.currentUser = action.payload;
        default: return state;
    }
}, initialState)

export default userReducer;

