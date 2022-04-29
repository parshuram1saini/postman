import React from "react";
import JSONPretty from "react-json-pretty";

function Response({ apidata, Status }) {
  return (
    <>
      <div className="responsefield">
        <div id="status">
          <button className="ui inverted green button">
            status-code :{Status}
          </button>
        </div>
        <div>
          <p>
            <JSONPretty id="json-pretty" data={apidata}></JSONPretty>
          </p>
        </div>
      </div>
    </>
  );
}

export default Response;
