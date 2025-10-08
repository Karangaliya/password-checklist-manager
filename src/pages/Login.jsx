import { useState } from "react";
import axios from "axios";
import CustomButton from "../component/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { Google, Apple } from "@mui/icons-material";
// import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";
// import { signInSuccess } from "../../Redux/user/userSlice";
// import { toast } from "react-toastify";

function Login() {
  const [isMoved, setIsMoved] = useState(false);
  const [isJobSeeker, setIsJobSeeker] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [contact_no, setContactno] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleClick = () => {
    setIsMoved(!isMoved);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (isMoved) {
        //Regristration
        if (isJobSeeker) {
          //Job Seeker
          const res = await axios.post(
            `http://localhost:3000/api/v1/user/register`,
            { email, password, name, contact_no },
            { withCredentials: true }
          );
          console.log(res.data);
          setIsMoved(false);
        } else {
          //Company
          const res = await axios.post(
            `http://localhost:3000/api/v1/company/register`,
            { email, password, name, contact_no },
            { withCredentials: true }
          );
          console.log(res.data);
          setIsMoved(false);
        }
      } else {
        //Login
        const res = await axios.post(
          `http://localhost:3000/api/v1/user/login`,
          { email, password },
          { withCredentials: true }
        );
        console.log(res.data);
        if (res?.status === 200) {
          toast.success(res?.data?.message);
          dispatch(signInSuccess(res.data));
          navigate("/");
        } else {
          toast.error(res?.data?.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message);
      console.error("Error response:", error.response);
      toast.error(error.response?.data?.message);
      // setError(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-32 py-12 bg-[#8B7B9B] flex justify-center items-center">
      <div className="flex flex-col md:flex-row bg-[#292433] relative gap-10 w-full h-auto md:h-[85vh] rounded-lg overflow-hidden shadow-xl ">
        <div
          className={`w-full md:w-[50%] h-full px-8 rounded-lg transition-opacity duration-700
                    ${
                      !isMoved ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              gap: 4,
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 70px",
            }}
          >
            <Box>
              <Typography
                fontWeight={600}
                sx={{ mb: 1, color: "white", fontSize: "44px" }}
              >
                Glad to see you again!
              </Typography>
              <Typography sx={{ color: "#aaa", fontSize: "14px" }}>
                Sign in to catch up with what’s new.
              </Typography>
            </Box>
            <Box>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  mb: 2,
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "#aaa" },
                    "&.Mui-focused fieldset": { borderColor: "#888" },
                  },
                }}
              />
              <TextField
                label="Enter your password"
                type="password"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  mb: 2,
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "#aaa" },
                    "&.Mui-focused fieldset": { borderColor: "#888" },
                  },
                }}
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: "#888" }} />}
                label={
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    I agree to the{" "}
                    <Link href="#" color="secondary" underline="hover">
                      Terms & Conditions
                    </Link>
                  </Typography>
                }
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#8b5cf6",
                  color: "#fff",
                  py: 1.4,
                  fontWeight: 600,
                  borderRadius: "8px",
                  mb: 3,
                  "&:hover": { backgroundColor: "#7c3aed" },
                }}
              >
                Login
              </Button>
              <Divider
                sx={{
                  borderColor: "gray",
                  color: "gray",
                  mb: 3,
                  fontSize: "12px",
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
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <CustomButton
                  icon={
                    <img
                      src="/assets/google-icon.svg"
                      alt="Google"
                      className="w-[20px]"
                    />
                  }
                  backgroundColor="transparent"
                  textColor="white"
                  buttonTitle="Google"
                  iconForward={true}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textTransform: "none",
                    borderRadius: "none",
                    border: "1px solid #555",
                    gap: "10px",
                    "&:hover": { borderColor: "#888" },
                  }}
                />
                <CustomButton
                  icon={<Apple />}
                  backgroundColor="transparent"
                  textColor="white"
                  buttonTitle="Apple"
                  iconForward={true}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textTransform: "none",
                    borderRadius: "none",
                    border: "1px solid #555",
                    gap: "10px",
                    "&:hover": { borderColor: "#888" },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </div>
        <div
          className={`overflow-y-auto w-full md:w-[50%] h-full px-8 py-9 rounded-lg transition-opacity duration-700 custom-scrollbar
                    ${
                      isMoved ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              gap: 4,
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 70px",
            }}
          >
            <Box>
              <Typography
                fontWeight={600}
                sx={{ mb: 1, color: "white", fontSize: "44px" }}
              >
                Create an account
              </Typography>
              <Typography sx={{ color: "#aaa", fontSize: "14px" }}>
                Join us today and get started in just a few steps..
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                }}
              >
                <TextField
                  label="First name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  sx={{
                    mb: 2,
                    input: { color: "#fff" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#888" },
                      "&:hover fieldset": { borderColor: "#aaa" },
                      "&.Mui-focused fieldset": { borderColor: "#888" },
                    },
                  }}
                />
                <TextField
                  label="Last name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ style: { color: "#aaa" } }}
                  sx={{
                    mb: 2,
                    input: { color: "#fff" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#888" },
                      "&:hover fieldset": { borderColor: "#aaa" },
                      "&.Mui-focused fieldset": { borderColor: "#888" },
                    },
                  }}
                />
              </Box>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  mb: 2,
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "#aaa" },
                    "&.Mui-focused fieldset": { borderColor: "#888" },
                  },
                }}
              />
              <TextField
                label="Enter your password"
                type="password"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  mb: 2,
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "#aaa" },
                    "&.Mui-focused fieldset": { borderColor: "#888" },
                  },
                }}
              />
              <FormControlLabel
                control={<Checkbox sx={{ color: "#888" }} />}
                label={
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    I agree to the{" "}
                    <Link href="#" color="secondary" underline="hover">
                      Terms & Conditions
                    </Link>
                  </Typography>
                }
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#8b5cf6",
                  color: "#fff",
                  py: 1.4,
                  fontWeight: 600,
                  borderRadius: "8px",
                  mb: 3,
                  "&:hover": { backgroundColor: "#7c3aed" },
                }}
              >
                Create account
              </Button>
              <Divider
                sx={{
                  borderColor: "gray",
                  color: "gray",
                  mb: 3,
                  fontSize: "12px",
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
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <CustomButton
                  icon={
                    <img
                      src="/assets/google-icon.svg"
                      alt="Google"
                      className="w-[20px]"
                    />
                  }
                  backgroundColor="transparent"
                  textColor="white"
                  buttonTitle="Google"
                  iconForward={true}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textTransform: "none",
                    borderRadius: "none",
                    border: "1px solid #555",
                    gap: "10px",
                    "&:hover": { borderColor: "#888" },
                  }}
                />
                <CustomButton
                  icon={<Apple />}
                  backgroundColor="transparent"
                  textColor="white"
                  buttonTitle="Apple"
                  iconForward={true}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textTransform: "none",
                    borderRadius: "none",
                    border: "1px solid #555",
                    gap: "10px",
                    "&:hover": { borderColor: "#888" },
                  }}
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
