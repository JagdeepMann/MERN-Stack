import React, {useState} from 'react'

const BoxForm = ()=>{

    const [formInfo, setFormInfo]=useState({
        color:""
    })

    const [allColors, setAllColors]=useState([])

    const changeHandler=(e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        const boxStyle={
            height:"200px",
            width: "200px",
            backgroundColor: formInfo.color
        }
        setAllColors([...allColors, boxStyle])
        setFormInfo({
            color:""
        })
    }

    return(
        <div className="container mt-5">
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Color </label>
                    <input onChange = {changeHandler} type="text" name="color" value={formInfo.color} />
                    <button type="submit">Add</button>
                </div>
            </form>
            <div>
                {
                    allColors.map(color=>{
                        return <div style={color}></div>
                    })
                }
            </div>
        </div>
    );

}

export default BoxForm;