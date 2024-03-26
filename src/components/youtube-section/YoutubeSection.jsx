import "./YoutubeSection.css";
const YoutubeSection = () => {
  return (
    <div>
      <h4>Own and Share Your Achievements</h4>
      <p>
        With the blockchain, your official records are now yours forever.
        Receive them once, share and verify them for a lifetime.
      </p>
      <div span={24} className="YT-wrapper">
        <iframe
          className="i-frame"
          src="https://www.youtube.com/embed/5wAyS1e_hOo?si=I5DQQwCwFbwnkLpG"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeSection;
