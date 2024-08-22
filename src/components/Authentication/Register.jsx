import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

    const {user, register} = useContext(AuthContext) 
    
    const handleSignUp = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        register(email,password)
        .then(()=>{
            toast.success('Successfully Registered')
            
        })
        .catch((error)=>{
            toast.error(error.message)
            e.target.reset()
        })
    }

  return (
    <div className="hero  min-h-full flex items-baseline justify-center mt-6">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-accent" type="submit" value="Sign Up" />
            </div>
          </form>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default Register;
