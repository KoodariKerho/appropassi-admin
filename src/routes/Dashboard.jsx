import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    return(
        <>
            <h1>Dashboard</h1>
            <button onClick={() => navigate("/create-event")}>Create Event</button>
        </>
    )
}
