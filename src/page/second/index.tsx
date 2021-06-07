import * as React from 'react';

type UserInfo = {
    name: string,
    age: number
}

export const UserMsg:React.FC<UserInfo> =({name, age})=> {
    return(
        <div>
            <p>{ name }</p>
            <p>{ age }</p>
        </div>
    )
}