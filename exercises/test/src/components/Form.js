import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../App.css'
const Form = () => {
    const yupValidation = () => {
        return Yup.object({
            username: Yup.string().min(8, "username length can't under 8 character").required('Required'),
            email: Yup.string().email('email is invalid').required('Required'),
            password: Yup.string().min(12, "password length can't under 12 character").required('Required')
        })
    }
    const Formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            let res = JSON.stringify(values).replace('{', '').replace('}', '').replaceAll(',', '\n')
            alert(res)
        },
        validationSchema: yupValidation()
    })
    return (
        <form onSubmit={Formik.handleSubmit} className={'Formik'}>
            <label htmlFor='username'>username</label><br />
            <input type='text' placeholder='username' id='username' onBlur={Formik.handleBlur} onChange={Formik.handleChange} value={Formik.values.username} /><br />
            {Formik.touched.username && Formik.errors.username ? <p style={{ color: 'red' }}>{Formik.errors.username}</p> : null}
            <label htmlFor='email'>email</label><br />
            <input type='email' placeholder='simpleEmail@email.simple' id='email' onBlur={Formik.handleBlur} onChange={Formik.handleChange} value={Formik.values.email} /><br />
            {Formik.touched.email && Formik.errors.email ? <p style={{ color: 'red' }}>{Formik.errors.email}</p> : null}
            <label htmlFor='password'>password</label><br />
            <input type='password' placeholder='password' id='password' onBlur={Formik.handleBlur} onChange={Formik.handleChange} value={Formik.values.password} /><br />
            {Formik.touched.password && Formik.errors.password ? <p style={{ color: 'red' }}>{Formik.errors.password}</p> : null}
            <button type="submit">submit</button>
        </form>
    )
}
export default Form