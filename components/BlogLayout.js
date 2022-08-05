export default function BlogLayout({ children, props }) {
  return (
    <div className="blog-layout">
      <h2>{props.title}</h2>
      <h3>
        Written by {props.author} | Art by {props.artist}
      </h3>
      <h3>Date Published: {props.date}</h3>
      {props.content}
    </div>
  );
}
