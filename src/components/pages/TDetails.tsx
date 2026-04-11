import React, { useState, useEffect } from 'react';

export default function TDetails() {
    const [lang, setLang] = useState<'tr' | 'en' | 'de'>('tr');

    useEffect(() => {
        const dots = document.querySelectorAll('.t-details-page .nav-dot');
        const sections = document.querySelectorAll('.t-details-page .slide');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    dots.forEach(dot => {
                        const dotElement = dot as HTMLElement;
                        if(dot.getAttribute('href') === '#' + currentId) {
                            dotElement.style.background = '#0ea5e9'; // sky-500
                        } else {
                            dotElement.style.background = 'rgba(255,255,255,0.15)';
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, [lang]);

    const handleWhatsApp = (e: React.MouseEvent) => {
        e.preventDefault();
        const number = '+436764732159';
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        let msg = 'Numara kopyalandı: ';
        if (lang === 'de') msg = 'Nummer kopiert: ';
        if (lang === 'en') msg = 'Number copied: ';

        if (isMobile) {
            window.open('https://wa.me/436764732159', '_blank');
        } else {
            navigator.clipboard.writeText(number).then(() => {
                alert(msg + number);
            });
        }
    };

    return (
        <div className="t-details-page font-sans bg-slate-900 text-slate-50 selection:bg-sky-500 selection:text-white">
            <style>{`
                .t-details-page { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; overflow-x: hidden; }
                .t-details-page .slide { min-height: 100vh; width: 100vw; scroll-snap-align: start; padding: 4rem 2rem; position: relative; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
                @media (min-width: 1024px) { .t-details-page .slide { padding: 4rem 6rem; } }
                
                .t-details-page .fade-in { animation: fadeIn 1s ease-out forwards; opacity: 0; }
                .t-details-page .delay-1 { animation-delay: 0.3s; }
                .t-details-page .delay-2 { animation-delay: 0.6s; }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .t-details-page .glass-panel { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.05); }
                .t-details-page .gradient-text { background: linear-gradient(to right, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
                
                .t-details-page .nav-dots { display: flex; flex-direction: column; gap: 12px; position: fixed; right: 2rem; top: 50%; transform: translateY(-50%); z-index: 50; }
                .t-details-page .nav-dot { width: 4px; height: 32px; background: rgba(255,255,255,0.15); border-radius: 4px; transition: all 0.3s; }
                .t-details-page .nav-dot:hover { background: #38bdf8; }

                .t-details-page .bg-grid { background-size: 40px 40px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px); }
                
                .t-details-page .pulse-ring { animation: pulseRing 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                @keyframes pulseRing {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(2); opacity: 0; }
                }
            `}</style>

            <div className="nav-dots hidden md:flex">
                <a href="#slide-1" className="nav-dot" title="1"></a>
                <a href="#slide-2" className="nav-dot" title="2"></a>
                <a href="#slide-3" className="nav-dot" title="3"></a>
                <a href="#slide-4" className="nav-dot" title="4"></a>
                <a href="#slide-5" className="nav-dot" title="5"></a>
                <a href="#slide-6" className="nav-dot" title="6"></a>
            </div>

            {/* Language Toggle */}
            <div className="fixed top-6 right-6 lg:right-12 z-50 flex gap-2 bg-slate-800/80 backdrop-blur-md p-1.5 rounded-full border border-slate-700 shadow-xl">
                <button onClick={() => setLang('tr')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${lang === 'tr' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}>TR</button>
                <button onClick={() => setLang('en')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${lang === 'en' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}>EN</button>
                <button onClick={() => setLang('de')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${lang === 'de' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}>DE</button>
            </div>

            {/* Floating Contacts */}
            <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
                <a onClick={handleWhatsApp} href="#" target="_blank" className="w-12 h-12 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/50 transition-all group relative">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="absolute left-14 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none border border-slate-700 font-bold">
                    {lang === 'tr' && 'WhatsApp Destek'}{lang === 'en' && 'WhatsApp Support'}{lang === 'de' && 'WhatsApp Support'}
                </span>
                </a>
            </div>
            <div className="fixed bottom-20 left-6 z-50 flex flex-col gap-3">
                <a href="mailto:furkanbgunaydin@gmail.com" className="w-12 h-12 bg-sky-600 hover:bg-sky-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-sky-500/50 transition-all group relative">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="absolute left-14 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none border border-slate-700 font-bold">
                        {lang === 'tr' && 'E-Posta Gönder'}{lang === 'en' && 'Send E-Mail'}{lang === 'de' && 'E-Mail Senden'}
                    </span>
                </a>
            </div>

            {/* SLIDE 1: HOOK */}
            <section id="slide-1" className="slide bg-slate-900 bg-grid relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
                <div className="max-w-6xl mx-auto w-full fade-in relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-3/5">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-sky-950 text-sky-500 font-bold text-xs tracking-widest uppercase mb-6 border border-sky-500/30">
                            {lang === 'tr' && 'Sistem Mimarisi Sunumu'}{lang === 'en' && 'System Architecture Presentation'}{lang === 'de' && 'Systemarchitektur Präsentation'}
                        </span>
                        <h1 className="text-5xl md:text-7xl mb-6 leading-tight font-extrabold text-white">
                            {lang === 'tr' && <>Sıradan Bir Web Sitesi Değil, <br/><span className="gradient-text">Kendi Ekosisteminiz.</span></>}
                            {lang === 'en' && <>Not Just a Website, <br/><span className="gradient-text">Your Own Ecosystem.</span></>}
                            {lang === 'de' && <>Nicht nur eine Website, <br/><span className="gradient-text">Ihr eigenes Ökosystem.</span></>}
                        </h1>
                        <p className="text-xl text-slate-400 font-light mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                            {lang === 'tr' && <>Abonelikli hazır şablonlarla (Shopify, WordPress) savaşmayı bırakın. Cironuza ortak olmayan, ultra hızlı ve Avrupa standartlarına tam uyumlu <strong>anahtar teslim e-ticaret altyapısını</strong> keşfedin.</>}
                            {lang === 'en' && <>Stop fighting with subscription-based templates (Shopify, WordPress). Discover the ultra-fast, fully compliant <strong>turnkey e-commerce infrastructure</strong> that doesn't claim a share of your revenue.</>}
                            {lang === 'de' && <>Hören Sie auf, mit abonnementbasierten Vorlagen (Shopify, WordPress) zu kämpfen. Entdecken Sie die ultraschnelle, vollständig rechtskonforme <strong>schlüsselfertige E-Commerce-Infrastruktur</strong>, die keinen Anteil an Ihrem Umsatz verlangt.</>}
                        </p>
                        
                        <a href="#slide-2" className="inline-flex items-center gap-3 bg-white hover:bg-slate-200 text-slate-900 font-bold py-4 px-8 rounded-full transition-all mt-4 transform hover:scale-105">
                            {lang === 'tr' && 'Mimariyi İnceleyin'}{lang === 'en' && 'Explore the Architecture'}{lang === 'de' && 'Architektur Entdecken'} <span className="material-symbols-outlined text-sm">arrow_downward</span>
                        </a>
                    </div>
                    
                    <div className="lg:w-2/5 relative hidden lg:block">
                        <div className="glass-panel p-6 rounded-3xl border border-slate-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 relative z-20">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                                <div className="flex gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500"></span><span className="w-3 h-3 rounded-full bg-yellow-500"></span><span className="w-3 h-3 rounded-full bg-green-500"></span>
                                </div>
                                <span className="text-xs text-sky-500 font-mono">
                                    {lang === 'tr' ? 'Platform Command Center' : lang === 'en' ? 'Platform Command Center' : 'Plattform Command Center'}
                                </span>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                                <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                                <div className="h-2 bg-slate-700 rounded w-5/6"></div>
                                <div className="mt-8 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 text-xs font-mono flex gap-2 items-center">
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    {lang === 'tr' && 'Sistem Optumize. Komisyon Kesintisi: %0'}{lang === 'en' && 'System Optimized. Commission Rate: 0%'}{lang === 'de' && 'System Optimiert. Provisionssatz: 0%'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 2: TECH STACK */}
            <section id="slide-2" className="slide bg-slate-800 relative z-10">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-16 fade-in">
                        <span className="text-sky-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                            {lang === 'tr' && 'Teknolojik Üstünlük'}{lang === 'en' && 'Technological Superiority'}{lang === 'de' && 'Technologische Überlegenheit'}
                        </span>
                        <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
                            {lang === 'tr' && <>Dünyanın En Büyüklerinin<br/>Kullandığı Mimari</>}{lang === 'en' && <>Architecture Used by<br/>Global Giants</>}{lang === 'de' && <>Die Architektur der<br/>Globalen Giganten</>}
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            {lang === 'tr' && 'Sıradan panellere kurulan hantal eklentiler yerine, kurumsal seviyede kodlanmış, saf güç üreten bir sistem sunuyoruz.'}
                            {lang === 'en' && 'Instead of clunky plugins on generic panels, we offer an enterprise-grade coded system delivering pure performance.'}
                            {lang === 'de' && 'Anstelle von schwerfälligen Plugins bieten wir ein System auf Enterprise-Level, das pure Leistung liefert.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-3xl fade-in delay-1 border-t-4 border-t-sky-500">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-white">Frontend: React.js</h3>
                                <div className="bg-slate-900 px-3 py-1 rounded text-xs text-slate-400 font-mono">
                                    {lang === 'tr' && 'Görünüm Katmanı'}{lang === 'en' && 'Presentation Layer'}{lang === 'de' && 'Präsentationsschicht'}
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {lang === 'tr' && 'Netflix, Instagram ve Facebook\'un kullandığı arayüz teknolojisi. Sayfa yenilenmeleri tarih olur, müşterileriniz ürünler arasında bir mobil uygulamada geziyormuş gibi milisaniyeler içinde geçiş yapar.'}
                                {lang === 'en' && 'The interface technology used by Netflix, Instagram, and Facebook. Page reloads are history; your customers navigate between products in milliseconds, just like a mobile app.'}
                                {lang === 'de' && 'Die gleiche Schnittstellentechnologie, die von Netflix, Instagram und Facebook verwendet wird. Seitenladevorgänge gehören der Vergangenheit an; Ihre Kunden navigieren in Millisekunden zwischen Produkten wie in einer mobilen App.'}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-slate-300"><span className="material-symbols-outlined text-sky-500 text-sm">flash_on</span> {lang === 'tr' ? 'Geleneksel sitelere göre %300 daha hızlı tepki süresi.' : lang === 'en' ? '300% faster response time compared to traditional sites.' : '300% schnellere Reaktionszeit im Vergleich zu traditionellen Seiten.'}</li>
                                <li className="flex items-center gap-3 text-sm text-slate-300"><span className="material-symbols-outlined text-sky-500 text-sm">devices</span> {lang === 'tr' ? 'Responsive (Mobil ilk) kusursuz tasarım bütünlüğü.' : lang === 'en' ? 'Responsive (Mobile-first) flawless design integration.' : 'Responsive (Mobile-first) makellose Designintegration.'}</li>
                            </ul>
                        </div>
                        
                        <div className="glass-panel p-8 rounded-3xl fade-in delay-2 border-t-4 border-t-emerald-500">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-white">Backend: Java Spring Boot</h3>
                                <div className="bg-slate-900 px-3 py-1 rounded text-xs text-slate-400 font-mono">
                                    {lang === 'tr' && 'Motor Katmanı'}{lang === 'en' && 'Engine Layer'}{lang === 'de' && 'Motorschicht'}
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {lang === 'tr' && 'Avrupa bankalarının ve Amazon\'un arka planında çalışan, dünyanın en güvenli ve stabil sunucu teknolojisi. Eşzamanlı 10.000 müşteri sitenize girse bile çökme yaşanmaz.'}
                                {lang === 'en' && 'The world\'s most secure and stable server technology, running behind European banks and Amazon. Even if 10,000 customers enter your site simultaneously, there\'s zero downtime.'}
                                {lang === 'de' && 'Die weltweit sicherste und stabilste Servertechnologie, die hinter europäischen Banken und Amazon arbeitet. Selbst wenn 10.000 Kunden Ihre Seite gleichzeitig besuchen, gibt es keine Ausfallzeiten.'}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-slate-300"><span className="material-symbols-outlined text-emerald-500 text-sm">shield</span> {lang === 'tr' ? 'Askeri standartlarda veri güvenliği şifrelemesi.' : lang === 'en' ? 'Military-grade data security encryption.' : 'Datensicherheitsverschlüsselung auf militärischem Niveau.'}</li>
                                <li className="flex items-center gap-3 text-sm text-slate-300"><span className="material-symbols-outlined text-emerald-500 text-sm">dns</span> {lang === 'tr' ? 'Kusursuz sepet ve envanter (stok) veritabanı yönetimi.' : lang === 'en' ? 'Flawless cart and inventory database management.' : 'Makellose Verwaltung von Warenkorb und Inventardatenbanken.'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 3: SMART FEATURES */}
            <section id="slide-3" className="slide bg-slate-900">
                <div className="max-w-6xl mx-auto w-full fade-in flex flex-col justify-center">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
                            {lang === 'tr' && <>Satış Uzmanı Gibi Düşünen <br/><span className="gradient-text">Akıllı Algoritmalar</span></>}
                            {lang === 'en' && <>Smart Algorithms Thinking <br/><span className="gradient-text">Like a Sales Expert</span></>}
                            {lang === 'de' && <>Smarte Algorithmen, die wie ein <br/><span className="gradient-text">Verkaufsexperte</span> denken</>}
                        </h2>
                        <p className="text-slate-400 text-lg">
                            {lang === 'tr' && 'Sistemi işletme sahiplerinin en büyük acı noktalarını çözmek için eğittik.'}
                            {lang === 'en' && 'We trained the system to solve the biggest pain points of business owners.'}
                            {lang === 'de' && 'Wir haben das System trainiert, um die größten Schmerzpunkte von Geschäftsinhabern zu lösen.'}
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-6 items-stretch">
                        <div className="glass-panel p-8 rounded-[2rem] hover:bg-slate-800 transition-colors group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">timer</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">
                                {lang === 'tr' && 'Sepet Rezervasyon Zekası'}{lang === 'en' && 'Cart Reservation Intelligence'}{lang === 'de' && 'Warenkorb Reservierungsintelligenz'}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {lang === 'tr' && 'Stokta 1 adet kalan ürünü 3 farklı müşteri sepete ekleyemez. Sisteme giren ilk alıcı için stok arka planda 15 dakika boyunca bloke edilir (rezerv). Çifte satış kaosunu sıfırlar.'}
                                {lang === 'en' && '3 different customers cannot add the last remaining item to their cart. For the first buyer, the stock is locked in the background for 15 minutes. Eliminates double-selling chaos.'}
                                {lang === 'de' && '3 verschiedene Kunden können den letzten verbleibenden Artikel nicht in ihren Warenkorb legen. Für den ersten Käufer wird der Bestand im Hintergrund 15 Minuten lang blockiert. Verhindert Chaos durch Doppelverkäufe.'}
                            </p>
                        </div>

                        <div className="glass-panel p-8 rounded-[2rem] hover:bg-slate-800 transition-colors group">
                            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">account_tree</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">
                                {lang === 'tr' && 'Sınırsız Varyant Mantığı'}{lang === 'en' && 'Limitless Variant Logic'}{lang === 'de' && 'Grenzenlose Variantenlogik'}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {lang === 'tr' && 'Shopify gibi platformların 100 varyant sınırı yoktur. Bir ceketin rengi, bedeni, yaka tipi ve kumaşı üzerinden oluşacak binlerce kombinasyonu, sistemi zorlamadan tek tıkla yönetirsiniz.'}
                                {lang === 'en' && 'No 100-variant limit like Shopify. Easily manage thousands of combinations based on color, size, collar type, and fabric with a single click without straining the system.'}
                                {lang === 'de' && 'Kein 100-Varianten-Limit wie bei Shopify. Verwalten Sie nahtlos Tausende von Kombinationen basierend auf Farbe, Größe, Kragentyp und Stoff mit einem Klick.'}
                            </p>
                        </div>

                        <div className="glass-panel p-8 rounded-[2rem] hover:bg-slate-800 transition-colors group relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">local_shipping</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">
                                {lang === 'tr' && 'Lojistik Alarm Sistemi'}{lang === 'en' && 'Logistics Alarm System'}{lang === 'de' && 'Logistik Alarmsystem'}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {lang === 'tr' && 'Sipariş alındıktan sonra 48 saat içinde kargoya verilmeyen paketleri sistem analiz eder. Admin panelinde "Acil Kargo Gecikmesi" uyarısı vererek müşteri şikayetlerini önler.'}
                                {lang === 'en' && 'The system analyzes orders not shipped within 48 hours. By triggering an "Urgent Shipping Delay" alert in the admin panel, it prevents customer complaints proactively.'}
                                {lang === 'de' && 'Das System analysiert Bestellungen, die nicht innerhalb von 48 Stunden versandt wurden. Durch Auslösen eines Alarms im Admin-Panel werden Kundenbeschwerden proaktiv verhindert.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 4: DACH & SEO/GEO */}
            <section id="slide-4" className="slide bg-slate-800 bg-grid relative text-white">
                <div className="max-w-6xl mx-auto w-full fade-in flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900 border border-emerald-500/30 p-6 rounded-3xl">
                                <span className="material-symbols-outlined text-emerald-400 text-3xl mb-4">gavel</span>
                                <h4 className="font-bold mb-2">{lang === 'tr' ? 'DACH Uyumlu' : lang === 'en' ? 'DACH Compliant' : 'DACH Konform'}</h4>
                                <p className="text-xs text-slate-400">
                                    {lang === 'tr' && 'Almanya ve Avusturya e-ticaret yasalarına (DSGVO, Impressum) direkt entegre. Abmahnung (yasal ceza) riski yok.'}
                                    {lang === 'en' && 'Directly integrated with German and Austrian e-commerce laws (GDPR, Impressum). Zero risk of Abmahnung (legal penalties).'}
                                    {lang === 'de' && 'Direkt integriert in deutsche und österreichische E-Commerce-Gesetze (DSGVO, Impressum). Null Abmahnungsrisiko.'}
                                </p>
                            </div>
                            <div className="bg-slate-900 border border-sky-500/30 p-6 rounded-3xl transform translate-y-6">
                                <span className="material-symbols-outlined text-sky-400 text-3xl mb-4">public</span>
                                <h4 className="font-bold mb-2">{lang === 'tr' ? 'Native Çoklu Dil' : lang === 'en' ? 'Native Multi-Language' : 'Native Mehrsprachigkeit'}</h4>
                                <p className="text-xs text-slate-400">
                                    {lang === 'tr' && 'İngilizce, Almanca ve Türkçe altyapı içinde gömülü gelir. Ziyaretçi diline göre otomatik sayfa adaptasyonu.'}
                                    {lang === 'en' && 'English, German, and Turkish come built-in. Automatic page adaptation based on the visitor\'s browser language.'}
                                    {lang === 'de' && 'Englisch, Deutsch und Türkisch sind integriert. Automatische Anpassung der Seite an die Browsersprache des Besuchers.'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> {lang === 'tr' ? 'Yapay Zeka Hazır' : lang === 'en' ? 'AI Ready' : 'KI-Bereit'}
                        </span>
                        <h2 className="text-4xl md:text-5xl mb-6 font-bold">
                            {lang === 'tr' && 'SEO Bitti, Artık GEO Var.'}
                            {lang === 'en' && 'SEO is Out, GEO is In.'}
                            {lang === 'de' && 'SEO ist vorbei, GEO ist da.'}
                        </h2>
                        <div className="space-y-6 text-slate-300">
                            <p className="text-lg">
                                {lang === 'tr' && 'Google\'ın yeni yapay zeka arama motorlarına (Generative Engine Optimization) uyumlu mimari inşa ediyoruz.'}
                                {lang === 'en' && 'We are building an architecture fully compatible with Google\'s new AI search engines (Generative Engine Optimization).'}
                                {lang === 'de' && 'Wir bauen eine Architektur, die vollständig kompatibel mit Googles neuen KI-Suchmaschinen (Generative Engine Optimization) ist.'}
                            </p>
                            <p className="text-sm text-slate-400">
                                {lang === 'tr' && 'Sıradan siteler içerikleri HTML tabloları halinde sunarken; sistemimiz ürünlerinizi JSON-LD mikro verileri ve semantik etiketlerle analiz ederek yapay zeka asistanlarının (ChatGPT, Gemini) sizin ürününüzü okumasını ve tavsiye etmesini sağlar.'}
                                {lang === 'en' && 'While ordinary sites present content as basic HTML tables; our system analyzes your products with JSON-LD microdata, allowing AI assistants (ChatGPT, Gemini) to read and recommend your brand natively.'}
                                {lang === 'de' && 'Während gewöhnliche Websites Inhalte als einfache HTML-Tabellen präsentieren, analysiert unser System Ihre Produkte mit JSON-LD Mikrodaten, sodass KI-Assistenten (ChatGPT, Gemini) Ihre Marke nativ lesen und empfehlen können.'}
                            </p>
                            <div className="p-4 bg-slate-900 border-l-4 border-sky-500 rounded-r-xl">
                                <p className="text-sm italic">
                                    {lang === 'tr' && '"Rakipleriniz klasik Google sıralaması için savaşırken, siz yapay zekanın 1 numaralı marka tavsiyesi olacaksınız."'}
                                    {lang === 'en' && '"While your competitors fight for classic Google rankings, you will be the #1 brand recommended by AI."'}
                                    {lang === 'de' && '"Während Ihre Konkurrenten um klassische Google-Rankings kämpfen, werden Sie die von der KI am häufigsten empfohlene Marke sein."'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 5: PRICING PHILOSOPHY */}
            <section id="slide-5" className="slide bg-slate-900">
                <div className="max-w-5xl mx-auto w-full fade-in">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
                            {lang === 'tr' && 'Adil Fiyat, Tam Mülkiyet'}
                            {lang === 'en' && 'Fair Pricing, Full Ownership'}
                            {lang === 'de' && 'Faire Preise, Volles Eigentum'}
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            {lang === 'tr' && 'Hazır platformların bitmek bilmeyen "gizli eklenti ücretleri" ve "satış komisyonlarına" karşı yegane savunmanız.'}
                            {lang === 'en' && 'Your only defense against readymade platforms\' endless "hidden app fees" and "sales commissions."'}
                            {lang === 'de' && 'Ihre einzige Verteidigung gegen die endlosen "versteckten App-Gebühren" und "Verkaufsprovisionen" fertiger Plattformen.'}
                        </p>
                    </div>

                    <div className="glass-panel p-8 md:p-12 rounded-[3rem] border border-slate-700 shadow-2xl relative overflow-hidden">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500 blur-[100px] opacity-20"></div>
                        
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <h4 className="text-slate-500 font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                                    <span className="material-symbols-outlined">block</span> 
                                    {lang === 'tr' && 'SaaS Tuzağı (Örn. Shopify)'}{lang === 'en' && 'SaaS Trap (e.g. Shopify)'}{lang === 'de' && 'Die SaaS Falle (z.B. Shopify)'}
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 opacity-60">
                                        <span className="text-red-400 font-bold">✕</span> 
                                        <span className="text-sm">
                                            {lang === 'tr' && 'Ödeme altyapısına ek olarak %2 Platform komisyonu kesilir.'}
                                            {lang === 'en' && '2% Platform commission deducted on top of payment provider fees.'}
                                            {lang === 'de' && '2% Plattformprovision wird zusätzlich zu den Gebühren des Zahlungsanbieters abgezogen.'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 opacity-60">
                                        <span className="text-red-400 font-bold">✕</span> 
                                        <span className="text-sm">
                                            {lang === 'tr' && 'Avusturya yasalarına (DSGVO) uymak için ekstra App kiralamanız zorunludur.'}
                                            {lang === 'en' && 'Renting extra apps is mandatory just to comply with DACH (GDPR) laws.'}
                                            {lang === 'de' && 'Das Mieten von Extra-Apps ist obligatorisch, nur um die DACH (DSGVO)-Gesetze einzuhalten.'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 opacity-60">
                                        <span className="text-red-400 font-bold">✕</span> 
                                        <span className="text-sm">
                                            {lang === 'tr' && 'Abonelik iptalinde tüm siteniz ve müşteri algınız kaybolur, kodlar onlara aittir.'}
                                            {lang === 'en' && 'If you cancel your subscription, you lose your entire site and codebase.'}
                                            {lang === 'de' && 'Wenn Sie Ihr Abonnement kündigen, verlieren Sie Ihre gesamte Seite und Codebasis.'}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="border-l lg:border-slate-700 lg:pl-12 pt-8 lg:pt-0 border-t lg:border-t-0 border-slate-700">
                                <h4 className="text-sky-400 font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                                    <span className="material-symbols-outlined">verified</span> 
                                    {lang === 'tr' && 'Bizim Felsefemiz (Mülkiyet)'}{lang === 'en' && 'Our Philosophy (Ownership)'}{lang === 'de' && 'Unsere Philosophie (Eigentum)'}
                                </h4>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-400 font-bold text-lg leading-none">✓</span> 
                                        <div>
                                            <span className="block text-white font-bold text-sm">
                                                {lang === 'tr' && 'Sıfır Platform Komisyonu'}{lang === 'en' && 'Zero Platform Commission'}{lang === 'de' && 'Null Plattform Provision'}
                                            </span>
                                            <span className="block text-xs text-slate-400 mt-1">
                                                {lang === 'tr' && 'Stripe vb. standart ödeme entegrasyonu dışında cironuza hiç kimse ortak olamaz.'}
                                                {lang === 'en' && 'Except for standard payment integration (Stripe etc), no one takes a cut from your revenue.'}
                                                {lang === 'de' && 'Außer der Standard-Zahlungsintegration (Stripe usw.) nimmt niemand einen Anteil an Ihren Einnahmen.'}
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-400 font-bold text-lg leading-none">✓</span> 
                                        <div>
                                            <span className="block text-white font-bold text-sm">
                                                {lang === 'tr' && 'Kalıcı Mülkiyet, Sürpriz Yok'}{lang === 'en' && 'Permanent Ownership, No Surprises'}{lang === 'de' && 'Dauerhaftes Eigentum, keine Überraschungen'}
                                            </span>
                                            <span className="block text-xs text-slate-400 mt-1">
                                                {lang === 'tr' && 'Eklenti kiralama stresi yok. Tüm gelişmiş modüller (Otomatik Dil, Varyant, SEO) core sistemin içine özel yazılmıştır.'}
                                                {lang === 'en' && 'No app renting stress. All advanced modules (Multi-language, Variants, SEO) are custom built into the core system.'}
                                                {lang === 'de' && 'Kein App-Mietstress. Alle fortschrittlichen Module (Mehrsprachigkeit, Varianten, SEO) sind fest in das Kernsystem integriert.'}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SLIDE 6: CALL TO ACTION */}
            <section id="slide-6" className="slide bg-slate-800 border-t border-slate-700">
                <div className="max-w-4xl mx-auto w-full fade-in text-center">
                    <div className="relative w-24 h-24 mx-auto mb-8">
                        <div className="absolute inset-0 bg-sky-500 rounded-full opacity-20 pulse-ring"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sky-400 text-5xl">rocket_launch</span>
                        </div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl text-white mb-6 font-bold leading-tight">
                        {lang === 'tr' && <>Yazılım Değil, <br/>Dijital Hakimiyet Edinin.</>}
                        {lang === 'en' && <>Acquire Digital Dominance, <br/>Not Just Software.</>}
                        {lang === 'de' && <>Erwerben Sie Digitale Dominanz, <br/>nicht nur Software.</>}
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 font-light">
                        {lang === 'tr' && 'Markanızı kiralık çadırlardan kurtarıp, dijital dünyada kendi mülkünüze taşıma vakti geldi. Hemen ücretsiz demo talep edin.'}
                        {lang === 'en' && 'It\'s time to rescue your brand from rented tents and move into your own digital real estate. Request a free demo today.'}
                        {lang === 'de' && 'Es ist Zeit, Ihre Marke aus gemieteten Zelten zu retten und in Ihr eigenes digitales Anwesen umzuziehen. Fordern Sie noch heute eine kostenlose Demo an.'}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a onClick={handleWhatsApp} href="#" target="_blank" className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-4 px-10 rounded-full transition-all tracking-wide shadow-xl hover:shadow-emerald-500/30 flex items-center gap-3">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            {lang === 'tr' && 'WhatsApp İle Demo Talep Et'}{lang === 'en' && 'Request Demo via WhatsApp'}{lang === 'de' && 'WhatsApp Demo Anfragen'}
                        </a>
                        <a href="mailto:furkanbgunaydin@gmail.com" className="bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 font-medium py-4 px-10 rounded-full transition-all flex items-center gap-3">
                            <span className="material-symbols-outlined">mail</span>
                            {lang === 'tr' && 'Detaylı Bilgi İçin E-Posta'}{lang === 'en' && 'Contact via E-Mail details'}{lang === 'de' && 'E-Mail für mehr Details'}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
