import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/options/optionsAuthController';
export default function Login() {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().required('Required').email('Invalid email'),
    password: yup
      .string()
      .required('Required')
      .min(6, 'Too Short!')
      .max(12, 'Too Long!'),
  });
  return (
    <section>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          dispatch(signIn(values))
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <NavLink to="/register">
        <button type="button">Register</button>
      </NavLink>
    </section>
  );
}
