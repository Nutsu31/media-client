import { Profile, HomePage, DemoPage } from "./component";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import PaymentSucces from "./component/paymentResponse/PaymentSucces";
import PaymentError from "./component/paymentResponse/PaymentError";
import PrivateCart from "./component/protectRoute/PrivateCart";
import CartPage from "./component/cart/CartPage";
import MyProfilePage from "./component/MyProfile/MyProfilePage";
import PrivateRoute from "./component/protectRoute/PrivateRoute";
import SignUpControlFlow from "./component/SignUpControlFlow";

function App() {
  return (
    <>
      <SignUpControlFlow />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:ref" element={<HomePage />} />
        <Route exact path="/demo" element={<DemoPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/:domain" element={<Profile />} />
        <Route exact path="cartpage" element={<CartPage />} />
        <Route exact element={<PrivateRoute />}>
          <Route index path="/my-profile" element={<MyProfilePage />}></Route>
        </Route>
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
