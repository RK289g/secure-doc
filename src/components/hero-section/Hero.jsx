import Search from "antd/es/transfer/search";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <h3 className="hero-title">SecureDoc Universal Verifier</h3>
      <div className="search-container">
        <Search
          placeholder="Enter URL"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default Hero;
