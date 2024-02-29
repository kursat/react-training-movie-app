import { Button } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import {
    decrement,
    decrementBy,
    increment,
    selectCount,
} from './redux/features/counterSlice';
import Counter from './Counter';

function App() {
    // const count = useSelector((state) => state.counter.value);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    // console.log('increment()', increment());

    return (
        <div className="App">
            <Counter />
            <div className="m-4 text-3xl">{count}</div>

            <Button
                variant={'shadow'}
                color={'secondary'}
                onClick={() => dispatch(increment())}
            >
                Arttır
            </Button>
            <Button
                variant={'shadow'}
                color={'secondary'}
                onClick={() => dispatch(decrement())}
            >
                Azalt
            </Button>
            <Button
                variant={'shadow'}
                color={'secondary'}
                onClick={() => dispatch(decrementBy(2))}
            >
                5 Azalt
            </Button>
        </div>
    );
}

export default App;
