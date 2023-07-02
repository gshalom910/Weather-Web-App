import React from "react";
import Card from "./Card";

export default function SecondSec() {
  return (
    <section id="forecast-sec" className="row mx-4 my-1">
      <Card day="Sat" maxTemp={22} minTemp={13} />
      <Card day="Sun" maxTemp={18} minTemp={13} />
      <Card day="Mon" maxTemp={19} minTemp={12} />
      <Card day="Tue" maxTemp={21} minTemp={12} />
      <Card day="Wed" maxTemp={20} minTemp={12} />
      <Card day="Thu" maxTemp={19} minTemp={15} />
    </section>
  );
}
