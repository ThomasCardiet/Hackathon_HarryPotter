interface PrimaryButton {
    text: string,
    type: string
}
export default function PrimaryButton (props: PrimaryButton) {
    return (
        <button className="button__primary" type="submit" role={props.type}>{props.text}</button>
    )
}