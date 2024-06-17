import MyButton from './components/ui/ButtonFolder/Button.tsx' 
import Rectangulo from './components/ui/WelcomeSection/Rectangulo.tsx'
import MyInput from './components/ui/InputFolder/Input.tsx'
import './App.css'
import image0_2014_275 from './assets/caritaFeliz.svg';

function App() {
  return (
    <div>
      <Rectangulo texto="Para poder configurar tu monedito, primero necesitas activar Bluetooth en tu dispositivo y conectarte a una red WiFi." imagen={image0_2014_275}/>
      <MyButton buttonText="Siguiente"/>
      <MyInput placeholderText={'Holis'} tituloInput={'Holis'}/>
    </div>
  )
}

export default App
