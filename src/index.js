import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "Mgo+DSMBaFt/QHRqVVhlXVpHaV1HQmFJfFBmQmlde1RycEU3HVdTRHRcQl9hSn5UckJgWnhWc3Q=;Mgo+DSMBPh8sVXJ0S0J+XE9Bd1RBQmFMYVF2R2BJeFR0cF9EZEwgOX1dQl9gSXxRdUVkXXhdc3xVQGA=;ORg4AjUWIQA/Gnt2VVhkQlFac15JXnxLe0x0RWFab1l6cFFMYlhBNQtUQF1hSn5RdEZjXntZc3ddRGNc;MTE4ODY5NkAzMjMwMmUzNDJlMzBORml4T3o4cDVsNHFUN1NxZHFBcTAvRDVsNW1VYTlDdTlsdU5vQnlHaFJjPQ==;MTE4ODY5N0AzMjMwMmUzNDJlMzBHOHhML1BvNlNUcTd4OFd3VGxFSTBIRjZYUVhjTUg0c1FLVTZlSGpHMitvPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpDVmBWfFZpR2NbfE53flFCal5VVAciSV9jS31TdEdgWXhad3dWTmhUUA==;MTE4ODY5OUAzMjMwMmUzNDJlMzBVV0xoNkxRaGwxMmlwQzlTWnVCWnVRdnFpNWJFdmZXNnRvMWUwam9yeThNPQ==;MTE4ODcwMEAzMjMwMmUzNDJlMzBEWFdJdTB2eWQrZzFIaHdxYTAyUVVmU2cxQUx4eXl4eWlmYlgxbDAzVzZ3PQ==;Mgo+DSMBMAY9C3t2VVhkQlFac15JXnxLe0x0RWFab1l6cFFMYlhBNQtUQF1hSn5RdEZjXntZc3dcQ2Jd;MTE4ODcwMkAzMjMwMmUzNDJlMzBjOGZPSFpmT3VMMStvYXcxK3l6ZUFxY3lEU1lrZUt3SFB4ZVpOVVdnVXdvPQ==;MTE4ODcwM0AzMjMwMmUzNDJlMzBDWkZzb0h5N0p0bzZiQ282akFsbGFJcURIZVZCY1FiQVpCNC9QN1A3TFFzPQ==;MTE4ODcwNEAzMjMwMmUzNDJlMzBVV0xoNkxRaGwxMmlwQzlTWnVCWnVRdnFpNWJFdmZXNnRvMWUwam9yeThNPQ=="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
