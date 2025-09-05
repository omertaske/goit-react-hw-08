import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-10 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700">
          Welcome to the Contacts App
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Manage your personal contacts easily, securely, and efficiently. 
          Register or login to start using your contact list.
        </p>

       
        <div className="flex justify-center gap-4 mb-6">
          <Link
            to="/register"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Login
          </Link>
        </div>

        <p className="text-gray-500 mt-4">
          Project Github:{" "}
          <a
            href="https://github.com/omertaske/goit-react-hw-08"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            omertaske/goit-react-hw-08
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
