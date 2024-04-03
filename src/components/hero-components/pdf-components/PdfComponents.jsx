import { useRef } from "react";

const PdfComponents = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="pdf-wrapper">
      <input
        type="file"
        id="myfile"
        name="myfile"
        ref={fileInputRef}
        style={{ display: "none" }}
        onClick={handleButtonClick}
      >
        Choose PDF file
      </input>
    </div>
  );
};

export default PdfComponents;
