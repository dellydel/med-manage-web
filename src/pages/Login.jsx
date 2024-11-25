import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Container,
  Card,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { forgotPassword, confirmPasswordChange } from "../services/auth";
import Toast from "../components/Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [error, setError] = useState(null);
  const [session, setSession] = useState(null);
  const [passwordUpdate, setPasswordUpdate] = useState(false);
  const [forgotPasswordState, setForgotPasswordState] = useState(false);
  const { setUser, loginUser, updatePassword } = useAuth();
  const navigate = useNavigate();

  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await loginUser(email, password);
      if (response.data.message === "Password Update Required.") {
        setPasswordUpdate(true);
        setPassword("");
        setSession(response.data.session);
      } else if (response.data.accessToken) {
        setUser({
          email: email,
          access_token: response.data.accessToken,
          id_token: response.data.idToken,
          refresh_token: response.data.refreshToken,
        });
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await updatePassword(email, password, session);
      if (response.data.accessToken) {
        setPasswordUpdate(false);
        setSession(null);
        setUser({
          email: email,
          access_token: response.data.accessToken,
          id_token: response.data.idToken,
          refresh_token: response.data.refreshToken,
        });
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await confirmPasswordChange(
        email,
        password,
        confirmCode
      );
      if (response.status === 200) {
        setToast({
          open: true,
          message: response.data,
          severity: "sucess",
        });
        setForgotPasswordState(false);
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await forgotPassword(email);
      setToast({
        open: true,
        message: response.body,
        severity: "sucess",
      });
      setForgotPasswordState(true);
      setPasswordUpdate(false);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <Container>
      <Toast
        onClose={() => setToast({ ...toast, open: false })}
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Card elevation={3} sx={{ p: 5 }}>
          <Box
            component="form"
            onSubmit={
              passwordUpdate
                ? handleUpdatePassword
                : forgotPasswordState
                  ? handleChangePassword
                  : handleLogin
            }
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {passwordUpdate && (
              <h3>You must change your password on your initial log in.</h3>
            )}
            {forgotPasswordState && (
              <h3>
                Please enter your new password and the confirmation code that
                was emailed to you.
              </h3>
            )}
            <Typography variant="subtitle1">Email</Typography>
            <TextField
              variant="outlined"
              type="email"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <Typography variant="subtitle1">
              {(passwordUpdate || forgotPasswordState) && "New "}Password
            </Typography>
            <TextField
              variant="outlined"
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            {(passwordUpdate || forgotPasswordState) && (
              <>
                <Typography variant="subtitle1">Confirm Password</Typography>
                <TextField
                  variant="outlined"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
              </>
            )}
            {forgotPasswordState && (
              <>
                <Typography variant="subtitle1">Confirmation Code</Typography>
                <TextField
                  variant="outlined"
                  type="password"
                  value={confirmCode}
                  onChange={(e) => setConfirmCode(e.target.value)}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
              </>
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:
                  passwordUpdate || forgotPasswordState
                    ? "end"
                    : "space-between",
              }}
            >
              {!forgotPasswordState && !passwordUpdate && (
                <Button
                  sx={{ mt: 2 }}
                  variant="text"
                  color="primary"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </Button>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                {!passwordUpdate && !forgotPasswordState && "Log In"}
                {(passwordUpdate || forgotPasswordState) && "Update"}
              </Button>
              {(passwordUpdate || forgotPasswordState) && (
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2, ml: 1 }}
                  onClick={() => navigate("/")}
                >
                  Reset
                </Button>
              )}
            </Box>
            <Box component="div" sx={{ color: "red", mt: 4 }}>
              {error}
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};
export default Login;
