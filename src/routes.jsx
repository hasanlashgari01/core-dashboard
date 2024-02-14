import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products.jsx";
import Customers from "./pages/Customers/Customers.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Income from "./pages/Income/Income.jsx";
import Promote from "./pages/Promote/Promote.jsx";

let routes = [
  { path: "/", element: <Home /> },
  {
    path: "/products",
    element: <Products />,
    // children: [
    //   { path: "dashboard" },
    //   { path: "drafts" },
    //   { path: "released" },
    //   { path: "comments" },
    //   { path: "scheduled" },
    // ],
  },
  { path: "/customers", element: <Customers /> },
  { path: "/shop", element: <Shop /> },
  { path: "/income", element: <Income /> },
  { path: "/promote", element: <Promote /> },
];

export default routes;
