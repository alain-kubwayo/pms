import DefaultButton from "../common/DefaultButton";
import InputField from "../common/InputField";

const RegisterForm = () => {
    return ( 
        <form className="flex flex-col mt-12 text-lg">
            <InputField 
                type="text" 
                placeholder="Username" 
            />
            <InputField 
                type="password" 
                placeholder="Password" 
            />
            <InputField 
                type="password" 
                placeholder="Confirm Password" 
            />
            <DefaultButton
                description="Get In"
                customClasses="self-center lg:self-start border-b !border-tertiary hover:bg-tertiary hover:text-black hover:rounded-md"
            />
        </form>
    );
}
 
export default RegisterForm;