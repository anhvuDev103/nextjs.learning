import RegisterForm from "@/app/(auth)/register/form";

const Register = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Đăng ký</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
