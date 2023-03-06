import { useState, useEffect } from "react";

const UseEffectComponent = () => {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = e => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [resourceType])

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        // events => remove events to avoid slowing down your app, subscription to any kind of API => unsubscribe
        return () => window.removeEventListener("resize", handleResize)
    }, [windowWidth])


    return ( 
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {/* {
                items.map((item, index) => {
                    return <pre key={index}>{JSON.stringify(item)}</pre>
                })
            } */}
            <hr />
            <div>{windowWidth}</div>
        </>
    );
}
 
export default UseEffectComponent;