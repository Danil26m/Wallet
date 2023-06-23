import { Formik, Form, Field} from "formik"
import { NavLink } from "react-router-dom";
export default function Login() {
    return (
        <section>
               <Formik
       initialValues={{
         signIn: {
            email: '',
            password: '',
         },
       }}
       onSubmit={values => {
         console.log(values);
       }}
     >
       <Form>
         <Field name="signIn.email" type="email" />
         <Field name="signIn.password" type="password" />
         <button type="submit">Login</button>
       </Form>
     </Formik>
     <NavLink to='/register'><button type="button">Register</button></NavLink>
        </section>
      
    )
   
}
