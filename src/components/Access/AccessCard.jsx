import arrowDown from "../../assets/arrowDown.svg";
import arrowUp from "../../assets/arrowUp.svg";

function AccessCard({
  image,
  userName,
  id,
  grade,
  group,
  career,
  turn,
  status,
  time,
}) {
  const arrow = status === 1 ? arrowUp : arrowDown;

  return (
    // CARD CONTAINER
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "3.5em",
        width: "100%",
        padding: ".5em",
        color: "white",
      }}
    >
      {/* LEFT SIDE / CIRCLE / IMG  */}
      <div
        style={{
          width: "2.5em",
          // backgroundColor: 'red',
          height: "100%",
        }}
      >
        <div
          style={{
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
            fontSize: ".9em",
            alignItems: "flex-start",
            padding: ".2em 0 0 0",
          }}
          className="text-zinc-400"
        >
          <p>{id}</p>
          <p>
            {grade}-{group}
          </p>
          <p>{career}</p>
          <p>T/{turn}</p>
        </div>
      </div>

      {/* RIGHT SIDE / TIME / ESTATUS  */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "3em",
          height: "100%",
          padding: ".2em 0 .2em .4em",
          gap: ".4em",
        }}
      >
        <div
          style={{
            height: "50%",
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            fontSize: ".8em",
          }}
        >
          <p>{time}</p>
        </div>
        <div
          style={{
            height: "50%",
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={arrow} style={{ width: "1.7em" }} alt="" />
        </div>
      </div>
    </div>
  );
}
export default AccessCard;
