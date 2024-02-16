import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";

function DeleteUser() {
  const [user, setUser] = useState({});
  const routeParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/funcionarios/${routeParams.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteUser = () => {
    fetch(`http://localhost:5000/funcionarios/${routeParams.id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((data) => {
        console.log(data);
        navigate("/users");
      })
      .catch((err) => console.log(err));
  };

  console.log("user", user);
  return (
    <>
      <Header title="Exclusão de Usuário" />
      <div className="p-10">
        <p className="text-3xl font-bold pt-5 pb-5">
          Usuário{" "}
          {typeof user.full_name !== "undefined"
            ? user.full_name
            : " não encontrado!"}
        </p>
        <div className="mt-10 mb-10">
          <p className="text-3xl text-red-400 font-bold animate-bounce">
            Atenção!!!
          </p>
        </div>
        <p className="text-2xl">
          Você esta prestes a excluir o usuário{" "}
          <span className="font-bold">{user.full_name}</span>!
        </p>

        <p className="text-2xl">
          Se continuar, esta ação não poderá ser revertida.
        </p>
        <p className="text-2xl mt-10">
          Você tem certeza de que deseja continuar com a exclusão?
        </p>

        <div className="pt-10">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => deleteUser()}
          >
            Excluir
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-gray-300 via-gray-600 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => navigate("/users")}
          >
            Cancelar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DeleteUser;
