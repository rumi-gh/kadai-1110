import React from "react";

// default export
// const ColorfulMessage = (props) => {

export const ColorfulMessage = (props) => {
  // console.log(props);
  // console.log("カラフル");

  // 分割代入を使用する
  const { color, children } = props;

  const contentStyle = {
    // color: "blue",
    // color: props.color,

    // color: color,
    // プロパティ名と値(変数名)が同じ場合、省略可能
    color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>お元気ですか?</p>;
  // return <p style={contentStyle}>{props.message}</p>;

  // コンポーネントのタグで囲った中身はprops.childrenに入っている
  // return <p style={contentStyle}>{props.children}</p>;

  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
