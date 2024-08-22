import DefaultMessages from '../components/ui/DefaultMessages/DefaultMessages.tsx' 

import image0_2138_2 from '../assets/icon1.svg';
import image0_2037_435 from '../assets/icon2.svg';
import image0_2037_471 from '../assets/icon3.svg';
import image0_2037_457 from '../assets/icon4.svg';



function MessagesPage() {
  return (
    <div className="defaultMessagesContainer">
        
      <DefaultMessages
        defaultmessageText="Tasa a dólar BCV"
        icon={image0_2138_2}
        className="component-one"
      />
      <DefaultMessages
        defaultmessageText="Tasa a BCV del Euro"
        icon={image0_2037_435}
        className="component-two"
      />
      <DefaultMessages defaultmessageText="¿Buen día!, bienvenido"
       icon={image0_2037_471}
       className="component-three"
       />
      <DefaultMessages defaultmessageText="[Fecha][Hora]" 
      icon={image0_2037_457}
      className="component-four"
      />
      
    </div>
  )
}

export default MessagesPage