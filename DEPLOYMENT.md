# 🚀 دليل النشر - Portfolio Website

## النشر على Vercel (موصى به)

### الخطوة 1: إعداد Vercel
1. قم بإنشاء حساب على [Vercel](https://vercel.com)
2. اربط حساب GitHub الخاص بك
3. انقر على "New Project"

### الخطوة 2: رفع المشروع
1. اختر repository الخاص بالمشروع
2. Vercel سيكتشف تلقائياً أنه مشروع React/Vite
3. انقر على "Deploy"

### الخطوة 3: التخصيص (اختياري)
```bash
# في إعدادات المشروع على Vercel
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## النشر على Netlify

### الخطوة 1: إعداد Netlify
1. قم بإنشاء حساب على [Netlify](https://netlify.com)
2. اربط حساب GitHub الخاص بك

### الخطوة 2: رفع المشروع
1. انقر على "New site from Git"
2. اختر repository الخاص بالمشروع
3. إعدادات البناء:
   - Build command: `npm run build`
   - Publish directory: `dist`

## النشر على GitHub Pages

### الخطوة 1: إعداد المشروع
```bash
# إضافة gh-pages
npm install --save-dev gh-pages

# إضافة scripts إلى package.json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### الخطوة 2: النشر
```bash
npm run deploy
```

## النشر على Firebase Hosting

### الخطوة 1: إعداد Firebase
```bash
# تثبيت Firebase CLI
npm install -g firebase-tools

# تسجيل الدخول
firebase login

# تهيئة المشروع
firebase init hosting
```

### الخطوة 2: إعداد firebase.json
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### الخطوة 3: النشر
```bash
npm run build
firebase deploy
```

## متغيرات البيئة

### إنشاء ملف .env
```bash
# انسخ الملف المثال
cp .env.example .env

# عدل القيم حسب احتياجاتك
VITE_APP_NAME=Mahmoud Portfolio
VITE_CONTACT_EMAIL=your-email@example.com
VITE_LINKEDIN_URL=https://linkedin.com/in/your-profile
```

## تحسينات الأداء

### 1. تحسين الصور
```bash
# تثبيت أداة تحسين الصور
npm install --save-dev imagemin imagemin-webp

# إضافة script للتحسين
{
  "scripts": {
    "optimize-images": "imagemin src/assets/* --out-dir=src/assets/optimized"
  }
}
```

### 2. تحسين Bundle
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
})
```

### 3. تحسين SEO
```html
<!-- index.html -->
<meta name="description" content="Portfolio website for Mahmoud Abdelhmied - Full Stack Developer">
<meta name="keywords" content="portfolio, react, developer, web">
<meta name="author" content="Mahmoud Abdelhmied">
```

## مراقبة الأداء

### 1. Google Analytics
```javascript
// إضافة إلى index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Vercel Analytics
```bash
# تثبيت Vercel Analytics
npm install @vercel/analytics
```

```javascript
// في App.jsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}
```

## الأمان

### 1. Content Security Policy
```html
<!-- إضافة إلى index.html -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';">
```

### 2. HTTPS
- تأكد من تفعيل HTTPS على جميع المنصات
- استخدم HSTS headers

## النسخ الاحتياطي

### 1. GitHub
```bash
# إنشاء branch للنسخ الاحتياطية
git checkout -b backup/$(date +%Y%m%d)
git push origin backup/$(date +%Y%m%d)
```

### 2. قاعدة البيانات (إذا وجدت)
```bash
# نسخ احتياطي دوري
0 2 * * * mysqldump -u user -p database > backup_$(date +%Y%m%d).sql
```

## استكشاف الأخطاء

### مشاكل شائعة

1. **خطأ في البناء**
   ```bash
   # تنظيف cache
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **مشاكل في التوجيه**
   - تأكد من إعداد SPA fallback في Vercel/Netlify
   - تحقق من إعدادات React Router

3. **مشاكل في الصور**
   - تأكد من صحة مسارات الصور
   - استخدم صور محسنة

### أدوات المساعدة
- [Vercel Analytics](https://vercel.com/analytics)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

---

**ملاحظة**: تأكد من اختبار الموقع على مختلف المتصفحات والأجهزة قبل النشر النهائي. 