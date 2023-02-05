import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              "Join the fight against hunger by logging into your Warm Hugs account. Here, you'll have the power to make a difference, one meal at a time."
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered input-primary"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered input-primary"
                  id="password"
                  name="Password"
                />
                {/* <label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label> */}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered input-primary"
                  id="confirm_password"
                  name="confirm_password"
                />
              </div>

              {/* <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Donar</span>
                  <input
                    type="radio"
                    name="user_type"
                    className="radio checked:bg-blue-500"

                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Agent</span>
                  <input
                    type="radio"
                    name="user_type"
                    className="radio checked:bg-blue-500"

                  />
                </label>
              </div> */}

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login