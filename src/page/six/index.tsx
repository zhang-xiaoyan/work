import * as React from 'react';

const Test = () => {
    const inputEl = React.useRef(null);

    const onFocusClick =()=> {
        if(inputEl && inputEl.current) {
            inputEl.current.focus();
        }
    }

    return(
        <div>
            <input type='text' ref={inputEl} />
            <button onClick={onFocusClick}>Focus the input</button>
        </div>
    )
}
export default Test;