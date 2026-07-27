import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type LoginForm = {
  email: string;
  password: string;
};
type passwordView = {
  hidePassword: string;
  viewPassword: boolean;
};
const LogInForm = () => {
  const [formLogIn, setFormLogIn] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [clearPassword, setClearPassword] = useState<passwordView>({
    hidePassword: "password",
    viewPassword: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormLogIn((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePasswordView = () => {
    if (!clearPassword.viewPassword) {
      setClearPassword({
        hidePassword: "text",
        viewPassword: true,
      });
    } else {
      setClearPassword({
        hidePassword: "password",
        viewPassword: false,
      });
    }
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formLogIn);
    if (!formLogIn.email || !formLogIn.password) {
      toast.error("Veiller remplir tous les champs svp");
      return;
    }
    const storedValue = localStorage.getItem("Sign-In-Form");
    console.log(storedValue);
    if (!storedValue) {
      toast.error("Aucune donnee enregistree");
      return;
    }
    const savedForm = JSON.parse(storedValue);
    if (
      savedForm.formSignIn.password !== formLogIn.password ||
      savedForm.formSignIn.email !== formLogIn.email
    ) {
      toast.warning("email ou mot de pass incorrect");
      return;
    }

    toast.success(`Bienvenu ${savedForm.formSignIn.firstname} `);
    setFormLogIn({
      email: "",
      password: "",
    });
  };
  return (
    <form className="flex flex-col gap-5 mt-5 w-full" onSubmit={handleSubmit}>
      <input
        name="email"
        value={formLogIn.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        className="p-2 rounded-lg bg-gray-600  focus:outline outline-purple-400"
      />
      <div className="relative">
        <input
          type={clearPassword.hidePassword}
          name="password"
          value={formLogIn.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="p-2 rounded-lg bg-gray-600 focus:outline outline-purple-400 w-full "
        />
        {clearPassword.viewPassword ? (
          <Eye
            size={22}
            className="absolute right-1 top-[25%] opacity-60"
            onClick={handleChangePasswordView}
          />
        ) : (
          <EyeOff
            className="absolute right-1 top-[25%] opacity-60"
            onClick={handleChangePasswordView}
          />
        )}
      </div>

      <button className="bg-purple-400/60 p-2 rounded-lg cursor-pointer">
        Login
      </button>
    </form>
  );
};

export default LogInForm;
