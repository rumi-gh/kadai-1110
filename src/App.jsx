// Reactのコンポーネントであるとわかりやすくするため
// 拡張子は jsx とする
// コンポーネント名の先頭は大文字
// コンポーネント名はパスカルケース推奨

// /* eslint react-hooks/exhoustive-deps: off */
// ～～のルールはoff(全体)　※エラーにはならなかった

import React, { useEffect, useState } from "react";

// default export
// import ColorfulMessage from "./components/ColorfulMessage";

// export const
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // const onClickButton = () => alert();

  console.log("最初");
  // 特定の条件下で再レンダリングされる
  // state変更時、親の再レンダリング時・・・

  // const [num, setNum] = useState(0);
  // // 動的に変わる部分はuseStateを使用する
  // // num：変数
  // // setnum：更新関数
  // // 0は初期値

  // const [faceShowFlag, setFaceShowFlag] = useState(true);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // 変数を宣言するタイミングは任意?
  // ⇒どちらも宣言だから？アロー関数の中身は宣言の後に処理されてるかも
  // ⇒宣言、関数、・・・とまとめたほうが無難（可読性の向上）

  // これはエラーになる
  // num + 1;

  const [num, setNum] = useState(0);
  // 動的に変わる部分はuseStateを使用する
  // num：変数
  // setnum：更新関数
  // 0は初期値

  // これはエラーにならない
  // num + 1;

  const onClickSwitchShowFlag = () => {
    // フラグを反対にする
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffect　関心の分離
  // 空の配列を渡すと、最初の1回だけ呼ばれる　※パフォーマンス考慮
  // useEffect(() => {
  //   console.log("useEffect!!");
  // }, []);

  // numのstateが変化した時だけ呼ばれる
  // ⇒on/offボタンが押された場合、numのstateに変更はないため呼ばれない
  useEffect(() => {
    // console.log("useEffect!!");

    // 3の倍数の場合に顔文字を表示する
    // Too many re-renders ⇒ stateの変更まわりを確認する
    if (num > 0) {
      if (num % 3 === 0) {
        // setFaceShowFlag(true);
        // falseの場合にtrueに変更する
        // 左辺がfalseの場合、右辺
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // setFaceShowFlag(false);
        // trueの場合にfalseに変更する
        // 左辺がtrueの場合、右辺
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // // eslint-disable-next-line react-hooks/exhoustive-deps
    // ～～のルールはoff(行)　※エラーにはならなかった
  }, [num]);

  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  // const contentLadyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* {}で囲った中身はJS */}
      {/* 内側の{}は要素を意味している */}

      {/* <p style={contentStyle}>お元気ですか?</p> */}
      {/* color,messageがprops(引数) */}
      {/* <ColorfulMessage color="blue" message="お元気ですか?" /> */}
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>

      {/* <p style={contentLadyStyle}>元気です!</p> */}
      {/* <ColorfulMessage color="pink" message="元気です!" /> */}
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>

      {/* <button onClick={onClickButton}>ボタン</button> */}
      <button onClick={onClickCountUp}>カウントアップ!</button>

      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>

      <p>{num}</p>

      {faceShowFlag && <p>!(^^)!</p>}
      {/* 左辺がtrueの場合に右辺 */}
      {/* <p>!(^^)!</p> */}
      {/* 半角のみ */}
    </>
  );
};

// Appは上記関数。他でも関数Appを使用可能とするため、exportする
export default App;
