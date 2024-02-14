import { useRoutes } from "react-router";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar.jsx";
import routes from "./routes.jsx";
import "./App.css";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="main">
          <Header />
          {router}
        </div>
      </div>
    </>
  );
}

export default App;
