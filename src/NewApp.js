import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

const NewApp = () => {
    const [count, setCount] = useState(0);

    console.log('render');

    const onClickButton = () => {
        console.log('setCount 1', count);
        setCount(count + 1);
        console.log('setCount 2', count);
        setCount(count + 1);
        console.log('setCount 2', count);
        setCount(count + 1);

        // setCount((prevState) => {
        //     console.log('prevState', prevState);
        //     return prevState + 1;
        // });
        // setCount((prevState) => {
        //     console.log('prevState', prevState);
        //     return prevState + 1;
        // });
        // setCount((prevState) => {
        //     console.log('prevState', prevState);
        //     return prevState + 1;
        // });
    };

    return (
        <div>
            {count}
            <Button onClick={onClickButton}>+</Button>
        </div>
    );
};

export default NewApp;
