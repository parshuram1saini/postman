import React from "react";

function History({ history }) {
  console.log(history);
  return (
    <>
      <div className="left-nav">
        <p>
          <i className="history icon"></i> History
        </p>
      </div>
      {history.map((val) => {
        return <div>{val}</div>;
      })}
      <div></div>
    </>
  );
}

export default History;
