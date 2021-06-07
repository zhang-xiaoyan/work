import * as React from 'react';

type UserInfo = {
    name: string,
    age: number
};

export const User = ({name, age}: UserInfo) => {
    return(
        <div>
            <p>{ name }</p>
            <p>{ age }</p>
        </div>
    )
}

export const User1:React.FC<UserInfo> =({name, age, children})=> {
    return(
        <div>
            <p>{ name }</p>
            <p>{ age }</p>
            <p>{ children }</p>
        </div>
    )
}

export const User2:React.FC<UserInfo> =(props)=> {
    return(
        <div>
            <p>{ props.name }</p>
            <p>{ props.age }</p>
            <p>{ props.children }</p>
        </div>
    )
}