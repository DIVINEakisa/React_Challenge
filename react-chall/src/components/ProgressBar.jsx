// Description :
// Create a Progress Bar that
// should fill based on
// the input percentage value.
function ProgressBar({ percentage }) {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor:
      percentage > 66 ? "green" : percentage > 33 ? "orange" : "red",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 0.3s ease",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles} className="progress">
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${percentage}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
