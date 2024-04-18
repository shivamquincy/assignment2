"use client";
import React, { useState } from 'react';
import styles from "../SignIn/page.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignInPage() {
  const router = useRouter();
  const[user,setUser] = React.useState({
    email: "",
    password : "",
  })
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const onSignIn = () => {
  const userData = {
    email: email,
    password: password,
  };
 return (
    <div className={styles.containersignin}>
      <div className={styles.img1}>
        <Image src="/login.png" alt="Description" width={800} height={800} />
      </div>
      <div className={styles.loginForm}>
        <div className={styles.text}>
          <h2>Fill what we know <span className={styles.exclamation}>!</span></h2>
        </div>
        <div className={styles.formcontent}>
          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.buttonsContainer}>
              <button type="submit" className={`${styles.submitButton} ${styles.signInButton}`} onClick={onSignIn}>
                Sign In
              </button>
              <br />
              <Link href="/Signup">
                <button className={`${styles.submitButton} ${styles.signUpButton}`}>Sign Up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
 );
}
