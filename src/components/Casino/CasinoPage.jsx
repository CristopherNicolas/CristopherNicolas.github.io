const CasinoPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Casino Online</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        <iframe
          src="https://game1.itch.io/embed"
          width="600"
          height="400"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://game2.itch.io/embed"
          width="600"
          height="400"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default CasinoPage;
