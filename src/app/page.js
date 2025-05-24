// burasi app folder icinde ki page.js '/' route olan home sayfasidir.

// next.js de tum componentler default olarak server componenttir. client component kullanmek icin 'use client' direktifini kullanmamiz gerek. bunun icin componenttin basina 'use client' yazmamis yeterli. 

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl">home page</h1>    
    </div>
  );
}
