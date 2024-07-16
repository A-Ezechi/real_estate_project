const Header = () => {
  return (
    <div className="header">
      <h2 className="headerName">GoldMine Properties</h2>

      <nav className="links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </nav>

      <div className="userEntry">
        <button className="signIn">Sign In</button>
        <button className="signUp">Sign up</button>
      </div>
    </div>
  )
}

export default Header