# 🤝 دليل المساهمة

شكراً لاهتمامك بالمساهمة في مشروع Portfolio! هذا الدليل سيساعدك على البدء.

## 📋 كيفية المساهمة

### 1. Fork المشروع
1. اذهب إلى [GitHub Repository](https://github.com/mahmoud-dev/portfolio)
2. انقر على زر "Fork" في أعلى الصفحة
3. سيتم إنشاء نسخة من المشروع في حسابك

### 2. Clone المشروع
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 3. إعداد البيئة
```bash
# تثبيت التبعيات
npm install

# تشغيل المشروع
npm run dev
```

### 4. إنشاء Branch جديد
```bash
git checkout -b feature/your-feature-name
# أو
git checkout -b fix/your-fix-name
```

### 5. إجراء التغييرات
- قم بالتعديلات المطلوبة
- تأكد من اختبار التغييرات
- اتبع معايير الكود

### 6. Commit التغييرات
```bash
git add .
git commit -m "feat: add new feature description"
```

### 7. Push التغييرات
```bash
git push origin feature/your-feature-name
```

### 8. إنشاء Pull Request
1. اذهب إلى repository الأصلي
2. انقر على "Compare & pull request"
3. املأ النموذج واشرح التغييرات

## 📝 معايير الكود

### 1. تسمية الملفات
- استخدم PascalCase للمكونات: `UserProfile.jsx`
- استخدم camelCase للوظائف: `getUserData.js`
- استخدم kebab-case للمجلدات: `user-profile/`

### 2. تسمية المتغيرات
```javascript
// ✅ صحيح
const userName = 'Mahmoud';
const isActive = true;
const userList = [];

// ❌ خطأ
const user_name = 'Mahmoud';
const is_active = true;
const user_list = [];
```

### 3. تنسيق الكود
```javascript
// ✅ صحيح
const Component = ({ prop1, prop2 }) => {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // logic here
  }, []);
  
  return (
    <div className="component">
      <h1>{prop1}</h1>
    </div>
  );
};

// ❌ خطأ
const Component=({prop1,prop2})=>{
const [state,setState]=useState(null);
useEffect(()=>{
// logic here
},[]);
return(<div className="component"><h1>{prop1}</h1></div>);
};
```

### 4. CSS Classes
```css
/* ✅ صحيح - استخدم Tailwind CSS */
<div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg">

/* ❌ خطأ - تجنب CSS مخصص */
<div className="custom-button">
```

## 🏷️ أنواع Commits

استخدم prefixes مناسبة لـ commits:

- `feat:` - ميزة جديدة
- `fix:` - إصلاح خطأ
- `docs:` - تحديث التوثيق
- `style:` - تغييرات في التنسيق
- `refactor:` - إعادة هيكلة الكود
- `test:` - إضافة أو تحديث الاختبارات
- `chore:` - مهام الصيانة

### أمثلة:
```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve navigation issue on mobile"
git commit -m "docs: update README with new features"
git commit -m "style: improve button hover effects"
```

## 🧪 الاختبارات

### تشغيل الاختبارات
```bash
# تشغيل جميع الاختبارات
npm test

# تشغيل الاختبارات في وضع المراقبة
npm run test:watch

# تشغيل اختبارات التغطية
npm run test:coverage
```

### كتابة الاختبارات
```javascript
// مثال لاختبار مكون
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByText(/Mahmoud Abdelhmied/i)).toBeInTheDocument();
  });
});
```

## 📁 هيكل المشروع

```
src/
├── components/          # المكونات القابلة لإعادة الاستخدام
│   ├── header/
│   ├── icon-header/
│   └── threejs/
├── pages/              # صفحات التطبيق
│   └── layout/
│       ├── home/
│       ├── about/
│       ├── projects/
│       ├── resume/
│       └── contact-me/
├── context/            # React Context
├── utils/              # الوظائف المساعدة
├── assets/             # الصور والملفات الثابتة
└── styles/             # ملفات CSS
```

## 🐛 الإبلاغ عن الأخطاء

### كيفية الإبلاغ عن خطأ
1. اذهب إلى [Issues](https://github.com/mahmoud-dev/portfolio/issues)
2. انقر على "New Issue"
3. اختر "Bug Report"
4. املأ النموذج بالمعلومات التالية:

```markdown
## وصف الخطأ
وصف واضح ومختصر للخطأ.

## خطوات التكرار
1. اذهب إلى '...'
2. انقر على '...'
3. انتقل إلى '...'
4. شاهد الخطأ

## السلوك المتوقع
وصف لما كان يجب أن يحدث.

## لقطات الشاشة
إذا كان ذلك مناسباً، أضف لقطات شاشة لشرح المشكلة.

## معلومات النظام
- نظام التشغيل: [مثل Windows 10]
- المتصفح: [مثل Chrome 91]
- الإصدار: [مثل 1.0.0]

## معلومات إضافية
أي معلومات أخرى حول المشكلة.
```

## 💡 اقتراح ميزات

### كيفية اقتراح ميزة جديدة
1. اذهب إلى [Issues](https://github.com/mahmoud-dev/portfolio/issues)
2. انقر على "New Issue"
3. اختر "Feature Request"
4. املأ النموذج:

```markdown
## ملخص الميزة
وصف واضح ومختصر للميزة المطلوبة.

## المشكلة التي تحلها
اشرح المشكلة التي تحلها هذه الميزة.

## الحل المقترح
وصف الحل الذي تريده.

## البدائل المدروسة
وصف أي حلول بديلة فكرت فيها.

## معلومات إضافية
أي رسومات أو أمثلة أو سياق إضافي.
```

## 📞 التواصل

### طرق التواصل
- **GitHub Issues**: للإبلاغ عن الأخطاء واقتراح الميزات
- **Email**: mahmoud@example.com
- **LinkedIn**: [Mahmoud Abdelhmied](https://linkedin.com/in/mahmoud-abdelhmied)

### قواعد السلوك
- كن محترماً ومهذباً
- استخدم لغة واضحة ومفهومة
- قدم نقداً بناءً
- احترم آراء الآخرين

## 🎉 الاعتراف

سيتم إضافة جميع المساهمين إلى ملف [CONTRIBUTORS.md](CONTRIBUTORS.md) مع روابط لملفاتهم الشخصية.

## 📄 الترخيص

بالمساهمة في هذا المشروع، فإنك توافق على أن مساهماتك ستكون مرخصة تحت نفس رخصة المشروع (MIT).

---

**شكراً لك على المساهمة في جعل هذا المشروع أفضل! 🌟** 