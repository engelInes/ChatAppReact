import "../assets/css/login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <h2 className="heading">Login</h2>
        <form onSubmit={() => {}} className="form">
          <span className="error-msg">error</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <span className="link">
            <a href="/register">Don't have an account?Create an account</a>
          </span>
        </form>
      </div>
    </div>
  );
}
