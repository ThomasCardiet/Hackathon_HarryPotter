interface Input {
    placeholder?: string;
    name: string;
    type: string;
    required?: boolean
}
export default function Input(props: Input){
    return (
        <div className="input__container">
            <label>{props.placeholder}</label>
            <input required={props.required} type={props.type} name={props.name} placeholder={props.placeholder}></input>
        </div>
    )
}