import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavbarComponent from "../../components/Navbar/Navbar";

import Foto from "../../components/FormAddUser/UserPhoto";
import Nombre from "../../components/FormAddUser/Name";
import Codigo from "../../components/FormAddUser/CollegeCode";
import CredencialUID from "../../components/FormAddUser/CardUID";
// import Carrera from "../../components/FormAddUser/Career";
// import Grado from "../../components/FormAddUser/Grade";
import Groupo from "../../components/FormAddUser/Group";
// import Shift from "../../components/FormAddUser/Shift";
import LlaveMaestra from "../../components/FormAddUser/MasterKey";
import Registrar from "../../components/FormAddUser/Submit";

function Add() {
  const initialValues = {
    photo: "",
    name: "",
    collegeCode: "",
    // grade: "",
    group: "",
    // career: "",
    // shift: "",
    cardUID: "",
    masterKey: "",
  };

  const onSubmit = (values, actions) => {
    console.log(values); // Log form values to the console
    actions.setSubmitting(false); // Set submitting to false when done
    console.log(values.masterKey);
  };

  return (
    <div className="flex flex-col justify-start items-center bg-black h-screen w-full">
      <NavbarComponent />
      <div
        className="flex flex-col justify-center items-center gap-5 h-auto w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 rounded-2xl p-5 overflow-hidden md:mt-20 mt-10 overflow-y-auto scrollbar-hidden bg-zinc-950"
        data-theme="dark"
      >
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form
              className="flex flex-col justify-center items-center gap-5 h-auto w-full"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex justify-center items-center w-full mb-3">
                <Field type="file" name="image" component={Foto} />
              </div>

              <div className="flex justify-center items-center w-full h-12">
                <Field type="text" name="name" component={Nombre} />
              </div>

              <div className="flex justify-evenly items-center w-full h-12 gap-2">
                <Field type="number" name="collegeCode" component={Codigo} />
                {/* <Grado /> */}
                <Field type="text" name="group" component={Groupo}></Field>
              </div>

              {/* <div className="flex justify-evenly items-center w-full h-12 gap-2">
                <Carrera />
                <Shift />
              </div> */}

              <div className="flex justify-center items-center w-full h-12 gap-2">
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

              {/* <button type="submit">Registrar</button> */}
              <div className="flex justify-center items-center w-full h-12 gap-2">
                <Registrar />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Add;
