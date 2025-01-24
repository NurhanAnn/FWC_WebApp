import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AlertDismissable from './components/AlertDismissable';
import Routes from './Routes';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    const reloadMsg = `
      New content is available.<br />
      Please <a href='javascript:location.reload();'>reload</a>.<br />
      <small>If reloading doesn't work, close all tabs/windows of this web application,
      and then reopen the application.</small>
    `;
    this.state = {
      showUpdateAlert: true,
      reloadMsg: reloadMsg,
      showPopup: true
    };
  }

  dismissUpdateAlert = event => {
    this.setState({ showUpdateAlert: false });
  }

  closePopup = () => {
    this.setState({ fadeOut: true });
    setTimeout(() => {
      this.setState({ showPopup: false, fadeOut: false });
    }, 500); // Match duration of fadeOut animation
  };
  

  render() {
    return (
        <div className="App">
          <div>
            {this.state.showPopup && (
              <div
                className={`popup ${this.state.fadeOut ? "fade-out" : ""}`}
                onClick={this.closePopup}
              >
                <div
                  className="popup-content"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
                >
                  <button onClick={this.closePopup} className="close-btn">
                    X
                  </button>
                  <img
                    src="/images/infographic-image-1.jpeg"
                    alt="Infographic"
                    className="infographic-image"
                  />
                </div>
              </div>
            )}
          </div>
          <Container>
            <Navbar collapseOnSelect className="app-nav-bar" variant="dark" expand="lg">
              <Navbar.Brand href="/">Food Waste Classifier</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Link className="nav-link" to="/">Classify</Link>
                  <Link className="nav-link" to="/about">About</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            { this.props.updateAvailable && this.state.showUpdateAlert &&
              <div style={{paddingTop: '10px'}}>
                <AlertDismissable
                  title=""
                  variant="info"
                  message={this.state.reloadMsg}
                  show={this.props.updateAvailable && this.state.showUpdateAlert}
                  onClose={this.dismissUpdateAlert} />
              </div>
            }
          </Container>
          <Container>
            <Routes />
          </Container>
        </div>
    );
  }
}

App.propTypes = {
  updateAvailable: PropTypes.bool.isRequired,
};

export default withRouter(App);
