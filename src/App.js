import React from "react";
import Header from "./header";
import Param from "./Params";
import History from "./History";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Crudoperation from "./operation";
import Response from "./Response";
import { useState } from "react";
import axios from "axios";

function App() {
  const [apidata, setApidata] = useState(
    ".....Enter the url and click send to get Response......."
  );
  const [error, setError] = useState("");
  const [mystatus, setStatus] = useState();
  const [jsondata, setJsondata] = useState(null);
  const [history, setHistory] = useState([]);
  const [url, setUrl] = useState(null);

  // query params  initial state .........
  const [paramKey, setParamKey] = useState("");
  const [paramValue, setParamValue] = useState("");

  ///it's initial state of header key, value,  add button and remove button..................
  const [headerkey, setHeaderkey] = useState("");
  const [headervalue, setHeadervalue] = useState("");

  const [header, setHeader] = useState({});
  const [mystyle, setMystyle] = useState({
    color: "#222", //black
    backgroundColor: "white", //color white
  });
  const [btn, setBtn] = useState("Enable dark mode");
  const handleMode = () => {
    // console.log("mode is changed");
    if (mystyle.color === "#222") {
      setMystyle({
        color: "white",
        backgroundColor: "#222",
      });
      setBtn("Disable dark mode");
    } else {
      setMystyle({
        color: "#222",
        backgroundColor: "white",
      });
      setBtn("Enable dark mode");
    }
  };

  // query params funcionality ...........
  const ParamData = () => {
    // setError(null);
    const newUrl = `${url}?${paramKey}=${paramValue}&`;
    setUrl(newUrl);
  };

  // header functionality ..........
  //  add header
  const Addheader = () => {
    const newheader = { ...header, [headerkey]: headervalue };
    console.log(newheader);
    console.log(header, headerkey, headervalue);
    setHeader(newheader);
  };
  //header remove
  const Removeheader = () => {
    const { [headerkey]: headervalue, ...newdata } = header;
    console.log(newdata);
    setHeader(newdata);
  };

  //   axios functionality ........
  const acceptdata = (dataformat) => {
    // console.log(format);
    axios(dataformat)
      .then(function (response) {
        // console.log(response);
        // console.log(response.config.method);
        // console.log(response.config.url);
        // console.log(response.status);
        setApidata(JSON.stringify(response.data));
        setStatus(response.status);
        const gethistory = [
          `${response.config.method.toUpperCase()},${response.status},${
            response.config.url
          }`,
          ...history,
        ];
        setHistory(gethistory);
        console.log(history);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  // console.log(apidata);

  return (
    <>
      <button
        style={mystyle}
        id="light-button"
        onClick={handleMode}
        className="ui inverted primary button"
      >
        {btn}
      </button>
      <Header style={mystyle} />
      <div className="sameline" style={mystyle}>
        <div className="historycard" style={mystyle}>
          <History history={history} />
        </div>
        <div>
          <Crudoperation
            style={mystyle}
            datacontent={acceptdata}
            jsondata={jsondata}
            header={header}
            setUrl={setUrl}
            url={url}
          />
          <Param
            style={mystyle}
            ///.......query params props.......///
            setParamKey={setParamKey}
            paramKey={paramKey}
            setParamValue={setParamValue}
            paramValue={paramValue}
            ParamData={ParamData}
            // ......json data props.........//
            setJsondata={setJsondata}
            // .......... header props..........
            header={header}
            setHeaderkey={setHeaderkey}
            setHeadervalue={setHeadervalue}
            Addheader={Addheader}
            Removeheader={Removeheader}
          />
          <Response style={mystyle} apidata={apidata} Status={mystatus} />
        </div>
      </div>
    </>
  );
}

export default App;
