import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import DefaultButton from "../components/common/DefaultButton";
import Heading from "../components/common/Heading";

const WelcomePage = () => {
    return ( 
        <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 gap-x-40 grid-rows-[100vh]">
            <div>
                <h1 className="mb-4 text-4xl font-extrabold text-tertiary">PMS</h1>
                <div className="text-lg text-tertiary space-y-7">
                    <p>Managing projects has never been easy</p>
                    <p>With PMS, you can manage either a single or multiple projects in a single place.</p>
                    <p>With PMS, you can:</p>
                    <ul className="pl-4">
                        <li>Track individual progress</li>
                        <li>Track teams' progress</li>
                        <li>And ship projects in time!</li>
                    </ul>
                </div>
            </div>
            <div>
                <Heading
                    description="Let's get you started!"
                    customClasses="mb-4 text-2xl font-bold uppercase text-tertiary font-secondary" 
                />
                <div className="flex items-center pb-4 border-b border-gray-700 gap-x-6">
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
                <RegisterForm />
            </div>
            
        </div>
    );
}
 
export default WelcomePage;