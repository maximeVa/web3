import logoEcole from "C:/Users/20191877/Desktop/ksksksk/web3/exercises/1.1-1.2/src/img/LOGO HE VINCI.png"
const Header = (props) => {

    return (
      <div>
        <img src={logoEcole} alt="logoEcole"/>
        <h1>{props.title}</h1>
      </div>
    )
  }
  
  export default Header