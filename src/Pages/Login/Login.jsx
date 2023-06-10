import { Helmet } from "react-helmet-async";

const Login = () => {
    const handleLogin = e =>{
        event.preventDefault();
    }
  return (
    <div>
      <Helmet>
        <title>Login | ArtOne</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200" style={{backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/001/255/614/original/red-yellow-watercolor-texture-background-vector.jpg')"}}>
        <div className="hero-content flex-col lg:flex w-full">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold m-6 text-white shadow-m">Login now!</h1>
          </div>
          <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  name=""
                  id=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
