import Wrapper from "../components/layout/Wrapper";

const WelcomePage = () => {
    return ( 
        <Wrapper className="flex items-center justify-center w-screen h-screen">
            <div className="grid w-4/5 grid-cols-1 sm:grid-cols-2 sm:gap-x-16">
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
                    <h2 className="mb-4 text-2xl font-bold uppercase text-tertiary font-secondary">Let's get you started!</h2>
                    <div className="flex items-center pb-4 border-b border-gray-700 gap-x-6">
                        <span className="text-gray-400">Continue with: </span>
                        <div className="space-x-4">
                            <button className="px-2 py-2 duration-500 border border-tertiary text-tertiary hover:rounded-3xl">Google</button>
                            <button className="px-2 py-2 duration-500 border border-tertiary text-tertiary hover:rounded-3xl">LinkedIn</button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="w-1/2 px-2 py-2 text-black duration-500 border border-tertiary rounded-l-3xl bg-tertiary">Login</button>
                        <button className="w-1/2 px-2 py-2 duration-500 border border-tertiary text-tertiary rounded-r-3xl">Register</button>
                    </div>
                    <form className="text-lg">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="w-full px-2 py-2 mb-4 text-white bg-transparent border-b outline-none border-tertiary"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full px-2 py-2 mb-4 text-white bg-transparent border-b outline-none border-tertiary"
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="w-full px-2 py-2 mb-4 text-white bg-transparent border-b outline-none border-tertiary"
                    />
                    <button className="px-2 py-2 border-b border-tertiary text-tertiary">Get In</button>
                </form>
                </div>
                
            </div>
        </Wrapper>
    );
}
 
export default WelcomePage;