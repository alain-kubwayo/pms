import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import DefaultButton from "../components/common/DefaultButton";
import Heading from "../components/common/Heading";
import Description from "../components/welcome/Description";

const Welcome = () => {
    return ( 
        <div className="grid items-center justify-center w-full grid-cols-1 py-10 mx-auto lg:h-screen lg:py-0 md:w-4/5 gap-y-10 lg:grid-cols-2 md:gap-x-20">
            <Description />
            <div>
                <Heading
                    description="Let's get you started!"
                    customClasses="text-center lg:text-left mb-4 text-2xl font-bold uppercase text-tertiary font-secondary border-t lg:border-none border-tertiary pt-4 lg:pt-0" 
                />
                <div className="flex flex-col items-center pb-4 border-b border-gray-700 gap-y-4 lg:flex-row gap-x-2 xl:gap-x-6">
                    <span className="text-gray-400">Continue with: </span>
                    <div className="space-x-4">
                        <DefaultButton 
                            description="Google" 
                            customClasses="hover:text-black hover:bg-tertiary duration-500 rounded-md border border-tertiary"
                        />
                        <DefaultButton 
                            description="LinkedIn" 
                            customClasses="hover:text-black hover:bg-tertiary duration-500 rounded-md border border-tertiary"
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <DefaultButton 
                        description="Login" 
                        customClasses="w-1/2 rounded-l-md active border border-tertiary"
                    />
                    <DefaultButton 
                        description="Register" 
                        customClasses="w-1/2 rounded-r-md border border-tertiary"
                    />
                </div>
                <LoginForm />
                {/* <RegisterForm /> */}
            </div>
            
        </div>
    );
}
 
export default Welcome;