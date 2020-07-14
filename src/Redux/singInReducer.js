const LOGIN_USER = 'LOGIN_USER';

let initState = {
    admin: [
    ],
    newPostText: ''
};

export const singInReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER: {

            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        default:
            return state;
    }
};

export const setPostsAC = (admin) => ({type: LOGIN_USER, admin});
