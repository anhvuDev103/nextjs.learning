import LoginForm from "@/app/(auth)/login/form";

const Login = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Đăng nhập</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
