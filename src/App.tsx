import { css } from "../styled-system/css";

function App() {
  return (
    <>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🐼!</div>
      <form className={css({ textAlign: "left", background: "gray.50", width: "1/4", margin: "0 auto", padding: "4" })}>
        <h2 className={css({ textAlign: "center", fontSize: "2xl", fontWeight: "bold" })}>Form</h2>
        <ul>
          <li className={css({ marginTop: "5" })}>
            <label className={css({ marginRight: "5" })}>名前</label>
            <input
              placeholder="名前"
              type="text"
              className={css({
                border: "1px solid black",
                marginTop: "3",
                padding: "2",
                width: "full",
                _placeholder: { color: "gray.500" },
              })}
            />
          </li>
          <li className={css({ marginTop: "5" })}>
            <label className={css({ marginRight: "5" })}>メール</label>
            <input
              type="text"
              placeholder="メールアドレス"
              className={css({
                border: "1px solid black",
                marginTop: "3",
                padding: "2",
                width: "full",
                _placeholder: { color: "gray.500" },
              })}
            />
          </li>
          <li className={css({ marginTop: "5" })}>
            <label className={css({ marginRight: "5" })}>パスワード</label>
            <input
              type="text"
              placeholder="パスワード"
              className={css({
                border: "1px solid black",
                marginTop: "3",
                padding: "2",
                width: "full",
                _placeholder: { color: "gray.500" },
              })}
            />
          </li>
        </ul>
      </form>
    </>
  );
}

export default App;
