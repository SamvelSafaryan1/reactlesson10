import * as YUP from 'yup'
import { Formik } from 'formik'
// import Inputs from '../Inputs/Inputs.jsx'
import './Login.css'

function Login(){
    let validationSchema = YUP.object().shape({
        name: YUP.string().required('Write your name'),
        email: YUP.string().min(6).required('Write your email'),
        password: YUP.string().required('Write your password')
    })

    return(
        <Formik
            validationSchema={
                validationSchema
            }
            initialValues={{
                name: '',
                email: '',
                password: ''
          }}
            onSubmit={(values) => {
                console.log(values)
                
            }}
        >
            {
                ({values,errors,touched,handleChange,handleSubmit}) => (
                    <div className="form">
                        <h2>Login</h2>
                        <input value={values.name}
                                 type='text' 
                                 onChange={handleChange} 
                                 placeholder='Name'
                                 name='name'
                                 className={
                                    errors.name && touched.name ? 'error' : ''
                                 } 
                        />
                        <input value={values.email}
                                 onChange={handleChange} 
                                 type='email' 
                                 placeholder='Email' 
                                 name='email'
                                 className={
                                    errors.email && touched.email ? 'error' : ''
                                } 
                        />
                        <input value={values.password}
                                 onChange={handleChange} 
                                 type='password' 
                                 placeholder='Password' 
                                 name='password'
                                 className={
                                    errors.password && touched.password ? 'error' : ''
                                } 
                        />
                        {/* <Inputs/> */}
                        <button type='submit' onClick={handleSubmit}>Login</button>
                    </div>
                )
            }
        </Formik>
    )
}

export default Login
