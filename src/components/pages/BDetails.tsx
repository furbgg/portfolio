import React, { useEffect } from 'react';

export default function BDetails() {
    useEffect(() => {
        const dots = document.querySelectorAll('.b-details-page .nav-dot');
        const sections = document.querySelectorAll('.b-details-page .slide');

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
                            dotElement.style.background = '#e8d5d1';
                        } else {
                            dotElement.style.background = 'rgba(45,55,72,0.1)';
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    const handleWhatsApp = (e: React.MouseEvent) => {
        e.preventDefault();
        const number = '+436764732159';
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            window.open('https://wa.me/436764732159', '_blank');
        } else {
            navigator.clipboard.writeText(number).then(() => {
                alert('Numara kopyalandı: ' + number);
            });
        }
    };

    return (
        <div className="b-details-page">
            <div className="custom-nav-dots hidden md:flex">
                <a href="#slide-1" className="nav-dot" title="Giriş"></a>
                <a href="#slide-2" className="nav-dot" title="2"></a>
                <a href="#slide-3" className="nav-dot" title="3"></a>
                <a href="#slide-4" className="nav-dot" title="4"></a>
                <a href="#slide-5" className="nav-dot" title="5"></a>
                <a href="#slide-6" className="nav-dot" title="6"></a>
            </div>
            

    

    {/*  SLIDE 1: HOOK (Instagram to Global)  */}
    <section id="slide-1" className="slide bg-cover bg-center" style={{backgroundImage: 'linear-gradient(to right, rgba(250, 249, 248, 0.95) 40%, rgba(250, 249, 248, 0.4)), url("https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80")'}}>
        <div className="max-w-6xl w-full fade-in relative z-10 mx-auto px-4 lg:px-0">
            <span className="inline-block py-1 px-4 rounded-full bg-b-brand-blush text-b-brand-slate font-medium text-xs tracking-[0.3em] uppercase mb-8 border border-b-brand-rose">
                Avusturya Moda ve Butik Sektörüne Özel
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-b-brand-slate">
                Instagram Butiğinden<br /><span className="text-b-brand-gold italic">Global Markaya.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-light mb-12 max-w-2xl leading-relaxed">
                Yüzlerce mesaja tek tek cevap vermekten yorulmadınız mı? Takipçilerinizi, Avrupa'nın her yerine satış yapan profesyonel, şık ve size ait bir e-ticaret mağazasıyla karşılayın.
            </p>
            
            <a href="#slide-2" className="inline-flex items-center gap-2 bg-b-brand-slate hover:bg-black text-white font-medium py-4 px-10 rounded-full transition-all tracking-wide">
                Dönüşümü Keşfedin <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
        </div>
    </section>

    {/*  SLIDE 2: THE INSTAGRAM/DM PROBLEM  */}
    <section id="slide-2" className="slide bg-b-brand-soft">
        <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-16 fade-in">
                <h2 className="font-serif text-3xl md:text-5xl text-b-brand-slate mb-4">DM Üzerinden Satışın <br />Kayıp Maliyeti</h2>
                <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">Sadık takipçileriniz var ama siparişleri yönetmek bir kaosa dönüştü.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-card p-10 rounded-[2rem] shadow-sm fade-in delay-1 hover:-translate-y-2 transition-transform text-center">
                    <span className="material-symbols-outlined text-rose-400 text-4xl mb-6">forum</span>
                    <h3 className="text-lg font-bold mb-4 text-b-brand-slate uppercase tracking-wide text-sm">"Beden Kaldı Mı?"</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Müşterilerinize manuel olarak stok, fiyat ve kargo süresi cevaplamaktan asıl işinize (ürün bulmaya) odaklanamıyorsunuz. Gece 03:00'te gelen siparişi kaçırıyorsunuz.</p>
                </div>
                
                <div className="glass-card p-10 rounded-[2rem] shadow-sm fade-in delay-1 hover:-translate-y-2 transition-transform text-center">
                    <span className="material-symbols-outlined text-slate-400 text-4xl mb-6">public_off</span>
                    <h3 className="text-lg font-bold mb-4 text-b-brand-slate uppercase tracking-wide text-sm">Güven ve Prestij Eksikliği</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Avusturya veya Almanya'dan sizi yeni keşfeden bir müşteri, profesyonel bir web adresiniz (Domain) yoksa ve sadece "IBAN'a havale" istiyorsanız alışverişten vazgeçer.</p>
                </div>
                
                <div className="glass-card p-10 rounded-[2rem] shadow-sm fade-in delay-2 hover:-translate-y-2 transition-transform text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-b-brand-rose opacity-10"></div>
                    <span className="material-symbols-outlined text-b-brand-gold text-4xl mb-6 relative z-10">language</span>
                    <h3 className="text-lg font-bold mb-4 text-b-brand-slate uppercase tracking-wide text-sm relative z-10">Global Yurtdışı Sınırı</h3>
                    <p className="text-slate-600 text-sm leading-relaxed relative z-10">Takipçilerinizin birçoğu yurtdışında. Ancak DM üzerinden kargo parası anlatmak, çeviri yapmak veya Euro ödemesi almak çok zahmetli. Potansiyel cironuzun %60'ını geri çeviriyorsunuz.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  SLIDE 3: WHAT WE OFFER (Elegance & Automation)  */}
    <section id="slide-3" className="slide bg-b-brand-slate text-b-brand-soft">
        <div className="max-w-6xl mx-auto w-full fade-in flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-b-brand-rose to-b-brand-gold opacity-10 blur-2xl rounded-full"></div>
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80" alt="Chic Fashion Concept" className="rounded-t-[10rem] rounded-b-[2rem] object-cover w-full h-[600px] border border-slate-700 relative z-10 shadow-2xl" />
                {/*  Floating Element  */}
                <div className="absolute -right-8 bottom-12 bg-white text-slate-800 p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 fade-in delay-2">
                    <span className="material-symbols-outlined text-b-brand-gold">shopping_bag</span>
                    <div>
                        <div className="text-xs text-slate-500">Avusturya -> Almanya</div>
                        <div className="font-bold text-sm">2 Sipariş Uyurken Alındı</div>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/2">
                <span className="text-b-brand-rose font-medium tracking-[0.2em] uppercase text-xs mb-4 block">7/24 Otomatik Akış</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-8">Uyumadığınız Bir Mağaza Deneyimi</h2>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-5">
                        <div className="mt-1"><span className="material-symbols-outlined text-b-brand-gold text-3xl">auto_awesome</span></div>
                        <div>
                            <h4 className="font-bold text-lg text-b-brand-rose mb-1">Müşteriniz Kendisi Alışveriş Yapsın</h4>
                            <p className="text-sm text-slate-400">Ürün bedenleri, renkleri ve stok durumu sistemdedir. Ziyaretçi beğendiği elbiseyi sepete atar, kargo bilgilerini girer ve siz hiç müdahale etmeden sipariş onayı telefonunuza düşer.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="mt-1"><span className="material-symbols-outlined text-b-brand-gold text-3xl">local_mall</span></div>
                        <div>
                            <h4 className="font-bold text-lg text-b-brand-rose mb-1">Sepet Rezervasyonu (Fast-Fashion)</h4>
                            <p className="text-sm text-slate-400">Butiklerde son kalan 1 adet elbiseyi aynı anda 3 kişinin sepete atması büyük sıkıntıdır. Sistemimiz sepete eklenen "Son Beden" elbiseyi 15 dakika boyunca sadece o kişiye rezerve eder.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="mt-1"><span className="material-symbols-outlined text-b-brand-gold text-3xl">translate</span></div>
                        <div>
                            <h4 className="font-bold text-lg text-b-brand-rose mb-1">3 Dil, Dünyanın Her Yerine Kargo</h4>
                            <p className="text-sm text-slate-400">Almanca, İngilizce ve Türkçe olarak siteniz çalışır. Müşteri İsviçre'den de girse dili kendine göre görür, adresini kolayca şık tasarımla girer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  SLIDE 4: ADMIN / EASE OF USE  */}
    <section id="slide-4" className="slide">
        <div className="max-w-6xl mx-auto w-full fade-in">
            <div className="text-center mb-16">
                <span className="text-b-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Kod Bilmenize Gerek Yok</span>
                <h2 className="font-serif text-4xl md:text-5xl text-b-brand-slate mb-6">Instagram Kullanmak Kadar Kolay<br />Bir Yönetim Paneli</h2>
            </div>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-b-brand-blush relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-b-brand-blush rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                
                <div className="grid md:grid-cols-3 gap-12 relative z-10">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                            <span className="material-symbols-outlined text-slate-600">add_box</span>
                        </div>
                        <h4 className="font-bold text-b-brand-slate">Telefondan Ürün Ekleme</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">Depoya yeni gelen ürünün fotoğrafını çekin, fiyatını ve bedenini seçip "Yayınla"ya basın. Saniyeler içinde vitrinde.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                            <span className="material-symbols-outlined text-slate-600">notifications_active</span>
                        </div>
                        <h4 className="font-bold text-b-brand-slate">Geciken Kargo Uyarısı</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">Pazartesi alınan siparişi Çarşamba oldu kargoya vermediniz mi? Telefonunuza "Kargo Gecikti!" acil kırmızı uyarısı düşer.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                            <span className="material-symbols-outlined text-slate-600">brush</span>
                        </div>
                        <h4 className="font-bold text-b-brand-slate">Anasayfanızı Siz Tasarlayın</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">"İlkbahar Koleksiyonu" banner görselinizi kodsuz sürükle-bırak ile değiştirin. Kampanyalarınızı ajanslara muhtaç olmadan yönetin.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  SLIDE 5: PRICING (The Clincher)  */}
    <section id="slide-5" className="slide bg-white relative">
        <div className="absolute inset-0 bg-b-brand-rose bg-opacity-5"></div>
        <div className="max-w-5xl mx-auto w-full fade-in relative z-10">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-b-brand-slate mb-4">Uzun Vadeli ve Şeffaf Ortaklık</h2>
                <p className="text-slate-500 text-lg font-light">Hazır platformların öngörülemeyen bütçelerine karşın, markanızın büyümesini destekleyen net fiyatlandırma modelimiz.</p>
            </div>

            <div className="bg-b-brand-slate text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-slate-700">
                {/*  Gold ribbon  */}
                <div className="absolute -right-16 top-10 bg-b-brand-gold text-b-brand-slate font-bold text-[10px] tracking-widest py-1 px-16 transform rotate-45 uppercase">
                    ŞEFFAF FİYATLAMA
                </div>
                
                <h3 className="font-serif text-2xl mb-8 border-b border-slate-700 pb-4">Şık Mağaza Cüzi Yatırım</h3>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-rose-300 font-medium mb-4 uppercase tracking-widest text-xs">Geleneksel Platformlar (Örn. Shopify)</h4>
                        <ul className="space-y-3 opacity-60">
                            <li className="flex items-center gap-2 text-sm"><span className="text-red-400">✕</span> Yıllık Abonelik: Min. 1200€ / Yıl Sürekli Gider</li>
                            <li className="flex items-center gap-2 text-sm"><span className="text-red-400">✕</span> Yasal Eklentiler (GDPR/Abmahnung Koruması): Ekstra Aylık Maliyet</li>
                            <li className="flex items-center gap-2 text-sm"><span className="text-red-400">✕</span> Çifte Komisyon: Hem ödeme altyapısı hem Shopify ekstra ciro keser</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-b-brand-gold font-medium mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                            <span className="material-symbols-outlined text-base">verified</span> Bizim Teklifimiz
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-emerald-400">task_alt</span>
                                <div>
                                    <span className="block font-bold">1.000€ - 1.500€</span>
                                    <span className="text-xs text-slate-400">Tek Seferlik Kurulum (Ebedi sizin)</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-emerald-400">task_alt</span>
                                <div>
                                    <span className="block font-bold">Aylık 75€'dan Başlayan Bakım</span>
                                    <span className="text-xs text-slate-400">Tüm sunucu, güvenlik ve kesintisiz destek ücreti dahildir.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-emerald-400">task_alt</span>
                                <div>
                                    <span className="block font-bold">Çifte Komisyona Son</span>
                                    <span className="text-xs text-slate-400">Shopify gibi "Platforma Özel" ekstra ciro haraçları ödemezsiniz. Sadece uluslararası güvenli aracı olan Stripe kendi küçük kesintisini yapar.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  SLIDE 6: CALL TO ACTION  */}
    <section id="slide-6" className="slide bg-b-brand-blush border-t border-b-brand-rose">
        <div className="max-w-4xl mx-auto w-full fade-in text-center">
            <span className="material-symbols-outlined text-b-brand-gold text-5xl mb-6 bounce">diamond</span>
            <h2 className="font-serif text-4xl md:text-6xl text-b-brand-slate mb-6 leading-tight">Markanızı Birlikte<br />Geleceğe Taşıyalım.</h2>
            <p className="text-slate-600 text-lg mb-12 font-light">Instagram butiğinden, Avrupalıların saygı duyduğu şık bir e-ticaret markasına geçiş yapmak düşündüğünüzden çok daha kolay ve uygun maliyetli.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a onClick={handleWhatsApp} href="#" target="_blank" className="bg-green-600 hover:bg-green-500 text-white font-medium py-4 px-8 rounded-full transition-all tracking-wide shadow-xl hover:shadow-green-500/30 flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp'tan İletişime Geç
                </a>
                <a href="mailto:furkanbgunaydin@gmail.com" className="border-2 border-b-brand-slate text-b-brand-slate hover:bg-b-brand-slate hover:text-white font-medium py-4 px-8 rounded-full transition-all tracking-wide shadow-lg flex items-center gap-3">
                    <span className="material-symbols-outlined">mail</span>
                    E-Posta Gönder
                </a>
            </div>
            <p className="mt-8 text-xs text-slate-400">Kurulum 3-6 hafta içerisinde tamamlanır, Avusturya standartlarına %100 uyumludur.</p>
        </div>
    </section>

    

        </div>
    );
}
