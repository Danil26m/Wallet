import { Formik, Form, Field} from "formik"
import { NavLink } from "react-router-dom";
export default function Register() {
    return (
        <section>
               <Formik
       initialValues={{
         signIn: {
            email: '',
            password: '',
            username: '',
         },
       }}
       onSubmit={values => {
         console.log(values);
       }}
     >
       <Form>
         <Field name="signIn.username" type="text" />
         <Field name="signIn.email" type="email" />
         <Field name="signIn.password" type="password" />
         <button type="submit">Register</button>
       </Form>
     </Formik>
     <NavLink to='/login'><button type="button">Login</button></NavLink>
        </section>
      
    )
   
}
