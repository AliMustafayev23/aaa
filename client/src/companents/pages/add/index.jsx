import React from 'react'
import { Helmet } from 'react-helmet'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import axios from 'axios';
const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    description: Yup.string()
    .min(50, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
  price: Yup.number()
    .min(0, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
  
});
const Add = () => {
  return (
    <div className='add'>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Add Course</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>Add Course</h1>
     <Formik
       initialValues={{
        title:"",
        description:"",
        author:"",
        price:"",
        image:"",
        userimage:"",
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        axios.post("http://localhost:8000/course",(values));
       }}
     >
       {({ errors, touched }) => (
         <Form>
          <h3>Title:</h3>
           <Field name="title" />
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}
           <h3>Description:</h3>
           <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <h3>Author:</h3>
         <Field name="author" />
           {errors.author && touched.author ? (
             <div>{errors.author}</div>
           ) : null}
           <h3>Price:</h3>
           <Field name="price" />
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           <h3>Image:</h3>
           <Field name="image" />
           {errors.image && touched.image ? (
             <div>{errors.image}</div>
           ) : null}
           <h3>User Image:</h3>
           <Field name="userimage" />
           {errors.userimage && touched.userimage ? (
             <div>{errors.userimage}</div>
           ) : null}
           <button type="submit" className='add'>Add</button>
         </Form>
       )}
     </Formik></div>
  )
}

export default Add