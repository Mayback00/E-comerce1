import "./Ulf.css"

const UserLoginForm = () => {
          return (
            <>
          <div className="contentWrapper">
            <div className="container">
              <forms>
                <h1>Iniciar seción</h1>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Contraseña" />
                
                <button>Ingresar</button>
                <div className="__container">
                  <a href="#">Olvidó la contraseña?</a>
                  <hr/>
                  <a href="#">Inscribirse</a>
                </div>
              </forms>
            </div>
          </div>;
         </> )
        }

export default UserLoginForm
