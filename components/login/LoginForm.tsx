import PrimaryButton from "@/components/buttons/PrimaryButton";
import TextInput from "@/components/inputs/TextInput";

export default function LoginForm(){
    return (
        <form>
            <TextInput name="email" placeholder="Enter name"></TextInput>
            <PrimaryButton text="Connexion" type="submit"></PrimaryButton>
        </form>
    )
}