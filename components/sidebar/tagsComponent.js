export function TagsComponent(props) {
  return (
    <div className={"flex flex-col gap-12"} id={"tags"}>
      <h1 className={"font-bold text-3xl text-center text-slate-600"}>
        {" "}
        Tags{" "}
      </h1>
      <div
        id={"tags-container"}
        className={
          "flex flex-wrap bg-white rounded-md shadow-md w-[300px] p-4 gap-2"
        }
      >
        {props.map}
      </div>
    </div>
  );
}
