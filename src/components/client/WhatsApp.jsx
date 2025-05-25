import { FloatingWhatsApp } from 'react-floating-whatsapp';
import whatsAppImage from '../../assets/images/thumbnails/icon.png';

const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+14089091844"
      accountName="Home Appliance Repair"
      statusMessage="Typically replies within 5 minutes"
      allowEsc={true}
      avatar={whatsAppImage.src}
    />
  );
};

export default WhatsApp;
