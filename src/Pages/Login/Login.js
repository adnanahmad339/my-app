import {Link} from '@material-ui/core'
import { TextField, Button, Box } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import './Login.css'

const initalValues = {

  username: "",
  password: "",
};

const Login = () => {
  return (

      <Formik
        initialValues={initalValues}
        validationSchema={object({
   
          username: string().required("Please enter Username").min(2, "Username too short"),
          password: string()
            .required("Please enter Password")
            .min(7, "Password should be minimum 7 characters long"),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (

<div  className="containerLogin">
         <div  className="wrapperLogin">
          <div  className="titleLogin">SIGN IN</div>

          <Form>
          

              
            <Field
              name="username"
              type="username"
              as={TextField}
              variant="outlined"
              color="primary"
              label="User Name"
              fullWidth
              style={{marginTop:"5px"}}
              className='inputLogin'
              error={Boolean(errors.username) && Boolean(touched.username)}
              helperText={Boolean(touched.username) && errors.username}
            />
            <Box height={14} />
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              className='inputLogin'
              style={{marginTop:"20px", marginBottom:"20px"}}
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />
           
            <Button className='buttonLogin'      size="large" variant="contained" color="red"  disabled={!isValid || !dirty}>LOGIN</Button>
            <br></br>  <Link className='linkLogin'>DO NOT YOU REMEMBER THE PASSWORD?</Link>
         <br></br>     <Link className='linkLogin'>CREATE A NEW ACCOUNT</Link>
          </Form>
</div>
</div>
        )}
      </Formik>
 
  );
};

export default Login;





























// import React from 'react';
// import './Login.css'
// import { Link } from '@material-ui/core';
// import { Form } from 'react-bootstrap';

// const Login = () => {
//     return (
//       <div  className="containerLogin">
//         <div  className="wrapperLogin">
//           <div  className="titleLogin">SIGN IN</div>
//           <Form>
//             <input placeholder="username" className='inputLogin' />
//             <input placeholder="password" className='inputLogin'/>
//           <br></br>  <button className='buttonLogin'>LOGIN</button>
//           <br></br>  <Link className='linkLogin'>DO NOT YOU REMEMBER THE PASSWORD?</Link>
//           <br></br>     <Link className='linkLogin'>CREATE A NEW ACCOUNT</Link>
//           </Form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;