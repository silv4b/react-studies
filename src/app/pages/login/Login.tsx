import { useNavigate } from "react-router-dom";
// useHistory -> useNavigate

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2> Login Page </h2>
      <button onClick={handleClick}>Página Inicial</button>
    </div>
  );
};
