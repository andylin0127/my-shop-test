import { Navigate, useLocation } from "react-router-dom";
import { isAuthed } from "../hooks/useAuth";

export default function Protected({ children }) {
  const location = useLocation();
  if (!isAuthed()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}