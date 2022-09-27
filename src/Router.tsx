import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { OrderCheckout } from "./pages/OrderCheckout";
import { OrderSummary } from "./pages/OrderSummary";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<OrderCheckout/>}/>
        <Route path="/order-summary" element={<OrderSummary/>}/>
      </Route>
    </Routes>
  )
}