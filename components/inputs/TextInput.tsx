interface TextInput {
    placeholder?: string;
    name: string
}
export default function TextInput(props: TextInput){
    return (
        <>
            <label>{props.placeholder}</label>
            <input type="text" name={props.name} placeholder={props.placeholder}></input>
        </>
    )
}