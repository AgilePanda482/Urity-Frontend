function AccessCard({ userName, id, status, species, image, time }) {
  function getUbication(status) {
    if (status === "Alive") {
      return "V";
    } else if (status === "Dead") {
      return "M";
    } else {
      return "D";
    }
  }

  return (
    // CARD CONTAINER
    <div
      style={{
        // backgroundColor: 'red',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "2.5em",
        width: "100%",
        color: "white",
      }}
    >
      {/* LEFT SIDE / CIRCLE / IMG  */}
      <div
        style={{
          width: "2.5em",
          // backgroundColor: 'blue',
          height: "100%",
        }}
      >
        {/* <img src="" alt="" /> */}
        <div
          style={{
            backgroundColor: "gray",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img src={image} alt="" />
        </div>
      </div>

      {/* CENTER SIDE / NAME / ID  */}
      <div
        style={{
          width: "78%",
          // backgroundColor: 'teal',
          height: "100%",
          padding: "0 .2em 0 .35em",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50%",
            // backgroundColor: 'yellow',
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
            gap: "1em",
            width: "100%",
            height: "50%",
            // backgroundColor: 'orange',
          }}
        >
          <p>{id}</p>
          <p>{species}</p>
          <p>{status}</p>
        </div>
      </div>

      {/* RIGHT SIDE / TIME / ESTATUS  */}
      <div
        style={{
          width: "3em",
          // backgroundColor: 'blue',
          height: "100%",
          padding: ".2em",
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            height: "50%",
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: ".8em",
          }}
        >
          <p>{time}</p>
        </div>
        <div
          style={{
            backgroundColor: "teal",
            height: "50%",
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: ".8em",

            
          }}
        >
          <p>{getUbication(status)}</p>
        </div>
      </div>
    </div>
  );
}
export default AccessCard;
