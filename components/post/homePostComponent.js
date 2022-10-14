import moment from "moment";
import { Avatar } from "@mui/material";
import readingTime from "reading-time";
export function HomePostComponent({ post }) {
  const { coverImage, author, excerpt, publishedAt, title, content } = post;

  return (
    <div
      className={
        "flex md:flex-row flex-col justify-center items-center gap-6 p-4 rounded-md border border-stone-300 bg-white shadow-md max-w-3xl hover:-translate-y-1 transition-all"
      }
    >
      <img className={"max-w-[300px] rounded-md"} src={coverImage.url}></img>
      <div id={"post-text"} className={"flex flex-col gap-6 justify-between"}>
        <h1 className={"font-bold"}>{title}</h1>
        <h2 className={"text-slate-500"}>{excerpt}</h2>
        <div id={"metadata"} className={"flex gap-2"}>
          <Avatar alt="Remy Sharp" src={author.picture.url} />
          <div id={"author-info"} className={"flex flex-col justify-between"}>
            <h1 className={"font-bold text-gray-500 text-s"}>{author.name}</h1>
            <h3 className={"text-gray-400 text-sm"}>
              {moment(publishedAt).format("Do of MMM, YYYY")} •{" "}
              {readingTime(content.text).text}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
