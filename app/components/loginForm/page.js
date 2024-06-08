//app/components/loginForm/page.js

import React, { useState } from "react";
import axios from "axios";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    try {
      const response = await axios.get("http://localhost:3001/data");

      // Handle response, find user in the data received from the backend
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // Redirect to dashboard page
        window.location.href = "/pages/dashboard";
      } else {
        setError("Username atau password tidak sesuai");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Gagal mengambil data pengguna");
    }
  };

  return (
    <div className={styles.bigforumLogin}>
      <div className={styles.divdFlex}>
        <div className={styles.divpositionRelative}>
          <div className={styles.divcol}>
            <b className={styles.BigForum}>BigForum</b>
            <img
              className={styles.asetIconLoginpng}
              alt=""
              src="/images/aseticonloginpng@2x.png"
            />
            <img
              className={styles.asetLoginKiripngIcon}
              alt=""
              src="/images/asetloginkiripng@2x.png"
            />
          </div>
          <div className={styles.divcol1}>
            <div className={styles.divdFlex1}>
              <div className={styles.divdFlex2}>
                <img
                  className={styles.bigGroupWhitepngIcon}
                  alt=""
                  src="/images/big-group-whitepng@2x.png"
                />
              </div>
              <div className={styles.ptextCenter}>
                <b className={styles.loginToBig}>Login to BIGForum</b>
              </div>

              <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    style={{
                      paddingLeft: "20px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    required
                  />
                  <input
                    type="password"
                    style={{
                      paddingLeft: "20px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input1}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.button}
                    style={{ border: "none" }}
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className={styles.ptextCenter1}>
                <div
                  className={styles.inputValidUsername}
                  style={{ width: "300px" }}
                >
                  {formSubmitted && error && (
                    <span
                      style={{
                        width: "300px",
                        marginTop: 30,
                        marginBottom: 20,
                        color: "red",
                        borderRadius: 10,
                      }}
                    >
                      {error}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <img
              className={styles.asetLoginKananpngIcon}
              alt=""
              src="/images/asetloginkananpng@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
