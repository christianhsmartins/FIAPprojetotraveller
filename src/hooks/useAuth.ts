import { useContext } from "react";
import { AuthContext } from '../controllers/AuthContext';

export function useAuth() {
  const value = useContext(AuthContext);
  return value;
}