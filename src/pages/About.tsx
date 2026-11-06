import { motion } from 'framer-motion';
import { Target, Eye, Heart, ShieldCheck, Users, Award, Sparkles, MessageCircle, Twitter, Instagram, Facebook } from 'lucide-react';
import SectionHeading from '../components/layout/SectionHeading';
import { STATS, TEAM } from '../lib/data';
import { getAvatar } from '../lib/types';
import { useApp } from '../lib/AppContext';

export default function About() {
  const { socialSettings } = useApp();
  const values = [
    { icon: ShieldCheck, title: 'الأمان والخصوصية', desc: 'نحمي أعضاءنا بأعلى معايير الخصوصية المشددة والمحافظة على حرمة البيوت.' },
    { icon: Heart, title: 'الجدية والضوابط الشرعية', desc: 'منصة مخصصة للتوفيق الشرعي والعلاقات الأسرية الجادة فقط.' },
    { icon: Users, title: 'المجتمع القطري والخليجي', desc: 'معايير رصينة تراعي ملاءمة الأنساب والبيئة الاجتماعية والطباع.' },
    { icon: Award, title: 'الإشراف المباشر', desc: 'متابعة شخصية من الخطابة المعتمدة بكل نزاهة وأمانة واحترافية.' },
  ];

  const qatarStats = [
    { value: '+1,200', label: 'توفيق ناجح برعاية المنصة' },
    { value: '100%', label: 'خصوصية وسرية مصونة' },
    { value: '84', label: 'طلب موثق بقسم الرجال' },
    { value: '64', label: 'طلب مصان بقسم النساء' },
  ];

  return (
    <div className="bg-[#FCFBF9] min-h-screen text-[#1C1917] font-['Tajawal',sans-serif]" dir="rtl">
      {/* Hero */}
      <section className="relative bg-gradient-to-tr from-[#680E30] to-[#7B113A] overflow-hidden text-white py-12 sm:py-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FFF0D4] text-xs font-['Cairo'] font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>منصة الزواج القطرية 🇶🇦</span>
            </span>
            <h1 className="font-['Cairo'] font-black text-2xl sm:text-4xl text-white leading-tight">
              من نحن
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl mx-auto font-medium">
              المنصة القطرية الأولى الموثوقة لخدمات التوفيق الشرعي والزواج في المجتمع القطري والخليجي، نقرب المسافات بين القلوب في خصوصية وسرية تامة وبإشراف أسري كريم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 -mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          {qatarStats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-4 text-center shadow-2xs border border-[#EAE3D9]">
              <div className="font-['Cairo'] font-black text-xl sm:text-2xl text-[#7B113A]">{s.value}</div>
              <div className="text-xs text-[#78716C] mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xs border border-[#EAE3D9] text-right">
            <div className="w-10 h-10 rounded-xl bg-[#FDF1F4] text-[#7B113A] flex items-center justify-center mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="font-['Cairo'] font-bold text-base sm:text-lg text-[#1C1917] mb-2">رسالتنا</h2>
            <p className="text-[#57534E] text-xs sm:text-sm leading-relaxed">
              تيسير الحلال وبناء أسر مستقرة ومباركة عبر تقديم خدمة توفيق ذات طابع إنساني راقٍ، تراعي عادات وتقاليد المجتمع وتحفظ كرامة وخصوصية الجميع في إطار الشريعة الإسلامية السمحة.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xs border border-[#EAE3D9] text-right">
            <div className="w-10 h-10 rounded-xl bg-[#FEF8EC] text-[#A16207] flex items-center justify-center mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="font-['Cairo'] font-bold text-base sm:text-lg text-[#1C1917] mb-2">رؤيتنا</h2>
            <p className="text-[#57534E] text-xs sm:text-sm leading-relaxed">
              أن نكون الخيار الأول والأكثر موثوقية وأماناً للباحثين عن الزواج في قطر والخليج العربي، بنهج يجمع بين دقة المقاربة والوساطة الأسرية الحكيمة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 sm:py-12 bg-[#FAF7F2] border-t border-b border-[#EAE3D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-right">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#A16207] font-['Cairo']">ركائزنا</span>
            <h2 className="font-['Cairo'] font-black text-xl text-[#1C1917]">مبادئ نلتزم بها</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xs border border-[#EAE3D9] flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FDF1F4] text-[#7B113A] flex items-center justify-center shrink-0">
                  <v.icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-['Cairo'] font-bold text-sm text-[#1C1917] mb-1">{v.title}</h3>
                  <p className="text-xs text-[#78716C] leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="py-10 max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-['Cairo'] font-bold text-lg text-[#1C1917] mb-1.5">تواصل مباشر مع الإدارة</h2>
        <p className="text-xs text-[#78716C] mb-5 leading-relaxed">
          يسعد فريق منصة الزواج القطرية والإدارة الرد على استفساراتكم ومتابعة طلباتكم بكل ترحيب وسرية تامة.
        </p>
        <a
          href={`https://wa.me/97455620331?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات منصة الزواج القطرية')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7B113A] hover:bg-[#680E30] text-white font-['Cairo'] font-bold text-xs sm:text-sm shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>محادثة واتساب المباشرة (<span dir="ltr" className="inline-block">+974 5562 0331</span>)</span>
        </a>
      </section>
    </div>
  );
}
