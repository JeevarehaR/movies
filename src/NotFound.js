export function NotFound() {
  const styles = {
    width: "100%",
    maxHeight: "400px",
    objectFit: "contain",
  };
  return (
    <div>
      <img
        style={styles}
        src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif"
        alt="404 Not Found"
      />
    </div>
  );
}
