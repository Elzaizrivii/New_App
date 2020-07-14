import React from "react";
import {SingIn} from "./SingIn";
import {connect} from "react-redux";
import {} from "../../Redux/singInReducer";

let mapStateToProps = (state) => {
    return {
        users: state.admin
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        // follow: (userId) => {
        //     dispatch(followAC(userId))
        // }
    }
};

const SingInContainer = connect(mapStateToProps, mapDispatchToProps)(SingIn);

export default SingInContainer;