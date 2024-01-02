import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  //check if the user logged in
  const user = auth.currentUser;

  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
