import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./section.css";
import Section from "./section";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Section number="444" text="Visitors" icon={<HomeIcon />} />
      <Section number="new " icon={<HomeIcon />} />
    </div>
  );
};

export default Sidebar;
