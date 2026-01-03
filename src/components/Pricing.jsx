import React, { useState } from 'react';
import { Check, Shield, Zap, Star, Layout, BarChart3, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const translations = {
    en: {
        dir: 'ltr',
        badge: 'Simple & Transparent Pricing',
        title: 'Power up your GarageFlow',
        subtitle: 'Choose the plan that fits your business needs. Scale your operations with our premium management tools.',
        mostPopular: 'MOST POPULAR',
        month: '/month',
        freeTrial: 'Start Free Trial',
        contactSales: 'Contact Sales',
        security: 'All plans include SSL security and daily automated backups.',
        plans: {
            starter: {
                title: 'Starter',
                price: '$29',
                desc: 'Perfect for small workshops just getting started with digitalization.',
                features: [
                    'Up to 100 Customers',
                    'Unlimited Vehicle Records',
                    'Basic Repair Orders',
                    'Service History Tracking',
                    'Single User Access',
                    'Email Support'
                ]
            },
            pro: {
                title: 'Professional',
                price: '$79',
                desc: 'Advanced tools for growing garages that need full financial control.',
                features: [
                    'Unlimited Customers',
                    'Full Financial System',
                    'Check Management & Reminders',
                    'Payroll & Employee Management',
                    'PDF Report Generation',
                    'Multi-user (Up to 5)',
                    'Priority Support'
                ]
            },
            enterprise: {
                title: 'Enterprise',
                price: 'Custom',
                desc: 'Scalable solutions for multiple branches and large-scale operations.',
                features: [
                    'Multi-branch Support',
                    'Advanced RBAC Permissions',
                    'Automated Cloud Backup',
                    'API Access for Integrations',
                    'Custom Feature Development',
                    'Dedicated Account Manager',
                    '24/7 Phone Support'
                ]
            }
        }
    },
    ar: {
        dir: 'rtl',
        badge: 'تسعير بسيط وشفاف',
        title: 'ارفع مستوى GarageFlow الخاص بك',
        subtitle: 'اختر الخطة التي تناسب احتياجات عملك. قم بتوسيع عملياتك باستخدام أدوات الإدارة المتميزة لدينا.',
        mostPopular: 'الأكثر شعبية',
        month: '/شهرياً',
        freeTrial: 'ابدأ التجربة المجانية',
        contactSales: 'اتصل بالمبيعات',
        security: 'تشمل جميع الخطط أمان SSL ونسخ احتياطي يومي تلقائي.',
        plans: {
            starter: {
                title: 'بداية',
                price: '29$',
                desc: 'مثالي للورش الصغيرة التي بدأت للتو في التحول الرقمي.',
                features: [
                    'حتى 100 عميل',
                    'سجلات مركبات غير محدودة',
                    'أوامر إصلاح أساسية',
                    'تتبع سجل الخدمة',
                    'وصول لمستخدم واحد',
                    'دعم عبر البريد الإلكتروني'
                ]
            },
            pro: {
                title: 'احترافي',
                price: '79$',
                desc: 'أدوات متقدمة للكراجات المتنامية التي تحتاج إلى تحكم مالي كامل.',
                features: [
                    'عملاء غير محدودين',
                    'نظام مالي كامل',
                    'إدارة الشيكات والتذكيرات',
                    'إدارة الرواتب والموظفين',
                    'توليد تقارير PDF',
                    'متعدد المستخدمين (حتى 5)',
                    'دعم ذو أولوية'
                ]
            },
            enterprise: {
                title: 'شركات',
                price: 'مخصص',
                desc: 'حلول قابلة للتوسع للفروع المتعددة والعمليات الكبيرة.',
                features: [
                    'دعم الفروع المتعددة',
                    'صلاحيات RBAC متقدمة',
                    'نسخ احتياطي سحابي تلقائي',
                    'وصول API للتكامل',
                    'تطوير ميزات مخصصة',
                    'مدير حساب مخصص',
                    'دعم هاتفي 24/7'
                ]
            }
        }
    },
    he: {
        dir: 'rtl',
        badge: 'תמחור פשוט ושקוף',
        title: 'שדרגו את ה-GarageFlow שלכם',
        subtitle: 'בחרו את התוכנית המתאימה לצרכי העסק שלכם. הגדילו את הפעילות עם כלי הניהול המקצועיים שלנו.',
        mostPopular: 'הפופולרי ביותר',
        month: '/חודש',
        freeTrial: 'התחל ניסיון חינם',
        contactSales: 'צור קשר עם המכירות',
        security: 'כל התוכניות כוללות אבטחת SSL וגיבוי יומי אוטומטי.',
        plans: {
            starter: {
                title: 'התחלה',
                price: '$29',
                desc: 'מושלם למוסכים קטנים שרק מתחילים את הדיגיטציה.',
                features: [
                    'עד 100 לקוחות',
                    'רשומות רכב ללא הגבלה',
                    'פקודות תיקון בסיסיות',
                    'מעקב אחר היסטוריית שירות',
                    'גישה למשתמש יחיד',
                    'תמיכה באימייל'
                ]
            },
            pro: {
                title: 'מקצועי',
                price: '$79',
                desc: 'כלים מתקדמים למוסכים בצמיחה הזקוקים לשליטה פיננסית מלאה.',
                features: [
                    'לקוחות ללא הגבלה',
                    'מערכת פיננסית מלאה',
                    'ניהול צ׳קים ותזכורות',
                    'ניהול שכר ועובדים',
                    'הפקת דוחות PDF',
                    'ריבוי משתמשים (עד 5)',
                    'תמיכה בעדיפות'
                ]
            },
            enterprise: {
                title: 'ארגוני',
                price: 'מותאם',
                desc: 'פתרונות מודולריים למספר סניפים ופעילות בקנה מידה גדול.',
                features: [
                    'תמיכה בריבוי סניפים',
                    'הרשאות RBAC מתקדמות',
                    'גיבוי ענן אוטומטי',
                    'גישת API לאינטגרציות',
                    'פיתוח תכונות בהתאמה אישית',
                    'מנהל חשבון ייעודי',
                    'תמיכה טלפונית 24/7'
                ]
            }
        }
    }
};

const PricingCard = ({ title, price, description, features, icon: Icon, popular, delay, t, isRtl, lang }) => {
    const handleWhatsApp = () => {
        const phoneNumber = "972568353362";
        const messages = {
            en: `Hello, I'm interested in the ${title} plan for GarageFlow.`,
            ar: `مرحباً، أنا مهتم بخطة ${title} لـ GarageFlow.`,
            he: `שלום, אני מעוניין בתוכנית ${title} עבור GarageFlow.`
        };
        const message = encodeURIComponent(messages[lang] || messages.en);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${popular
                ? 'bg-gradient-to-b from-garage-blue-600 to-garage-blue-900 border-2 border-garage-blue-400 shadow-2xl shadow-garage-blue-500/20 scale-105 z-10'
                : 'bg-slate-800/50 border border-slate-700 hover:border-garage-blue-500/50 backdrop-blur-sm'
                }`}
        >
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-garage-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    {t.mostPopular}
                </div>
            )}

            <div className={`p-3 rounded-2xl w-fit mb-6 ${popular ? 'bg-white/10' : 'bg-garage-blue-500/10'}`}>
                <Icon className={popular ? 'text-white' : 'text-garage-blue-400'} size={28} />
            </div>

            <h3 className={`text-2xl font-bold mb-2 ${popular ? 'text-white' : 'text-slate-100'}`}>{title}</h3>
            <p className={`text-sm mb-6 ${popular ? 'text-blue-100' : 'text-slate-400'}`}>{description}</p>

            <div className="mb-8">
                <span className={`text-4xl font-black ${popular ? 'text-white' : 'text-slate-100'}`}>{price}</span>
                {price !== t.plans.enterprise.price && <span className={`text-sm mx-2 ${popular ? 'text-blue-200' : 'text-slate-500'}`}>{t.month}</span>}
            </div>

            <div className="space-y-4 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className={`mt-1 p-0.5 rounded-full flex-shrink-0 ${popular ? 'bg-white/20' : 'bg-garage-blue-500/20'}`}>
                            <Check size={14} className={popular ? 'text-white' : 'text-garage-blue-400'} />
                        </div>
                        <span className={`text-sm ${popular ? 'text-blue-50' : 'text-slate-300'}`}>{feature}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={handleWhatsApp}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group ${popular
                    ? 'bg-white text-garage-blue-900 hover:bg-blue-50'
                    : 'bg-garage-blue-600 text-white hover:bg-garage-blue-500 shadow-lg shadow-garage-blue-900/20'
                    }`}>
                {price === t.plans.enterprise.price ? t.contactSales : t.freeTrial}
                <Zap size={18} className={`group-hover:scale-110 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
            </button>
        </motion.div>
    );
};

const Pricing = () => {
    const [lang, setLang] = useState('ar');
    const t = translations[lang];
    const isRtl = t.dir === 'rtl';

    const plans = [
        {
            ...t.plans.starter,
            icon: Layout,
            popular: false,
            delay: 0.1
        },
        {
            ...t.plans.pro,
            icon: BarChart3,
            popular: true,
            delay: 0.2
        },
        {
            ...t.plans.enterprise,
            icon: Shield,
            popular: false,
            delay: 0.3
        }
    ];

    return (
        <div className="py-24 px-6 bg-[#0f172a] text-slate-100 overflow-hidden relative" dir={t.dir}>
            {/* Language Switcher */}
            <div className={`absolute top-8 ${isRtl ? 'left-8' : 'right-8'} z-50`}>
                <div className="flex bg-slate-800/80 backdrop-blur-md p-1 rounded-2xl border border-slate-700 shadow-xl">
                    {['en', 'ar', 'he'].map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${lang === l
                                ? 'bg-garage-blue-600 text-white shadow-lg shadow-garage-blue-900/40'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {l.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Background Orbs */}
            <div className="absolute top-0 -left-10 w-72 h-72 bg-garage-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -right-10 w-96 h-96 bg-garage-accent/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        key={`badge-${lang}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-garage-blue-500/10 border border-garage-blue-500/20 text-garage-blue-400 text-sm font-semibold mb-6"
                    >
                        <Globe size={16} />
                        {t.badge}
                    </motion.div>
                    <motion.h2
                        key={`title-${lang}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-white/90 to-slate-500 bg-clip-text text-transparent leading-tight"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        key={`subtitle-${lang}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:gap-12">
                    {plans.map((plan, index) => (
                        <PricingCard key={`${lang}-${index}`} {...plan} t={t} isRtl={isRtl} lang={lang} />
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-slate-500 flex items-center justify-center gap-2">
                        <Shield size={18} className={isRtl ? 'ml-1' : 'mr-1'} />
                        {t.security}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;
