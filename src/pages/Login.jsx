import { useState } from "react";
import CustomButton from "../core/component/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { loginSchema } from "../core/validations/login.schema";
import { registerSchema } from "../core/validations/registration.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {
  const [isMoved, setIsMoved] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "all",
  });

  const {
    register: regRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: regErrors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
    reValidateMode: "all",
    mode: "all",
  });

  const handleClick = () => {
    setIsMoved(!isMoved);
  };

  const handleGoogle = () =>{

  };

  const handleMicrosoft = () => {

  };
  
  const onLogin = (data) => {
    console.log(data);
  };

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-32 py-12 bg-[#8B7B9B] flex justify-center items-center">
      <div className="flex flex-col md:flex-row bg-[#292433] relative gap-10 w-full h-auto md:h-[85vh] rounded-lg overflow-hidden shadow-xl ">
        <div
          className={`w-full md:w-[50%] h-full px-4 sm:px-6 md:px-8 rounded-lg transition-opacity duration-700
              ${!isMoved ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              gap: { xs: 2, sm: 3, md: 4 },
              flexDirection: "column",
              justifyContent: "center",
              padding: { xs: "0 20px", sm: "0 40px", md: "0 70px" },
            }}
          >
            <Box>
              <Typography
                fontWeight={600}
                sx={{
                  mb: { xs: 0.5, sm: 1 },
                  color: "white",
                  fontSize: { xs: "28px", sm: "36px", md: "44px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Glad to see you again!
              </Typography>
              <Typography
                sx={{
                  color: "#aaa",
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Sign in to catch up with what's new.
              </Typography>
            </Box>

            <Box>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                {...loginRegister("email")}
                error={!!loginErrors.email}
                helperText={loginErrors.email?.message}
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  input: {
                    color: "#fff",
                    fontSize: { xs: "14px", sm: "16px" },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "#aaa" },
                    "&.Mui-focused fieldset": { borderColor: "#888" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "14px", sm: "16px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: { xs: "11px", sm: "12px" },
                  },
                }}
              />

              <TextField
                label="Enter your password"
                type="password"
                variant="outlined"
                fullWidth
                {...loginRegister("password")}
                error={!!loginErrors.password}
                helperText={loginErrors.password?.message}
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  input: {
                    color: "#fff",
                    fontSize: { xs: "14px", sm: "16px" },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "#aaa" },
                    "&.Mui-focused fieldset": { borderColor: "#888" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "14px", sm: "16px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: { xs: "11px", sm: "12px" },
                  },
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#888",
                      "&.Mui-checked": {
                        color: "#8B7B9B",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: { xs: "20px", sm: "24px" },
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      fontSize: { xs: "11px", sm: "12px", md: "14px" },
                    }}
                  >
                    I agree to the{" "}
                    <Link href="#" color="secondary" underline="hover">
                      Terms & Conditions
                    </Link>
                  </Typography>
                }
                sx={{ mb: { xs: 1.5, sm: 2 } }}
              />

              <CustomButton
                type="button"
                buttonTitle="Login"
                backgroundColor="#8b5cf6"
                textColor="#fff"
                hoverColor="#7c3aed"
                className="w-full justify-center font-semibold rounded-lg py-4 sm:py-[18px] md:py-5 mb-4 sm:mb-[18px] md:mb-5 text-sm sm:text-[15px] md:text-base transition-colors duration-200"
                handleRedirect={() => {
                  if (!loading) {
                    handleLoginSubmit(onLogin)();
                  }
                }}
              />
              <Divider
                sx={{
                  borderColor: "gray",
                  color: "gray",
                  mb: { xs: 1, sm: 2 },
                  mt: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "11px", md: "12px" },
                  "&::before, &::after": {
                    borderColor: "gray",
                  },
                }}
              >
                Or Login/Register with
              </Divider>

              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1, sm: 2 },
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <CustomButton
                  icon={
                    <img
                      src="/assets/google-icon.svg"
                      alt="Google"
                      className="w-[16px] sm:w-[18px] md:w-[20px]"
                    />
                  }
                  backgroundColor="transparent"
                  textColor="white"
                  buttonTitle="Google"
                  iconForward={true}
                  className="w-full justify-center normal-case rounded-none border border-[#555] hover:border-[#888] text-[13px] sm:text-[14px] md:text-[16px] py-[10px] sm:py-[12px] md:py-[14px] gap-[8px] sm:gap-[10px] transition-colors duration-200"
                />
                <CustomButton
                  icon={
                    <img
                      src="/assets/microsoft-icon.svg"
                      alt="Microsoft"
                      className="w-[16px] sm:w-[18px] md:w-[20px]"
                    />
                  }
                  backgroundColor="transparent"
                  textColor="white"
                  buttonTitle="Microsoft"
                  iconForward={true}
                  className="w-full justify-center normal-case rounded-none border border-[#555] hover:border-[#888] text-[13px] sm:text-[14px] md:text-[16px] py-[10px] sm:py-[12px] md:py-[14px] gap-[8px] sm:gap-[10px] transition-colors duration-200"
                />
              </Box>
            </Box>
          </Box>
        </div>
        <div
          className={`overflow-y-auto w-full md:w-[50%] h-full px-4 sm:px-6 md:px-8 py-6 sm:py-7 md:py-9 rounded-lg transition-opacity duration-700 custom-scrollbar
                    ${
                      isMoved ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              gap: { xs: 2, sm: 3, md: 4 },
              flexDirection: "column",
              justifyContent: "center",
              padding: { xs: "0 20px", sm: "0 40px", md: "0 70px" },
            }}
          >
            <Box>
              <Typography
                fontWeight={600}
                sx={{
                  mb: { xs: 0.5, sm: 1 },
                  color: "white",
                  fontSize: { xs: "28px", sm: "36px", md: "44px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Create an account
              </Typography>
              <Typography
                sx={{
                  color: "#aaa",
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Join us today and get started in just a few steps.
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1, sm: 1.5 },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  label="First name"
                  variant="outlined"
                  fullWidth
                  {...regRegister("firstName")}
                  error={!!regErrors.firstName}
                  helperText={regErrors.firstName?.message}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  sx={{
                    mb: { xs: 1.5, sm: 2 },
                    input: {
                      color: "#fff",
                      fontSize: { xs: "14px", sm: "16px" },
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#888" },
                      "&:hover fieldset": { borderColor: "#aaa" },
                      "&.Mui-focused fieldset": { borderColor: "#888" },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "14px", sm: "16px" },
                    },
                    "& .MuiFormHelperText-root": {
                      fontSize: { xs: "11px", sm: "12px" },
                    },
                  }}
                />
                <TextField
                  label="Last name"
                  variant="outlined"
                  fullWidth
                  {...regRegister("lastName")}
                  error={!!regErrors.lastName}
                  helperText={regErrors.lastName?.message}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  sx={{
                    mb: { xs: 1.5, sm: 2 },
                    input: {
                      color: "#fff",
                      fontSize: { xs: "14px", sm: "16px" },
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#888" },
                      "&:hover fieldset": { borderColor: "#aaa" },
                      "&.Mui-focused fieldset": { borderColor: "#888" },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "14px", sm: "16px" },
                    },
                    "& .MuiFormHelperText-root": {
                      fontSize: { xs: "11px", sm: "12px" },
                    },
                  }}
                />
              </Box>

              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                {...regRegister("email")}
                error={!!regErrors.email}
                helperText={regErrors.email?.message}
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  input: {
                    color: "#fff",
                    fontSize: { xs: "14px", sm: "16px" },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "#aaa" },
                    "&.Mui-focused fieldset": { borderColor: "#888" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "14px", sm: "16px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: { xs: "11px", sm: "12px" },
                  },
                }}
              />

              <TextField
                label="Enter your password"
                type="password"
                variant="outlined"
                fullWidth
                {...regRegister("password")}
                error={!!regErrors.password}
                helperText={regErrors.password?.message}
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  input: {
                    color: "#fff",
                    fontSize: { xs: "14px", sm: "16px" },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "#aaa" },
                    "&.Mui-focused fieldset": { borderColor: "#888" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "14px", sm: "16px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: { xs: "11px", sm: "12px" },
                  },
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    {...regRegister("terms")}
                    sx={{
                      color: "#888",
                      "&.Mui-checked": { color: "#8B7B9B" },
                      "& .MuiSvgIcon-root": {
                        fontSize: { xs: "20px", sm: "24px" },
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      fontSize: { xs: "11px", sm: "12px", md: "14px" },
                    }}
                  >
                    I agree to the{" "}
                    <Link href="#" color="secondary" underline="hover">
                      Terms & Conditions
                    </Link>
                  </Typography>
                }
              />

              {regErrors.terms && (
                <Typography
                  sx={{
                    color: "#d32f2f",
                    fontSize: { xs: "11px", sm: "12px" },
                    mt: { xs: -0.5, sm: -1 },
                    mb: { xs: 1.5, sm: 2 },
                  }}
                >
                  {regErrors.terms.message}
                </Typography>
              )}

              <CustomButton
                type="button"
                buttonTitle="Create an account"
                backgroundColor="#8b5cf6"
                textColor="#fff"
                hoverColor="#7c3aed"
                className="w-full justify-center font-semibold rounded-lg py-4 sm:py-[18px] md:py-5 mb-4 sm:mb-[18px] md:mb-5 text-sm sm:text-[15px] md:text-base transition-colors duration-200"
                handleRedirect={() => {
                  if (!loading) {
                    handleRegisterSubmit(onRegister)();
                  }
                }}
              />

              <Divider
                sx={{
                  borderColor: "gray",
                  color: "gray",
                  mb: { xs: 1, sm: 2 },
                  mt: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "11px", md: "12px" },
                  "&::before, &::after": {
                    borderColor: "gray",
                  },
                }}
              >
                Or register with
              </Divider>

              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1, sm: 2 },
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <CustomButton
                  icon={
                    <img
                      src="/assets/google-icon.svg"
                      alt="Google"
                      className="w-[16px] sm:w-[18px] md:w-[20px]"
                    />
                  }
                  backgroundColor="transparent"
                  textColor="white"
                  buttonTitle="Google"
                  iconForward={true}
                  className="w-full justify-center normal-case rounded-none border border-[#555] hover:border-[#888] text-[13px] sm:text-[14px] md:text-[16px] py-[10px] sm:py-[12px] md:py-[14px] gap-[8px] sm:gap-[10px] transition-colors duration-200"
                />
                <CustomButton
                  icon={
                    <img
                      src="/assets/microsoft-icon.svg"
                      alt="Microsoft"
                      className="w-[16px] sm:w-[18px] md:w-[20px]"
                    />
                  }
                  backgroundColor="transparent"
                  textColor="white"
                  buttonTitle="Microsoft"
                  iconForward={true}
                  className="w-full justify-center normal-case rounded-none border border-[#555] hover:border-[#888] text-[13px] sm:text-[14px] md:text-[16px] py-[10px] sm:py-[12px] md:py-[14px] gap-[8px] sm:gap-[10px] transition-colors duration-200"
                />
              </Box>
            </Box>
          </Box>
        </div>
        <div
          className={`bg-[url('https://images.hdqwalls.com/download/mac-os-mojave-5k-np-1920x1200.jpg')] 
                      bg-cover bg-center rounded-lg
                      w-full md:w-[50%] h-[96%] my-[16px] absolute top-0 md:right-[40%] 
                      duration-1000 ease-in-out transform
                      ${isMoved ? "translate-x-[-18%]" : "translate-x-[78%]"}`}
        >
          <div className="relative w-full h-full">
            <div
              className={`absolute inset-0 px-8 py-5 flex flex-col justify-between gap-2 text-white
                        transition-all duration-700 ease-in-out
                        ${
                          isMoved
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10 pointer-events-none"
                        }`}
            >
              <div className="flex justify-between items-start w-full">
                <img src="/assets/logo.svg" alt="Logo" className="w-[60px]" />
                <CustomButton
                  handleRedirect={handleClick}
                  backgroundColor="transparent"
                  buttonTitle="Back to Login"
                  style={{
                    border: "1px solid #fff",
                    fontSize: "12px",
                    padding: "5px 15px",
                    width: "fit-content",
                  }}
                  iconForward={false}
                  icon={<ArrowForwardIcon />}
                />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold">Welcome Back</p>
                <p className="text-sm sm:text-base">
                  Welcome back! Continue your journey to find your dream job or
                  the perfect candidate for your team.
                </p>
              </div>
            </div>
            <div
              className={`absolute inset-0 px-8 py-5 flex flex-col justify-between gap-2 text-white
                      transition-all duration-700 ease-in-out
                      ${
                        !isMoved
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-10 pointer-events-none"
                      }`}
            >
              <div className="flex justify-between items-start w-full">
                <CustomButton
                  handleRedirect={handleClick}
                  backgroundColor="transparent"
                  buttonTitle="Back to Register"
                  style={{
                    border: "1px solid #fff",
                    fontSize: "12px",
                    padding: "5px 15px",
                    width: "fit-content",
                  }}
                  iconForward={true}
                  icon={<ArrowBackIcon />}
                />
                <img src="/assets/logo.svg" alt="Logo" className="w-[60px]" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold">
                  Start New Journey, With Us!
                </p>
                <p className="text-sm sm:text-base">
                  Connecting talent with opportunities! Sign up to find your
                  dream job or hire the best professionals for your company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
