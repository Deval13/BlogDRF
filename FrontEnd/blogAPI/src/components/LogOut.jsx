import { useEffect } from "react";
import { axiosInstance } from "../axois";
import { useNavigate } from "react-router-dom";
export function Logout() {
  const history = useNavigate();

  useEffect(() => {
    const response = axiosInstance.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    console.log(response);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    history("/login");
  });
  return <div>Logout</div>;
}
