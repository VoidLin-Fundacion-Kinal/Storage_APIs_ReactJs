import logo from "../assets/img/Blue_Illustrative_College_School_Logo.jpg";

export const Logo = ({ text }) => {
  return (
    <div className="auth-form-logo-container">
      <img src={logo} alt="Escudo" width={'150px'} />
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  );
};
