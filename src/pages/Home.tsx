import { Navigate } from "react-router-dom";
import ListContainer from "../containers/ListContainer";
import useToken from "../hooks/useToken";

function Home() {
  const token = useToken();

  if (token === null) {
    return <Navigate to="/signin" />;
  }

  return <ListContainer />;
}

export default Home;
