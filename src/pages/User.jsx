import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const User = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const routeParams = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/funcionarios/${routeParams.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [routeParams.id]);

  return (
    <>
      <Header title="Dados do Usuário" />
      <p className="text-3xl font-bold p-5">
        Usuário{" "}
        {typeof user.full_name !== "undefined"
          ? user.full_name
          : " não encontrado!"}
      </p>
      {typeof user.full_name !== "undefined" ? (
        <div>
          <div className="p-5">
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xl font-medium leading-6 text-gray-900">
                    Nome completo
                  </dt>
                  Id do Usuário
                  <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {user.full_name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xl font-medium leading-6 text-gray-900">
                    E-mail
                  </dt>
                  <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {user.email}
                  </dd>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xl font-medium leading-6 text-gray-900">
                    Cargo
                  </dt>
                  <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {user.office}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xl font-medium leading-6 text-gray-900">
                    Identificação Única
                  </dt>
                  <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {user.id}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between pt-10 ml-3 gap-3">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-gray-300 via-gray-600 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => navigate("/users")}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <span className="p-10 text-center text-red-400 font-bold ">
          Sem dados encontrado para esta referência, por favor, verifique o
          parâmetro informado e ajuste.
        </span>
      )}

      <Footer />
    </>
  );
};

export default User;
