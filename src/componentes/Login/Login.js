import "./Login.css";
import movie from "../../images/movie_FILL0_wght400_GRAD0_opsz24.svg";
import arroba from "../../images/arroba.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((values) => {
    signin(values);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img
            className="login-card-image"
            src={movie}
            alt="Imagen de pelicula"
          ></img>
        </div>
        <div className="login-card-header">
          <div>Bienvenido a Catálogo</div>
        </div>
        <div className="login-card-form">
          <div className="form-item">
            <input className="login-card-input" type="text" required></input>
            <span class="form-item-icon material-symbols-outlined">person</span>
            <div className="label">Username</div>
          </div>
          <div className="form-item">
            <input className="login-card-input" type="text" required></input>
            <span class="form-item-icon material-symbols-outlined">key</span>
            <div className="label">Password</div>
          </div>
          <div className="form-item">
            <input className="login-card-input" type="text" required></input>
            <img src={arroba} class="form-item-icon arroba"></img>
            <div className="label">Nickname</div>
          </div>
          <button className="form-button" type="submit">
            Login
          </button>
        </div>
        <div className="login-card-footer">
          No tienes cuenta aún? <a href="#">Registrate aquí</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
