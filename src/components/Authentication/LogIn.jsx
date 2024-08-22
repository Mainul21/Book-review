import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const {logIn, user} = useContext(AuthContext) 
    const navigate = useNavigate()

    const handleLogIn = e =>{
      e.preventDefault()
      const email = e.target.email.value 
      const password = e.target.password.value 

      logIn(email,password)
      .then(()=>{
        toast.success('Successfully Logged In')
        navigate('/')
      })
      .catch((error)=>{
        toast.error(error.message)
      })
    }
    
  return (
    <div className="hero  min-h-full flex items-baseline justify-center mt-6">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In Here</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogIn} className="card-body">
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
              <input className="btn btn-accent" type="submit" value="Log In" />
            </div>
          </form>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
