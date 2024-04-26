"use client"

export type SetValue = (value: number) => void;

export interface CounterProps {
    value: number
    onChange: SetValue
}

export function Counter(props: CounterProps):React.ReactNode {
    return <div>
        <button onClick={() => props.onChange(props.value - 1)}>-</button>
        {props.value}
        <button onClick={() => props.onChange(props.value + 1)}>+</button>
    </div>
}