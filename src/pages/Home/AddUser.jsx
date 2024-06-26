import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";

import { createUser } from "../../services/users";

import NavbarComponent from "../../components/Navbar/Navbar";

import Foto from "../../components/FormAddUser/UserPhoto";
import Nombre from "../../components/FormAddUser/Name";
import Codigo from "../../components/FormAddUser/CollegeCode";
import Grado from "../../components/FormAddUser/Grade";
import Groupo from "../../components/FormAddUser/Group";
import Career from "../../components/FormAddUser/Career";
import Shift from "../../components/FormAddUser/Shift";
import CredencialUID from "../../components/FormAddUser/CardUID";
import LlaveMaestra from "../../components/FormAddUser/MasterKey";
import Registrar from "../../components/FormAddUser/Submit";

function Add() {
  const initialValues = {
    image: "",
    name: "",
    collegeCode: "",
    grade: "",
    group: "",
    career: "",
    shift: "",
    cardUID: "",
    masterKey: "",
  };

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const windowResponse = {
    position: "absolute",
    top: "14%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
  };

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(false);
    console.log(values);
    try {
      const res = await createUser(values);
      console.log(res);
      setMessage(`El alumno ${values.name} fue agregado exitosamente.`);
      setMessageType("success");
      actions.resetForm();
    } catch (error) {
      console.error(error);
      setMessage("Hubo un error al agregar el usuario.");
      setMessageType("error");
    } finally {
      setShowMessage(true);
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />

      <div
        className="flex justify-center items-center rounded-2xl overflow-hidden bg-zinc-950 h-auto p-4 mt-20 w-11/12   sm:w-8/12   md:w-7/12   lg:w-5/12   xl:w-4/12   2xl:w-3/12"
        data-theme="dark"
      >
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form
              className="flex flex-col justify-center items-center gap-5 h-full w-full"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex justify-center items-center w-full">
                <Field type="file" name="image" component={Foto} />
              </div>

              <div className="flex justify-center items-center w-full h-9">
                <Field type="text" name="name" component={Nombre} />
              </div>

              <div className="flex justify-evenly items-center w-full h-9 gap-2">
                <Field type="number" name="collegeCode" component={Codigo} />
                <Field name="grade" component={Grado} />
                <Field type="text" name="group" component={Groupo}></Field>
              </div>

              <div className="flex justify-center items-center w-full h-9 gap-2">
                <Field name="career" component={Career}></Field>
                <Field name="shift" component={Shift}></Field>
              </div>

              <div className="flex justify-center items-center w-full h-9 gap-2">
                <Field
                  type="text"
                  name="cardUID"
                  component={CredencialUID}
                ></Field>
                <Field
                  type="password"
                  name="masterKey"
                  component={LlaveMaestra}
                ></Field>
              </div>

              <div className="flex justify-center items-center w-full h-9">
                <Registrar />
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {showMessage && (
        <div
          className={`message ${
            messageType === "success"
              ? "border-2 border-green-500 bg-green-950"
              : "border-2 border-rose-500 bg-rose-900"
          } flex justify-center items-center text-sm w-auto h-10 text-slate-200 p-4 rounded-md`}
          style={windowResponse}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Add;
