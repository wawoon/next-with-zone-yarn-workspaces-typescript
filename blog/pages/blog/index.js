import Link from "next/link";
// import { Hoge } from "../../../common/Hoge";

export default function Blog() {
  return (
    <div>
      {/* <Hoge /> */}
      <h3>This is our blog</h3>
      <ul>
        <li>
          <Link href="/blog/post/[id]" as="/blog/post/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/post/[id]" as="/blog/post/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
      <a href="/">Home</a>
      <div>
        <img
          width={200}
          src={`${process.env.ASSET_PREFIX}/static/nextjs2.png`}
        />
      </div>
    </div>
  );
}
