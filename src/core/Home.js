import React from "react";
import { API } from "../backendconnect";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";


export default function Home() {
  console.log("API IS", API);
  return (
    <Base title="Home Page" description="Welcome to the Cloth Store">
      <div className="row text-center">
        <div className="col-4">
          <Card></Card>
        </div>
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
      </div>
    </Base>
  );
}
