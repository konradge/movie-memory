import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getWatchDates, addWatchDate } from "../../api/InternalAPI";
import Popup from "../../Popup";

type Props = { title?: string; id: number };

function AddMovieToWatchHistory({ title, id }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const updateLastSeen = () => {
    const watchDates = getWatchDates(id).sort(
      (a, b) => a.getTime() - b.getTime()
    );
    setLastSeen(watchDates[watchDates.length - 1]);
  };

  const [inputDate, setInputDate] = useState("");

  const [lastSeen, setLastSeen] = useState<Date | null>(null);

  useEffect(() => {
    updateLastSeen();
  }, []);

  return (
    <React.Fragment>
      {lastSeen && <div>Last seen: {lastSeen.toISOString()}</div>}
      <Popup isOpen={isPopupOpen}>
        <h1>Add {title} to your watch history:</h1>
        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
        <br />
        <TextField label="Comments" multiline rows={4}></TextField>
        <br />
        <Button
          variant="outlined"
          onClick={() => {
            addWatchDate(id, new Date(inputDate));
            setIsPopupOpen(false);
            updateLastSeen();
          }}
        >
          OK!
        </Button>
      </Popup>
      <button
        onClick={() => {
          setIsPopupOpen(true);
        }}
      >
        Add seen
      </button>
    </React.Fragment>
  );
}

export default AddMovieToWatchHistory;
