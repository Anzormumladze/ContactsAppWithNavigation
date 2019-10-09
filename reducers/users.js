const initialState = [
    {
        name: 'Dato'
    },
    {
        name: 'Anzor'
    }
]

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_USERS':
            return action.users
        default:
            return state
    }
}

export default users