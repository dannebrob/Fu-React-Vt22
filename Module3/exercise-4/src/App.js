import "./App.css";
import Header from "./componets/Header";
import Desinations from "./componets/Destinations";
import FormClass from "./componets/FormClass";
import FormTickets from "./componets/FormTickets";
import FormTitle from "./componets/FormTitle";
import FormFirstName from "./componets/FormFirstName";
import FormLastName from "./componets/FormLastName";
import FormCheckBox from "./componets/FormAproveCheckbox";
import SubmitButton from "./componets/SubmitButton";

function App() {
  let ticketBookings = {
    class: "default",
    amount: "",
    title: "",
    firstName: "",
    lastName: "",
    Approved: "",
    id: 1,
  };
  // console.log(ticketBookings);

  function updateclass(props) {
    ticketBookings.class = props;
    // console.log(ticketBookings);
  }

  function updateFirstName(props) {
    ticketBookings.firstName = props;
    // console.log(ticketBookings);
  }
  function updateLastName(props) {
    ticketBookings.lastName = props;
    // console.log(ticketBookings);
  }

  function updateAprove(props) {
    ticketBookings.Approved = props;
    // console.log(ticketBookings);
  }

  function updateTitle(props) {
    ticketBookings.title = props;
    // console.log(ticketBookings);
  }
  function updateAmount(props) {
    ticketBookings.amount = props;
    // console.log(ticketBookings);
  }

  function showBooking() {
    console.log(ticketBookings);
  }

  return (
    <div className="App booking-container">
      <Header />
      <Desinations />
      <FormClass update={updateclass} />
      <div className="flex">
        <FormTickets update={updateAmount} />
        <FormTitle update={updateTitle} />
      </div>

      <FormFirstName update={updateFirstName} />
      <FormLastName update={updateLastName} />
      <FormCheckBox update={updateAprove} />
      <SubmitButton show={showBooking} />
    </div>
  );
}

export default App;

// const ticketBookings = [
//   {
//     class: "1",
//     amount: "2",
//     title: "mr",
//     firstName: "test",
//     lastName: "tset",
//     Approved: "true",
//     id: 222,
//   },
//   {
//     class: "1",
//     amount: "2",
//     title: "mr",
//     firstName: "Lars",
//     lastName: "Hanson",
//     Approved: "true",
//     id: 232,
//   },
// ];
