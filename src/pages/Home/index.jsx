import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/App.css";

import { Button } from "../../components/Button";

import { useAuth } from "../../context/authContext";

export function Home() {
  const { signIn } = useAuth();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
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
      await signIn(email, password);
      navigate("/journeys");
    } catch (error) {
      setLoading(false);
      alert("Ocorreu um erro ao tentar efetuar o login do usuário.");
      setEmail("");
      setPassword("");
    }

    setLoading(false);
  }

  return (
    <div className="wrapper-home">
      <img src="/staart_logo.png" className="logo" alt="Logo Staart" />
      <div className="container-home">
        <div className="slogan-home">
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

        <form onSubmit={handleSubmit} className="form-home">
          <h1>Dê Staart na sua evolução!</h1>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <Button disabled={loading} title="Entrar" />
          <div className="create-account">
          <span>Não tem uma conta?</span> &nbsp;<a onClick={() => navigate('/register')}>Cadastre-se</a>
          </div>
          <a onClick={() => navigate('/forgot-password')}>🔒 Esqueci minha senha</a>
        </form>
      </div>
    </div>
  );
}
