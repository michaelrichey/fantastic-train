import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function HomePage({ posts }) {
  return (
    <>
      <h1>Welcome to a new world</h1>
      <p>
        Welcome to my own corner of the web. Here you'll find my randomness, lol
        :p Haha, me and my friends like going to Media Play.
      </p>
      <p>
        Check out our <Link href={"news"}>News Page</Link>
      </p>

      <h3>Blog Posts</h3>
      <p>Read my blog!</p>
      <ul>
        {posts.map((post) => {
          return (
            <li>
              <Link href={`posts/${post.slug}`} passHref>
                {post.frontMatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    const date = JSON.stringify(frontMatter.date);
    const dateString = date.split("T")[0].replace('"', "");
    frontMatter.date = "2022-01-02";

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
