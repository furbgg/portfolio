import React, { useEffect } from 'react';

export default function MDetails() {
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
        <div className="m-details-page">
            <div className="custom-nav-dots hidden md:flex">
                <a href="#slide-1" className="nav-dot" title="Giriş"></a>
                <a href="#slide-2" className="nav-dot" title="2"></a>
                <a href="#slide-3" className="nav-dot" title="3"></a>
                <a href="#slide-4" className="nav-dot" title="4"></a>
                <a href="#slide-5" className="nav-dot" title="5"></a>
                <a href="#slide-6" className="nav-dot" title="6"></a>
            </div>
            

    

    {/*  SLIDE 1: HOOK (Back to original style)  */}
    <section id="slide-1" className="slide bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80")'}}>
        <div className="max-w-6xl mx-auto w-full fade-in relative z-10 text-center lg:text-left">
            <span className="inline-block py-1 px-4 rounded-full bg-m-brand-gold/20 text-m-brand-gold font-bold text-sm tracking-widest uppercase mb-8 border border-m-brand-gold/30">
                Premium Mobilya Sektörüne Özel
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight font-bold">
                Kiralık Değil,<br /><span className="gold-gradient-text">Size Ait</span> E-Ticaret.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-3xl leading-relaxed mx-auto lg:mx-0">
                Avusturya ve Avrupa pazarı için yasal olarak kusursuz, SEO dostu ve "aylık gizli masrafları olmayan" kendi lisanslı mağazanıza geçiş yapın.
            </p>
            
            <a href="#slide-2" className="inline-flex items-center gap-2 bg-m-brand-gold hover:bg-m-brand-goldlight text-m-brand-900 font-bold py-4 px-8 rounded-full transition-all mt-4">
                Shopify vs Özel Altyapı <span className="material-symbols-outlined">arrow_downward</span>
            </a>
        </div>
    </section>

    {/*  SLIDE 2: THE SHOPIFY TRAP  */}
    <section id="slide-2" className="slide">
        <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-16 fade-in">
                <h2 className="font-serif text-4xl md:text-6xl gold-gradient-text mb-4">Hazır Sistem İllüzyonu</h2>
                <p className="text-slate-400 text-lg">Platformlar başta ucuz görünür ama Avusturya perakendecisi için görünmez giderler devasadır.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-card p-8 rounded-3xl fade-in delay-1">
                    <span className="material-symbols-outlined text-red-400 text-4xl mb-4">money_off</span>
                    <h3 className="text-xl font-bold mb-3 text-white">Komisyon ve "App" Kiraları</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Çoklu dil, KDV faturaları, yasal kargo süreçleri ve varyant uzantıları derken aylık mecburi <strong>uygulama kiraları 100€'yu geçer.</strong> Ayrıca kendi ödeme sisteminizi kullanmazsanız her satışta cironuzdan komisyon kesilir.</p>
                </div>
                
                <div className="glass-card p-8 rounded-3xl fade-in delay-1">
                    <span className="material-symbols-outlined text-orange-400 text-4xl mb-4">speed</span>
                    <h3 className="text-xl font-bold mb-3 text-white">Yüklenen Eklentiler = Hız ve SEO Çöküşü</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Shopify'a kurduğunuz her eklenti (App), müşteri tarafına yüklenen gereksiz kod demektir. Siteniz saniyelerce geç açılır, Google sıralamalarında lokal (GEO) aramalarda rakiplerinizin arkasında kalırsınız.</p>
                </div>
                
                <div className="glass-card p-8 rounded-3xl fade-in delay-2">
                    <span className="material-symbols-outlined text-yellow-500 text-4xl mb-4">gavel</span>
                    <h3 className="text-xl font-bold mb-3 text-white">DACH Bölgesi Abmahnung Riski</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Avusturya'da DSGVO, Impressum ve sepet onayı kuralları çok serttir. Shopify bunları varsayılan olarak desteklemez. Uyumsuz bir checkout ekranı binlerce euroluk "Abmahnung" (Yasal İhtar) cezalarına yol açabilir.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  SLIDE 3: DETAILED FURNITURE ANIMATION  */}
    <section id="slide-3" className="slide bg-m-brand-800 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full fade-in h-full flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white text-center">Neden Mobilyaya <span className="text-red-400">Uymaz?</span></h2>
            <p className="text-slate-300 text-lg mb-12 text-center max-w-2xl mx-auto">Tişört satmakla 1500€'luk çok fonksiyonlu bir L-Koltuk satmanın altyapısı bir olamaz.</p>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*  THE SHOPIFY LIMITATION ANIMATION  */}
                <div className="glass-card p-6 md:p-8 rounded-[2rem] border-red-500/30 bg-slate-900/80 warning-pulse relative h-[450px] flex flex-col justify-between">
                    <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-[2rem] text-xs font-bold tracking-widest">GELENEKSEL (SHOPIFY)</div>
                    <div>
                        <h4 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2"><span className="material-symbols-outlined border border-red-400 rounded-full p-1">close</span> Varyant (Seçenek) Sınırı Tuzağı</h4>
                        <p className="text-slate-400 text-sm mb-6">Geleneksel sistemler maksimum 3 opsiyon (ör: Renk, Beden) ve <strong className="text-white">100 varyant</strong> sınırına sahiptir.</p>
                        
                        {/*  Animated Box showing the limit hit  */}
                        <div className="bg-black/40 rounded-xl p-4 border border-slate-700 h-[180px] overflow-hidden relative">
                            <div className="text-xs text-slate-500 mb-2 font-mono border-b border-slate-700 pb-2">Ürün Düzenleyici > Varyantlar</div>
                            
                            <div className="space-y-4 pt-2">
                                <div className="flex justify-between text-xs items-center bg-slate-800 p-2 rounded">
                                    <span className="text-slate-300">Opsiyon 1: Kumaş Rengi</span>
                                    <span className="text-emerald-400">Eklendi (12 Renk)</span>
                                </div>
                                <div className="flex justify-between text-xs items-center bg-slate-800 p-2 rounded">
                                    <span className="text-slate-300">Opsiyon 2: Ayak Tipi (Ahşap/Metal)</span>
                                    <span className="text-emerald-400">Eklendi (4 Tip)</span>
                                </div>
                                <div className="flex justify-between text-xs items-center bg-slate-800 p-2 rounded">
                                    <span className="text-slate-300">Opsiyon 3: Yön (Sağ/Sol)</span>
                                    <span className="text-emerald-400">Eklendi (2 Yön)</span>
                                </div>
                                
                                {/*  The Error Pop-up Animation  */}
                                <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center fade-in" style={{animationDelay: '2s', animationDuration: '3s', animationFillMode: 'both', animationIterationCount: 'infinite'}}>
                                    <span className="material-symbols-outlined text-4xl text-red-500 mb-2">error</span>
                                    <p className="text-red-400 font-bold text-center px-4">HATA: Varyant Sınırı Aşıldı (96/100)!</p>
                                    <p className="text-[10px] text-slate-400 mt-2 text-center">4. Opsiyon (Kırlent Rengi) Eklenemez.<br />Aylık 39$ 'Varyant Eklentisi' Satın Alın.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  OUR SOLUTION ANIMATION  */}
                <div className="glass-card p-6 md:p-8 rounded-[2rem] border-m-brand-gold/50 bg-slate-900/80 success-pulse relative h-[450px] flex flex-col justify-between">
                    <div className="absolute top-0 right-0 bg-m-brand-gold text-m-brand-900 px-4 py-1 rounded-bl-xl rounded-tr-[2rem] text-xs font-bold tracking-widest pl-6">BİZİM MİMARİMİZ</div>
                    <div>
                        <h4 className="text-2xl font-bold text-m-brand-gold mb-6 flex items-center gap-2"><span className="material-symbols-outlined border border-m-brand-gold rounded-full p-1">done_all</span> Sınırsız Kombinasyon Özgürlüğü</h4>
                        <p className="text-slate-400 text-sm mb-6">Mimarimiz mobilya dinamiklerine göre hazırlandı. Her bir L-Koltuk için <strong className="text-white">sınırsız (1000+) varyant</strong> konfigürasyonunu anında yönetirsiniz.</p>
                        
                        {/*  Animated UI showing unlimited scrolling/building  */}
                        <div className="bg-black/40 rounded-xl p-4 border border-slate-700 h-[180px] overflow-hidden relative">
                            <div className="text-[10px] font-bold text-m-brand-gold mb-3 uppercase flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Müşteri Konfigürasyon Ekranı
                            </div>
                            
                            <div className="h-[120px] overflow-hidden relative">
                                {/*  Infinite scroll animation  */}
                                <div className="animate-slide-up-loop space-y-3">
                                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 px-3 text-xs flex justify-between">
                                        <span className="text-white">1. Kumaş Seçimi</span><span className="text-m-brand-gold">Kadife Mavi</span>
                                    </div>
                                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 px-3 text-xs flex justify-between">
                                        <span className="text-white">2. Uzanma Yönü</span><span className="text-m-brand-gold">Sağ Köşe</span>
                                    </div>
                                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 px-3 text-xs flex justify-between">
                                        <span className="text-white">3. Ayak Cilası</span><span className="text-m-brand-gold">Mat Ceviz</span>
                                    </div>
                                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 px-3 text-xs flex justify-between">
                                        <span className="text-white">4. Ekstra Kırlent</span><span className="text-m-brand-gold">+2 Adet Ekru</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent"></div>
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
            <span className="text-m-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Çözüm Bizde</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Size Özel Mülk: Özel E-Ticaret Altyapımız</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Biz abonelikle kiralama yapmıyoruz; komisyonsuz, anahtar teslim "Mülk" satıyoruz.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto fade-in delay-1">
            <div className="glass-card p-6 flex flex-col items-center text-center rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 border border-emerald-500/50">
                    <span className="material-symbols-outlined text-emerald-400 text-3xl">done_all</span>
                </div>
                <h4 className="font-bold text-white mb-2">Abmahnung Korumalı</h4>
                <p className="text-slate-400 text-sm">Avusturya yasalarına (DSGVO Gizlilik, sepet yasal onayı "Zahlungspflichtig bestellen") %100 uyumlu kodlanmıştır.</p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/50">
                    <span className="material-symbols-outlined text-blue-400 text-3xl">language</span>
                </div>
                <h4 className="font-bold text-white mb-2">Native Çoklu Dil</h4>
                <p className="text-slate-400 text-sm">Almanca, İngilizce ve Türkçe varsayılan olarak entegredir. Mobilya satarken çok uluslu müşterilerinize anında hitap edersiniz.</p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/50">
                    <span className="material-symbols-outlined text-purple-400 text-3xl">lock</span>
                </div>
                <h4 className="font-bold text-white mb-2">%100 Sizin Veriniz</h4>
                <p className="text-slate-400 text-sm">Müşteri listeniz, cirolarınız ve sipariş analizleriniz devasa SaaS sunucularında değil, sadece sizin erişiminizdeki kapalı serverda barınır.</p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-m-brand-gold/20 flex items-center justify-center mb-4 border border-m-brand-gold/50">
                    <span className="material-symbols-outlined text-m-brand-gold text-3xl">calculate</span>
                </div>
                <h4 className="font-bold text-white mb-2">Çifte Komisyona Son</h4>
                <p className="text-slate-400 text-sm">Shopify gibi platformlara ekstra ciro payı ödemezsiniz. Sadece standart ödeme altyapısı (Stripe vs.) kesintisi mevcuttur.</p>
            </div>
        </div>
    </section>

    {/*  SLIDE 5: ADMIN AND AUTOMATIONS  */}
    <section id="slide-5" className="slide bg-m-brand-800">
        <div className="max-w-6xl mx-auto w-full fade-in grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700 bg-[#111827]">
                {/*  Mac frame  */}
                <div className="bg-slate-900 border-b border-slate-800 h-8 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-[10px] text-slate-500">Admin Dashboard</span>
                </div>
                {/*  Fake Admin Content  */}
                <div className="p-6 h-[400px] flex flex-col gap-4 relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                            <span className="text-xs text-slate-400 block mb-1">Aylık Ciro</span>
                            <span className="text-2xl text-emerald-400 font-bold">€34.250,<sup>00</sup></span>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">
                            <span className="text-xs text-slate-400 block mb-1">Açık Siparişler</span>
                            <span className="text-2xl text-white font-bold">12</span>
                        </div>
                    </div>
                    
                    {/*  Lojistik Uyari Animasyonu  */}
                    <div className="flex-1 bg-slate-800 border-2 border-red-500/20 rounded-xl p-4 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="material-symbols-outlined text-red-500 text-3xl animate-pulse">local_shipping</span>
                            <div>
                                <h4 className="text-white font-bold">Lojistik Kargo Gecikme Uyarısı</h4>
                                <p className="text-xs text-red-300">ORD-9921 Nolu Sipariş - "Sevk Edildi" uyarısı verilmedi.</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm">Sistem, ödemesi tamamlanıp <strong className="text-white">24-48 saat boyunca kargoya verilmeyen</strong> ürünleri takip eder ve alarm verir. Müşteri sinirlenmeden önce müdahale edersiniz.</p>
                    </div>
                </div>
            </div>

            <div className="order-1 lg:order-2">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Tam Bağımsız<br />Yönetim Gücü</h2>
                <p className="text-slate-300 text-lg mb-8">Tüm anasayfa vitrin yönetimini ve siparişlerinizi dışarıdan ekstra destek almadan yönetin.</p>

                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-m-brand-gold mt-1 text-3xl">view_carousel</span>
                        <div>
                            <h4 className="font-bold text-white text-xl">Dinamik Anasayfa Yönetimi</h4>
                            <p className="text-sm text-slate-400 mt-1">Yaz kampanyası mı var? Anasayfanızdaki afişleri, ürün bloklarını panelden saniyeler içinde değiştirin. Yazılım ajanslarına ek bütçe ayırmanıza gerek kalmaz.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-m-brand-gold mt-1 text-3xl">timer</span>
                        <div>
                            <h4 className="font-bold text-white text-xl">Sepet Rezervasyon Zekası</h4>
                            <p className="text-sm text-slate-400 mt-1">Stoktaki son yatak odası takımını sepete atan müşteri için sistem stoğu 15 dk bloke eder. "Ürün tükendi" hatasıyla satış kaçırmazsınız.</p>
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
                <h2 className="font-serif text-4xl md:text-6xl gold-gradient-text mb-4">Uzun Vadeli Yatırım Analizi</h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">Abonelik tabanlı hazır sistemler ile mülkiyeti sizde olan modelimiz arasındaki finansal öngörü.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                {/*  Shopify  */}
                <div className="relative glass-card rounded-[2rem] p-8 md:p-12 pb-16 border-slate-700">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="material-symbols-outlined text-red-400 text-4xl">warning</span>
                        <h3 className="text-3xl font-bold text-slate-300">Abonelik Modeli (Örn. Shopify)</h3>
                    </div>
                    
                    <ul className="space-y-4 text-slate-400 mb-8 pb-8 border-b border-slate-700 font-medium">
                        <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> Tasarım ve Tema Kurulum Ücreti (Ajans)</li>
                        <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> Platform Aboneliği (Grow): 105€ / Ay</li>
                        <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> Gerekli Avusturya (Legal) App'leri: ~60€ / Ay</li>
                        <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> 100+ Üstü Ekstra Varyant App'i: ~40€ / Ay</li>
                        <li className="flex items-center gap-3"><span className="text-red-400 font-bold shrink-0">✕</span> Ödeme kesintisine ek olarak %2 Platform Satış Komisyonu</li>
                    </ul>
                    <div className="text-center">
                        <p className="text-sm text-slate-500 uppercase tracking-widest mb-2 font-bold">Uzun Vadeli Tahmini Gider</p>
                        <p className="text-4xl font-black text-red-400 mb-1">Yüksek Sabit Maliyet</p>
                        <p className="text-xs text-slate-500 mt-2">Sistem kapatıldığında altyapı mülkiyeti sizde kalmaz.</p>
                    </div>
                </div>

                {/*  Custom  */}
                <div className="relative bg-gradient-to-br from-m-brand-900 to-slate-900 rounded-[2rem] p-8 md:p-12 pb-16 border-2 border-m-brand-gold shadow-[0_0_50px_rgba(180,151,90,0.15)] transform md:-translate-y-6 z-10">
                    <div className="absolute -top-5 right-8 bg-m-brand-gold text-m-brand-900 px-6 py-2 rounded-full text-xs font-black border border-m-brand-goldlight shadow-lg">AKILLI TİCARET</div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="material-symbols-outlined text-m-brand-gold text-4xl">workspace_premium</span>
                        <h3 className="text-3xl font-bold text-white">Bizim Çözümümüz (Mülkiyet)</h3>
                    </div>
                    
                    <ul className="space-y-4 text-slate-300 mb-8 pb-8 border-b border-slate-700 font-medium">
                        <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0">✓</span> Tek Seferlik "Anahtar Teslim" Mağaza İnşası</li>
                        <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0">✓</span> Sıfır Platform Komisyonu (Yalnızca ödeme altyapısı kesintisi)</li>
                        <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0">✓</span> Gelişmiş Mobilya Varyantları İçinde Hazır (Sınırsız)</li>
                        <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0">✓</span> Server Ortamınızda Kod ve Veri %100 Size Ait</li>
                        <li className="flex items-center gap-3"><span className="text-emerald-400 font-bold shrink-0 opacity-70 border-b border-emerald-500/30 border-dashed">Sadece Cüzi Bir Sunucu/Bakım Gideri. (Uygulama Yok)</span></li>
                    </ul>
                    <div className="text-center">
                        <p className="text-sm text-m-brand-gold uppercase tracking-widest mb-2 font-bold">Kâr/Zarar Uyumu</p>
                        <p className="text-4xl font-black text-white">Yatırım Kendini Amorti Eder</p>
                        <p className="text-xs text-m-brand-gold mt-2">İlk satırdan itibaren kiralık düzenden kâra geçmeye başlarsınız.</p>
                    </div>
                </div>
            </div>

            {/*  CTA Buttons  */}
            <div className="mt-20 text-center flex flex-col md:flex-row items-center justify-center gap-6">
                <a onClick={handleWhatsApp} href="#" target="_blank" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-3 w-full md:w-auto justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Üzerinden Danışın
                </a>
                <a href="mailto:furkanbgunaydin@gmail.com" className="border-2 border-m-brand-gold text-m-brand-gold hover:bg-m-brand-gold hover:text-m-brand-900 font-bold py-4 px-10 rounded-full transition-all flex items-center gap-3 w-full md:w-auto justify-center">
                    <span className="material-symbols-outlined">mail</span>
                    Bize E-Posta Gönderin
                </a>
            </div>
        </div>
    </section>

    {/*  Scroll detection script  */}
    

        </div>
    );
}
