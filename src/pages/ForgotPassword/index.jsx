import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../context/authContext";

import "../../styles/App.css";

export function ForgotPassword() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(element) {
    element.preventDefault();
    setLoading(true);

    try {
      await resetPassword(email);
      alert(
        "Um e-mail para a redefinição da senha foi enviado para o endereço solicitado."
      );
      navigate("/");
    } catch (error) {
      alert("Ocorreu um erro ao tentar redefinir a sua senha. Tente novamente.")
      setEmail("");
    }
    setLoading(false);
  }

  return (
    <div className="wrapper-forgot-password">
      <img src="/staart_logo.png" className="logo" alt="Logo Staart" />
      <form onSubmit={handleSubmit} className="form-forgot-password">
        <h2>Digite o e-mail cadastrado para redefinir a sua senha!</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Button disabled={loading} title="Enviar" />
        <a onClick={() => navigate("/")}>Já tenho uma conta</a>
      </form>
    </div>
  );
}
