// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// react,react-domのバージョンを17.0.2に変更
// import { StrictMode } from "react";
// import ReactDom from "react-dom";

// import App from "./App";

// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   // return null;
//   // return <h1>こんにちは!</h1>;
//   return (
//     // ひとつのタグで囲わないといけない、が、divタグは不要
//     // <div>
//     //   <h1>こんにちは!</h1>
//     //   <p>お元気ですか?</p>
//     // </div>

//     // React.Fragmentで画面にはレンダリングされない、エラー回避に使用
//     // <React.Fragment>
//     //   <h1>こんにちは!</h1>
//     //   <p>お元気ですか?</p>
//     // </React.Fragment>

//     // React.Fragmentと同じ効果がある
//     <>
//       <h1>こんにちは!</h1>
//       <p>お元気ですか?</p>
//     </>
//   );
// };

// ↑を関数をコンポーネント化したため、import
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
