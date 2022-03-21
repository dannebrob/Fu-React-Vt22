import Header from "./Header";
import Desinations from "./Destinations";
import FormClass from "./FormClass";
import FormGender from "./FormGender";
import FormTickets from "./FormTickets";
import FormTitle from "./FormTitle";
import FormFirstName from "./FormFirstName";
import FormLastName from "./FormLastName";
import FormCheckBox from "./FormAproveCheckbox";
import SubmitButton from "./SubmitButton";

import "./BookingForm.css";

function BookingForm() {
  return (
    <div className="booking-container">
      <Header />
      <Desinations />
      <FormClass />
      <FormTickets />
      <FormTitle />
      <FormGender />
      <FormFirstName />
      <FormLastName />
      <FormCheckBox />
      <SubmitButton />
    </div>
  );
}

export default BookingForm;
