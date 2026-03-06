export interface Translations {
  // Header & General
  appName: string;
  offline: string;
  
  // Personal Information Section
  personalInformation: string;
  fullName: string;
  fullNamePlaceholder: string;
  bloodGroup: string;
  selectBloodGroup: string;
  area: string;
  areaPlaceholder: string;
  medicalNeeds: string;
  medicalNeedsPlaceholder: string;
  
  // Emergency Contacts Section
  emergencyContacts: string;
  primaryContact: string;
  secondaryContact: string;
  contactNamePlaceholder: string;
  primaryContactNamePlaceholder: string;
  secondaryContactNamePlaceholder: string;
  relationPlaceholder: string;
  phoneNumberPlaceholder: string;
  
  // Emergency Services Section
  emergencyServices: string;
  police: string;
  ambulance: string;
  
  // Buttons
  downloadEmergencyQR: string;
  clear: string;
  downloadAsJPEG: string;
  resetToForm: string;
  
  // QR Preview Section
  yourEmergencyQR: string;
  downloadInstructions: string;
  encodedInformation: string;
  editable: string;
  qrPreviewTitle: string;
  qrPreviewText: string;
  typeEmergencyInfo: string;
  
  // Footer
  howItWorks: string;
  howItWorksDescription: string;
  copyright: string;
  securePrivate: string;
  
  // Confirmation
  confirmClear: string;
  
  // QR Code Data Labels
  emergencyInfoHeader: string;
  nameLabel: string;
  bloodLabel: string;
  medicalLabel: string;
  areaLabel: string;
  contact1Label: string;
  contact2Label: string;
  policeLabel: string;
  ambulanceLabel: string;
  notSpecified: string;
}

export const translations: Record<string, Translations> = {
  en: {
    appName: 'LifeKey',
    offline: '100% Offline',
    
    personalInformation: 'Personal Information',
    fullName: 'Full Name',
    fullNamePlaceholder: 'e.g. John Doe',
    bloodGroup: 'Blood Group',
    selectBloodGroup: 'Select',
    area: 'Area (City/Locality)',
    areaPlaceholder: 'e.g. Karjat, Maharashtra',
    medicalNeeds: 'Medical Needs / Disability',
    medicalNeedsPlaceholder: 'e.g. Asthma, Diabetic, Epilepsy, Wheelchair user',
    
    emergencyContacts: 'Emergency Contacts',
    primaryContact: 'Primary Contact',
    secondaryContact: 'Secondary Contact (Optional)',
    contactNamePlaceholder: 'Name of the contact',
    primaryContactNamePlaceholder: 'Name of the contact to call in emergency',
    secondaryContactNamePlaceholder: 'Name oft he person to contact in case primary is unreachable',
    relationPlaceholder: 'Relation (e.g. Mother)',
    phoneNumberPlaceholder: 'Phone Number',
    
    emergencyServices: 'Emergency Services',
    police: 'Police',
    ambulance: 'Ambulance',
    
    downloadEmergencyQR: 'Download Emergency QR',
    clear: 'Clear',
    downloadAsJPEG: 'Download as JPEG',
    resetToForm: 'Reset to Form',
    
    yourEmergencyQR: 'Your Emergency QR',
    downloadInstructions: 'Download and keep this in your wallet or as your lock screen wallpaper.',
    encodedInformation: 'Encoded Information',
    editable: 'Editable',
    qrPreviewTitle: 'QR Preview',
    qrPreviewText: 'Fill the form and click generate to see your emergency QR code here.',
    typeEmergencyInfo: 'Type emergency information here...',
    
    howItWorks: 'How it works',
    howItWorksDescription: 'This system generates a QR code that stores your data directly. When scanned, it displays your info instantly even without an internet connection. No data is uploaded to any server.',
    copyright: '© {year} LifeKey Emergency System.',
    securePrivate: 'Secure & Private.',
    
    confirmClear: 'Are you sure you want to clear all data?',
    
    emergencyInfoHeader: '🚨 EMERGENCY INFO 🚨',
    nameLabel: 'Name',
    bloodLabel: 'Blood',
    medicalLabel: 'Medical',
    areaLabel: 'Area',
    contact1Label: 'Contact 1',
    contact2Label: 'Contact 2',
    policeLabel: 'Police',
    ambulanceLabel: 'Ambulance',
    notSpecified: 'Not Specified',
  },
  
  hi: {
    appName: 'लाइफकी',
    offline: '100% ऑफलाइन',
    
    personalInformation: 'व्यक्तिगत जानकारी',
    fullName: 'पूरा नाम',
    fullNamePlaceholder: 'उदा. जॉन डो',
    bloodGroup: 'रक्त समूह',
    selectBloodGroup: 'चुनें',
    area: 'क्षेत्र (शहर/स्थानीयता)',
    areaPlaceholder: 'उदा. करजत, महाराष्ट्र',
    medicalNeeds: 'चिकित्सा आवश्यकताएं / विकलांगता',
    medicalNeedsPlaceholder: 'उदा. दमा, मधुमेह, एपिलेप्सी, व्हीलचेयर उपयोगकर्ता',
    
    emergencyContacts: 'आपातकालीन संपर्क',
    primaryContact: 'प्राथमिक संपर्क',
    secondaryContact: 'माध्यमिक संपर्क (वैकल्पिक)',
    contactNamePlaceholder: 'संपर्क का नाम',
    primaryContactNamePlaceholder: 'आपातकाल में कॉल करने के लिए संपर्क का नाम',
    secondaryContactNamePlaceholder: 'यदि प्राथमिक उपलब्ध न हो तो संपर्क करने के लिए व्यक्ति का नाम',
    relationPlaceholder: 'संबंध (उदा. माता)',
    phoneNumberPlaceholder: 'फोन नंबर',
    
    emergencyServices: 'आपातकालीन सेवाएं',
    police: 'पुलिस',
    ambulance: 'एम्बुलेंस',
    
    downloadEmergencyQR: 'आपातकालीन QR डाउनलोड करें',
    clear: 'साफ करें',
    downloadAsJPEG: 'JPEG के रूप में डाउनलोड करें',
    resetToForm: 'फॉर्म पर रीसेट करें',
    
    yourEmergencyQR: 'आपका आपातकालीन QR',
    downloadInstructions: 'इसे डाउनलोड करें और अपने वॉलेट में या अपनी लॉक स्क्रीन वॉलपेपर के रूप में रखें।',
    encodedInformation: 'एनकोडित जानकारी',
    editable: 'संपादन योग्य',
    qrPreviewTitle: 'QR पूर्वावलोकन',
    qrPreviewText: 'फॉर्म भरें और यहां अपना आपातकालीन QR कोड देखने के लिए जेनरेट करें।',
    typeEmergencyInfo: 'यहां आपातकालीन जानकारी टाइप करें...',
    
    howItWorks: 'यह कैसे काम करता है',
    howItWorksDescription: 'यह सिस्टम एक QR कोड उत्पन्न करता है जो आपके डेटा को सीधे संग्रहीत करता है। स्कैन करने पर, यह इंटरनेट कनेक्शन के बिना भी तुरंत आपकी जानकारी प्रदर्शित करता है। कोई भी डेटा किसी सर्वर पर अपलोड नहीं किया जाता है।',
    copyright: '© {year} लाइफकी आपातकालीन सिस्टम।',
    securePrivate: 'सुरक्षित और निजी।',
    
    confirmClear: 'क्या आप सभी डेटा को साफ करना चाहते हैं?',
    
    emergencyInfoHeader: '🚨 आपातकालीन जानकारी 🚨',
    nameLabel: 'नाम',
    bloodLabel: 'रक्त',
    medicalLabel: 'चिकित्सा',
    areaLabel: 'क्षेत्र',
    contact1Label: 'संपर्क 1',
    contact2Label: 'संपर्क 2',
    policeLabel: 'पुलिस',
    ambulanceLabel: 'एम्बुलेंस',
    notSpecified: 'निर्दिष्ट नहीं',
  },

  ta: {
    appName: 'லைஃப்கீ',
    offline: '100% ஆஃப்லைன்',
    
    personalInformation: 'தனிப்பட்ட தகவல்',
    fullName: 'முழு பெயர்',
    fullNamePlaceholder: 'எ.கா. ஜான் டோ',
    bloodGroup: 'இரத்த வகை',
    selectBloodGroup: 'தேர்ந்தெடுக்க',
    area: 'பகுதி (நகரம்/பகுதி)',
    areaPlaceholder: 'எ.கா. கர்ஜத், மகாராஷ்டிரா',
    medicalNeeds: 'மருத்துவ தேவைகள் / முடக்கம்',
    medicalNeedsPlaceholder: 'எ.கா. ஆஸ்துமா, நீரிழிவு, வலிப்பு, சக்கர நாற்காலி பயனர்',
    
    emergencyContacts: 'அவசர தொடர்புகள்',
    primaryContact: 'முதன்மை தொடர்பு',
    secondaryContact: 'இரண்டாம் நிலை தொடர்பு (விரயமாகிய)',
    contactNamePlaceholder: 'தொடர்பு பெயர்',
    primaryContactNamePlaceholder: 'அவசரகாலத்தில் அழைக்கும் தொடர்பு பெயர்',
    secondaryContactNamePlaceholder: 'முதன்மை பொறுப்பை இழந்தால் தொடர்பு கொள்ள வ்யक்தி பெயர்',
    relationPlaceholder: 'உறவு (எ.கா. அம்மா)',
    phoneNumberPlaceholder: 'தொலைபேசி எண்',
    
    emergencyServices: 'அவசர சேவைகள்',
    police: 'போலீஸ்',
    ambulance: 'অ্যাম্বুலেন்স',
    
    downloadEmergencyQR: 'அவசர QR ஐ ডাউनलோড করুন',
    clear: 'পরিষ্কার করুন',
    downloadAsJPEG: 'JPEG হিসাবে ডাউনলোড করুন',
    resetToForm: 'ফর্মে রিসেট করুন',
    
    yourEmergencyQR: 'আপনার অ্যাভরত্ব QR',
    downloadInstructions: 'এটি ডাউনলোড করুন এবং আপনার ওয়ালেটে বা আপনার লক স্ক্রিন ওয়ালপেপার হিসাবে রাখুন।',
    encodedInformation: 'এনকোড করা তথ্য',
    editable: 'সম্পাদনযোগ্য',
    qrPreviewTitle: 'QR পূর্বরূপ',
    qrPreviewText: 'ফর্মটি পূরণ করুন এবং এখানে আপনার অ্যাভরত্ব QR কোডটি দেখতে তৈরি করুন।',
    typeEmergencyInfo: 'এখানে অ্যাভরত্ব তথ্য টাইপ করুন...',
    
    howItWorks: 'এটি কীভাবে কাজ করে',
    howItWorksDescription: 'এই সিস্টেমটি একটি QR কোড তৈরি করে যা আপনার ডেটা সরাসরি সংরক্ষণ করে। স্ক্যান করলে, এটি ইন্টারনেট সংযোগ ছাড়াই তাৎক্ষণিকভাবে আপনার তথ্য প্রদর্শন করে। কোনও ডেটা কোনও সার্ভারে আপলোড করা হয় না।',
    copyright: '© {year} লাইফকী অ্যাভরত্ব সিস্টেম।',
    securePrivate: 'নিরাপদ এবং ব্যক্তিগত।',
    
    confirmClear: 'আপনি কি সমস্ত ডেটা সাফ করতে নিশ্চিত?',
    
    emergencyInfoHeader: '🚨 অ্যাভরত্ব তথ্য 🚨',
    nameLabel: 'নাম',
    bloodLabel: 'রক্ত',
    medicalLabel: 'চিকিৎসা',
    areaLabel: 'এলাকা',
    contact1Label: 'যোগাযোগ 1',
    contact2Label: 'যোগাযোগ 2',
    policeLabel: 'পুলিশ',
    ambulanceLabel: 'অ্যাম্বুলেন্স',
    notSpecified: 'নির্দিষ্ট নয়',
  },

  te: {
    appName: 'లైఫ్‌కీ',
    offline: '100% ఆఫ్‌లైన్',
    
    personalInformation: 'వ్యక్తిగత సమాచారం',
    fullName: 'పూర్తి పేరు',
    fullNamePlaceholder: 'ఉ.దా. జాన్ డో',
    bloodGroup: 'రక్త సమూహం',
    selectBloodGroup: 'ఎంచుకోండి',
    area: 'ప్రాంతం (నగరం/ప్రాంతం)',
    areaPlaceholder: 'ఉ.దా. కర్జత్, మహారాష్ట్ర',
    medicalNeeds: 'వైద్య అవసరాలు / వికలాంగత',
    medicalNeedsPlaceholder: 'ఉ.దా. ఆస్థమా, డయాబెటిస్, ఎపిలెప్సీ, ఆటోమొబైల్ వినియోగదారు',
    
    emergencyContacts: 'জরూরી సంपर్కాలు',
    primaryContact: 'ప్రాథమిక సంपર్క',
    secondaryContact: 'ద్వితీయ సంपर్క (ఐచ్ఛికం)',
    contactNamePlaceholder: 'సంપર్కం పేరు',
    primaryContactNamePlaceholder: 'అత్యవసర సమయంలో కాల్ చేయడానికి సంपર్క పేరు',
    secondaryContactNamePlaceholder: 'ప్రాథమిక సంபंధం లేకపోతే సంपर్క చేయడానికి వ్యక్తి పేరు',
    relationPlaceholder: 'సంబంధం (ఉ.దా. తల్లి)',
    phoneNumberPlaceholder: 'ఫోన్ నంబర్',
    
    emergencyServices: 'জрূरি خدمات',
    police: 'పోలీసు',
    ambulance: 'యాంబులెన్స్',
    
    downloadEmergencyQR: 'అత్యవసర QR ను డౌన్‌లోడ్ చేయండి',
    clear: 'క్లియర్ చేయండి',
    downloadAsJPEG: 'JPEGగా డౌన్‌లోడ్ చేయండి',
    resetToForm: 'ఫారమ్‌కు రీసెట్ చేయండి',
    
    yourEmergencyQR: 'మీ అత్యవసర QR',
    downloadInstructions: 'దీనిని డౌన్‌లోడ్ చేసి మీ విలెట్‌లో లేదా మీ లాక్ స్క్రీన్ వాల్‌పేపర్‌గా ఉంచండి.',
    encodedInformation: 'ఎన్‌కోడ్ చేసిన సమాచారం',
    editable: 'సవరించదగినది',
    qrPreviewTitle: 'QR ప్రివ్యూ',
    qrPreviewText: 'ఫారమ్‌ను పూరించి ఇక్కడ మీ అత్యవసర QR కోడ్‌ను చూడటానికి జనరేట్ చేయండి.',
    typeEmergencyInfo: 'ఇక్కడ అత్యవసర సమాచారం టైప్ చేయండి...',
    
    howItWorks: 'ఇది ఎలా పనిచేస్తుంది',
    howItWorksDescription: 'ఈ సిస్టమ్ మీ డేటాను నేరుగా నిల్వవుంచే QR కోడ్‌ను సృష్టిస్తుంది. స్కాన్ చేసినప్పుడు, ఇది ఇంటర్నెట్ కనెక్షన్ లేకుండా తక్షణమే మీ సమాచారాన్ని ప్రదర్శిస్తుంది. ఏ డేటా నూ ఏ సర్వర్‌కు అప్‌లోడ్ చేయబడదు.',
    copyright: '© {year} లైఫ్‌కీ అత్యవసర సిస్టమ్.',
    securePrivate: 'నిరాপదమైన మరియు ప్రైవేట్.',
    
    confirmClear: 'మీరు అన్ని డేటాను క్లియర్ చేయాలని నిశ్చయించారా?',
    
    emergencyInfoHeader: '🚨 అత్యవసర సమాచారం 🚨',
    nameLabel: 'పేరు',
    bloodLabel: 'రక్తం',
    medicalLabel: 'వైద్య',
    areaLabel: 'ప్రాంతం',
    contact1Label: 'సంపర్క 1',
    contact2Label: 'సంपর్క 2',
    policeLabel: 'పోలీసు',
    ambulanceLabel: 'యాంబులెన్స్',
    notSpecified: 'నిర్దిష్టం కాలేదు',
  },

  kn: {
    appName: 'ಲೈಫಕೀ',
    offline: '100% ಆಫ್‌ಲೈನ್',
    
    personalInformation: 'ವ್ಯಕ್ತಿಗತ ಮಾಹಿತಿ',
    fullName: 'ಪೂರ್ಣ ಹೆಸರು',
    fullNamePlaceholder: 'ಉದಾ. ಜಾನ್ ಡೋ',
    bloodGroup: 'ರಕ್ತ ಗುಂಪು',
    selectBloodGroup: 'ಆಯ್ಕೆ ಮಾಡಿ',
    area: 'ಪ್ರದೇಶ (ಪಟ್ಟಣ/ಸ್ಥಳೀಯತೆ)',
    areaPlaceholder: 'ಉದಾ. ಕರ್ಜತ್, ಮಹಾರಾಷ್ಟ್ರ',
    medicalNeeds: 'ವೈದ್ಯಕೀಯ ಅವಶ್ಯಕತೆಗಳು / ವಿಕಲಾಂಗತೆ',
    medicalNeedsPlaceholder: 'ಉದಾ. ಅಸ್ತಮಾ, ಮಧುಮೇಹ, ಮೃಗಿ, ಚಕ್ರ ಕುರ್ಚಿ ಬಳಕೆದಾರ',
    
    emergencyContacts: 'ತುರ್ತು ಸಂಪರ್ಕಗಳು',
    primaryContact: 'ಪ್ರಾಥಮಿಕ ಸಂಪರ್ಕ',
    secondaryContact: 'ದ್ವಿತೀಯ ಸಂಪರ್ಕ (ಐಚ್ಛಿಕ)',
    contactNamePlaceholder: 'ಸಂಪರ್ಕ ಹೆಸರು',
    primaryContactNamePlaceholder: 'ತುರ್ತುಸ್ಥಿತಿಯಲ್ಲಿ ಕರೆ ಮಾಡಬೇಕಾದ ಸಂಪರ್ಕ ಹೆಸರು',
    secondaryContactNamePlaceholder: 'ಪ್ರಾಥಮಿಕ ಲಭ್ಯವಿಲ್ಲದೆ ಸಂಪರ್ಕ ಮಾಡಬೇಕಾದ ವ್ಯಕ್ತಿ ಹೆಸರು',
    relationPlaceholder: 'ಸಂಬಂಧ (ಉದಾ. ತಾಯಿ)',
    phoneNumberPlaceholder: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    
    emergencyServices: 'ತುರ್ತು ಸೇವೆಗಳು',
    police: 'ಪೊಲೀಸ್',
    ambulance: 'ಆಂಬುಲೆನ್ಸ್',
    
    downloadEmergencyQR: 'ತುರ್ತು QR ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    clear: 'ಸ್ಪಷ್ಟ ಮಾಡಿ',
    downloadAsJPEG: 'JPEG ಆಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    resetToForm: 'ರೂಪಕ್ಕೆ ರೀಸೆಟ್ ಮಾಡಿ',
    
    yourEmergencyQR: 'ನಿಮ್ಮ ತುರ್ತು QR',
    downloadInstructions: 'ಇದನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಮೀಸೆಲೆಯಲ್ಲಿ ಅಥವಾ ನಿಮ್ಮ ಲಾಕ್ ಸ್ಕ್ರೀನ್ ವಾಲ್‌ಪೇಪರ್ ಆಗಿ ಸಂರಕ್ಷಿಸಿ.',
    encodedInformation: 'ಎನ್‌ಕೋಡ್ ಮಾಡಿದ ಮಾಹಿತಿ',
    editable: 'ಸಂಪಾದನೀಯ',
    qrPreviewTitle: 'QR ಪೂರ್ವವೀಕ್ಷಣೆ',
    qrPreviewText: 'ರೂಪವನ್ನು ತುಂಬಿ ಮತ್ತು ನಿಮ್ಮ ತುರ್ತು QR ಕೋಡ್ ಅನ್ನು ಇಲ್ಲಿ ನೋಡಲು ರಚಿಸಿ.',
    typeEmergencyInfo: 'ಇಲ್ಲಿ ತುರ್ತು ಮಾಹಿತಿ ಟೈಪ್ ಮಾಡಿ...',
    
    howItWorks: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    howItWorksDescription: 'ಈ ಸಿಸ್ಟಮ್ ನಿಮ್ಮ ಡೇಟಾವನ್ನು ನೇರವಾಗಿ ಸಂಗ್ರಹಿಸುವ QR ಕೋಡ್ ರಚಿಸುತ್ತದೆ. ಸ್ಕ್ಯಾನ್ ಮಾಡಿದಾಗ, ಇದು ಇಂಟರನೆಟ್ ಸಂಪರ್ಕ ಇಲ್ಲದೆ ಕೂಡ ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ತಕ್ಷಣವೇ ಪ್ರದರ್ಶಿಸುತ್ತದೆ. ಯಾವುದೇ ಡೇಟಾವನ್ನು ಯಾವುದೇ ಸರ್ವರ್‌ಗೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗುವುದಿಲ್ಲ.',
    copyright: '© {year} ಲೈಫಕೀ ತುರ್ತು ಸಿಸ್ಟಮ್.',
    securePrivate: 'ಸುರಕ್ಷಿತ ಮತ್ತು ಖಾಸಗಿ.',
    
    confirmClear: 'ನೀವು ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಸ್ಪಷ್ಟ ಮಾಡಬೇಕು ಎಂದು ಖಚಿತವೇ?',
    
    emergencyInfoHeader: '🚨 ತುರ್ತು ಮಾಹಿತಿ 🚨',
    nameLabel: 'ಹೆಸರು',
    bloodLabel: 'ರಕ್ತ',
    medicalLabel: 'ವೈದ್ಯಕೀಯ',
    areaLabel: 'ಪ್ರದೇಶ',
    contact1Label: 'ಸಂಪರ್ಕ 1',
    contact2Label: 'ಸಂಪರ್ಕ 2',
    policeLabel: 'ಪೊಲೀಸ್',
    ambulanceLabel: 'ಆಂಬುಲೆನ್ಸ್',
    notSpecified: 'ನಿರ್ದಿಷ್ಟವಾಗಿಲ್ಲ',
  },

  ml: {
    appName: 'ലൈഫ്കീ',
    offline: '100% ഓഫ്‌ലൈൻ',
    
    personalInformation: 'വ്യക്തിഗത വിവരം',
    fullName: 'പൂർണ്ണ പേര്',
    fullNamePlaceholder: 'ഉദാ. ജോൺ ഡോ',
    bloodGroup: 'രക്ത ഗ്രൂപ്പ്',
    selectBloodGroup: 'തിരഞ്ഞെടുക്കുക',
    area: 'പ്രദേശം (നഗരം/പ്രദേശം)',
    areaPlaceholder: 'ഉദാ. കര്‍ജത്, മഹാരാഷ്ട്ര',
    medicalNeeds: 'മെഡിക്കൽ ആവശ്യങ്ങൾ / വികലാംഗത',
    medicalNeedsPlaceholder: 'ഉദാ. അസ്ത്മ, പ്രമേഹം, മാരക്രമണം, വീൽ ചെയർ ഉപയോഗിക്കുന്നയാൾ',
    
    emergencyContacts: 'എമർജൻസി കോണ്ടാക്റ്റുകൾ',
    primaryContact: 'പ്രാഥമിക കോണ്ടാക്റ്റ്',
    secondaryContact: 'ദ്വിതീയ കോണ്ടാക്റ്റ് (ഐച്ഛികം)',
    contactNamePlaceholder: 'കോണ്ടാക്റ്റ് പേര്',
    primaryContactNamePlaceholder: 'എമർജൻസിയിൽ വിളിക്കാൻ കോണ്ടാക്റ്റ് പേര്',
    secondaryContactNamePlaceholder: 'പ്രാഥമിക ലഭ്യമല്ലെങ്കിൽ കോണ്ടാക്റ്റ് ചെയ്യാൻ വ്യക്തി പേര്',
    relationPlaceholder: 'ബന്ധം (ഉദാ. അമ്മ)',
    phoneNumberPlaceholder: 'ഫോൺ നമ്പർ',
    
    emergencyServices: 'എമർജൻസി സേവനങ്ങൾ',
    police: 'പോലീസ്',
    ambulance: 'অ্যাম্বুল೻സ്',
    
    downloadEmergencyQR: 'എമർജൻസി QR ഡൗൺലോഡ് ചെയ്യുക',
    clear: 'മായ്‌ക്കുക',
    downloadAsJPEG: 'JPEG ആയി ഡൗൺലോഡ് ചെയ്യുക',
    resetToForm: 'ഫോമിലേക്ക് പുനർനിർവചിക്കുക',
    
    yourEmergencyQR: 'നിങ്ങളുടെ എമർജൻസി QR',
    downloadInstructions: 'ഇത് ഡൗൺലോഡ് ചെയ്ത് നിങ്ങളുടെ വാലറ്റിൽ അല്ലെങ്കിൽ നിങ്ങളുടെ ലോക്ക് സ്ക്രീൻ വാൾപേപ്പരായി സൂക്ഷിക്കുക.',
    encodedInformation: 'എൻകോഡ് ചെയ്ത വിവരം',
    editable: 'എഡിറ്റ് ചെയ്യാവുന്നത്',
    qrPreviewTitle: 'QR പ്രിവ്യു',
    qrPreviewText: 'ഫോം പൂരിപ്പിക്കുകയും നിങ്ങളുടെ എമർജൻസി QR കോഡ് ഇവിടെ കാണാൻ ജനറേറ്റ് ചെയ്യുക.',
    typeEmergencyInfo: 'ഇവിടെ എമർജൻസി വിവരം ടൈപ്പ് ചെയ്യുക...',
    
    howItWorks: 'ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു',
    howItWorksDescription: 'ഈ സിസ്റ്റം നിങ്ങളുടെ ഡാറ്റ നേരിട്ട് സംരക്ഷിക്കുന്ന QR കോഡ് സൃഷ്ടിക്കുന്നു. സ്കാൻ ചെയ്യുമ്പോൾ, ഇന്റർനെറ്റ് കണക്ഷൻ ഇല്ലാതെയും നിങ്ങളുടെ വിവരം തൽക്ഷണം പ്രദർശിപ്പിക്കുന്നു. ഒരു ഡാറ്റയും സെർവറിലേക്ക് അപ്‌ലോഡ് ചെയ്യപ്പെടുന്നില്ല.',
    copyright: '© {year} ലൈഫ്കീ എമർജൻസി സിസ്റ്റം.',
    securePrivate: 'സുരക്ഷിതവും നിജങ്ങവും.',
    
    confirmClear: 'നിങ്ങൾ എല്ലാ ഡാറ്റ മായ്‌ക്കാൻ നിശ്ചയിച്ച് വച്ചിരിക്കുന്നു?',
    
    emergencyInfoHeader: '🚨 എമർജൻസി വിവരം 🚨',
    nameLabel: 'പേര്',
    bloodLabel: 'രക്തം',
    medicalLabel: 'മെഡിക്കൽ',
    areaLabel: 'പ്രദേശം',
    contact1Label: 'കോണ്ടാക്റ്റ് 1',
    contact2Label: 'കോണ്ടാക്റ്റ് 2',
    policeLabel: 'പോലീസ്',
    ambulanceLabel: 'അ়ാംബുലെന്‍സ്',
    notSpecified: 'വ്യക്തമാക്കിയിട്ടില്ല',
  },

  mr: {
    appName: 'लाइफकी',
    offline: '100% ऑफलाइन',
    
    personalInformation: 'व्यक्तिगत माहिती',
    fullName: 'पूर्ण नाव',
    fullNamePlaceholder: 'उदा. जॉन डो',
    bloodGroup: 'रक्त गट',
    selectBloodGroup: 'निवडा',
    area: 'क्षेत्र (शहर/स्थानिकता)',
    areaPlaceholder: 'उदा. करजत, महाराष्ट्र',
    medicalNeeds: 'वैद्यकीय गरजा / अपंगता',
    medicalNeedsPlaceholder: 'उदा. अस्थमा, मधुमेह, मृगী, व्हीलचेअर वापरणारा',
    
    emergencyContacts: 'आपातकालीन संपर्क',
    primaryContact: 'प्राथमिक संपर्क',
    secondaryContact: 'माध्यमिक संपर्क (वैकल्पिक)',
    contactNamePlaceholder: 'संपर्क नाव',
    primaryContactNamePlaceholder: 'आपातकाळात कॉल करायचे संपर्क नाव',
    secondaryContactNamePlaceholder: 'प्राथमिक उपलब्ध नसल्यास संपर्क करायचे व्यक्ती नाव',
    relationPlaceholder: 'संबंध (उदा. आई)',
    phoneNumberPlaceholder: 'फोन नंबर',
    
    emergencyServices: 'आपातकालीन सेवा',
    police: 'पोलीस',
    ambulance: 'रुग्णवाहिका',
    
    downloadEmergencyQR: 'आपातकालीन QR डाउनलोड करा',
    clear: 'साफ करा',
    downloadAsJPEG: 'JPEG म्हणून डाउनलोड करा',
    resetToForm: 'फॉर्मला रीसेट करा',
    
    yourEmergencyQR: 'आपला आपातकालीन QR',
    downloadInstructions: 'हे डाउनलोड करा आणि आपल्या वॉलेटमध्ये किंवा आपल्या लॉक स्क्रीन वॉलपेपर म्हणून ठेवा.',
    encodedInformation: 'एन्कोड केलेली माहिती',
    editable: 'संपादनयोग्य',
    qrPreviewTitle: 'QR पूर्वावलोकन',
    qrPreviewText: 'फॉर्म भरा आणि येथे आपला आपातकालीन QR कोड पाहण्यासाठी व्युत्पन्न करा.',
    typeEmergencyInfo: 'येथे आपातकालीन माहिती टाइप करा...',
    
    howItWorks: 'हे कसे काम करते',
    howItWorksDescription: 'ही प्रणाली एक QR कोड तयार करते जो आपला डेटा थेट संग्रहित करते. स्कॅन केल्यावर, हे इंटरनेट कनेक्शन न असतानाही आपली माहिती तत्काळ प्रदर्शित करते. कोणताही डेटा कोणत्याही सर्व्हरवर अपलोड केला जात नाही.',
    copyright: '© {year} लाइफकी आपातकालीन प्रणाली.',
    securePrivate: 'सुरक्षित आणि खाजगी.',
    
    confirmClear: 'आप सर्व डेटा साफ करायला सुनिश्चित आहात?',
    
    emergencyInfoHeader: '🚨 आपातकालीन माहिती 🚨',
    nameLabel: 'नाव',
    bloodLabel: 'रक्त',
    medicalLabel: 'औषधी',
    areaLabel: 'क्षेत्र',
    contact1Label: 'संपर्क 1',
    contact2Label: 'संपर्क 2',
    policeLabel: 'पोलीस',
    ambulanceLabel: 'रुग्णवाहिका',
    notSpecified: 'निर्दिष्ट नाही',
  },

  bn: {
    appName: 'লাইফকী',
    offline: '100% অফলাইন',
    
    personalInformation: 'ব্যক্তিগত তথ্য',
    fullName: 'সম্পূর্ণ নাম',
    fullNamePlaceholder: 'যেমন. জন ডো',
    bloodGroup: 'রক্তের গ্রুপ',
    selectBloodGroup: 'নির্বাচন করুন',
    area: 'এলাকা (শহর/এলাকা)',
    areaPlaceholder: 'যেমন. করজথ, মহারাষ্ট্র',
    medicalNeeds: 'চিকিৎসা সংক্রান্ত প্রয়োজন / অক্ষমতা',
    medicalNeedsPlaceholder: 'যেমন. হাঁপানি, ডায়াবেটিক্স, মৃগী, হুইলচেয়ার ব্যবহারকারী',
    
    emergencyContacts: 'জরুরি যোগাযোগ',
    primaryContact: 'প্রধান যোগাযোগ',
    secondaryContact: 'মাধ্যমিক যোগাযোগ (ঐচ্ছিক)',
    contactNamePlaceholder: 'যোগাযোগের নাম',
    primaryContactNamePlaceholder: 'জরুরি অবস্থায় কল করার জন্য যোগাযোগের নাম',
    secondaryContactNamePlaceholder: 'প্রধান উপলব্ধ না থাকলে যোগাযোগ করার জন্য ব্যক্তির নাম',
    relationPlaceholder: 'সম্পর্ক (যেমন. মা)',
    phoneNumberPlaceholder: 'ফোন নম্বর',
    
    emergencyServices: 'জরুরি সেবা',
    police: 'পুলিশ',
    ambulance: 'অ্যাম্বুলেন্স',
    
    downloadEmergencyQR: 'জরুরি QR ডাউনলোড করুন',
    clear: 'সাফ করুন',
    downloadAsJPEG: 'JPEG হিসাবে ডাউনলোড করুন',
    resetToForm: 'ফর্মে রিসেট করুন',
    
    yourEmergencyQR: 'আপনার জরুরি QR',
    downloadInstructions: 'এটি ডাউনলোড করুন এবং আপনার ওয়ালেটে বা আপনার লক স্ক্রীন ওয়ালপেপার হিসাবে রাখুন।',
    encodedInformation: 'এনকোড করা তথ্য',
    editable: 'সম্পাদনযোগ্য',
    qrPreviewTitle: 'QR পূর্বরূপ',
    qrPreviewText: 'ফর্ম পূরণ করুন এবং এখানে আপনার জরুরি QR কোড দেখতে তৈরি করুন।',
    typeEmergencyInfo: 'এখানে জরুরি তথ্য টাইপ করুন...',
    
    howItWorks: 'এটি কীভাবে কাজ করে',
    howItWorksDescription: 'এই সিস্টেম এমন একটি QR কোড তৈরি করে যা আপনার ডেটা সরাসরি সংরক্ষণ করে। স্ক্যান করার সময়, এটি ইন্টারনেট সংযোগ ছাড়াই আপনার তথ্য তাত্ক্ষণিকভাবে প্রদর্শন করে। কোনও ডেটা কোনও সার্ভারে আপলোড করা হয় না।',
    copyright: '© {year} লাইফকী জরুরি সিস্টেম।',
    securePrivate: 'নিরাপদ এবং ব্যক্তিগত।',
    
    confirmClear: 'আপনি কি সমস্ত ডেটা সাফ করতে নিশ্চিত?',
    
    emergencyInfoHeader: '🚨 জরুরি তথ্য 🚨',
    nameLabel: 'নাম',
    bloodLabel: 'রক্ত',
    medicalLabel: 'চিকিৎসা',
    areaLabel: 'এলাকা',
    contact1Label: 'যোগাযোগ 1',
    contact2Label: 'যোগাযোগ 2',
    policeLabel: 'পুলিশ',
    ambulanceLabel: 'অ্যাম্বুলেন্স',
    notSpecified: 'নির্দিষ্ট নয়',
  },

  pa: {
    appName: 'ਲਾਈਫਕੀ',
    offline: '100% ਆਫਲਾਈਨ',
    
    personalInformation: 'ਨਿਜੀ ਜਾਣਕਾਰੀ',
    fullName: 'ਪੂਰਾ ਨਾਮ',
    fullNamePlaceholder: 'ਉ.ਦਾ. ਜਾਨ ਡੋ',
    bloodGroup: 'ਰਕਤ ਗ੍ਰੁੱਪ',
    selectBloodGroup: 'ਚੁਣੋ',
    area: 'ਖੇਤਰ (ਸ਼ਹਿਰ/ਥਾਂ)',
    areaPlaceholder: 'ਉ.ਦਾ. ਕਰਜਤ, ਮਹਾਂਰਾਸ਼ਟਰ',
    medicalNeeds: 'ਡਾਕਟਰੀ ਜ਼ਰੂਰਤਾਂ / ਅਸਮਰਥਤਾ',
    medicalNeedsPlaceholder: 'ਉ.ਦਾ. ਅਸਥਮਾ, ਡਾਇਬਿਟਿਜ, ਮਿਰਗੀ, ਵ੍ਹੀਲ ਚੇਅਰ ਵਰਤੋਂ',
    
    emergencyContacts: 'ਜ਼ਰੂਰਤ ਸਮੇਂ ਸੰਪਰਕ',
    primaryContact: 'ਪ੍ਰਾਥਮਿਕ ਸੰਪਰਕ',
    secondaryContact: 'ਦੂਸਰਾ ਸੰਪਰਕ (ਚੁਣਨਯੋਗ)',
    contactNamePlaceholder: 'ਸੰਪਰਕ ਦਾ ਨਾਮ',
    primaryContactNamePlaceholder: 'ਜ਼ਰੂਰਤ ਸਮੇਂ ਕਾਲ ਦੇਣ ਲਈ ਸੰਪਰਕ ਦਾ ਨਾਮ',
    secondaryContactNamePlaceholder: 'ਜੇਕਰ ਪ੍ਰਾਥਮਿਕ ਉਪਲਬਧ ਨਾ ਹੋਵੇ ਤਾਂ ਸੰਪਰਕ ਦਾ ਨਾਮ',
    relationPlaceholder: 'ਰਿਸ਼ਤਾ (ਉ.ਦਾ. ਮਾੰ)',
    phoneNumberPlaceholder: 'ਫੋਨ ਨੰਬਰ',
    
    emergencyServices: 'ਜ਼ਰੂਰਤ ਸਮੇਂ ਸੇਵਾਵਾਂ',
    police: 'ਪੁਲਿਸ',
    ambulance: 'ਐਮਬੂਲੈਂਸ',
    
    downloadEmergencyQR: 'ਜ਼ਰੂਰਤ ਨੂੰ QR ਡਾਉਨਲੋਡ ਕਰੋ',
    clear: 'ਸਾਫ ਕਰੋ',
    downloadAsJPEG: 'JPEG ਦੇ ਤੌਰ ਤੇ ਡਾਉਨਲੋਡ ਕਰੋ',
    resetToForm: 'ਫਾਰਮ ਨੂੰ ਰੀਸੈਟ ਕਰੋ',
    
    yourEmergencyQR: 'ਆਪਣਾ ਜ਼ਰੂਰਤ ਸਮੇਂ QR',
    downloadInstructions: 'ਇਸ ਨੂੰ ਡਾਉਨਲੋਡ ਕਰੋ ਅਤੇ ਆਪਣੇ ਬਟੁਏ ਵਿੱਚ ਜਾਂ ਆਪਣੀ ਲਾਕ ਸਕਰੀਨ ਤਕਸੀਰ ਦੇ ਤੌਰ ਤੇ ਰੱਖੋ।',
    encodedInformation: 'ਇੰਕੋਡ ਕੀਤੀ ਜਾਣਕਾਰੀ',
    editable: 'ਸੰਪਾਦਨਮਈ',
    qrPreviewTitle: 'QR ਝਲਕ',
    qrPreviewText: 'ਫਾਰਮ ਭਰੋ ਅਤੇ ਆਪਣੇ ਜ਼ਰੂਰਤ ਨੂੰ QR ਕੋਡ ਨੂੰ ਇੱਥੇ ਦੇਖਣ ਲਈ ਤਿਆਰ ਕਰੋ।',
    typeEmergencyInfo: 'ਇੱਥੇ ਜ਼ਰੂਰਤ ਸਮੇਂ ਜਾਣਕਾਰੀ ਟਾਈਪ ਕਰੋ...',
    
    howItWorks: 'ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ',
    howItWorksDescription: 'ਇਹ ਸਿਸਟਮ ਇੱਕ QR ਕੋਡ ਤਿਆਰ ਕਰਦਾ ਹੈ ਜੋ ਆਪਣਾ ਡਾਟਾ ਸਿੱਧਾ ਸਟੋਰ ਕਰਦਾ ਹੈ। ਸਕੈਨ ਕਰਦੇ ਸਮੇਂ, ਇਹ ਇੱਥੋ ਸਮੇਂ ਲਈ ਇੰਟਰਨੈਟ ਕਨਕਸ਼ਨ ਤੋਂ ਬਿਨਾਂ ਆਪਣੀ ਜਾਣਕਾਰੀ ਵੇਖਾਉਦਾ ਹੈ। ਕੋਈ ਵੀ ਡਾਟਾ ਕਿਸੇ ਵੀ ਸਰਵਰ ਤੇ ਅਪਲੋਡ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
    copyright: '© {year} ਲਾਈਫਕੀ ਜ਼ਰੂਰਤ ਸਮੇਂ ਸਿਸਟਮ।',
    securePrivate: 'ਨਿରਾਪੱਖ ਅਤੇ ਨਿਜੀ।',
    
    confirmClear: 'ਕੀ ਤੁਸੀਂ ਸਾਰੇ ਡਾਟਾ ਨੂੰ ਸਾਫ ਕਰਨ ਤੋਂ ਯਕੀਨੀ ਹੋ?',
    
    emergencyInfoHeader: '🚨 ਜ਼ਰੂਰਤ ਸਮੇਂ ਜਾਣਕਾਰੀ 🚨',
    nameLabel: 'ਨਾਮ',
    bloodLabel: 'ਖੂਨ',
    medicalLabel: 'ਡਾਕਟਰੀ',
    areaLabel: 'ਖੇਤਰ',
    contact1Label: 'ਸੰਪਰਕ 1',
    contact2Label: 'ਸੰਪਰਕ 2',
    policeLabel: 'ਪੁਲਿਸ',
    ambulanceLabel: 'ਐਮਬੂਲੈਂਸ',
    notSpecified: 'ਨਿਰਧਿਆਨ ਨਾ ਕਰੇ',
  },

  ur: {
    appName: 'لائف کی',
    offline: '100% آف لائن',
    
    personalInformation: 'ذاتی معلومات',
    fullName: 'مکمل نام',
    fullNamePlaceholder: 'مثال کے طور پر۔ جان ڈو',
    bloodGroup: 'بلڈ گروپ',
    selectBloodGroup: 'منتخب کریں',
    area: 'علاقہ (شہر/علاقہ)',
    areaPlaceholder: 'مثال کے طور پر۔ کرجت، مہاراشٹرا',
    medicalNeeds: 'طبی ضروریات / معذوری',
    medicalNeedsPlaceholder: 'مثال کے طور پر۔ دمہ، ذیابیطس، صرع، وہیل چیئر صارف',
    
    emergencyContacts: 'ایمرجنسی رابطے',
    primaryContact: 'بنیادی رابطہ',
    secondaryContact: 'ثانوی رابطہ (اختیاری)',
    contactNamePlaceholder: 'رابطے کا نام',
    primaryContactNamePlaceholder: 'ایمرجنسی میں کال کرنے کے لیے رابطے کا نام',
    secondaryContactNamePlaceholder: 'بنیادی دستیاب نہ ہو تو رابطہ کرنے والے شخص کا نام',
    relationPlaceholder: 'تعلق (مثال کے طور پر۔ ماں)',
    phoneNumberPlaceholder: 'فون نمبر',
    
    emergencyServices: 'ایمرجنسی سروسز',
    police: 'پولیس',
    ambulance: 'ایمبولینس',
    
    downloadEmergencyQR: 'ایمرجنسی QR ڈاؤن لوڈ کریں',
    clear: 'صاف کریں',
    downloadAsJPEG: 'JPEG کے طور پر ڈاؤن لوڈ کریں',
    resetToForm: 'فارم میں دوبارہ سیٹ کریں',
    
    yourEmergencyQR: 'آپ کا ایمرجنسی QR',
    downloadInstructions: 'اس کو ڈاؤن لوڈ کریں اور اپنے والٹ میں یا اپنی لاک اسکرین والپیپر کے طور پر رکھیں۔',
    encodedInformation: 'انکوڈ شدہ معلومات',
    editable: 'قابل تدوین',
    qrPreviewTitle: 'QR پیش نمائش',
    qrPreviewText: 'فارم بھریں اور یہاں اپنے ایمرجنسی QR کوڈ کو دیکھنے کے لیے تیار کریں۔',
    typeEmergencyInfo: 'یہاں ایمرجنسی معلومات ٹائپ کریں...',
    
    howItWorks: 'یہ کیسے کام کرتا ہے',
    howItWorksDescription: 'یہ نظام ایک QR کوڈ بناتا ہے جو آپ کے ڈیٹا کو براہ راست محفوظ کرتا ہے۔ اسکین کرتے وقت، یہ انٹرنیٹ کنکشن کے بغیر آپ کی معلومات فوری طور پر دکھاتا ہے۔ کوئی ڈیٹا کسی سرور پر اپ لوڈ نہیں کیا جاتا ہے۔',
    copyright: '© {year} لائف کی ایمرجنسی سسٹم۔',
    securePrivate: 'محفوظ اور نجی۔',
    
    confirmClear: 'کیا آپ تمام ڈیٹا صاف کرنے سے یقین رکھتے ہیں؟',
    
    emergencyInfoHeader: '🚨 ایمرجنسی معلومات 🚨',
    nameLabel: 'نام',
    bloodLabel: 'خون',
    medicalLabel: 'طبی',
    areaLabel: 'علاقہ',
    contact1Label: 'رابطہ 1',
    contact2Label: 'رابطہ 2',
    policeLabel: 'پولیس',
    ambulanceLabel: 'ایمبولینس',
    notSpecified: 'متعین نہیں',
  },

  gu: {
    appName: 'લાઈફકી',
    offline: '100% ઑફલાઈન',
    
    personalInformation: 'વ્યક્તિગત માહિતી',
    fullName: 'સંપૂર્ણ નામ',
    fullNamePlaceholder: 'ઉદા. જોન ડો',
    bloodGroup: 'રક્ત જૂથ',
    selectBloodGroup: 'પસંદ કરો',
    area: 'વિસ્તાર (શહેર/સ્થાનીકતા)',
    areaPlaceholder: 'ઉદા. કરજત, મહારાષ્ટ્ર',
    medicalNeeds: 'તબીબી આવશ્યકતાઓ / અપંગતા',
    medicalNeedsPlaceholder: 'ઉદા. અસ્થમા, મધુમેહ, એપિલેપ્સી, વ્હીલચેર વપરાશકર્તા',
    
    emergencyContacts: 'કટોકટી સંપર્ક',
    primaryContact: 'પ્રાથમિક સંપર્ક',
    secondaryContact: 'ગૌણ સંપર્ક (વૈકલ્પિક)',
    contactNamePlaceholder: 'સંપર્કનું નામ',
    primaryContactNamePlaceholder: 'કટોકટીમાં બોલાવવાના સંપર્કનું નામ',
    secondaryContactNamePlaceholder: 'જો પ્રાથમિક અસુલભ હોય તો સંપર્ક કરવા માટે વ્યક્તિનું નામ',
    relationPlaceholder: 'સંબંધ (ઉદા. માતા)',
    phoneNumberPlaceholder: 'ફોન નંબર',
    
    emergencyServices: 'કટોકટી સેવાઓ',
    police: 'પોલીસ',
    ambulance: 'એમ્બુલેન્સ',
    
    downloadEmergencyQR: 'કટોકટી QR ડાઉનલોડ કરો',
    clear: 'સાફ કરો',
    downloadAsJPEG: 'JPEG તરીકે ડાઉનલોડ કરો',
    resetToForm: 'ફોર્મમાં રીસેટ કરો',
    
    yourEmergencyQR: 'તમારો કટોકટી QR',
    downloadInstructions: 'આને ડાউનલોડ કરો અને તમારા વૉલેટમાં અથવા તમારી લૉક સ્ક્રીન વૉલપેપર તરીકે રાખો.',
    encodedInformation: 'એન્કોડ કરેલી માહિતી',
    editable: 'સંપાદનક્ષમ',
    qrPreviewTitle: 'QR પૂર્વાવલોકન',
    qrPreviewText: 'ફોર્ম ભરો અને અહીં તમારો કટોકટી QR કોડ જોવા માટે જેનરેટ કરો.',
    typeEmergencyInfo: 'અહીં કટોકટી માહિતી લખો...',
    
    howItWorks: 'તે કેવી રીતે કાર્ય કરે છે',
    howItWorksDescription: 'આ સિસ્ટમ એક QR કોડ જનરેટ કરે છે જે તમારા ડેટાને સીધા સંગ્રહ કરે છે. સ્કેન કરવામાં આવે ત્યારે, તે ઇન્ટરનેટ કનેક્શન વિના તમારી માહિતી તરત જ પ્રદર્શિત કરે છે. કોઈપણ ડેટા કોઈપણ સર્વર પર અપલોડ કરવામાં આવતો નથી.',
    copyright: '© {year} લાઈફકી કટોકટી સિસ્ટમ.',
    securePrivate: 'સુરક્ષિત અને ખાનગી.',
    
    confirmClear: 'શું તમે તમામ ડેટા સાફ કરવા માટે સુનિશ્ચિત છો?',
    
    emergencyInfoHeader: '🚨 કટોકટી માહિતી 🚨',
    nameLabel: 'નામ',
    bloodLabel: 'રક્ત',
    medicalLabel: 'તબીબી',
    areaLabel: 'વિસ્તાર',
    contact1Label: 'સંપર્ક 1',
    contact2Label: 'સંપર્ક 2',
    policeLabel: 'પોલીસ',
    ambulanceLabel: 'એમ્બુલેન્સ',
    notSpecified: 'નિર્દિષ્ટ નથી',
  },
};
