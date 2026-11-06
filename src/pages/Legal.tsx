import type { ReactNode } from 'react';
import { ShieldCheck, FileText, Lock } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

const content = {
  privacy: {
    title: 'سياسة الخصوصية',
    icon: Lock,
    intro: 'في منصة الزواج القطرية، نلتزم بحماية خصوصيتك وحماية بياناتك الشخصية. توضّح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك.',
    sections: [
      { title: '1. المعلومات التي نجمعها', body: 'نجمع المعلومات التي تقدمها عند إنشاء حسابك مثل الاسم، العمر، المدينة، والاهتمامات. كما نجمع معلومات تقنية مثل عنوان IP ونوع المتصفح لتحسين تجربتك.' },
      { title: '2. كيف نستخدم معلوماتك', body: 'نستخدم معلوماتك لتقديم خدمات المنصة، إيجاد التطابق المناسب، تحسين خدماتنا، التواصل معك، وضمان أمان المنصة.' },
      { title: '3. حماية البيانات', body: 'نستخدم تشفير SSL 256-bit لحماية بياناتك الحساسة. معلوماتك الشخصية مثل رقم الهوية والهاتف لا تظهر للأعضاء الآخرين أبدًا. نلتزم بنظام حماية البيانات الشخصية المعمول به.' },
      { title: '4. مشاركة المعلومات', body: 'لا نبيع بياناتك لأي طرف ثالث. قد نشارك معلومات محدودة مع مزوّدي الخدمات الموثوقين الذين يساعدون في تشقيل المنصة، وذلك تحت اتفاقيات سرية صارمة.' },
      { title: '5. التحكم في خصوصيتك', body: 'يمكنك التحكم الكامل في خصوصيتك من إعدادات حسابك. يمكنك إخفاء صورتك، التحكم في من يرى ملفك، وحذف حسابك في أي وقت.' },
      { title: '6. ملفات تعريف الارتباط', body: 'نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك وتذكّر تفضيلاتك. يمكنك التحكم فيها من إعدادات متصفحك.' },
      { title: '7. حقوقك', body: 'لديك الحق في الوصول إلى بياناتك، تصحيحها، أو حذفها. يمكنك ممارسة هذه الحقوق من خلال التواصل معنا أو من إعدادات حسابك.' },
      { title: '8. التحديثات على السياسة', body: 'قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنخطّرك بأي تفييرات جوهرية عبر البريد الإلكتروني أو إشعار داخل المنصة.' },
    ],
  },
  terms: {
    title: 'الشروط والأحكام',
    icon: FileText,
    intro: 'باستخدامك لمنصة الزواج القطرية، فإنك توافق على الشروط والأحكام التالية. يرجى قراءةرها بعناية.',
    sections: [
      { title: '1. قبول الشروط', body: 'باستخدامك للمنصة، فإنك تؤكد أنك قرأت ووافقت على هذه الشروط وجميع السياسات المعمول بها.' },
      { title: '2. الأهلية', body: 'يجب أن يكون عمرك 18 سنة على الأقل لاستخدام المنصة. كما يجب أن تكون معلوماتك صحيحة ودقيقة.' },
      { title: '3. استخدام المنصة', body: 'المنصة مخصّصة للزواج الشرعي والعلاقات الجادة فقط. يُمنع استخدامها لأي أقراض أو غير قانونية أو غير أخلاقية.' },
      { title: '4. حسابات الأعضاء', body: 'أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور. يجب تقديم معلومات صحيحة والالتزام بآداب التعامل. لا تتوفر مراسلة داخلية بين الأعضاء؛ تُرسل طلبات التوافق دون رسائل مرفقة، وتُتابع الاستفسارات مع الإدارة، ويُنسّق التواصل في المرحلة المخصصة من الرحلة.' },
      { title: '5. المحتوى', body: 'أنت مسؤول عن المحتوى الذي تنشره. يُمنع نشر محتوى مسيء، مضلّل، أو ينتهك حقوق الآخرين. نحتفظ بحق حذف أي محتوى مخالف.' },
      { title: '6. الاشتراكات والدفع', body: 'العضوية المدفوعة تمنح مزايا إضافية للبحث والطلبات وتمييز الملف، وررسوم رحلة التوافق مستقلة عنها. لا تُباع باقات مراسلة بين الأعضاء. لمراجعة معاملات أو أرصدة سابقة لهذه الخدمة، تواصل مع الإدارة. جميع المدفوعات غير قابلة للاسترداد بعد تفعيل الباقة، إلا في الحالات المنصوص عليها في سياسة الاسترداد.' },
      { title: '7. التحقيق من الحسابات', body: 'نحتفظ بحق تعليق أو حذف أي حساب مخالف للشروط أو مشبوه دون إشعار مسبق. كما نحتفظ بحق رفض طلبات التسجيل.' },
      { title: '8. حدود المسؤولية', body: 'المنصة توفّر وسيلة للتعارف، لكننا لا نضمن نتائج محددة. لا نتحمل مسؤولية أي ضرر ناتج عن تفاعلات بين الأعضاء.' },
      { title: '9. التعديلات', body: 'قد نقوم بتعديل هذه الشروط من وقت لآخر. استمرارك في استخدام المنصة يعني موافقتك على الشروط المحدّثة.' },
      { title: '10. القانون المعمول به', body: 'تخضع هذه الشروط للقوانين والأنظمة المعمول بها، وتختص المحاكم بالنظر في أي نزاع.' },
    ],
  },
};

export default function LegalPage({ type }: LegalPageProps) {
  const data = content[type];
  const Icon = data.icon;

  return (
    <div className="bg-[#FCFBF9] min-h-screen text-[#1C1917] font-['Tajawal',sans-serif]" dir="rtl">
      <div className="bg-gradient-to-tr from-[#680E30] to-[#7B113A] relative overflow-hidden py-10 sm:py-14 text-center text-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 mb-3 text-[#FFF0D4]">
            <Icon className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h1 className="font-['Cairo'] font-black text-2xl sm:text-3xl md:text-4xl text-white">{data.title}</h1>
          <p className="mt-2 text-white/80 max-w-xl mx-auto text-xs sm:text-sm">منصة الزواج القطرية • آخر تحديث: 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 text-right">
        <div className="bg-white rounded-3xl shadow-2xs border border-[#EAE3D9] p-5 sm:p-8">
          <div className="bg-[#FEF8EC] rounded-2xl p-4 sm:p-5 mb-6 flex items-start gap-3 border border-[#F1E0B6]">
            <ShieldCheck className="w-5 h-5 text-[#A16207] shrink-0 mt-0.5" />
            <p className="text-[#57534E] leading-relaxed text-xs sm:text-sm">{data.intro}</p>
          </div>

          <div className="space-y-6">
            {data.sections.map((section, i) => (
              <div key={i} className="border-b border-[#F5EFE7] pb-5 last:border-0 last:pb-0">
                <h2 className="font-['Cairo'] font-bold text-base sm:text-lg text-[#1C1917] mb-1.5">{section.title}</h2>
                <p className="text-[#57534E] leading-relaxed text-xs sm:text-sm">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
