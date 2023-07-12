import { Profile, HomePage, DemoPage } from "./component";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";

import PaymentSucces from "./component/paymentResponse/PaymentSucces";
import PaymentError from "./component/paymentResponse/PaymentError";
import PrivateCart from "./component/protectRoute/PrivateCart";
import CartPage from "./component/cart/CartPage";
import LoginSection from "./component/LoginSection";
import { SignUp } from "./component/SignUp";

function App() {
  return (
    <>
      <LoginSection />
      <SignUp />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/demo" element={<DemoPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/:website" element={<Profile />} />

        <Route exact path="cartpage" element={<CartPage />} />

        <Route exact path="/" element={<PrivateCart />}>
          <Route exact path="success" element={<PaymentSucces />} />
        </Route>

        <Route exact path="/" element={<PrivateCart />}>
          <Route exact path="cancel" element={<PaymentError />} />
        </Route>

        <Route
          path="*"
          element={
            <>
              <Header /> <h1>This page not found</h1>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
