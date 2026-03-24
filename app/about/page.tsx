import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 leading-relaxed">
      <Breadcrumb />

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        運営者情報
      </h1>

      <p className="text-lg font-medium text-gray-800">
        わたしのレオパBLOG
      </p>

      <p className="mt-6 text-gray-600">
        当サイトをご覧いただきありがとうございます。
        このブログでは、レオパードゲッコー（ヒョウモントカゲモドキ）の飼育記録や、
        日々の飼育の中で感じたことなどをゆるく発信しています。
      </p>

      <p className="mt-4 text-gray-600">
        私自身もレオパを飼育しており、餌やり、脱皮、体調管理など
        実際の飼育の中で気づいたことを中心に記事を書いています。
      </p>

      <p className="mt-4 text-gray-600">
        これからレオパを飼育したい方や、すでに飼っている方の
        ちょっとした参考になれば嬉しいです。
      </p>

      {/* 飼育しているレオパ */}
      <section className="mt-12">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          飼育しているレオパ
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="group border rounded-2xl overflow-hidden hover:shadow-lg transition bg-white">

            <Image
              src="/topimage.png"
              alt="レオパードゲッコー じぇいど"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-semibold text-gray-800">
                じぇいど
              </h3>

              <p className="text-gray-400 text-xs mt-1">
                2025年お迎え
              </p>

              <p className="text-gray-600 mt-3 text-sm">
                ペットショップで一目惚れして迎えた子です。
                ご飯の時間になるとケージの前に出てくるかわいい個体です。
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* 発信内容 */}
      <section className="mt-12">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          このブログで発信していること
        </h2>

        <ul className="list-disc ml-6 text-gray-600 space-y-1">
          <li>レオパの飼育記録</li>
          <li>餌や飼育環境について</li>
          <li>飼育の中での気づきやメモ</li>
          <li>自作しているレオパ飼育管理アプリの紹介</li>
        </ul>

      </section>

      {/* お問い合わせ */}
      <section className="mt-12">

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          お問い合わせ
        </h2>

        <p className="text-gray-600">
          ご質問やご連絡がある場合は、以下のページからお問い合わせください。
        </p>

        <p className="mt-2">
          <a
            href="/contact"
            className="text-blue-600 hover:underline"
          >
            お問い合わせページ
          </a>
        </p>

      </section>

      {/* 運営について */}
      <section className="mt-12">

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          運営について
        </h2>

        <p className="text-gray-600">
          当サイトは個人で運営しているブログです。
          記事内容は実体験や調査をもとに作成していますが、
          正確性や安全性を保証するものではありません。
        </p>

        <p className="mt-4 text-gray-600">
          また、当サイトではアフィリエイトプログラムを利用して
          商品やサービスを紹介する場合があります。
        </p>

      </section>

      {/* 免責事項 */}
      <section className="mt-12">

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          免責事項
        </h2>

        <p className="text-gray-600">
          当サイトに掲載された内容によって生じた損害等について、
          一切の責任を負いかねますのでご了承ください。
        </p>

      </section>

    </div>
  )
}