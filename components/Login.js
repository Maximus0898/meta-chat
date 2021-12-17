import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login Screen here</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        <Image
          src="/../public/logo.png"
          width={200}
          height={200}
          className="object-cover rounded-full"
        />

        <button
          onClick={authenticate}
          className="p-3 rounded-3xl bg-lime-600 hover:bg-lime-500 text-white"
        >
          Login to the MetaCHAT
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="/../public/background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
