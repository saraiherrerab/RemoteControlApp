import MyButton from '../components/ui/ButtonFolder/Button.tsx' 
import Rectangulo from '../components/ui/WelcomeSection/Rectangulo.tsx'
import MyInput from '../components/ui/InputFolder/Input.tsx'
import WifiDecoration from '../components/ui/WifiDecoration/WifiDecoration.tsx'
import BluetoothSection from '../components/ui/BluetoothSection/BluetoothSection.tsx'
import image0_2014_275 from '../assets/caritaFeliz.svg';
import image0_2015_244 from '../assets/wifiIcon.svg';


function HomePage() {
  return (
    <div >
      <Rectangulo texto="Para poder configurar tu monedito, primero necesitas activar Bluetooth en tu dispositivo y conectarte a una red WiFi." imagen={image0_2014_275}/>
      <div className="inputs-section-big">
        <div className="inputs-section-little">
          <MyInput placeholderText={'Hola'} tituloInput={'Holis'}/>
          <MyInput placeholderText={'Hola'} tituloInput={'Holis'}/>
        </div>
        <div className="inputs-section-wifi">
        <WifiDecoration texto="Wifi" imagen={image0_2015_244}/>
        </div>
      </div>
      <BluetoothSection bluetoothText="Bluetooth"/>
      <MyButton buttonText="Siguiente"/>
    </div>
  )
}

export default HomePage