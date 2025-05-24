// burasi app folder icinde ki page.js '/' route olan home sayfasidir.

// next.js de tum componentler default olarak server componenttir. client component kullanmek icin 'use client' direktifini kullanmamiz gerek. bunun icin componenttin basina 'use client' yazmamis yeterli. 

// link konusu next.js de ise link i next ten import ediyoruz ve href kullaniyoruz

// next.js olmayan route'lar deafult 404 sayfası sunmaktadır. Default 404 sayfasını "not-found.js" ile override edebiliriz

// Navbar.jsx de a larin yerine Link yazdik, boylece sayfanin reflesh edilmesini onledik. Next/link arka planda sayfayi onceden fetch edilir. bu client tarafi gezintilerin performansini iyilestirmek icin kullanislidir. Gorunum alanindaki herhangi bir <Link/> onceden yuklenecektir.

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl">home page</h1>    
    </div>
  );
}
