import CardNumber from "./CardNumber";

const UserName = ({ userName }: { userName: string[] }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px", height: "20px" }}>
      <CardNumber key="userName" number={userName} />
    </div>
  );
};

export default UserName;
