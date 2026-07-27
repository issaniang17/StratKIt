import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type singnForm = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type passwordView = {
    hidePassword:string;
    viewPassword:boolean
}
const SignInForm = () => {
  const [formSignIn, setFormSignIn] = useState<singnForm>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [clearPassword, setClearPassword] = useState<passwordView>({
    hidePassword: 'password',
    viewPassword:false
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormSignIn((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePasswordView = ()=>{
    if(!clearPassword.viewPassword){
        setClearPassword({
            hidePassword: 'text',
            viewPassword:true
        })
    }else{
        setClearPassword({
            hidePassword: 'password',
            viewPassword:false
        })
    }
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formSignIn);
    if (
      !formSignIn.firstname ||
      !formSignIn.lastname ||
      !formSignIn.email ||
      !formSignIn.password ||
      !formSignIn.confirmPassword
    ) {
      toast.error("Veiller remplir tous les champs svp");
      return;
    }
    if (formSignIn.password !== formSignIn.confirmPassword) {
      toast.warning("Les mots de passe ne sont pas conforme");
      return;
    }
    localStorage.setItem(
      "Sign-In-Form",
      JSON.stringify({
        formSignIn,
      }),
    );
    toast.success(
      `Le compte ${formSignIn.firstname} ${formSignIn.lastname} est cree avec succe`,
    );
    setFormSignIn({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <form className="flex flex-col gap-5 mt-5 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-5">
        <input
          name="firstname"
          value={formSignIn.firstname}
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          className="p-2 rounded-lg bg-gray-600 focus:outline outline-purple-400 w-full md:w-1/2"
        />

        <input
          name="lastname"
          value={formSignIn.lastname}
          onChange={handleChange}
          type="text"
          placeholder="Last name"
          className="p-2 rounded-lg bg-gray-600 outline focus:outline-purple-400 w-full md:w-1/2"
        />
      </div>

      <input
        name="email"
        value={formSignIn.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        className="p-2 rounded-lg bg-gray-600  focus:outline outline-purple-400"
      />
      <div className="relative">
        <input
          type={clearPassword.hidePassword}
          name="password"
          value={formSignIn.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="p-2 rounded-lg bg-gray-600 focus:outline outline-purple-400 w-full "
        />
        {clearPassword.viewPassword ?  <Eye size={22}  className="absolute right-1 top-[25%] opacity-60" onClick={handleChangePasswordView}/> :
        <EyeOff  className="absolute right-1 top-[25%] opacity-60" onClick={handleChangePasswordView}/>}
      </div>

      <div className="relative">
        <input
          type={clearPassword.hidePassword}
          name="confirmPassword"
          value={formSignIn.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          className="p-2 rounded-lg bg-gray-600 focus:outline outline-purple-400 w-full"
        />
        {clearPassword.viewPassword ?  <Eye size={22}  className="absolute right-1 top-[25%] opacity-60" onClick={handleChangePasswordView}/> :
        <EyeOff  className="absolute right-1 top-[25%] opacity-60" onClick={handleChangePasswordView}/>}
      </div>

      <div className="flex gap-2 text-xs md:text-lg">
        <input type="checkbox" name="agree_term" id="term_condition" required />
        <p>
          I agree to the{" "}
          <span className="underline text-purple-400">Terms & Conditions</span>
        </p>
      </div>
      <button className="bg-purple-400/60 p-2 rounded-lg cursor-pointer">
        Create an account
      </button>
    </form>
  );
};

export default SignInForm;
