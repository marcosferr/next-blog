"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
    });
    console.log(result);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>

        <div className={styles.or}>or</div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.submit}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
