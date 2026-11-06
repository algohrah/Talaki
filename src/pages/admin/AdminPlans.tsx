import { Crown } from 'lucide-react';
import PageHeader from '../../components/admin/PageHeader';
import { PLANS } from '../../lib/data';
export default function AdminPlans() {
  return <div className="space-y-6" dir="rtl">
    <PageHeader title="العضويات" subtitle="نموذج تجريبي ثابت: مجاني وتوافق مميز. رسوم الرحلة مستقلة عن العضوية." />
    <div className="grid md:grid-cols-2 gap-6">{PLANS.map(plan => <section key={plan.id} className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="flex items-center gap-2 font-cairo font-bold text-lg"><Crown className="w-5 h-5 text-amber-500" />{plan.name}</h3>
      <p className="my-3 font-bold">{plan.price ? '99 ريال / 30 يومًا' : 'مجاني'}</p>
      <ul className="space-y-2 text-sm text-slate-600">{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
      <p className="mt-4 text-xs text-slate-500">لا تمنح العضوية إعفاءً أو خصمًا من رسوم رحلة التوافق.</p>
    </section>)}</div>

  </div>;
}
