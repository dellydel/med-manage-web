// TODO: add back after cognito update import { useAuth } from "../hooks/useAuth";
import Admin from "./Admin";
import InService from "./InService";
const Home = () => {
  // TODO: add back after cognito update const { user } = useAuth();
  const user = { userType: "admin" };
  if (user.userType === "admin") {
    return <Admin />;
  } else if (user.userType === "Care Giver") {
    return <InService />;
  } else if (user.userType === "Clinician") {
    return <Admin />;
  } else {
    return <div>Loading...</div>;
  }
};

export default Home;
