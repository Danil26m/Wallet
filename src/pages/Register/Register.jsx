import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signUp } from 'redux/options/optionsAuthController';
import * as yup from 'yup';
export default function Register() {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Required'),
    email: yup.string().required('Required').email('Invalid email'),
    password: yup
      .string()
      .min(6, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Required'),
  });
  return (
    <section>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
            username: '',
            email: '',
            password: '',
        }}
        onSubmit={values => {

          dispatch(signUp(values));
        }}
      >
        {({ errors, touched }) => (
        <Form>
          <Field name="username"/>
          {errors.username && touched.username ? <div>{errors.username}</div> : null}
          <Field name="email"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="password"  />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <button type="submit">Register</button>
        </Form>
        )}
      </Formik>
      <NavLink to="/login">
        <button type="button">Login</button>
      </NavLink>
    </section>
  );
}
