import React from "react";
import { Formik, Form, Field } from "formik";
import { useAuth } from "../../context/authContext";

import Logo from "../../assets/Logo.png";
import InputEmail from "../../components/Login/Email.Input";
import InputPassword from "../../components/Login/Password.Input";
import LoginButton from "../../components/Login/Login.Button";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const { login } = useAuth();

  const onSubmit = (values) => {
    login(values);  
  };

  return (
    <div className="flex justify-center items-start md:items-center sm:items-center pt-20 md:pt-0 h-screen bg-black max-h-screen max-w-full">
      <main className="flex flex-col justify-center items-start rounded-xl gap-4 drop-shadow-xl py-8">
        <div className="flex flex-col justify-center items-center font-sans gap-2">
          <h1 className="text-xl text-white pb-2 font-thin">Bienvenido a</h1>
          <img src={Logo} alt="Urity" className="w-72" />
          <div className="w-full mt-10">
            <h1 className="text-md text-white pb-1 font-thin">
              Inicio de sesión
            </h1>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center w-full flex-wrap md:flex-nowrap gap-4"
          data-theme="dark"
        >
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formik) => (
              <Form
                onSubmit={formik.handleSubmit}
                className="flex flex-col w-full gap-4"
              >
                <Field name="email" component={InputEmail} />
                <Field name="password" component={InputPassword} />
                <LoginButton />
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </div>
  );
}

export default Login;
