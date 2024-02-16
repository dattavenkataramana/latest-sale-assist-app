import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Componets/Navbars";
import Header from "./Componets/Header";
import Productstate from "./Componets/Productstate";
import Productcard from "./Componets/ProductCard";
function App() {
  return (
    <>
      <Navbars />
      <Header />
      <Productstate />
      <Productcard />
    </>
  );
}

export default App;