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