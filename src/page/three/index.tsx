import * as React from 'react';

let switchCount:number = 0;

const User =()=> {
    const [name, setName] = React.useState('');
    const [value, setValue] = React.useState('I never change.');
    React.useEffect(()=>{
        switchCount += 1;
    }, [value]);

    React.useEffect(()=>{
        const handler =()=> {
            document.title = Math.random().toString();
        }
        window.addEventListener('resize', handler);
        return ()=>{
            window.removeEventListener('resize', handler);
        }
    }, []);
    return(
        <div>
            <p>Current Name: { name }</p>
            <p>switchCount: { switchCount }</p>
            <button onClick={() => setName('Jack')}>Jack</button>
            <button onClick={() => setName('Marry')}>Marry</button>
        </div>
    )
}

export default User;