import { useAuthContext, useAuthUpdateContext } from "../AuthContext";

const UseContextPractice = () => {
    const isLoggedIn = useAuthContext();
    const handleLogin = useAuthUpdateContext();
    
    return ( 
        <div>
            <button onClick={handleLogin}>{isLoggedIn ? 'Sign Out' : 'Sign In'}</button>
            {isLoggedIn ? <p>Logged in as Admin</p> : <p>You need to login to use this site!</p>}
        </div>
     );
}
 
export default UseContextPractice;