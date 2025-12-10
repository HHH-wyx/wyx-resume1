import Link from 'next/link';

export default function NotFound({
  params,
}: {
  params?: { lang: string };
}) {
  // 使用默认语言为中文
  const lang = params?.lang || 'zh';
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-8">{lang === 'zh' ? '页面未找到' : 'Page Not Found'}</h2>
        <Link 
          href={`/${lang}`} 
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors inline-block"
        >
          {lang === 'zh' ? '返回首页' : 'Return to Home'}
        </Link>
      </div>
    </div>
  );
}