import { useState } from "react"

import { FaUser } from "react-icons/fa"
import {toast} from 'react-toastify'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const {name, email, password, password2} = formData
    const onChangeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }) )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(password !== password2) {
            toast.error('Password do not match')


        }

    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaUser /> Register


            </h1>
            <p>Please create an account</p>


        </section>
        <section className="form">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <input type='text'
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange = {onChangeHandler}
                    placeholder = 'Enter your name'
                    required

                    />



                </div>


                <div className="form-group">
                    <input type='text'
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange = {onChangeHandler}
                    placeholder = 'Enter your email'
                    required

                    />


                </div>

                <div className="form-group">
                    <input type='text'
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange = {onChangeHandler}
                    placeholder = 'Enter your password'
                    required

                    />


                </div>
                <div className="form-group">
                    <input type='text'
                    className="form-control"
                    id="password2"
                    name="password2"
                    value={password2}
                    onChange = {onChangeHandler}
                    placeholder = 'Confirm your password'
                    required

                    />


                </div>
                <div className="form-group">
                    <button className="btn btn-block">
                        Submit
                    </button>

                </div>
            </form>
        </section>



    </>
  )
}

export default Register