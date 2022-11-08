import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);

  return (
    <div>
      <div className="counter-button-container">
        <IconButton color="primary" aria-label="like">
          <Badge badgeContent={like} color="primary" onClick={incrementLike}>
            👍
          </Badge>
        </IconButton>
        <IconButton color="error" aria-label="dislike">
          <Badge
            badgeContent={disLike}
            color="error"
            onClick={incrementDisLike}
          >
            👎
          </Badge>
        </IconButton>
      </div>
    </div>
  );
}
