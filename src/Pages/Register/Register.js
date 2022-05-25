import { TextField, Button, Box, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import './Register.css'
const initalValues = {

  firstname: "",
  lastname:"",
  username:"",
  email: "",
  password: "",
  confirmpassword:""
};

const Register = () => {
  return (
      <Formik
        initialValues={initalValues}
        validationSchema={object({
                 firstname: string().required("Please enter First Name").min(2, "First Name too short"),
                 lastname: string().required("Please enter Last Name").min(2, "Last Name too short"),
                 username: string().required("Please enter Username").min(2, "Username too short"),
                 email: string().required("Please enter email").email("Invalid email"),
  
                 password: string()
            .required("Please enter password")
            .min(7, "Password should be minimum 7 characters long"),
            confirmpassword:string()
            .required("Please confirm password")
            .min(7, "Password should be minimum 7 characters long")
                  })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty }) => (

<div className="containerRegister">
         <div className="wrapperRegister">
           <div className="titleRegister">CREATE AN ACCOUNT</div>
          <Form className="formRegister">
           

            <Field
              name="firstname"
              type="firstname"
              as={TextField}
              variant="outlined"
              color="primary"
              label="First Name"
              style={{width:"48%", marginTop:"10px"}}
              className='inputRegister'
              error={Boolean(errors.firstname) && Boolean(touched.firstname)}
              helperText={Boolean(touched.firstname) && errors.firstname}
            />
            <Box height={14} />
            
            
            <Field
              name="lastname"
              type="lastname"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Last Name"
              className='inputRegister'
              style={{width:"48%", marginLeft:"50%", marginTop:"-69px"}}
              error={Boolean(errors.lastname) && Boolean(touched.lastname)}
              helperText={Boolean(touched.lastname) && errors.lastname}
            />
            <Box height={14} />

            <Field
              name="username"
              type="username"
              as={TextField}
              variant="outlined"
              color="primary"
              label="User Name"
              fullWidth
              style={{width:"48%"}}
            
              className='inputLogin'
              error={Boolean(errors.username) && Boolean(touched.username)}
              helperText={Boolean(touched.username) && errors.username}
            />
            <Box height={14} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              
              className='inputRegister'
              style={{width:"48%", marginLeft:"50%", marginTop:"-69px"}}
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />
            
            
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              style={{width:"48%", marginTop:"1px"}}
              label="Password"
              className='inputRegister'
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />
            <Field
              name="confirmpassword"
              type="confirmpassword"
              as={TextField}
              variant="outlined"
              color="primary"
              style={{width:"48%", marginLeft:"50%", marginTop:"-69px"}}
              label="Confirm Password"
              className='inputRegister'
              error={Boolean(errors.confirmpassword) && Boolean(touched.confirmpassword)}
              helperText={Boolean(touched.confirmpassword) && errors.confirmpassword}
            />
            <Box height={14} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              Sign up
            </Button>
          </Form>
          </div> </div>
        )}
      </Formik>
    );
};

export default Register;






























// import react from 'react';
// import { Form } from 'react-bootstrap';
// import './Register.css'

// const Register = () => {
//     return (
//       <div className="containerRegister">
//         <div className="wrapperRegister">
//           <div className="titleRegister">CREATE AN ACCOUNT</div>
//           <Form className="formRegister">
//             <input placeholder="name"  className='inputRegister'/>
//             <input placeholder="last name" className='inputRegister'/>
//             <input placeholder="username" className='inputRegister'/>
//             <input placeholder="email" className='inputRegister'/>
//             <input placeholder="password" className='inputRegister'/>
//             <input placeholder="confirm password" className='inputRegister'/>
//             <div className="agreementRegister">
//               By creating an account, I consent to the processing of my personal
//               data in accordance with the <b>PRIVACY POLICY</b>
//             </div>
//             <button className='buttonRegister'>CREATE</button>
//           </Form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Register;