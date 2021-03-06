import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import ShippingScreen from "./screens/ShippingScreen";
import OrderScreen from "./screens/OrderScreen";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import UserListScreen from "./screens/Admin/UserListScreen";
import UserEditScreen from "./screens/Admin/UserEditScreen";
import ProductListScreen from "./screens/Admin/ProductListScreen";
import ProductEditScreen from "./screens/Admin/ProductEditScreen";
import OrderListScreen from "./screens/Admin/OrderListScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route path="/shipping" element={<ShippingScreen />}></Route>
            <Route path="/payment" element={<PaymentScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route path="/admin/userlist" element={<UserListScreen />}></Route>
            <Route
              exact
              path="/admin/productlist"
              element={<ProductListScreen />}
            ></Route>
            <Route
              exact
              path="/admin/productlist/:pageNumber"
              element={<ProductListScreen />}
            ></Route>
            <Route
              path="/admin/orderlist"
              element={<OrderListScreen />}
            ></Route>
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            ></Route>
            <Route
              path="/admin/user/:id/edit"
              element={<UserEditScreen />}
            ></Route>
            <Route
              exact
              path="/search/:keyword"
              element={<HomeScreen />}
            ></Route>
            <Route
              exact
              path="/page/:pageNumber"
              element={<HomeScreen />}
            ></Route>
            <Route
              exact
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            ></Route>
            <Route exact path="/" element={<HomeScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
