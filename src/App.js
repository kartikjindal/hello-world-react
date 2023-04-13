// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
function App() {
  return (

    <div>     
      <Navbar title="party"/>
      <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>

<div className="progress">
  <div className="progress-bar progress-bar-animated" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>


</div>

  );
}

export default App;
