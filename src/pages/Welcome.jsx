import { useState } from "react";

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import DefaultButton from "../components/common/DefaultButton";
import Heading from "../components/common/Heading";
import Description from "../components/welcome/Description";

const Welcome = () => {
    const [activeTab, setActiveTab] = useState("login");

    const handleLoginButtonClick = () => setActiveTab("login");
    const handleRegisterButtonClick = () => setActiveTab("register");
    
    return ( 
        <div className="grid items-center w-full grid-cols-1 py-10 mx-auto text-white lg:items-center lg:pt-40 lg:h-screen md:w-4/5 gap-y-10 lg:grid-cols-2 md:gap-x-20">
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
                    <div>
                        <button 
                            className={`px-2 py-2 text-tertiary w-1/2 rounded-l-md border border-tertiary ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={handleLoginButtonClick}
                        >
                            Login
                        </button>
                        <button 
                            className={`px-2 py-2 text-tertiary w-1/2 rounded-r-md border border-tertiary ${activeTab === 'register' ? 'active' : ''}`}
                            onClick={handleRegisterButtonClick}
                        >
                            Register 
                        </button>
                    </div>
                    <div>
                        {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Welcome;