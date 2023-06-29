import { useState } from "react"

import { FaSignInAlt } from "react-icons/fa"
import {toast} from 'react-toastify'

const Login = () => {

    const [formData, setFormData] = useState({

        email: '',
        password: '',
    })

    const {email, password} = formData
    const onChangeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }) )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()


    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaSignInAlt /> Login


            </h1>
            <p>Please Login to get Support</p>


        </section>
        <section className="form">
            <form onSubmit={onSubmitHandler}>



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
                    <button className="btn btn-block">
                        Submit
                    </button>

                </div>
            </form>
        </section>



    </>
  )
}

export default Login