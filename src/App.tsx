import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "../styled-system/css";

type FormValues = {
  name: string;
  mail: string;
  password: string;
};

function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onsubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)} className={css({ textAlign: "left", background: "gray.50", lg: { width: "1/4", margin: "0 auto" }, margin: "6", padding: "4" })}>
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
              {...register("name", { required: "名前を入力してください" })}
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
              {...register("mail", { required: "メールアドレスを入力してください" })}
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
              {...register("password", { required: "パスワードを入力してください" })}
            />
          </li>
        </ul>
        <button type="submit">送信</button>
      </form>
    </>
  );
}

export default App;
