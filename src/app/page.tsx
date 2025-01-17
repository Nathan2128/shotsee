import { db } from "~/server/db";

const mockUrls = [
  "https://g4r369xxf8.ufs.sh/f/RXXfvUMp7O0ZE3UJ4OIly1p8PYwAS2xKutCkn5eqHbjUrfgl",
  "https://g4r369xxf8.ufs.sh/f/RXXfvUMp7O0ZfoxyUHgh0JgxmaTow87DlkScXWZOQdH91p2i",
  "https://g4r369xxf8.ufs.sh/f/RXXfvUMp7O0ZrDRuTwSTucOEHPCmYRKoVXx75beUIA6av39d",
  "https://g4r369xxf8.ufs.sh/f/RXXfvUMp7O0Zuxo2nhPX9GVNE4arzdMpoACcTmQ1OjY0fRyh",
  "https://g4r369xxf8.ufs.sh/f/RXXfvUMp7O0ZhPuX1E3PR9Es1qkW0BluH7txOXmoNKyDCpdw",
  "https://g4r369xxf8.ufs.sh/f/RXXfvUMp7O0ZaupK2sr1I4QBFY8UA0HjlsqrOtpEnT5DNh7c",
  "https://g4r369xxf8.ufs.sh/f/RXXfvUMp7O0ZN46Ee72SkWrRLwj4exy3i8MKocJTIAtqD71Q",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">{post.name}</div>
        ))}
        {mockImages.map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
