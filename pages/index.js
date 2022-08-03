import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1>Welcome to a new world</h1>
      <p>
        Welcome to my own corner of the web. Here you'll find my randomness, lol
        :p Haha, me and my friends like going to Media Play.
      </p>
      <p>
        Check out our <Link href={"./news"}>News Page</Link>
      </p>
    </>
  );
}

export default HomePage;
