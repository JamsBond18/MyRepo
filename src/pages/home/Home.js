import React, { useState } from "react";

const Home = () => {
    const [user, setUser] = useState("Jesse Hall");
    const countries = [
        {
            name: 'India', value: 'IN', cities: ['Dehli', 'Mumbai']
        },
        {
            name: 'Pak', value: 'PK', cities: ['Karanchi', 'Lahor']
        },
    ]
    const [count, setCount] = useState(0);
    const [country, setCountry] = useState('');

    const checkDdlValue = (event) => {
        setCountry(event.target.value)
    }

    const handleClick = (e) => {
        setCount(count => count + 1)
    }
    return (
        <>
            <div className="container" >I'm an inline flexbox container!
                <label>count</label> {count}
                <button onClick={() => handleClick()} >Add</button>

                <select className="col-md-4 form-select" onChange={checkDdlValue}>
                    {
                        countries.map((item) => {
                            return <option value={item.value} >{item.name} </option>
                        })
                    }
                </select>
                {country}

                <h1>{`Hello ${user}!`}</h1>
                {user} 


            </div>
        </>
    )
}
export default Home;