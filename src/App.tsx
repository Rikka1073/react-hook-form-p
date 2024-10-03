import { css } from "../styled-system/css";

function App() {
  return (
    <>
      <form className={css({ textAlign: "left", background: "gray.50", lg: { width: "1/4", margin: "0 auto" }, margin: "6", padding: "4" })}>
        <p className={css({ textAlign: "center", fontSize: "2xl", fontWeight: "bold" })}>Form</p>
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
