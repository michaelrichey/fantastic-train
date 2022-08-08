import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  return (
    <>
      <p>It has been known that there is a killer on the loose. {newsId}</p>
    </>
  );
}
