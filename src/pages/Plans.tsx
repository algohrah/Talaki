import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Star, MessageSquare, ArrowLeft } from 'lucide-react';
import { PLANS } from '../lib/data';

export default function Plans() {
  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#1C1917] font-['Tajawal',sans-serif]" dir="rtl">
      <header className="bg-gradient-to-tr from-[#680E30] to-[#7B113A] px-4 py-12 text-center text-white">
        <span className="inline-flex rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-['Cairo'] font-bold text-[#FFF0D4]">
          عضوية وباقات تناسب احتياجك 🇶🇦
        </span>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-['Cairo'] font-black">
          باقات منصة الزواج القطرية
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-md mx-auto">
          خيارات واضحة ورصينة، ورسوم التنسيق والرحلة مستقلة عن العضوية.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 text-right">
          {PLANS.map((plan) => {
            const isFeaturedPlan = plan.id === 'featured';
            return (
              <section
                key={plan.id}
                className={`relative rounded-3xl bg-white p-5 sm:p-7 border shadow-2xs transition-all ${
                  isFeaturedPlan
                    ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/30 shadow-md shadow-[#7B113A]/5'
                    : 'border-[#EAE3D9]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-['Cairo'] font-bold px-2.5 py-0.5 rounded-full ${
                    isFeaturedPlan ? 'bg-[#FEF8EC] text-[#A16207] border border-[#F1E0B6]' : 'bg-[#FAF7F2] text-[#78716C]'
                  }`}>
                    {isFeaturedPlan ? 'الباقة الموصى بها' : 'البداية الأساسية'}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isFeaturedPlan ? 'bg-[#FEF8EC] text-[#A16207]' : 'bg-[#FAF7F2] text-[#7B113A]'
                  }`}>
                    {isFeaturedPlan ? <Star className="h-5 w-5 fill-[#A16207]/20" /> : <ShieldCheck className="h-5 w-5" />}
                  </div>
                </div>

                <h2 className="font-['Cairo'] font-black text-xl text-[#1C1917]">{plan.name}</h2>
                <p className="mt-1 text-xs text-[#78716C] min-h-10 leading-relaxed">{plan.description}</p>

                <div className="mt-4 font-['Cairo'] text-[#1C1917]">
                  <strong className="text-3xl font-black text-[#7B113A]">{plan.price || 'مجانًا'}</strong>
                  {plan.price > 0 && <span className="mr-1.5 text-xs text-[#78716C]">ريال قطري / 30 يوماً</span>}
                </div>

                <Link
                  to={plan.price ? '/checkout/featured' : '/register'}
                  className={`mt-5 block rounded-xl py-3 text-center font-['Cairo'] font-bold text-xs sm:text-sm transition-all ${
                    isFeaturedPlan
                      ? 'bg-[#7B113A] hover:bg-[#680E30] text-white shadow-xs'
                      : 'bg-[#FAF7F2] hover:bg-[#F3ECE0] text-[#7B113A] border border-[#E5DAC6]'
                  }`}
                >
                  {plan.price ? 'الترقية إلى الباقة المميزة' : 'ابدأ مجاناً الآن'}
                </Link>

                <ul className="mt-5 space-y-2.5 pt-4 border-t border-[#F5EFE7]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-[#57534E]">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <section className="mt-6 rounded-2xl border border-[#EAE3D9] bg-[#FAF7F2] p-4 text-right">
          <h2 className="flex items-center gap-2 font-['Cairo'] font-bold text-xs sm:text-sm text-[#1C1917]">
            <MessageSquare className="h-4 w-4 text-[#7B113A]" />
            <span>رسوم التنسيق والرحلة مستقلة عن العضوية</span>
          </h2>
          <p className="mt-1 text-xs text-[#78716C] leading-relaxed">
            اشتراك الباقة المميزة يمنح مزايا إضافية في البحث والطلبات وتمييز الملف. رسوم الجدية وأتعاب رحلة التوافق مستقلة وتُراجع شروطها قبل السداد لضمان الشفافية التامة.
          </p>
        </section>

        <div className="mt-5 flex items-center justify-between text-xs font-['Cairo'] font-bold">
          <Link to="/search" className="inline-flex gap-1.5 items-center text-[#7B113A] hover:underline">
            <span>تصفّح ملفات الأعضاء</span>
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
          <Link to="/contact" className="text-[#78716C] hover:text-[#1C1917]">
            استفسار عن الباقات
          </Link>
        </div>
      </main>
    </div>
  );
}
