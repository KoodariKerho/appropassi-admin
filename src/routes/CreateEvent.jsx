import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import startSvg from "../../assets/start.svg";
import timeSvg from "../../assets/time.svg";
import locationSvg from "../../assets/location.svg";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CreateEvent = () => {
  const [progress, setProgress] = useState(0);
  const [event, setEvent] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    bars: [],
  });
  const [bar, setBar] = useState({
    name: "",
    address: "",
  });
  const [barList, setBarList] = useState([]);

  const handleSubmitBar = () => {
    setBarList([...barList, bar]);
    setBar({ name: "", address: "" });
  };

  const navigate = useNavigate();
  switch (progress) {
    case 0:
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#363737",
          }}
        >
          <img
            style={{ width: 200, height: 200 }}
            src={startSvg}
            alt="Runner starting"
          />
          <h3>Luo uusi appro-tapahtuma</h3>
          <p>Anna appron nimi</p>
          <TextField
            style={{ margin: 20 }}
            inputProps={{ style: { color: "white" } }}
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={(e) => {
              setEvent({ ...event, name: e.target.value });
            }}
          />
          <p>Anna lyhyt kuvaus</p>
          <TextField
            style={{ margin: 20 }}
            inputProps={{ style: { color: "white" } }}
            id="standard-basic"
            label="Standard"
            variant="standard"
            multiline
            onChange={(e) => {
              setEvent({ ...event, description: e.target.value });
            }}
          />
          <button onClick={() => setProgress(1)}>Eteenpäin!</button>
        </div>
      );
    case 1:
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#363737",
          }}
        >
          <img
            style={{ width: 200, height: 200 }}
            src={timeSvg}
            alt="Time icon"
          />
          <h3>Milloin approt pidetään?</h3>
          <p>Anna appron päivä</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={event.date}
              onChange={(newValue) => {
                setEvent({ ...event, date: newValue });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <button onClick={() => setProgress(2)}>Eteenpäin!</button>
        </div>
      );
    case 2:
      return (
        <div
          style={{
            backgroundColor: "#363737",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <img
            style={{ width: 200, height: 200 }}
            src={locationSvg}
            alt="Location icon"
          />
          <h3>Lisää approille baareja</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                width: "50%",
                height: "100%",
              }}
            >
                
              <div>
                <TextField
                  style={{ margin: 20 }}
                  inputProps={{ style: { color: "white" } }}
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  onChange={(e) => {
                    setBar({ ...bar, name: e.target.value });
                  }}
                  value={bar.name}
                />
                <TextField
                  style={{ margin: 20 }}
                  inputProps={{ style: { color: "white" } }}
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  value={bar.address}
                  onChange={(e) => {
                    setBar({ ...bar, address: e.target.value });
                  }}
                />
              </div>    

              <button onClick={handleSubmitBar}>Lisää baari</button>
            </div>
            <div>
                {barList.map((bar, index) => {
                  return (
                    <div key={index}>
                      <p>
                        {bar.name} | {bar.address}
                      </p>
                    </div>
                  );
                })}
              </div>
          </div>
          <button onClick={() => navigate("/dashboard")}>Valmis!</button>
        </div>
      );
    default:
      return <p>Mitäääh :DD Ei näin pitänyt käydä</p>;
  }
};

export default CreateEvent;
