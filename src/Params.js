import React from "react";
import JSONPretty from "react-json-pretty";

function Param({
  //  body json data  props........
  setJsondata,
  // ................header  props
  setHeaderkey,
  setHeadervalue,
  Addheader,
  Removeheader,
  header,
  // ................query params props
  setParamKey,
  paramKey,
  setParamValue,
  paramValue,
  ParamData,
  /// style of enable dark or disable dark mode...........
  style,
}) {
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="query-params-tab"
            data-bs-toggle="tab"
            data-bs-target="#query-params"
            type="button"
            role="tab"
            aria-controls="query-params"
          >
            Params
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="request-headers-tab"
            data-bs-toggle="tab"
            data-bs-target="#request-headers"
            type="button"
            role="tab"
            aria-controls="request-headers"
          >
            Header
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="json-tab"
            data-bs-toggle="tab"
            data-bs-target="#json"
            type="button"
            role="tab"
            aria-controls="json"
          >
            Body
          </button>
        </li>
      </ul>

      <div className="tab-content p-3 border-top-0 border">
        <div
          className="tab-pane fade show active"
          id="query-params"
          role="tabpanel"
          aria-labelledby="query-params-tab"
        >
          <div data-query-params>
            <div className="input-group my-2" data-key-value-pair>
              <input
                type="text"
                data-key
                className="form-control"
                placeholder="Key"
                style={style}
                value={paramKey}
                onChange={(e) => {
                  setParamKey(e.target.value);
                }}
              />
              <input
                type="text"
                data-value
                className="form-control"
                placeholder="Value"
                style={style}
                value={paramValue}
                onChange={(e) => {
                  setParamValue(e.target.value);
                }}
              />
              <button
                type="button"
                data-remove-btn
                className="btn btn-outline-danger"
              >
                Remove
              </button>
            </div>
          </div>
          <button
            data-add-query-param-btn
            className="mt-2 btn btn-outline-success"
            type="button"
            onClick={ParamData}
          >
            Add
          </button>
        </div>
        <div
          className="tab-pane fade"
          id="request-headers"
          role="tabpanel"
          aria-labelledby="request-headers-tab"
        >
          <div data-request-headers>
            <div className="input-group my-2" data-key-value-pair>
              <input
                type="text"
                data-key
                className="form-control"
                placeholder="Key"
                style={style}
                onChange={(e) => setHeaderkey(e.target.value)}
              />
              <input
                type="text"
                data-value
                className="form-control"
                placeholder="Value"
                style={style}
                onChange={(e) => setHeadervalue(e.target.value)}
              />
              <button
                type="button"
                data-remove-btn
                className="btn btn-outline-danger"
                onClick={Removeheader}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            data-add-request-header-btn
            className="mt-2 btn btn-outline-success"
            type="button"
            onClick={Addheader}
          >
            Add
          </button>
          <div className="headerkeyvalue">
            <JSONPretty
              id="json-pretty"
              data={JSON.stringify(header)}
            ></JSONPretty>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="json"
          role="tabpanel"
          aria-labelledby="json-tab"
        >
          <div data-json-request-body className="overflow-auto">
            <textarea
              className="bodybox"
              style={style}
              onChange={(e) => setJsondata(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Param;
