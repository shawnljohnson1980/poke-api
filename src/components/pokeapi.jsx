import { navigate } from '@reach/router'
import React, { useState } from 'react'


const Form = props => {
    const [name, setName] = useState("")
    const [myForm, setMyForm] = useState({
        name: "",
    })
    const onChangeHandler = e => {

        setMyForm({ ...myForm, [e.target.name]: e.target.value })
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        props.pullPoke(myForm)
        const setName = name;
    };
    const submit = () => {
        navigate('/results')
    }
    return (
        <div className="col-4 mt-4">
            <form className="border border-rounded border-secondary shadow p-5 text-left p-3" onSubmit={onSubmitHandler}>
                <div className="form-group mt-3">
                    <label htmlFor="name">Name</label>
                    <input className="border border-rounded border-secondary shadow form-control text-left" type="text" name="Name" onChange={onChangeHandler} />
                </div>
                <div className="form-group-2 mt-3 ml-5">
                    <input className="btn btn-reg btn-primary border border-rounded border-secondary shadow  mt-3" type="submit" value="New Poke" onClick={submit} />
                </div>
            </form>
        </div>
    )
}
export default Form;