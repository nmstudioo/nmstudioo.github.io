import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Youtube, FileText, Send, CheckCircle2, Trash2 } from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactView() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Load past messages on mount
  useEffect(() => {
    const saved = localStorage.getItem('nm_portfolio_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved messages', e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill out all fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate network delay
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: crypto.randomUUID(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updated = [newMessage, ...messages];
      setMessages(updated);
      localStorage.setItem('nm_portfolio_messages', JSON.stringify(updated));

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Hide success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem('nm_portfolio_messages', JSON.stringify(updated));
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      {/* Page Header */}
      <section className="py-12 md:py-16">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-widest uppercase text-violet mb-4">
          <span className="w-7 h-[1px] bg-violet" />
          Get In Touch
        </div>
        <h1 className="font-display text-[clamp(34px,8.5vw,72px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
          Let's Connect
        </h1>
        <p className="max-w-xl text-base text-fog-3 font-light leading-relaxed">
          I'm open to professional roles, contracts, freelance work, and technical collaborations. Use the form below to transmit a direct message to my mailbox.
        </p>
      </section>

      {/* Grid Layout: Form and Info */}
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent relative overflow-hidden">
            <h2 className="font-display text-[15px] font-bold text-white mb-7 flex items-center gap-2.5 tracking-tight">
              <span className="w-1.5 h-1.5 bg-violet rounded-full animate-ping" />
              Direct Message Channel
            </h2>

            {submitSuccess && (
              <div className="p-5 border border-emerald-500/20 rounded-xl bg-emerald-500/5 text-emerald-400 text-sm mb-6 flex items-start gap-3.5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <h4 className="font-semibold text-white tracking-tight">Message Transmitted</h4>
                  <p className="font-light text-emerald-400/80 text-xs mt-1 leading-relaxed">
                    Your message has been successfully cached locally. You can inspect the sent records in the outbox container on the right.
                  </p>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 border border-rose-500/20 rounded-xl bg-rose-500/5 text-rose-400 text-xs mb-6">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-[9px] tracking-wider text-fog-3 uppercase font-semibold">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Noushad Mostafa"
                    required
                    className="p-3.5 border border-white/[0.08] rounded-lg bg-white/[0.02] focus:bg-violet/[0.01] focus:border-violet/40 focus:outline-none transition-colors text-white placeholder-white/10 text-xs font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-[9px] tracking-wider text-fog-3 uppercase font-semibold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nooushadd@gmail.com"
                    required
                    className="p-3.5 border border-white/[0.08] rounded-lg bg-white/[0.02] focus:bg-violet/[0.01] focus:border-violet/40 focus:outline-none transition-colors text-white placeholder-white/10 text-xs font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-mono text-[9px] tracking-wider text-fog-3 uppercase font-semibold">Subject Line</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry / Technical Project / Collaboration"
                  required
                  className="p-3.5 border border-white/[0.08] rounded-lg bg-white/[0.02] focus:bg-violet/[0.01] focus:border-violet/40 focus:outline-none transition-colors text-white placeholder-white/10 text-xs font-light"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[9px] tracking-wider text-fog-3 uppercase font-semibold">Detailed Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Describe your design or development goals..."
                  required
                  className="p-3.5 border border-white/[0.08] rounded-lg bg-white/[0.02] focus:bg-violet/[0.01] focus:border-violet/40 focus:outline-none transition-colors text-white placeholder-white/10 text-xs font-light resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-3 bg-violet hover:bg-[#6b4ff0] disabled:opacity-50 text-white rounded-full font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-violet/10 cursor-pointer self-start"
              >
                <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Visual Info / Social Directories */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="p-7 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-white/10 transition-colors duration-300">
            <h3 className="font-display text-[15px] font-bold text-white mb-5 tracking-tight">Directory</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:nooushadd@gmail.com"
                className="group flex items-center gap-4 p-4 border border-white/[0.06] rounded-xl bg-white/[0.01] hover:border-violet/20 hover:bg-violet/[0.01] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-fog-2 group-hover:text-violet group-hover:border-violet/20 transition-colors duration-300">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] tracking-wider text-fog-3 uppercase block font-semibold">Direct Mail</span>
                  <span className="text-xs font-medium text-white group-hover:text-violet transition-colors duration-300">nooushadd@gmail.com</span>
                </div>
              </a>

              <a 
                href="https://github.com/ilimon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-white/[0.06] rounded-xl bg-white/[0.01] hover:border-violet/20 hover:bg-violet/[0.01] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-fog-2 group-hover:text-violet group-hover:border-violet/20 transition-colors duration-300">
                  <Github className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] tracking-wider text-fog-3 uppercase block font-semibold">Source Repository</span>
                  <span className="text-xs font-medium text-white group-hover:text-violet transition-colors duration-300">github.com/ilimon</span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/noushad-mostafa-0931122b6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-white/[0.06] rounded-xl bg-white/[0.01] hover:border-violet/20 hover:bg-violet/[0.01] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-fog-2 group-hover:text-violet group-hover:border-violet/20 transition-colors duration-300">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] tracking-wider text-fog-3 uppercase block font-semibold">Professional Network</span>
                  <span className="text-xs font-medium text-white group-hover:text-violet transition-colors duration-300">linkedin.com/in/noushad-mostafa</span>
                </div>
              </a>

              <a 
                href="https://noushad.qzz.io/assets/pdf/Limon-Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-white/[0.06] rounded-xl bg-white/[0.01] hover:border-violet/20 hover:bg-violet/[0.01] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-fog-2 group-hover:text-violet group-hover:border-violet/20 transition-colors duration-300">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] tracking-wider text-fog-3 uppercase block font-semibold">Curriculum Vitae</span>
                  <span className="text-xs font-medium text-white group-hover:text-violet transition-colors duration-300">Download Resume (PDF)</span>
                </div>
              </a>
            </div>
          </div>

          {/* Local storage messages display (The Outbox) */}
          {messages.length > 0 && (
            <div className="p-7 border border-white/[0.06] rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent hover:border-white/10 transition-colors duration-300 max-h-[360px] overflow-y-auto">
              <h3 className="font-display text-[14px] font-bold text-white mb-4 flex items-center justify-between tracking-tight">
                <span>Direct Outbox Cache</span>
                <span className="text-[9px] font-mono bg-violet/10 border border-violet/25 text-violet px-2.5 py-0.5 rounded-full font-semibold">{messages.length} SENT</span>
              </h3>
              <div className="flex flex-col gap-3.5">
                {messages.map((msg) => (
                  <div key={msg.id} className="p-4 border border-white/[0.05] rounded-lg bg-white/[0.01] group relative hover:border-white/10 transition-colors duration-300">
                    <button 
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="absolute top-4 right-4 text-fog-3 hover:text-rose-400 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Delete message from local cache"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                    <div className="font-mono text-[8px] text-violet mb-1 font-semibold tracking-wide">{msg.timestamp}</div>
                    <div className="text-[12px] font-bold text-white truncate pr-6 tracking-tight">{msg.subject}</div>
                    <div className="text-[11px] text-fog-3 mt-1.5 line-clamp-2 font-light leading-relaxed">{msg.message}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
