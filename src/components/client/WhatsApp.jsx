import { FloatingWhatsApp } from 'react-floating-whatsapp';
import whatsAppImage from '../../assets/images/icon.png';

const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+5491126238672"
      accountName="Home Appliance Repair"
      allowEsc={true}
      avatar={whatsAppImage.src}
    />
  );
};

export default WhatsApp;
