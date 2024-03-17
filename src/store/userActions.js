
export function addUser(user) {
    return { type: 'addUser', payload: user };
}


export function updateUser(user) {
    return { type: 'updateUser', payload: user };
}

export function login(user) {
    return { type: 'login', payload: user };
}


