import { useState } from "react"
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [nome,setNome] = useState('');
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(nome,email,password)
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Registrar</h3>

            <label>Nome</label>
            <input type='text' onChange={(e) => setNome(e.target.value)} value={nome}/>
            <label>Email</label>
            <input type='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label>Password</label>
            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button disabled={isLoading}>Registrar-se</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export { Signup }