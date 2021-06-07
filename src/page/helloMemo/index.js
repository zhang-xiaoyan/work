import React, { useState, useEffect, useMemo } from 'react';
import {connect} from "react-redux";
const checkList = useMemo(() => {}, [props.checked])
const select = (state) => {
    let helloHooks = state.helloHooks;
    return {
        user: helloHooks.user
    }
}

export default connect(select, null)(checkList);