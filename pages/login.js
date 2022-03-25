import {getProviders, signIn} from "next-auth/react";

const Login = ({providers}) => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img src="https://links.papareact.com/9xl" alt="logo" className="w-52 mb-5"/>

      {Object.values(providers).map((provider, index) => (
        <div key={index}>
          <button
            className="bg-[#18d860] text-white p-5 rounded-3xl"
            onClick={() => signIn(provider.id, {callbackUrl: '/'})}
          >Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  };
}
