import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../elements/Input";
import Container from "../../elements/Container";
import Assiette from "../../../medias/images/background/Assiette-burger-frites.png";
import Burger from "../../../medias/images/background/Burger.png";
import SaucePimenter from "../../../medias/images/background/Sauce-pimente.png";
import Heating from "../../elements/DisplayTitle/Heading";

// Schéma de validation Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("le nom est obligatoir").label("Nom"),
  email: Yup.string()
    .email("Adresse email invalide")
    .required()
    .label("Email"),
  date: Yup.date()
    .required("La date est requise")
    .min(new Date(), "La date doit être ultérieure à aujourd'hui")
    .label("Date"),
  time: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Heure invalide, utilisez le format HH:MM")
    .required()
    .label("Heure")
});

// Valeurs initiales
const initialValues = {
  name: '',
  email: '',
  date: '',
  time: ''
};

const Booking = () => {
  return (
    <Container>
      <div className=" relative">
        <img
          src={Burger}
          className="absolute z-10 -top-30 -left-36"
          alt="Burger"
        />
        <img
          src={SaucePimenter}
          className="absolute -left-10 bottom-0  "
          alt="Burger"
        />
        <img
          src={Assiette}
          className="absolute -right-96 -bottom-36 "
          alt="Burger"
        />
        <div className="max-w-2xl py-48 mx-auto">
          <Heating variante="h3" alignement="center">
            Reservation
          </Heating>
          <Heating alignement="center" theme="secondary" className="mt-5">
            Reservez votre table
          </Heating>

          <div>
            <section>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={value =>{
                  console.log(value);
                }}
              >
                {()=>(
                  <Form action="" method="post" className="grid grid-cols-2 gap-x-6 mt-20 ">
                  <Input
                    name="name"
                    placeholder="Entrez votre nom"
                    label="Nom"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Entrez votre email"
                    label="Email"
                  />
                  <Input
                    name="date"
                    type="date"
                    placeholder="jj/mm/aaaa"
                    label="Date"
                  />
                  <Input
                    name="time"
                    type="time"
                    placeholder="Choisissez une heure"
                    label="Heure"
                  />
                   <Input
                    name="number"
                    type="number"
                    placeholder="03"
                    label="Nombre de personnes"
                  />
                   <button
              type="submit"
              className="bg-red-primary hover:bg-red-primary-hover w-full h-16 mt-[23px] tracking-widest uppercase  hover:scale-95 hover:translate-y-1 transition-transform cursor-pointer rounded-md text-white font-secondary"
              onClick={() => {
                console.log('click');
              }}
            >
              Trouvez une table
            </button>

                  
                </Form>
                )}
                
              </Formik>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
