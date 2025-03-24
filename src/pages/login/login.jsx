import './login.css';
import Logo from '../../../public/bandeira.webp';

function Login(){
    return(
        <div>
            <form action="" className="form-login">
                <img className='logo-login' src={Logo} alt="logo" />
                <div>
                    <h1>Bandeira</h1>
                    <h4>Horários Escolares</h4>
                </div>
                <input type="email" name="" id="" placeholder="E-mail"/>
                <input type="password" name="" id="" placeholder="Senha"/>
                <br />
                <button type="button" className='btnLogin'>Entrar</button>
            </form>
        </div>
    );
}

export default Login;