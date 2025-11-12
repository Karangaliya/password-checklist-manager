import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Link,
  Fade,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../auth/firebaseConfig"; // keep your firebaseConfig paths
import { loginSchema } from "../core/validations/login.schema";
import CustomButton from "../core/component/CustomButton";
import { registerSchema } from "../core/validations/registration.schema";

/**
 * AuthPage.jsx
 * - Desktop: left purple hero + right speech-bubble card (login/register)
 * - Mobile: only the narrow card (login or register). Clicking "register here" toggles card content.
 *
 * Replace the image paths below with your own assets location if different.
 */

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login"); // "login" | "register"
  const [loading, setLoading] = useState(false);

  // login form
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "all",
    defaultValues: { email: "", password: "" },
  });

  // register form
  const {
    register: regRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: regErrors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const handleGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      console.log("google result", result);
      // use result to sign in/register on backend if needed
    } catch (err) {
      console.error("Google login error", err);
    } finally {
      setLoading(false);
    }
  };

  const onLogin = (data) => {
    console.log("login data", data);
    // your login logic here
  };

  const onRegister = (data) => {
    console.log("register data", data);
    // your register logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f2430]">
      {/* decorative background (image) */}

      {/* MAIN WRAPPER — flex container (desktop row, mobile column) */}
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] gap-8 md:gap-10 items-center justify-center">
        {/* LEFT PANEL */}
        <div
          className="hidden md:flex rounded-2xl overflow-hidden relative md:justify-between"
          style={{
            backgroundImage: "url('/assets/bg-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
            minHeight: "800px",
            minWidth: "1200px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#40207a]/90 via-[#6b3fd6]/75 to-[#8b5cf6]/50"></div>

          <div className="relative p-10 flex flex-col justify-between text-white md:w-[50%]">
            <div>
              <Typography
                variant="h2"
                sx={{ fontWeight: 800 }}
                className="mb-4 text-5xl leading-snug"
              >
                Welcome
                <br />
                Back !
              </Typography>
              <Typography
                sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 420 }}
                className="text-sm"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
          </div>

          <div className="flex justify-center w-full md:w-[50%] relative">
            {/* white card */}
            <div className="bg-white rounded-[26px] relative w-full min-h-[420px] m-5 shadow-2xl z-10">
              {/* ✅ arrow box (behind card) */}
              <div className="absolute top-[55px] left-[-35px] h-[100px] w-[100px] bg-white rounded-2xl rotate-45 -z-10"></div>

              {/* inside content */}
              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="mb-2 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, fontSize: 24 }}
                  >
                    {activeTab === "login" ? "Login" : "Register"}
                  </Typography>
                  <div className="text-sm text-gray-500">
                    {activeTab === "login" ? (
                      <>
                        Don't have an account?{" "}
                        <button
                          onClick={() => setActiveTab("register")}
                          className="text-[#6f4bd6] underline font-medium"
                        >
                          Create your account
                        </button>
                      </>
                    ) : (
                      <>
                        Already a member?{" "}
                        <button
                          onClick={() => setActiveTab("login")}
                          className="text-[#6f4bd6] underline font-medium"
                        >
                          Sign in
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* FORM AREA */}
                <div>
                  {/* LOGIN FORM */}
                  <Fade in={activeTab === "login"} mountOnEnter unmountOnExit>
                    <div aria-hidden={activeTab !== "login"}>
                      <form onSubmit={handleLoginSubmit(onLogin)} noValidate>
                        <TextField
                          size="small"
                          label="Username / Email"
                          fullWidth
                          {...loginRegister("email")}
                          error={!!loginErrors.email}
                          helperText={loginErrors.email?.message}
                          sx={{
                            mb: 2,
                            "& .MuiOutlinedInput-root": { borderRadius: 2 },
                          }}
                        />
                        <TextField
                          size="small"
                          label="Password"
                          type="password"
                          fullWidth
                          {...loginRegister("password")}
                          error={!!loginErrors.password}
                          helperText={loginErrors.password?.message}
                          sx={{
                            mb: 2,
                            "& .MuiOutlinedInput-root": { borderRadius: 2 },
                          }}
                        />

                        <div className="flex items-center justify-between mb-4">
                          <FormControlLabel
                            control={<Checkbox />}
                            label={
                              <span className="text-sm text-gray-600">
                                Remember Me
                              </span>
                            }
                          />
                          <Link
                            href="#"
                            underline="hover"
                            className="text-sm text-gray-600"
                          >
                            forgot password?
                          </Link>
                        </div>

                        <div className="flex justify-end mb-4">
                          <CustomButton
                            type="submit"
                            buttonTitle="LOGIN"
                            backgroundColor="#6f4bd6"
                            textColor="#fff"
                            hoverColor="#5c3bd1"
                            className="w-40 justify-center rounded-full py-2"
                            handleRedirect={() => {}}
                          />
                        </div>
                      </form>
                    </div>
                  </Fade>

                  {/* REGISTER FORM */}
                  <Fade
                    in={activeTab === "register"}
                    mountOnEnter
                    unmountOnExit
                  >
                    <div aria-hidden={activeTab !== "register"}>
                      <form
                        onSubmit={handleRegisterSubmit(onRegister)}
                        noValidate
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                          <TextField
                            size="small"
                            label="First name"
                            fullWidth
                            {...regRegister("firstName")}
                            error={!!regErrors.firstName}
                            helperText={regErrors.firstName?.message}
                          />
                          <TextField
                            size="small"
                            label="Last name"
                            fullWidth
                            {...regRegister("lastName")}
                            error={!!regErrors.lastName}
                            helperText={regErrors.lastName?.message}
                          />
                        </div>

                        <TextField
                          size="small"
                          label="Email"
                          fullWidth
                          {...regRegister("email")}
                          error={!!regErrors.email}
                          helperText={regErrors.email?.message}
                          sx={{ mb: 2 }}
                        />
                        <TextField
                          size="small"
                          label="Password"
                          type="password"
                          fullWidth
                          {...regRegister("password")}
                          error={!!regErrors.password}
                          helperText={regErrors.password?.message}
                          sx={{ mb: 2 }}
                        />
                        <TextField
                          size="small"
                          label="Confirm password"
                          type="password"
                          fullWidth
                          {...regRegister("confirmPassword")}
                          sx={{ mb: 2 }}
                        />
                        <FormControlLabel
                          control={<Checkbox {...regRegister("terms")} />}
                          label={
                            <span className="text-sm text-gray-600">
                              I accept the Terms & Privacy
                            </span>
                          }
                        />
                        <div className="mt-4">
                          <CustomButton
                            type="submit"
                            buttonTitle="SIGN UP"
                            backgroundColor="#6f4bd6"
                            textColor="#fff"
                            hoverColor="#5c3bd1"
                            className="w-full justify-center rounded-full py-2"
                            handleRedirect={() => {}}
                          />
                        </div>
                      </form>
                    </div>
                  </Fade>
                </div>

                {/* Divider + social login */}
                <Divider sx={{ my: 2 }}>Or login with</Divider>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <CustomButton
                      icon={
                        <img
                          src="/assets/google-icon.svg"
                          alt="google"
                          className="w-4 h-4"
                        />
                      }
                      buttonTitle="Google"
                      backgroundColor="transparent"
                      textColor="#111"
                      iconForward={true}
                      handleRedirect={handleGoogle}
                      className="w-full justify-center rounded-full border border-gray-200 py-2"
                    />
                  </div>

                  <div className="flex gap-2 items-center">
                    <div className="w-12 h-8 rounded-full bg-[#4f6b9a] shadow-inner" />
                    <div className="w-12 h-8 rounded-full bg-[#09a7ff]" />
                  </div>
                </div>

                <div className="text-center mt-3 text-xs text-gray-500">
                  By continuing you agree to our <Link href="#">Terms</Link> and{" "}
                  <Link href="#">Privacy</Link>.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — speech-bubble card */}
      </div>
    </div>
  );
}
