import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-6">Something went wrong. The page you're looking for might be missing or an error occurred.</p>
        <button 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
