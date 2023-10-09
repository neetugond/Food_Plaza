import { useEffect, useState } from "react"

const ProfileFunctional = (props) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // console.log('useEffect') //2nd call
    },[]);
    // console.log('render') //1st call
    return (
        <div>
            {/* <h1>{ props.name}</h1> */}
            <h2>Profile Functional Component</h2>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}> +</button>
        </div>
    )
}

export default ProfileFunctional