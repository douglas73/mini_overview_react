import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
const UpdateUser = () => {
  const [user, setUser] = useState({});
  const [office, setOffice] = useState([]);

  const navigate = useNavigate();
  const routeParams = useParams();

  /**
   * Pegar dados do Select
   */
  useEffect(() => {
    fetch("http://localhost:5000/cargos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setOffice(data));
    /**
     * Pegar dados do funcionário para preencher o formulário
     */
    fetch(`http://localhost:5000/funcionarios/${routeParams.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setUser(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * updateUserReg
   *
   * Função responsável por ATUALIZAR dados do formulário
   * @param {*} myData
   */
  function updateUserReg(myData) {
    fetch(`http://localhost:5000/funcionarios/${routeParams.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(myData),
    })
      .then((data) => {
        console.log(data);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  console.log('cargos', office, user)

  const submit = (e) => {
    e.preventDefault();
    updateUserReg(user);
  };
  return (
    <>
      <Header title="Home" />

      <div className="w-ful p-10">
        <p className="text-4xl font-bold">
          Atualização dos dados do Funcionário
        </p>
      </div>
      <div className="flex items-center justify-between p-10 bg-gray-50 rounded-2xl">
        <div className="w-full">
          <form className="w-full max-w-lg" onSubmit={submit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  Nome Completo
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="full-name"
                  name="full_name"
                  type="text"
                  placeholder="Digite um nome completo"
                  onChange={handleChange}
                  value={
                    typeof user.full_name !== "undefined" ? user.full_name : ""
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  e-mailCategory
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Digite um e-mail válido (ex: email@email.com)"
                  onChange={handleChange}
                  value={typeof user.email !== "undefined" ? user.email : ""}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-office"
                >
                  Cargo
                </label>
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="office"
                  id="office"
                  onChange={handleChange}
                  value={typeof user.office !== "undefined" ? user.office : ""}
                >
                  <option>Escolha um cargo</option>
                  {office.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between pt-10 ml-3 gap-3">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Gravar
                </button>
                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => navigate(-1)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateUser;
