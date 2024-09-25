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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login_user } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login_user(email, password);
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
            onSubmit={handleLogin}
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
            <Typography variant="subtitle1">Password</Typography>
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
                Log In
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
