import React from "react";

const HeadLine = ({title,text}:HeadLineProps) => {
  return(
  <section>
    <h1>{title}</h1>
    <p>{text}</p>
    </section>
)}

export default HeadLine;
