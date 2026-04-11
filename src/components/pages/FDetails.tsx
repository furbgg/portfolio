import React, { useState, useEffect } from 'react';

export default function FDetails() {
    const [lang, setLang] = useState<'tr' | 'de' | 'en'>('tr');

    useEffect(() => {
        const dots = document.querySelectorAll('.m-details-page .nav-dot');
        const sections = document.querySelectorAll('.m-details-page .slide');

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
                            dotElement.style.background = '#b4975a';
                        } else {
                            dotElement.style.background = 'rgba(255,255,255,0.2)';
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
        <div className="m-details-page">
            {/* Language Toggle */}
            <div className="fixed top-4 right-4 z-[999] flex gap-2 bg-slate-900/80 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-md">
                <button onClick={() => setLang('tr')} className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'tr' ? 'bg-m-brand-gold text-slate-900' : 'text-slate-300 hover:text-white'}`}>TR</button>
                <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-m-brand-gold text-slate-900' : 'text-slate-300 hover:text-white'}`}>EN</button>
                <button onClick={() => setLang('de')} className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'de' ? 'bg-m-brand-gold text-slate-900' : 'text-slate-300 hover:text-white'}`}>DE</button>
            </div>

            <div className="custom-nav-dots hidden md:flex">
                <a href="#slide-1" className="nav-dot" title="1"></a>
                <a href="#slide-2" className="nav-dot" title="2"></a>
                <a href="#slide-3" className="nav-dot" title="3"></a>
                <a href="#slide-4" className="nav-dot" title="4"></a>
                <a href="#slide-5" className="nav-dot" title="5"></a>
                <a href="#slide-6" className="nav-dot" title="6"></a>
            </div>

            {/*  SLIDE 1: HOOK  */}
            <section id="slide-1" className="slide bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url("/projects/sportanlage-plattform/cover.png")'}}>
                <div className="max-w-6xl mx-auto w-full fade-in relative z-10 text-center lg:text-left">
                    <span className="inline-block py-1 px-4 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm tracking-widest uppercase mb-8 border border-emerald-500/30">
                        {lang === 'tr' && 'Spor Tesislerine Özel B2B Çözüm'}
                        {lang === 'en' && 'Exclusive B2B Solution for Sports Facilities'}
                        {lang === 'de' && 'Exklusive B2B-Lösung für Sportanlagen'}
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight font-bold">
                        {lang === 'tr' && <><span className="text-emerald-400">Komisyon</span> Ödemeyin,<br />Kendi Sisteminize Sahip Olun.</>}
                        {lang === 'en' && <>Stop Paying <span className="text-emerald-400">Commissions</span>,<br />Own Your Booking System.</>}
                        {lang === 'de' && <>Zahlen Sie Keine <span className="text-emerald-400">Provisionen</span>,<br />Besitzen Sie Ihr System.</>}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-3xl leading-relaxed mx-auto lg:mx-0">
                        {lang === 'tr' && 'Platformların cironuzu sömürmesine izin vermeyin. Tamamen size ait olan, güvenli ve esnek online rezervasyon altyapısıyla tesisinizi profesyonelleştirin.'}
                        {lang === 'en' && 'Do not let platforms drain your revenue. Professionalize your facility with a secure, flexible online booking infrastructure that you fully own.'}
                        {lang === 'de' && 'Lassen Sie nicht zu, dass Plattformen Ihren Umsatz binden. Professionalisieren Sie Ihre Anlage mit einer sicheren, flexiblen eigenen Online-Buchungsinfrastruktur.'}
                    </p>
                    
                    <a href="#slide-2" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full transition-all mt-4 shadow-lg hover:shadow-emerald-500/30">
                        {lang === 'tr' && 'Eversports vs. Özel Sistem'}{lang === 'en' && 'Eversports vs. Custom System'}{lang === 'de' && 'Eversports vs. Individuelles System'} <span className="material-symbols-outlined">arrow_downward</span>
                    </a>
                </div>
            </section>

            {/*  SLIDE 2: THE PLATFORM TRAP  */}
            <section id="slide-2" className="slide">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">
                            {lang === 'tr' && 'Platformların Görünmez Maliyeti'}
                            {lang === 'en' && 'The Invisible Cost of Platforms'}
                            {lang === 'de' && 'Die unsichtbaren Kosten der Plattformen'}
                        </h2>
                        <p className="text-slate-400 text-lg">
                            {lang === 'tr' && 'Rezervasyon platformları ilk başta vizyoner görünür, ancak büyüdükçe kâr ortağınız haline gelirler.'}
                            {lang === 'en' && 'Booking platforms seem visionary at first, but as you grow, they become your profit partners.'}
                            {lang === 'de' && 'Buchungsplattformen scheinen anfangs visionär, aber wenn Sie wachsen, werden sie zu Ihren Gewinnpartnern.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 rounded-3xl fade-in delay-1 border-slate-700/50">
                            <span className="material-symbols-outlined text-red-400 text-4xl mb-4">percent</span>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {lang === 'tr' && 'Yüksek Komisyon Oranları'}
                                {lang === 'en' && 'High Commission Rates'}
                                {lang === 'de' && 'Hohe Provisionssätze'}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {lang === 'tr' && 'Platformlar genellikle her online rezervasyonda %10 ila %15 arasında komisyon keser. Bu, ay sonunda binlerce Euro kayıp demektir.'}
                                {lang === 'en' && 'Platforms usually take a 10% to 15% commission on every online booking. This means thousands of Euros lost by the end of the month.'}
                                {lang === 'de' && 'Plattformen berechnen oft eine Provision von 10% bis 15% für jede Online-Buchung. Das bedeutet Tausende Euro Verlust am Monatsende.'}
                            </p>
                        </div>
                        
                        <div className="glass-card p-8 rounded-3xl fade-in delay-1 border-slate-700/50">
                            <span className="material-symbols-outlined text-orange-400 text-4xl mb-4">groups</span>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {lang === 'tr' && 'Mülkiyet Kimde?'}
                                {lang === 'en' && 'Who Owns the Data?'}
                                {lang === 'de' && 'Wem gehören die Daten?'}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {lang === 'tr' && 'Müşterileriniz aslında platformun müşterileridir. Onlara direkt mesaj atmak veya veritabanını özgürce kullanmak imkansızdır.'}
                                {lang === 'en' && 'Your customers are actually the platform\'s customers. Direct messaging or freely using your database is impossible.'}
                                {lang === 'de' && 'Ihre Kunden sind eigentlich die Kunden der Plattform. Direkte Nachrichten zu senden oder Ihre Datenbank frei zu nutzen, ist unmöglich.'}
                            </p>
                        </div>
                        
                        <div className="glass-card p-8 rounded-3xl fade-in delay-2 border-slate-700/50">
                            <span className="material-symbols-outlined text-yellow-500 text-4xl mb-4">gavel</span>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {lang === 'tr' && 'Kısıtlı Özelleştirme'}
                                {lang === 'en' && 'Limited Customization'}
                                {lang === 'de' && 'Eingeschränkte Anpassung'}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {lang === 'tr' && 'Özel kort kuralları, parça parça indirimler veya Happy Hour gibi esnek kampanya senaryoları platform şablonlarına uymadığında uygulanamaz.'}
                                {lang === 'en' && 'Special court rules, piecemeal discounts, or flexible campaigns like Happy Hour cannot be implemented if they don\'t fit the platform\'s templates.'}
                                {lang === 'de' && 'Besondere Platzregeln, gestaffelte Rabatte oder flexible Kampagnen wie Happy Hour können nicht umgesetzt werden, wenn sie nicht den Plattformvorlagen entsprechen.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  SLIDE 3: DETAILED BOOKING ANIMATION  */}
            <section id="slide-3" className="slide bg-slate-900 border-y border-slate-800 relative z-10 overflow-hidden">
                <div className="max-w-6xl mx-auto w-full fade-in h-full flex flex-col justify-center">
                    <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white text-center">
                        {lang === 'tr' && <>Çifte Rezervasyona <span className="text-emerald-400">Son</span></>}
                        {lang === 'en' && <><span className="text-emerald-400">Zero</span> Double Bookings</>}
                        {lang === 'de' && <>Keine <span className="text-emerald-400">Doppelbuchungen</span> mehr</>}
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 text-center max-w-2xl mx-auto">
                        {lang === 'tr' && 'Bir müşteriniz kortu sepete eklediği an, ödeme tamamlanana kadar sistem o saati diğerlerine kilitler.'}
                        {lang === 'en' && 'The moment a customer adds a court to their cart, the system locks that time slot until payment is completed.'}
                        {lang === 'de' && 'Sobald ein Kunde einen Platz in den Warenkorb legt, sperrt das System diese Zeitspanne bis zur Bezahlung.'}
                    </p>
                    
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/*  TRADITIONAL METHOD  */}
                        <div className="glass-card p-6 md:p-8 rounded-[2rem] border-red-500/30 bg-slate-900/80 warning-pulse relative h-[380px] flex flex-col justify-between">
                            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-[2rem] text-xs font-bold tracking-widest">
                                {lang === 'tr' ? 'ESKİ YÖNTEM, WHATSAPP' : lang === 'en' ? 'OLD METHOD, WHATSAPP' : 'ALTE METHODE, WHATSAPP'}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2"><span className="material-symbols-outlined border border-red-400 rounded-full p-1">close</span> 
                                    {lang === 'tr' ? 'Karışıklık & Müşteri Kaybı' : lang === 'en' ? 'Confusion & Customer Loss' : 'Verwirrung & Kundenverlust'}
                                </h4>
                                <p className="text-slate-400 text-sm mb-6">
                                    {lang === 'tr' && 'Telefon veya mesajlaşma yoluyla gelen çoklu talepler aynı saate denk geldiğinde memnuniyetsizlik yaratır.'}
                                    {lang === 'en' && 'Multiple requests via phone or messaging for the same slot create dissatisfaction.'}
                                    {lang === 'de' && 'Mehrere Anfragen per Telefon oder Nachricht für denselben Zeitraum führen zu Unzufriedenheit.'}
                                </p>
                                
                                <div className="bg-black/40 rounded-xl p-4 border border-slate-700 h-[150px] overflow-hidden relative">
                                    <div className="space-y-4 pt-2">
                                        <div className="flex justify-between text-xs items-center bg-slate-800 p-2 rounded">
                                            <span className="text-slate-300">Müşteri A: "Salı 20:00 boş mu?"</span>
                                            <span className="text-slate-400">19:42</span>
                                        </div>
                                        <div className="flex justify-between text-xs items-center bg-slate-800 p-2 rounded border border-red-500/50">
                                            <span className="text-slate-300">Müşteri B: "Salı 20:00'yi ayırır mısın?"</span>
                                            <span className="text-slate-400">19:45</span>
                                        </div>
                                        <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center fade-in" style={{animationDelay: '1.5s', animationDuration: '3s', animationFillMode: 'both', animationIterationCount: 'infinite'}}>
                                            <span className="material-symbols-outlined text-4xl text-red-500 mb-2">event_busy</span>
                                            <p className="text-red-400 font-bold text-center px-4">
                                                {lang === 'tr' && 'Aynı Saat İki Kişiye Satıldı!'}
                                                {lang === 'en' && 'Same Slot Sold Twice!'}
                                                {lang === 'de' && 'Gleiche Zeit doppelt verkauft!'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  OUR SOLUTION ANIMATION  */}
                        <div className="glass-card p-6 md:p-8 rounded-[2rem] border-emerald-500/50 bg-slate-900/80 success-pulse relative h-[380px] flex flex-col justify-between">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-900 px-4 py-1 rounded-bl-xl rounded-tr-[2rem] text-xs font-black tracking-widest">
                                {lang === 'tr' ? 'BİZİM YAZILIMIMIZ' : lang === 'en' ? 'OUR SOFTWARE' : 'UNSERE SOFTWARE'}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2"><span className="material-symbols-outlined border border-emerald-400 rounded-full p-1">lock_clock</span> 
                                    {lang === 'tr' ? 'Reaktif Saat Kilitleme' : lang === 'en' ? 'Reactive Slot Locking' : 'Reaktive Zeitsperre'}
                                </h4>
                                <p className="text-slate-400 text-sm mb-6">
                                    {lang === 'tr' && 'Masaüstü ve mobil uyumlu arayüzden kullanıcı rezervasyon yaptığı an, o saat anında tüm dünyada kilitlenir.'}
                                    {lang === 'en' && 'The moment a user books from desktop or mobile, that slot is instantly locked for everyone else worldwide.'}
                                    {lang === 'de' && 'Sobald ein Benutzer über Desktop oder Mobile bucht, wird diese Zeit sofort weltweit für alle anderen gesperrt.'}
                                </p>
                                
                                <div className="bg-black/40 rounded-xl p-4 border border-slate-700 h-[150px] overflow-hidden relative">
                                    <div className="text-[10px] font-bold text-emerald-400 mb-3 uppercase flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> {lang === 'tr' ? 'Canlı Takvim' : lang === 'en' ? 'Live Calendar' : 'Live-Kalender'}
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1 bg-slate-800 border border-slate-700 rounded-lg p-2 text-center">
                                            <div className="text-xs text-white mb-1">19:00</div>
                                            <div className="text-[10px] text-slate-400">{lang === 'tr' ? 'Müsait' : lang === 'en' ? 'Available' : 'Frei'}</div>
                                        </div>
                                        <div className="flex-1 bg-emerald-900/30 border border-emerald-500 rounded-lg p-2 text-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-emerald-500/10"></div>
                                            <div className="text-xs text-emerald-400 font-bold mb-1">20:00</div>
                                            <div className="text-[10px] text-emerald-500">{lang === 'tr' ? 'Ödeme Bekleniyor (14:59)' : lang === 'en' ? 'Awaiting Payment (14:59)' : 'Wartet auf Zahlung (14:59)'}</div>
                                        </div>
                                        <div className="flex-1 bg-slate-800 border border-slate-700 rounded-lg p-2 text-center opacity-50">
                                            <div className="text-xs text-white mb-1">21:00</div>
                                            <div className="text-[10px] text-red-400">{lang === 'tr' ? 'Dolu' : lang === 'en' ? 'Booked' : 'Gebucht'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  SLIDE 4: OUR SOLUTION (Features)  */}
            <section id="slide-4" className="slide">
                <div className="max-w-6xl mx-auto w-full fade-in text-center mb-16">
                    <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        {lang === 'tr' ? 'Eksiksiz Özellikler' : lang === 'en' ? 'Complete Features' : 'Komplette Funktionen'}
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
                        {lang === 'tr' && 'Global Standartlarda B2C & B2B'}
                        {lang === 'en' && 'Global Standard B2C & B2B'}
                        {lang === 'de' && 'Globaler Standard B2C & B2B'}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto fade-in delay-1">
                    <div className="glass-card p-6 flex flex-col items-center text-center rounded-2xl">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 border border-emerald-500/50">
                            <span className="material-symbols-outlined text-emerald-400 text-3xl">payments</span>
                        </div>
                        <h4 className="font-bold text-white mb-2">Stripe & %0 Platform Komisyonu</h4>
                        <p className="text-slate-400 text-sm">
                            {lang === 'tr' && 'Ödemeler doğrudan Stripe/Pos hesabınıza düşer, aracı platform komisyonlarına veda edin.'}
                            {lang === 'en' && 'Payments go directly to your Stripe/Pos account, say goodbye to intermediary platform commissions.'}
                            {lang === 'de' && 'Zahlungen gehen direkt auf Ihr Stripe/Pos Konto, verabschieden Sie sich von Vermittlerprovisionen.'}
                        </p>
                    </div>

                    <div className="glass-card p-6 flex flex-col items-center text-center rounded-2xl">
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/50">
                            <span className="material-symbols-outlined text-blue-400 text-3xl">language</span>
                        </div>
                        <h4 className="font-bold text-white mb-2">{lang === 'tr' ? '5 Dilli Sistem' : lang === 'en' ? '5-Language System' : '5-Sprachiges System'}</h4>
                        <p className="text-slate-400 text-sm">
                            {lang === 'tr' && 'DE, EN, TR, AL, BHS. Tesisinizdeki tüm milletlerden rezervasyonu kendi ana dillerinde toplayın.'}
                            {lang === 'en' && 'DE, EN, TR, AL, BHS. Collect bookings from all nationalities in their native languages.'}
                            {lang === 'de' && 'DE, EN, TR, AL, BHS. Sammeln Sie Buchungen von allen Nationalitäten in ihren Muttersprachen.'}
                        </p>
                    </div>

                    <div className="glass-card p-6 flex flex-col items-center text-center rounded-2xl">
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/50">
                            <span className="material-symbols-outlined text-purple-400 text-3xl">local_play</span>
                        </div>
                        <h4 className="font-bold text-white mb-2">{lang === 'tr' ? 'İndirim & Kupon' : lang === 'en' ? 'Discount & Vouchers' : 'Rabatt & Gutscheine'}</h4>
                        <p className="text-slate-400 text-sm">
                            {lang === 'tr' && 'Kullan-at kodlar, Happy-Hour otomasyonu ve gece maçlarına özel fiyat varyasyonları.'}
                            {lang === 'en' && 'Disposable codes, Happy-Hour automation, and special pricing variations for night games.'}
                            {lang === 'de' && 'Einwegcodes, Happy-Hour-Automatisierung und spezielle Preisvariationen für Nachtspiele.'}
                        </p>
                    </div>

                    <div className="glass-card p-6 flex flex-col items-center text-center rounded-2xl">
                        <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 border border-yellow-500/50">
                            <span className="material-symbols-outlined text-yellow-500 text-3xl">security</span>
                        </div>
                        <h4 className="font-bold text-white mb-2">{lang === 'tr' ? 'Üst Düzey Güvenlik' : lang === 'en' ? 'High-Level Security' : 'Hohe Sicherheit'}</h4>
                        <p className="text-slate-400 text-sm">
                            {lang === 'tr' && 'Admin hesapları için TOTP (2FA), dışarıdan erişimi limitleyen rate limiter ve JWT Token koruması.'}
                            {lang === 'en' && 'TOTP (2FA) for admin accounts, rate limiters to block external attacks, and JWT Token protection.'}
                            {lang === 'de' && 'TOTP (2FA) für Admin-Konten, Rate-Limiter zur Abwehr externer Angriffe und JWT-Token-Schutz.'}
                        </p>
                    </div>
                </div>
            </section>

            {/*  SLIDE 5: ADMIN AND AUTOMATIONS  */}
            <section id="slide-5" className="slide bg-slate-900 border-t border-slate-800">
                <div className="max-w-6xl mx-auto w-full fade-in grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700 bg-[#111827]">
                        {/*  Mac frame  */}
                        <div className="bg-slate-900 border-b border-slate-800 h-8 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-4 text-[10px] text-slate-500">{lang === 'tr' ? 'Admin Dashboard' : 'Admin-Dashboard'}</span>
                        </div>
                        <div className="p-6 h-[400px] flex flex-col gap-4 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                                    <span className="text-xs text-slate-400 block mb-1">{lang === 'tr' ? 'Bu Ayki Rezervasyon' : lang === 'en' ? 'Bookings This Month' : 'Buchungen diesen Monat'}</span>
                                    <span className="text-2xl text-emerald-400 font-bold">142</span>
                                </div>
                                <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                                    <span className="text-xs text-slate-400 block mb-1">{lang === 'tr' ? 'Kazanılan Ciro (Komisyonsuz)' : lang === 'en' ? 'Earned Revenue (Zero Com.)' : 'Erwirtschafteter Umsatz'}</span>
                                    <span className="text-2xl text-white font-bold">€12.350</span>
                                </div>
                            </div>
                            
                            <div className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col justify-center relative overflow-hidden">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="material-symbols-outlined text-blue-400 text-3xl">manage_history</span>
                                    <div>
                                        <h4 className="text-white font-bold">{lang === 'tr' ? 'Tek Tıkla Stripe İadeleri' : lang === 'en' ? '1-Click Stripe Refunds' : '1-Klick Stripe-Rückerstattungen'}</h4>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm">
                                    {lang === 'tr' && 'Müşteri iptallerinde veya yağmur sebebiyle kort kapandığında, adminden tek bir tıkla para Stripe üzerinden eş zamanlı müşteriye iade edilir.'}
                                    {lang === 'en' && 'In case of customer cancellations or rainouts, funds are refunded to the customer synchronously via Stripe with a single click from the admin.'}
                                    {lang === 'de' && 'Bei Stornierungen durch Kunden oder bei Regen werden Gelder mit einem einzigen Klick im Admin-Bereich synchron über Stripe an den Kunden zurückerstattet.'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                            {lang === 'tr' && <>Tesisinize Özel<br />Komuta Merkezi</>}
                            {lang === 'en' && <>Your Facility's<br />Command Center</>}
                            {lang === 'de' && <>Das Kontrollzentrum<br />Ihrer Anlage</>}
                        </h2>
                        <p className="text-slate-300 text-lg mb-8">
                            {lang === 'tr' && 'Arka planda Java ve Spring Boot gücü ile tesisinizdeki tüm verileri dilediğiniz gibi analiz edin, fiyatları anlık güncelleyin.'}
                            {lang === 'en' && 'Analyze all data in your facility as you wish, update prices instantly, powered by Java and Spring Boot in the background.'}
                            {lang === 'de' && 'Analysieren Sie alle Daten in Ihrer Anlage nach Belieben und aktualisieren Sie die Preise sofort, angetrieben von Java und Spring Boot im Hintergrund.'}
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-emerald-500 mt-1 text-3xl">sports_soccer</span>
                                <div>
                                    <h4 className="font-bold text-white text-xl">{lang === 'tr' ? 'Çoklu Kort ve Fiyatlandırma' : lang === 'en' ? 'Multi-Court & Pricing' : 'Mehrere Plätze & Preisgestaltung'}</h4>
                                    <p className="text-sm text-slate-400 mt-1">
                                        {lang === 'tr' && 'Büyük kort için ayrı, küçük kort için ayrı veya tenis - basketbol için ayrı zaman dilimleri ve fiyat politikaları belirleyin.'}
                                        {lang === 'en' && 'Set separate time slots and pricing policies for large, small, or tennis vs. basketball courts.'}
                                        {lang === 'de' && 'Legen Sie separate Zeitfenster und Preisrichtlinien für große, kleine oder Tennis- vs. Basketballplätze fest.'}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/*  SLIDE 6: THE CLINCHER / INVESTMENT COMPARISON  */}
            <section id="slide-6" className="slide bg-slate-900 border-t border-slate-800">
                <div className="max-w-6xl mx-auto w-full fade-in">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">{lang === 'tr' ? 'Karlılık Analizi' : lang === 'en' ? 'Profitability Analysis' : 'Rentabilitätsanalyse'}</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            {lang === 'tr' && 'Kira ve komisyon modeline karşı anahtar teslim çözüm.'}
                            {lang === 'en' && 'Subscription and commission model vs Turnkey solution.'}
                            {lang === 'de' && 'Abo- und Provisionsmodell vs Schlüsselfertige Lösung.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                        {/*  Eversports / Platforms  */}
                        <div className="relative glass-card rounded-[2rem] p-8 md:p-12 pb-16 border-slate-700">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="material-symbols-outlined text-red-400 text-4xl">warning</span>
                                <h3 className="text-3xl font-bold text-slate-300">
                                    {lang === 'tr' ? 'Abonelik / Komisyon Modeli' : lang === 'en' ? 'Subscription / Comm. Model' : 'Abo / Provisionsmodell'}
                                </h3>
                            </div>
                            
                            <ul className="space-y-4 text-slate-400 mb-8 pb-8 border-b border-slate-700 font-medium">
                                <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> {lang === 'tr' ? 'Platform kurulum & aylık bakım ücreti' : lang === 'en' ? 'Setup & Monthly maintenance fee' : 'Aufbau & Monatliche Wartungsgebühr'}</li>
                                <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> {lang === 'tr' ? '%10 - %15 arası Rezervasyon Komisyonu' : lang === 'en' ? '10% - 15% Booking Commission' : '10% - 15% Buchungsprovision'}</li>
                                <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> {lang === 'tr' ? 'Data platforma aittir (Doğrudan pazarlama yok)' : lang === 'en' ? 'Data belongs to platform (No direct marketing)' : 'Daten gehören der Plattform (Kein Direktmarketing)'}</li>
                                <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> {lang === 'tr' ? 'Esnek olmayan fiyat varyasyonları' : lang === 'en' ? 'Inflexible price variations' : 'Unflexible Preisvariationen'}</li>
                            </ul>
                            <div className="text-center">
                                <p className="text-sm text-slate-500 uppercase tracking-widest mb-2 font-bold">{lang === 'tr' ? 'Uzun Vadeli Tahmini Gider' : lang === 'en' ? 'Long-term Est. Cost' : 'Langfristig geschätzte Kosten'}</p>
                                <p className="text-4xl font-black text-red-400 mb-1">{lang === 'tr' ? 'Giderek Artan Maliyet' : lang === 'en' ? 'Increasing Cost' : 'Steigende Kosten'}</p>
                                <p className="text-xs text-slate-500 mt-2">{lang === 'tr' ? 'Sistemden çıktığınızda hiçbir şeyiniz kalmaz.' : lang === 'en' ? 'When you leave, you keep nothing.' : 'Wenn Sie gehen, behalten Sie nichts.'}</p>
                            </div>
                        </div>

                        {/*  Custom  */}
                        <div className="relative bg-emerald-900/40 rounded-[2rem] p-8 md:p-12 pb-16 border-2 border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.15)] transform md:-translate-y-6 z-10 backdrop-blur-xl">
                            <div className="absolute -top-5 right-8 bg-emerald-500 text-slate-900 px-6 py-2 rounded-full text-xs font-black border border-emerald-400 shadow-lg">{lang === 'tr' ? 'TAM MÜLKİYET' : lang === 'en' ? 'FULL OWNERSHIP' : 'VOLLES EIGENTUM'}</div>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="material-symbols-outlined text-emerald-400 text-4xl">workspace_premium</span>
                                <h3 className="text-3xl font-bold text-white">{lang === 'tr' ? 'Bizim Çözümümüz' : lang === 'en' ? 'Our Solution' : 'Unsere Lösung'}</h3>
                            </div>
                            
                            <ul className="space-y-4 text-slate-300 mb-8 pb-8 border-b border-emerald-500/30 font-medium">
                                <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0">✓</span> {lang === 'tr' ? 'Tek seferlik mülkiyet ve kurulum bedeli' : lang === 'en' ? 'One-time ownership and setup fee' : 'Einmalige Eigentums- und Einrichtungsgebühr'}</li>
                                <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0">✓</span> {lang === 'tr' ? 'SIFIR Platform komisyonu (Tüm kâr sizin)' : lang === 'en' ? 'ZERO Platform commission (All profit is yours)' : 'NULL Plattformprovision (Reingewinn ist Ihr)'}</li>
                                <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0">✓</span> {lang === 'tr' ? 'Müşteri verisi sizin sunucunuzda güvendedir' : lang === 'en' ? 'Customer data is secure on your server' : 'Kundendaten sind sicher auf Ihrem Server'}</li>
                                <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0 opacity-70 border-b border-emerald-500/30 border-dashed">{lang === 'tr' ? 'Çok düşük sabit aylık sunucu maliyeti' : lang === 'en' ? 'Very low fixed monthly server cost' : 'Sehr niedrige feste monatliche Serverkosten'}</span></li>
                            </ul>
                            <div className="text-center">
                                <p className="text-sm text-emerald-500 uppercase tracking-widest mb-2 font-bold">{lang === 'tr' ? 'Etki' : lang === 'en' ? 'Impact' : 'Auswirkung'}</p>
                                <p className="text-4xl font-black text-white">{lang === 'tr' ? 'Kendini Amorti Eder' : lang === 'en' ? 'Pays for Itself' : 'Amortisiert sich'}</p>
                                <p className="text-xs text-emerald-400 mt-2">{lang === 'tr' ? 'Cironuz arttıkça gideriniz artmaz.' : lang === 'en' ? 'As your revenue grows, your expenses do not.' : 'Mit steigendem Umsatz steigen Ihre Ausgaben nicht.'}</p>
                            </div>
                        </div>
                    </div>

                    {/*  CTA Buttons  */}
                    <div className="mt-20 text-center flex flex-col md:flex-row items-center justify-center gap-6">
                        <a onClick={handleWhatsApp} href="#" target="_blank" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-3 w-full md:w-auto justify-center">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            {lang === 'tr' ? 'WhatsApp Üzerinden Danışın' : lang === 'en' ? 'Consult via WhatsApp' : 'Beratung über WhatsApp'}
                        </a>
                        <a href="mailto:furkanbgunaydin@gmail.com" className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 font-bold py-4 px-10 rounded-full transition-all flex items-center gap-3 w-full md:w-auto justify-center">
                            <span className="material-symbols-outlined">mail</span>
                            {lang === 'tr' ? 'Bize E-Posta Gönderin' : lang === 'en' ? 'Email Us' : 'Senden Sie uns eine E-Mail'}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
