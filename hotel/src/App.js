import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import BookingForm from "./Components/BookingForm/BookingForm";
//import ShippingList from "./Components/ShippingLists/ShippingList";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/BookingForm" element={<BookingForm/>} />
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
