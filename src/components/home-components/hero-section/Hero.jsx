import { Button, Input } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./Hero.css";
import { useState } from "react";
import PdfComponents from "../../hero-components/pdf-components/PdfComponents";
import JsonFile from "../../hero-components/json-file/JsonFile";
import Certificate from "./certificate/Certificate";

const { Search } = Input;

const Hero = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [showPdfOption, setShowPdfOption] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false); // State to control visibility of Certificate component
  const [inputValue, setInputValue] = useState("");
  const [registrationValue, setRegistrationValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showCloseButton, setShowCloseButton] = useState(false); // State to control visibility of close button

  const handleLoginClick = () => {
    setShowRegistration(true);
    setShowSearch(false);
  };

  const handleSearchClick = () => {
    setShowRegistration(false);
    setShowSearch(true);
    setShowCertificate(true);
    setShowCloseButton(true); // Show the close button when showing the certificate
  };

  const handleSearch = (value) => {
    setInputValue(value);
    setShowCertificate(true); // Show the certificate component when searching
    setShowCloseButton(true); // Show the close button when showing the certificate
    console.log("current URL:", value);
    console.log("previous URL:", inputValue);
  };

  const handleLogin = () => {
    console.log("Registration:", registrationValue);
    console.log("Password:", passwordValue);
  };

  const handlePdfComponentClick = () => {
    setShowSearch(false);
    setShowPdfOption(true);
  };

  const handleCloseButtonClick = () => {
    setShowCertificate(false); // Close the certificate component
    setShowCloseButton(false); // Hide the close button
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-inner-wrapper">
        <h3 className="hero-title font-ibm">SecureDoc Universal Verifier</h3>
        {showSearch && (
          <div className="search-container">
            <Search
              placeholder="Enter URL"
              allowClear
              enterButton="Verify"
              size="large"
              onClick={handleSearchClick}
              onSearch={handleSearch}
              className="url-search"
            />
          </div>
        )}
        {showRegistration && (
          <div className="login-container">
            <div>
              <Input
                placeholder="Registration"
                size="large"
                className="login-input"
                value={registrationValue}
                onChange={(e) => setRegistrationValue(e.target.value)}
              />
            </div>

            <div>
              <Input.Password
                placeholder="Password"
                size="large"
                className="login-input"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </div>
            <div>
              <Button className="login-button" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        )}
        {showPdfOption && (
          <div className="pdf-option-container">
            <p>Choose PDF option here</p>
            <PdfComponents />
          </div>
        )}
        <div className="pdf-regi-wrapper">
          <p onClick={handlePdfComponentClick} className="pdf-text">
            Upload PDF
          </p>
          <JsonFile />
          <div>
            {showSearch && (
              <p onClick={handleLoginClick} className="pdf-text">
                {" "}
                login via Registration and password
              </p>
            )}
            {showRegistration && (
              <p onClick={handleSearchClick} className="pdf-text">
                {" "}
                Enter URL
              </p>
            )}
          </div>
        </div>
        {showCertificate && (
          <div className="certificate-wrapper">
            {showCloseButton && ( // Render the close button conditionally
              <p className="close-wrapper" onClick={handleCloseButtonClick}>
                <CloseCircleOutlined />
                close
              </p>
            )}
            <Certificate />
          </div>
        )}

        <div className="credential-wrapper">
          <p className="credential-text font-ibm">
            You may share your Blockcerts with CHAPI if you have a compatible
            wallet:
          </p>
          <div className="credential-button-wrapper">
            <Button danger> Share Credential</Button>
          </div>
          <p className="credential-note">
            NOTA: the credential remains on the browser and is not stored
            anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
