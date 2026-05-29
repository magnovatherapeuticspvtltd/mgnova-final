const WHATSAPP_PHONE = "917275732903"
const WHATSAPP_MESSAGE =
  "Hi There, I saw your products on MagnovaTherapeutics.com and would like make an enquiry"

export const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
