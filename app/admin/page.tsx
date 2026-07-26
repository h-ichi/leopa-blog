export default function AdminPage() {

  return (
    <div>

      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>


      <div className="grid gap-6 md:grid-cols-3">


        <div className="rounded-lg bg-white p-6 shadow">

          <p className="text-gray-500">
            記事数
          </p>

          <p className="text-3xl font-bold">
            23
          </p>

        </div>



        <div className="rounded-lg bg-white p-6 shadow">

          <p className="text-gray-500">
            カテゴリ数
          </p>

          <p className="text-3xl font-bold">
            5
          </p>

        </div>



        <div className="rounded-lg bg-white p-6 shadow">

          <p className="text-gray-500">
            タグ数
          </p>

          <p className="text-3xl font-bold">
            10
          </p>

        </div>


      </div>


    </div>
  );
}