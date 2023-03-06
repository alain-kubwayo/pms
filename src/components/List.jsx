import { useState, useEffect } from "react";

const List = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems())
        console.log('updating items');
    }, [getItems])
    return ( 
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
     );
}
 
export default List;