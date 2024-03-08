import "../assets/css/register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="wrapper">
        <h2 className="heading">Register</h2>
        <form onSubmit={() => {}} className="form">
          <span className="error-msg">error</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
          <span className="link">
            <a href="/login">Already signed up?Sign in here</a>
          </span>
        </form>
      </div>
    </div>
  );
}
