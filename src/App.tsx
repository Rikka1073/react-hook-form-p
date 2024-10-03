import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "../styled-system/css";

type FormValues = {
  name: string;
  mail: string;
  password: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });
  const onsubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)} className={css({ textAlign: "left", background: "gray.50", lg: { width: "1/4", margin: "0 auto" }, margin: "6", padding: "4" })}>
        <p className={css({ textAlign: "center", fontSize: "2xl", fontWeight: "bold" })}>Form</p>
        <ul>
          <li className={css({ marginTop: "5", fontWeight: "bold" })}>
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
            {errors.name && (
              <p role="alert" className={css({ color: "red.500", fontWeight: "bold" })}>
                {errors.name.message}
              </p>
            )}
          </li>
          <li className={css({ marginTop: "5", fontWeight: "bold" })}>
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
            {errors.mail && (
              <p role="alert" className={css({ color: "red.500", fontWeight: "bold" })}>
                {errors.mail.message}
              </p>
            )}
          </li>
          <li className={css({ marginTop: "5" })}>
            <label className={css({ marginRight: "5", fontWeight: "bold" })}>パスワード</label>
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
            {errors.password && (
              <p role="alert" className={css({ color: "red.500", fontWeight: "bold" })}>
                {errors.password.message}
              </p>
            )}
          </li>
        </ul>
        <button type="submit" className={css({ background: "blue.400", color: "white", p: "4", width: "1/2", margin: "0 auto", display: "block", mt: "5", fontWeight: "bold" })}>
          送信
        </button>
      </form>
    </>
  );
}

export default App;
