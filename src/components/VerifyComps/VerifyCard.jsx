
function VerifyCard({ userName, id, status }) {
  
    const photo = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  return (
    // CARD CONTAINER
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "3.5em",
        width: "auto",
        padding: ".5em",
        borderRadius: "3px",
        color: "white",
        cursor: "pointer",
        backgroundColor: "#070807",
      }}
    >
      {/* LEFT SIDE / CIRCLE / IMG  */}
      <div
        style={{
          width: "2.5em",
          backgroundColor: 'gray',
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
            gap: "1em",
            width: "100%",
            height: "50%",
            // backgroundColor: 'orange',
          }}
        >
          <p>{id}</p>
          <p>{status}</p>
        </div>
      </div>

      {/* RIGHT SIDE / TIME / ESTATUS  */}
    </div>
  );
}
export default VerifyCard;
