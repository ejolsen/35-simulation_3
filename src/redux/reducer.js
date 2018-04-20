const initialState = {
    username: '',
    img: '',
    id: 0
}

const DISPLAY_USER = "DISPLAY_USER"

export function displayUser(id, username, img) {
    return {
        type: DISPLAY_USER,
        payload: {
            id: '',
            username: '',
            img: ''
        }
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {

        case DISPLAY_USER:
            return Object.assign({}, state, {username: action.payload.username}, {id: action.payload.id}, {img: action.payload.img});
        default:
            return state;
    }
}