import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  Link,
  Fade,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../auth/firebaseConfig";
import { loginSchema } from "../../core/validations/login.schema";
import CustomButton from "../../core/component/CustomButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { registerSchema } from "../../core/validations/registration.schema";
import { useSearchParams } from "react-router-dom";
import { _Decrypt } from "../../utils/utility";
import { useDynamicTitle } from "../../hooks/useDynamicTitle";

function AuthPage() {
  useDynamicTitle("Login");
  const [activeTab, setActiveTab] = useState("login");
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log("loading: ", loading);

  useEffect(() => {
    const mode = _Decrypt(searchParams.get("mode") || "login");
    if (mode === "register") {
      setActiveTab("register");
    } else {
      setActiveTab("login");
    }
  }, [searchParams]);

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: {
      errors: loginErrors,
      isValid: loginIsValid,
      isSubmitting: loginIsSubmitting,
    },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "all",
    defaultValues: { email: "", password: "" },
  });

  const {
    register: regRegister,
    handleSubmit: handleRegisterSubmit,
    formState: {
      errors: regErrors,
      isValid: regIsValid,
      isSubmitting: regIsSubmitting,
    },
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
    } catch (err) {
      console.error("Google login error", err);
    } finally {
      setLoading(false);
    }
  };

  const onLogin = (data) => {
    console.log("login data", data);
  };

  const onRegister = (data) => {
    console.log("register data", data);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--vc-app-bg)" }}
    >
      <div className="flex flex-col min-[650px]:flex-row w-full max-w-[1200px] gap-8 min-[650px]:gap-10 items-center justify-center m-[20px]">
        <div
          className="min-[650px]:flex min-[1600px]:min-w-[130%] min-[1300px]:min-w-[100%] min-[950px]:min-w-[90%] rounded-2xl overflow-hidden relative min-[650px]:justify-between"
          style={{
            backgroundImage: "url('/assets/bg-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
            minHeight: "800px",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `
                        linear-gradient(
                          to top right,
                          color-mix(in srgb, var(--vc-left-gradient-from) 90%, transparent),
                          color-mix(in srgb, var(--vc-left-gradient-via) 75%, transparent),
                          color-mix(in srgb, var(--vc-left-gradient-to) 50%, transparent)
                        )
                      `,
            }}
          ></div>
          <div className="relative p-10 flex flex-col text-white min-[650px]:w-[50%]">
            <div className="hidden min-[650px]:flex items-center gap-3 mb-10">
              <img
                src="/logo1.png"
                alt="VaultCheck Logo"
                className="w-[300px]"
              />
            </div>
            {activeTab === "login" ? (
              <div className="space-y-10">
                <div>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: 800 }}
                    className="mb-4 text-5xl leading-tight"
                  >
                    Welcome Back
                  </Typography>

                  <Typography
                    sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 440 }}
                    className="text-sm"
                  >
                    Securely access your checklists, credentials, and
                    organization workspaces — all protected with
                    industry-standard encryption.
                  </Typography>
                </div>
                <div className="hidden min-[650px]:block rounded-xl bg-white/10 backdrop-blur-md p-6 max-w-[440px]">
                  <ul className="space-y-3 text-sm text-white/95">
                    <li className="flex items-start gap-3">
                      <span className="text-[#d8c7ff]">✔</span>
                      Secure password & credential vault
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d8c7ff]">✔</span>
                      Role-based access for teams & organizations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d8c7ff]">✔</span>
                      Public & private project checklists
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d8c7ff]">✔</span>
                      Full audit and access control
                    </li>
                  </ul>
                </div>
                <Typography className="hidden min-[650px]:block text-xs text-white/70 max-w-[440px]">
                  Security-first by design. Your data is encrypted and
                  protected.
                </Typography>
              </div>
            ) : (
              <div className="space-y-10">
                <div>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: 800 }}
                    className="mb-4 text-5xl leading-tight"
                  >
                    Create Your Account
                  </Typography>
                  <Typography
                    sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 440 }}
                    className="text-sm"
                  >
                    Get started with a secure workspace to manage checklists,
                    credentials, and team access with full control.
                  </Typography>
                </div>
                <div className="hidden min-[650px]:block rounded-xl bg-white/10 backdrop-blur-md p-6 max-w-[440px]">
                  <ul className="space-y-3 text-sm text-white/95">
                    <li className="flex items-start gap-3">
                      <span className="text-[#d8c7ff]">✔</span>
                      Create and manage organizations
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d8c7ff]">✔</span>
                      Assign checklists and control access
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d8c7ff]">✔</span>
                      Secure credential sharing with permissions
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d8c7ff]">✔</span>
                      Encrypted storage with activity logs
                    </li>
                  </ul>
                </div>
                <Typography className="hidden min-[650px]:block text-xs text-white/70 max-w-[440px]">
                  Built for teams that care about security and control.
                </Typography>
              </div>
            )}
          </div>

          <div className="flex justify-center w-full min-[650px]:w-[50%] relative">
            <div className="bg-white rounded-[26px] relative w-full min-h-[420px] m-5 shadow-2xl z-10 flex flex-col justify-center">
              <div className="absolute top-[55px] left-[-15px] min-[650px]:left-[-30px] h-[50px] w-[50px] min-[650px]:h-[80px] min-[650px]:w-[80px] bg-white rounded-2xl rotate-45 -z-10"></div>
              <div className="p-8 sm:p-10">
                <div className="mb-6">
                  <Typography
                    sx={{
                      fontSize: "40px",
                      fontWeight: 900,
                      mb: "4px",
                      color: "#6f4bd6",
                    }}
                  >
                    {activeTab === "login" ? "Login" : "Register"}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#8c8c8c" }}>
                    {activeTab === "login" ? (
                      <>
                        <span className="font-extrabold text-gray-700 text-[14px]">
                          Don't have an account?{" "}
                        </span>
                        <button
                          onClick={() => setActiveTab("register")}
                          className="text-[#6f4bd6] font-extrabold hover:underline cursor-pointer text-[14px]"
                        >
                          Create your account
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="font-extrabold text-gray-700 text-[14px]">
                          Already a member?{" "}
                        </span>
                        <button
                          onClick={() => setActiveTab("login")}
                          className="text-[#6f4bd6] font-extrabold hover:underline cursor-pointer text-[14px]"
                        >
                          Sign in
                        </button>
                      </>
                    )}
                  </Typography>
                </div>
                <div>
                  <Fade in={activeTab === "login"} mountOnEnter unmountOnExit>
                    <form
                      onSubmit={handleLoginSubmit(onLogin)}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-3">
                        <TextField
                          placeholder="Email"
                          fullWidth
                          {...loginRegister("email")}
                          error={!!loginErrors.email}
                          helperText={loginErrors.email?.message}
                          autoComplete="new-email"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailOutlinedIcon
                                  sx={{ color: "#9a9a9a", fontSize: 20 }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          {...loginRegister("password")}
                          error={!!loginErrors.password}
                          helperText={loginErrors.password?.message}
                          autoComplete="new-password"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockOutlineIcon
                                  sx={{ color: "#9a9a9a", fontSize: 20 }}
                                />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? (
                                    <VisibilityOff
                                      sx={{ color: "#9a9a9a", fontSize: 20 }}
                                    />
                                  ) : (
                                    <Visibility
                                      sx={{ color: "#9a9a9a", fontSize: 20 }}
                                    />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between ml-[6px]">
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <span className="text-sm text-gray-500">
                              Remember Me
                            </span>
                          }
                        />
                        <button className="text-sm text-gray-500 hover:text-[#6f4bd6]">
                          forgot password?
                        </button>
                      </div>
                      <div className="flex justify-end">
                        <CustomButton
                          type="submit"
                          buttonTitle="LOGIN"
                          backgroundColor="var(--vc-primary)"
                          hoverColor="var(--vc-primary-hover)"
                          textColor="#fff"
                          className="min-[1000px]:w-[160px] w-full h-[42px] rounded-full text-sm font-semibold"
                          isDisabled={!loginIsValid || loginIsSubmitting}
                        />
                      </div>
                    </form>
                  </Fade>

                  {/* register */}

                  <Fade
                    in={activeTab === "register"}
                    mountOnEnter
                    unmountOnExit
                  >
                    <form
                      onSubmit={handleRegisterSubmit(onRegister)}
                      className="flex flex-col gap-5"
                    >
                      <div className="grid min-[950px]:grid-cols-2 grid-cols-1 gap-3">
                        <TextField
                          placeholder="First name"
                          fullWidth
                          {...regRegister("firstName")}
                          error={!!regErrors.firstName}
                          helperText={regErrors.firstName?.message}
                          autoComplete="new-first-name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonOutlineIcon
                                  sx={{ color: "#9a9a9a", fontSize: 20 }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          placeholder="Last name"
                          fullWidth
                          {...regRegister("lastName")}
                          error={!!regErrors.lastName}
                          helperText={regErrors.lastName?.message}
                          autoComplete="new-last-name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonOutlineIcon
                                  sx={{ color: "#9a9a9a", fontSize: 20 }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                      <TextField
                        placeholder="Email"
                        fullWidth
                        {...regRegister("email")}
                        error={!!regErrors.email}
                        helperText={regErrors.email?.message}
                        autoComplete="new--email"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailOutlinedIcon
                                sx={{ color: "#9a9a9a", fontSize: 20 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        {...regRegister("password")}
                        error={!!regErrors.password}
                        helperText={regErrors.password?.message}
                        autoComplete="new--password"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockOutlineIcon
                                sx={{ color: "#9a9a9a", fontSize: 20 }}
                              />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <VisibilityOff
                                    sx={{ color: "#9a9a9a", fontSize: 20 }}
                                  />
                                ) : (
                                  <Visibility
                                    sx={{ color: "#9a9a9a", fontSize: 20 }}
                                  />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <div className="flex items-center justify-between ml-[6px]">
                        <FormControlLabel
                          control={<Checkbox {...regRegister("terms")} />}
                          label={
                            <span className="text-sm text-gray-500">
                              I accept Terms & Privacy
                            </span>
                          }
                          error={!!regErrors.terms}
                          helperText={regErrors.terms?.message}
                        />
                      </div>
                      <div className="flex justify-end">
                        <CustomButton
                          type="submit"
                          buttonTitle="SIGN UP"
                          backgroundColor="#6f4bd6"
                          hoverColor="#5c3bd1"
                          textColor="#fff"
                          className="min-[1000px]:w-[160px] w-full h-[42px] rounded-full text-sm font-semibold"
                          isDisabled={!regIsValid || regIsSubmitting}
                        />
                      </div>
                    </form>
                  </Fade>
                </div>
                <Divider sx={{ my: "20px" }}>Or login with</Divider>
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
                </div>
                <div className="text-center mt-3 text-xs text-gray-500">
                  By continuing you agree to our <Link href="#">Terms</Link> and{" "}
                  <Link href="#">Privacy</Link>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
