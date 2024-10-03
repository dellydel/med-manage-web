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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [session, setSession] = useState(null);
  const [passwordUpdate, setPasswordUpdate] = useState(false);
  const { setUser, loginUser, updatePassword } = useAuth();
  const navigate = useNavigate();

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
        navigate("/home");
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
        navigate("/home");
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <Container>
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
            onSubmit={passwordUpdate ? handleUpdatePassword : handleLogin}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography variant="subtitle1">Username or Email</Typography>
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
              {passwordUpdate && "Update "}Password
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
            {passwordUpdate && (
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <input name="remember" type="checkbox" /> Remember me?
              </span>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                {!passwordUpdate && "Log In"}
                {passwordUpdate && "Update"}
              </Button>
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
