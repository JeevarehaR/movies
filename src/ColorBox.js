export default function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    margin: "10px auto",
  };

  return <div style={styles}></div>;
}
