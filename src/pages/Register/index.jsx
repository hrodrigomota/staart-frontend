import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Register.css";

import { Button } from "../../components/Button";

import { useAuth } from "../../context/authContext";

export function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(element) {
    element.preventDefault();
    setLoading(true);

    if (password.length < 6) {
      alert("A senha deve conter no mínimo 6 caracteres.");
      setLoading(false);
      return;
    }
    try {
      await signUp(email, password);
      alert("Cadastro efetivado com sucesso!");
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert("Ocorreu um erro ao tentar cadastrar usuário.");
      setUserName("");
      setEmail("");
      setPassword("");
    }

    setLoading(false);
  }

  return (
    <div className="wrapper-register">
      <img src="/staart_logo.png" className="logo-register" alt="Logo Staart" />
      <div className="container-register">
        <div className="slogan-register">
          <img
            src="/front-page.png"
            className="capa"
            alt="Imagem de Capa do Curso"
          />
          <h2>Os melhores instrutores do mercado de tecnologia</h2>
          <h3>
            Você vai estudar, praticar, discutir e se aprofundar em uma
            plataforma que respira tecnologia.
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="form-register" action="">
          <h1>Quero ser um Staarter 🎉</h1>
          <h3>Faça o seu cadastro e dê Staart na sua evolução!</h3>
          <input
            type="text"
            value={userName}
            placeholder="Nome Completo"
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button disabled={loading} title="Cadastrar" />
          <a href="/">Já tenho uma conta</a>
        </form>
      </div>
    </div>
  );
}
