import { useState } from "react";

function Login() {
    const [senha, setSenha] = useState({
        senha: "",
        senhaConfirmacao: ""
    });

    const handleEvent = (e) => {
        setSenha({...senha, [e.target.name]: e.target.value});
    }

    const validaSenhas = () => {
        if(senha.senha == "" || senha.senhaConfirmacao == "") {
            alert("Campo da senha e/ou de confirmar a senha não estão preenchidos.")
        } else if (senha.senha != senha.senhaConfirmacao) {
            alert("Senha e confirmação da senha não são iguais.")
        } else { 
            alert("Senha Válida!")
        }
    }

    return (
        <div>
            <form className="login">
                <h1>Login</h1>
                <input type="password" placeholder="Senha" 
                        onChange={handleEvent} name="senha" />
                <input type="password" placeholder="Confirmar Senha" 
                        onChange={handleEvent} name="senhaConfirmacao" />

                <button onClick={validaSenhas}>Entrar</button>
            </form>
        </div>
    );
}

export default Login;