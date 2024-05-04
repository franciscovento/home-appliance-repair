import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsApp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+5491126238672"
      accountName="Home Appliance Repair"
      allowEsc={true}
    />
  );
};

export default WhatsApp;
