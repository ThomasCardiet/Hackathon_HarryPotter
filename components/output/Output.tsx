interface Output {
    text: string | number
}

export default function Output(props: Output){
    return (
        <output className="output">{props.text}</output>
    )
}