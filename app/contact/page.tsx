export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-6">
        お問い合わせ
      </h1>

      <p className="text-gray-600 mb-8">
        ご質問・ご相談があれば下記フォームからご連絡ください。
      </p>

      <div className="w-full overflow-hidden rounded-lg border">

      <iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLScZ2GVfafkJw-sKyPEVWUq4lL4pCK9IzQDzC7wdl9B4VWsDLA/viewform?embedded=true"
  width="100%"
  height="900"
  
  loading="lazy"
>
</iframe>

      </div>

    </div>
  );
}
