interface Props {
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function CheckBox(prop: Props) {
    return (
        <label>
            <input type="checkbox" className="checkbox-temp" onChange={prop.onChange} />
            {prop.name}
        </label>
    );
}
