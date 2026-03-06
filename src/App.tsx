import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';
import { 
  Plus, 
  Download, 
  Phone, 
  User, 
  Droplet, 
  AlertCircle, 
  MapPin, 
  Share2, 
  RefreshCw,
  CheckCircle2,
  Info,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from './LanguageContext';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EmergencyData {
  fullName: string;
  bloodGroup: string;
  medicalNeeds: string;
  area: string;
  contact1Name: string;
  contact1Relation: string;
  contact1Phone: string;
  contact2Name: string;
  contact2Relation: string;
  contact2Phone: string;
  policeNumber: string;
  ambulanceNumber: string;
}

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown'];

export default function App() {
  const { t, language, setLanguage, languages } = useLanguage();
  const [formData, setFormData] = useState<EmergencyData>({
    fullName: '',
    bloodGroup: '',
    medicalNeeds: '',
    area: '',
    contact1Name: '',
    contact1Relation: '',
    contact1Phone: '',
    contact2Name: '',
    contact2Relation: '',
    contact2Phone: '',
    policeNumber: '100',
    ambulanceNumber: '102',
  });

  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [encodedText, setEncodedText] = useState<string>('');
  const [isManual, setIsManual] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  // Auto-format text when form data changes
  useEffect(() => {
    if (!isManual) {
      const text = formatEmergencyText(formData);
      setEncodedText(text);
      if (formData.fullName || formData.contact1Phone) {
        setShowPreview(true);
      }
    }
  }, [formData, isManual]);

  // Auto-generate QR when encoded text changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (encodedText) {
        generateQRCode(encodedText);
      }
    }, 300); // Debounce QR generation

    return () => clearTimeout(timer);
  }, [encodedText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEncodedText(e.target.value);
    setIsManual(true);
  };

  const resetToForm = () => {
    setIsManual(false);
    const text = formatEmergencyText(formData);
    setEncodedText(text);
  };

  const formatEmergencyText = (data: EmergencyData) => {
    let text = `${t.emergencyInfoHeader}\n`;
    text += `${t.nameLabel}: ${data.fullName}\n`;
    text += `${t.bloodLabel}: ${data.bloodGroup || t.notSpecified}\n`;
    if (data.medicalNeeds) text += `${t.medicalLabel}: ${data.medicalNeeds}\n`;
    text += `${t.areaLabel}: ${data.area}\n`;
    
    const c1Rel = data.contact1Relation ? ` (${data.contact1Relation})` : '';
    text += `${t.contact1Label}: ${data.contact1Name}${c1Rel} - ${data.contact1Phone}\n`;
    
    if (data.contact2Name && data.contact2Phone) {
      const c2Rel = data.contact2Relation ? ` (${data.contact2Relation})` : '';
      text += `${t.contact2Label}: ${data.contact2Name}${c2Rel} - ${data.contact2Phone}\n`;
    }
    text += `${t.policeLabel}: ${data.policeNumber}\n`;
    text += `${t.ambulanceLabel}: ${data.ambulanceNumber}`;
    return text;
  };

  const generateQRCode = async (text: string) => {
    setIsGenerating(true);
    try {
      const url = await QRCode.toDataURL(text, {
        width: 1024,
        margin: 2,
        type: 'image/jpeg',
        rendererOpts: {
          quality: 0.9,
        },
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H',
      });
      setQrCodeUrl(url);
    } catch (err) {
      console.error('QR Generation Error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = `Emergency-QR-${formData.fullName.replace(/\s+/g, '-')}.jpg`;
    link.href = qrCodeUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetForm = () => {
    if (confirm(t.confirmClear)) {
      setFormData({
        fullName: '',
        bloodGroup: '',
        medicalNeeds: '',
        area: '',
        contact1Name: '',
        contact1Relation: '',
        contact1Phone: '',
        contact2Name: '',
        contact2Relation: '',
        contact2Phone: '',
        policeNumber: '100',
        ambulanceNumber: '102',
      });
      setEncodedText('');
      setIsManual(false);
      setQrCodeUrl('');
      setShowPreview(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-red-100 selection:text-red-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Plus className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">{t.appName}</h1>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-1.5 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition-all cursor-pointer flex items-center gap-1"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-100">
              <CheckCircle2 className="w-3 h-3" />
              {t.offline}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Section */}
          <section className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-red-600" />
                <h2 className="text-lg font-semibold">{t.personalInformation}</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.fullName}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.bloodGroup}</label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none bg-white"
                    >
                      <option value="">{t.selectBloodGroup}</option>
                      {BLOOD_GROUPS.map(bg => (
                        <option key={bg} value={bg}>{bg}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.area}</label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      placeholder={t.areaPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.medicalNeeds}</label>
                  <textarea
                    name="medicalNeeds"
                    value={formData.medicalNeeds}
                    onChange={handleInputChange}
                    placeholder={t.medicalNeedsPlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Phone className="w-5 h-5 text-red-600" />
                <h2 className="text-lg font-semibold">{t.emergencyContacts}</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{t.primaryContact}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="contact1Name"
                      value={formData.contact1Name}
                      onChange={handleInputChange}
                      placeholder={t.primaryContactNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    />
                    <input
                      type="text"
                      name="contact1Relation"
                      value={formData.contact1Relation}
                      onChange={handleInputChange}
                      placeholder={t.relationPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    />
                    <input
                      type="tel"
                      name="contact1Phone"
                      value={formData.contact1Phone}
                      onChange={handleInputChange}
                      placeholder={t.phoneNumberPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{t.secondaryContact}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="contact2Name"
                      value={formData.contact2Name}
                      onChange={handleInputChange}
                      placeholder={t.secondaryContactNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    />
                    <input
                      type="text"
                      name="contact2Relation"
                      value={formData.contact2Relation}
                      onChange={handleInputChange}
                      placeholder={t.relationPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    />
                    <input
                      type="tel"
                      name="contact2Phone"
                      value={formData.contact2Phone}
                      onChange={handleInputChange}
                      placeholder={t.phoneNumberPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <h2 className="text-lg font-semibold">{t.emergencyServices}</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.police}</label>
                  <input
                    type="tel"
                    name="policeNumber"
                    value={formData.policeNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t.ambulance}</label>
                  <input
                    type="tel"
                    name="ambulanceNumber"
                    value={formData.ambulanceNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={downloadQR}
                disabled={!qrCodeUrl}
                className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-red-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
              >
                <Download className="w-6 h-6" />
                {t.downloadEmergencyQR}
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-2xl transition-all"
                title="Clear all data"
              >
                {t.clear}
              </button>
            </div>
          </section>

          {/* Preview Section */}
          <section ref={qrRef} className="space-y-6">
            <AnimatePresence mode="wait">
              {showPreview ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 sticky top-24"
                >
                  <div className="text-center space-y-6">
                    <div className="inline-block p-6 bg-white rounded-2xl border-4 border-gray-50 shadow-inner">
                      <img 
                        src={qrCodeUrl} 
                        alt="Emergency QR Code" 
                        className="w-64 h-64 mx-auto"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{t.yourEmergencyQR}</h3>
                      <p className="text-gray-500 text-sm">{t.downloadInstructions}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <button
                        onClick={downloadQR}
                        className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        {t.downloadAsJPEG}
                      </button>
                    </div>

                    <div className="pt-6 border-t border-gray-100 text-left">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-widest">{t.encodedInformation} ({t.editable})</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {isManual && (
                            <button
                              onClick={resetToForm}
                              className="text-xs font-bold text-red-600 hover:text-red-700 underline underline-offset-4"
                            >
                              {t.resetToForm}
                            </button>
                          )}
                          {isGenerating && <RefreshCw className="w-3 h-3 animate-spin text-red-500" />}
                        </div>
                      </div>
                      <textarea
                        value={encodedText}
                        onChange={handleTextChange}
                        rows={8}
                        className="w-full bg-gray-50 rounded-xl p-4 font-mono text-sm text-gray-700 leading-relaxed border border-transparent focus:border-red-200 focus:bg-white transition-all outline-none resize-none"
                        placeholder={t.typeEmergencyInfo}
                      />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-gray-100 rounded-3xl p-12 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center space-y-4 h-full min-h-[400px]">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <Share2 className="w-10 h-10 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-400">{t.qrPreviewTitle}</h3>
                    <p className="text-gray-400 max-w-[240px] mx-auto">{t.qrPreviewText}</p>
                  </div>
                </div>
              )}
            </AnimatePresence>

            {/* How it works moved to footer for full-width display */}
          </section>
        </div>
      </main>

      <footer className="mt-12">
        <div className="w-full bg-blue-50 border-t border-blue-100">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="shrink-0">
                <Info className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-blue-900">{t.howItWorks}</h4>
                <p className="text-sm text-blue-800 leading-relaxed max-w-4xl">
                  {t.howItWorksDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          <p>{t.copyright.replace('{year}', new Date().getFullYear().toString())} {t.securePrivate}</p>
        </div>
      </footer>
    </div>
  );
}
