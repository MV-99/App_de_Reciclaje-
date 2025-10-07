import "@styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <div>
          <img src="public/logo.png" alt="logo" />
          <p>EcoPoints</p>
        </div>
        <span>Recicla, gana puntos y ayuda al ambiente</span>
      </div>
      <div className="profile">
        <a href="">
          <img src="./profile.png" alt="profile" />
        </a>
      </div>
    </nav>
  );
}
