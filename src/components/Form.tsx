import { useState } from "react"

export const Form = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        // Call validation function
        {alert(`usuario: ${user} e senha: ${password}`)}
    }

    return (
        <div className="flex flex-col w-60 mx-auto gap-2 mt-8">
            <p>Usuário:</p> 
            <input
                className="text-black" 
                type="text" 
                placeholder="Insira seu usuário"
                value= {user}
                onChange= {e => setUser(e.target.value)}
            />   

            <p>Senha:</p>
            <input 
                className="text-black" 
                type="password" 
                placeholder="Insira sua senha"
                value= {password}
                onChange= {e => setPassword(e.target.value)}
            />

            <button className="p-3 m-6 bg-green-700 rounded-md" onClick={handleSubmit}>Entrar</button>
        </div>
    )
}