import React, { useState } from "react";

function Crudoperation({ datacontent, jsondata, header, setUrl, url, style }) {
  const [method, setMethod] = useState("get");

  // handlesubmit functionality .....................
  const handlesubmit = (e) => {
    e.preventDefault();
    const dataformat = {
      method: method,
      url: url,
      headers: header,
      data: JSON.parse(jsondata),
    };
    // console.log(dataformat);
    datacontent(dataformat);
  };

  return (
    <>
      <div className="p-4">
        <form data-form onSubmit={handlesubmit}>
          <div className="input-group mb-4">
            <select
              className="form-select flex-grow-0 w-auto"
              data-method
              onChange={(e) => setMethod(e.target.value)}
              style={style}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="DELETE">DELETE</option>
              <option value="PUT">PUT</option>
            </select>
            <input
              data-url
              required
              className="form-control"
              type="url"
              placeholder="Enter Request URL............"
              onChange={(e) => setUrl(e.target.value)}
              style={style}
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Crudoperation;
