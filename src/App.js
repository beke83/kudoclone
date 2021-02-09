import React, { Component } from "react";
import Navbar from "./components/layout/navbar.jsx";
import "../src/styles.css";
import Sidebar from "./components/layout/sidebar.jsx";
import Routes from "./routes.jsx";
import { BrowserRouter } from "react-router-dom";
//import { BrowserRouter } from "react-router-dom";

class App extends Component {

  state = {
    date: "",
    show: true
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().getFullYear();
    this.setState({ date });
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <div className="main-container">
            <div className="pd-ltr-20 xs-pd-20-10">
              <Routes />
            </div>
          </div>
          <br />
          {/* <div className="footer-wrap pd-20 mb-20 card-box">
            Kudoclone - React Project <a href="https://github.com/dropways" target="_blank">Beke Benjamin</a>
          </div> */}
        </BrowserRouter>
      </React.Fragment >
    );
  }
}

export default App;
