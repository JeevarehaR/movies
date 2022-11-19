export default function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    marginTop: "10px",
    marginLeft: "37.5%",
  };

  return <div style={styles}></div>;
}
