import React from "react";
import ReactDom from "react-dom";

// import BarChart from "./components/BarChart";
import { Button, Container, Paper, Typography, Grid } from "@material-ui/core";
import "./styles.css";
import Chart from "./charts/chart";
import Sidebar from "./sidebar/sidebar";
export default function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div className="wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="chats">
          <Chart />
        </div>
      </div>
    </div>
  );
}
