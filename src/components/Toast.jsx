import { Alert, Snackbar } from "@mui/material";
function Toast({ open, closeToast, message, severity }) {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={closeToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={closeToast}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default Toast;
