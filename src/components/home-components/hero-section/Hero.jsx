import { Button, Input } from "antd";
// import { CloseCircleOutlined } from "@ant-design/icons";
import "./Hero.css";
import { useRef, useState } from "react";
// import PdfComponents from "../../hero-components/pdf-components/PdfComponents";
import JsonFile from "../../hero-components/json-file/JsonFile";
// import Certificate from "./certificate/Certificate";

const { Search } = Input;

const Hero = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [showPdfOption, setShowPdfOption] = useState(false);
  // const [showCertificate, setShowCertificate] = useState(false); 
  // const [inputValue, setInputValue] = useState("");
  const [registrationValue, setRegistrationValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  // const [showCloseButton, setShowCloseButton] = useState(false);

  const handleLoginClick = () => {
    setShowRegistration(true);
    setShowSearch(false);
  };

  const handleSearchClick = () => {
    setShowRegistration(false);
    // setShowCloseButton(true);
    setShowSearch(true);
    // setShowCertificate(true);
  };

  // const handleSearch = (value) => {
  //   setInputValue(value);
  //   console.log("current URL:", value);
  //   console.log("previous URL:", inputValue);
  // };

  const handleLogin = () => {
    console.log("Registration:", registrationValue);
    console.log("Password:", passwordValue);
  };

  // const handleCloseButtonClick = () => {
  //   setShowCertificate(false);
  //   // setShowCloseButton(false);
  // };

  const pdfInputRef = useRef(null);
  const [selectedPdfFile, setSelectedPdfFile] = useState(null);

  const handleUploadPdf = () => {
    pdfInputRef.current.click();
  };

  const [pdfSrc, setPdfSrc] = useState(null);

  const handlePdfChange = (e) => {
    setSelectedPdfFile(e.target.files[0]);
    console.log("uploading.......");
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPdfSrc(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-inner-wrapper">
        <h3 className="hero-title font-ibm">SecureDoc Universal Verifier</h3>
        {!showPdfOption && (
          <div className="search-container">
            <Search
              placeholder="Enter URL"
              allowClear
              enterButton="Verify"
              size="large"
              onClick={handleSearchClick}
              // onSearch={handleSearch}
              className="url-search"
            />
          </div>
        )}

        {showPdfOption && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Button onClick={handleUploadPdf}>Choose a PDF</Button>
              <input
                type="file"
                id="myfile"
                name="myfile"
                ref={pdfInputRef}
                style={{ display: "none" }}
                onChange={handlePdfChange}
              />
              {selectedPdfFile && <p>{selectedPdfFile.name}</p>}
            </div>
            <div>
              <Button disabled={!selectedPdfFile} onClick={handleUploadPdf}>
                Upload PDF
              </Button>
            </div>
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
        <div className="pdf-regi-wrapper">
          <p
            onClick={() => setShowPdfOption(!showPdfOption)}
            className="pdf-text"
          >
            Upload PDF
          </p>
          <JsonFile />
          <div>
            {showSearch && (
              <p onClick={handleLoginClick} className="pdf-text">
                login via Registration and password
              </p>
            )}
            {showRegistration && (
              <p onClick={handleSearchClick} className="pdf-text">
                Enter URL
              </p>
            )}
          </div>
        </div>
        {/* {showCertificate && (
          <div className="certificate-wrapper">
            {showCloseButton && ( // Render the close button conditionally
              <p className="close-wrapper" onClick={handleCloseButtonClick}>
                <CloseCircleOutlined />
                close
              </p>
            )}
            <Certificate />
          </div>
        )} */}

        <div>
          <iframe
            title="pdf"
            src={pdfSrc}
            width="500px"
            height="500px"
          ></iframe>
        </div>

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
