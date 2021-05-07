import { useFormik, Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import {  Button } from "./shared/StyledComponents";

import TextInput from './shared/formik/TextInput';

export default () => {
  return (
    <Formik
      initialValues={{
        account: '',
        password: ''
      }}
      validationSchema={Yup.object({
        account: Yup.string().required('Required!').email('Not a valid email'),
        password: Yup.string().required('Required!')
      })}
      onSubmit={(values, {setSubmitting})=> {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false);
      }}
    >
      { 
        (formik) => (
        <>
          <h1>Hello, Formik Form</h1>
          <Form>
            <TextInput label={'account'} name={'account'} type={'text'} placeholder={'Please type....'}/>
            <>
              <label htmlFor="password">Password</label>
              <TextInput
                id="password"
                name="password"
                type="text"
                placeholder="Please type....."
              />
              <ErrorMessage name="password"/>
            </>
            <Button type="submit" disabled={formik.isSubmitting}>Submit</Button>
          </Form>
          <>
            <h1>DATA</h1>
            {formik.values.account}
            {formik.values.password}
          </>
        </>
      )}
    </Formik>
  );
};
