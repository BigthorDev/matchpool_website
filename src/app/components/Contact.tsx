import { useState } from "react";
import { Send, Mail, MessageSquare, User, Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500"/>
            <path d="M50,5 L50,25 M50,75 L50,95 M5,50 L25,50 M75,50 L95,50" stroke="currentColor" strokeWidth="2" className="text-green-500"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-500"/>
            <path d="M50,5 L50,25 M50,75 L50,95 M5,50 L25,50 M75,50 L95,50" stroke="currentColor" strokeWidth="2" className="text-teal-500"/>
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-400">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-2xl p-6">
              <h4 className="font-black text-white mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-400" />
                {t("contact.email")}
              </h4>
              <a href="mailto:support@matchpool.app" className="text-green-400 hover:text-green-300 underline text-lg">
                support@matchpool.app
              </a>
            </div>

            <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/30 rounded-2xl p-6">
              <h4 className="font-black text-white mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-teal-400" />
                {t("contact.owner")}
              </h4>
              <p className="text-gray-300 text-lg">
                BIGTHOR DEVELOPMENT
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-12 text-center transform animate-pulse">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{t("contact.form.success")}</h3>
                <p className="text-white/90">{t("contact.form.successMessage")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-green-400" />
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-400" />
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-black font-bold rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
