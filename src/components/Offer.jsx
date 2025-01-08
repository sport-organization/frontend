function Offer({ offerText, offerBackground }) {
  const offerTextArray = offerText.split(" ");

  return (
    <div className="offerDiv">
      <div
        className="offerBackground"
        style={{
          backgroundImage: offerBackground ? `url(${offerBackground})` : "none",
        }}
      ></div>
      <div className="darkOverlay"></div>
      <h3 className="offerText">
        <span style={{ color: "#1869FF" }}>{offerTextArray[0]}</span>
        {offerTextArray.slice(1).join(" ")}
      </h3>
    </div>
  );
}

export default Offer;
