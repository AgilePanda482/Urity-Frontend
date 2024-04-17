function VerifyCard({ userName, code, career, shift, grade, group, location }) {
  const photo = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";
  const locationStyles = {
    width: ".8em", 
    height: ".8em",
    backgroundColor: location === "Dentro" ? "#12a150" : "rgb(185 28 28)",
    borderRadius: "50%",
    
    marginLeft: "1em",
  };

  shift === "Matutino" ? (shift = "M") : (shift = "V");

  return (
    // CARD CONTAINER
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4.5em",
        width: "auto",
        padding: "1em 2em",
        borderRadius: "1em",
        color: "white",
        cursor: "pointer",
        backgroundColor: "#070807",
      }}
    >
      {/* LEFT SIDE / CIRCLE / IMG  */}
      <div
        style={{
          width: "2.5em",
          backgroundColor: "gray",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img src={photo} alt="" />
        </div>
      </div>

      {/* CENTER SIDE / NAME / ID  */}
      <div
        style={{
          width: "auto",
          // backgroundColor: 'teal',
          height: "100%",
          padding: "0 .2em 0 .35em",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50%",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {userName}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            width: "100%",
            height: "50%",
            // backgroundColor: 'orange',
            color: "#a9a9a9",
            fontSize: "0.85em",
          }}
        >
          <p
            style={{
              color: "#a9a9a9",
              letterSpacing: "0.05em",
            }}
          >
            {code}
          </p>
          <p>{career}</p>
          <p>
            {grade}-{group}
          </p>
          <p>T/{shift}</p>
          <div style={locationStyles}></div>
        </div>
      </div>

      {/* RIGHT SIDE / TIME / ESTATUS  */}
    </div>
  );
}
export default VerifyCard;
