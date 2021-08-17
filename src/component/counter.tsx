import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease, increaseBy} from '../reducer/counter';
import {RootState} from '../reducer';

export default function Counter({count, onIncrease, onDecrease, onIncreaseBy}: CounterProps) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
}

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};
