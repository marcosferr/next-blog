"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./registerPage.module.css";
function RegistrationForm() {
  const { status } = useSession();
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Sign in using the Credentials provider with registration data
    const result = await signIn("credentials", { email, password });
  };

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Email
        <input className={styles.input} name="email" type="email" required />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          name="password"
          type="password"
          required
        />
      </label>
      <label className={styles.label}>
        Confirm password
        <input
          className={styles.input}
          name="cpassword"
          type="cpassword"
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
