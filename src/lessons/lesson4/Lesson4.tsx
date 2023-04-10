import React from 'react'
import './lesson_4';
import {onClickCreateHandler, onClickRejectPromise, onClickResolvePromise} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button onClick={onClickCreateHandler} id='btn-create-promise'>Create Promise</button>
            <button onClick={onClickResolvePromise} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={onClickRejectPromise} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;