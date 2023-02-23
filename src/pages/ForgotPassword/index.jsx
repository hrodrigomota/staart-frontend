import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../context/authContext";

import "../../styles/ForgotPassword.css";

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
    }
    setLoading(false);
  }

  return (
    <div className="wrapper-forgot-password">
      <img src="/staart_logo.png" className="logo-home" alt="Logo Staart" />
      <form onSubmit={handleSubmit} className="form-forgot-password">
        <h2>Digite o e-mail cadastrado para receber uma nova senha!</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button disabled={loading} title="Enviar" />
        <a href="/">Já tenho uma conta</a>
      </form>
    </div>
  );
}
