import { useState } from "react";
import { Link } from "react-router-dom";
import Picture from "../../assets/images/home-profile.jpg";
import { Moon, Sun } from "lucide-react";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-red-700 dark:bg-gray-950 w-screen h-screen flex flex-col justify-center">
        <div className="flex flex-col mr-auto ml-auto w-fit pb-32 pt-9 max-w-[90%] max-h-[90%] border">
          <h1 className="text-3xl font-extrabold text-center text-white mb-5 max-w-[90%] mr-auto ml-auto select-none drop-shadow-lg">
            Bem-vindo ao meu Portfólio Profissional!
          </h1>
          <img
            src={Picture}
            alt="Profile"
            className="rounded-full w-60 h-60 self-center mb-5 object-cover select-none drop-shadow-2xl"
          />
          <p className="mb-5 text-xl font-bold text-white max-w-[90%] text-center mr-auto ml-auto select-none drop-shadow-lg">
            Chamo-me Lucas Oriental dos Santos
          </p>

          <p className="text-xl font-bold text-center text-white mb-5 drop-shadow-lg">
            Escolha a melhor opção para si:
          </p>
          <div className="flex flex-col items-center">
            <Link to="/hiring">
              <button className="bg-white w-72 pt-3 pb-3 rounded-full mb-1 text-red-800 font-semibold text-md">
                Sou uma empresa
              </button>
            </Link>
            <p className="text-white text-center text-sm font-light max-w-[90%] mb-5 mr-auto ml-auto drop-shadow-lg">
              Esta opção é para empresas que buscam um profissional fixo.
            </p>
            <Link to="/freelance">
              <button className="bg-white w-72 pt-3 pb-3 mb-1 rounded-full text-red-800 font-semibold text-md">
                Sou um possível cliente
              </button>
            </Link>
            <p className="text-white text-center text-sm max-w-[90%] font-light mr-auto ml-auto drop-shadow-lg">
              Esta opção é para clientes que está em busca de um serviço
              profissional.
            </p>
          </div>
          <button
            onClick={toggleDarkMode}
            className="flex pt-3 pb-3 pr-3 pl-3 w-fit mr-auto ml-auto bg-slate-800 dark:bg-yellow-600 rounded-full mt-10 lg:mt-16"
          >
            {darkMode ? (
              <Sun className="text-white" />
            ) : (
              <Moon className="text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
