import { TextField, Button } from "@mui/material";

function handleSubscribe(e) {
  e.preventDefault();
  alert("Not active yet :(");
}

export function Newsletter() {
  return (
    <div className={"max-w-fit flex flex-col gap-12"}>
      <h1 className={"font-bold text-3xl text-center text-slate-600"}>
        Newsletter
      </h1>
      <div
        className={
          "newsletter-container flex flex-col gap-5 bg-white rounded-md shadow-md p-6"
        }
      >
        <text className={" text-gray-400"}>
          Subscribe to our newsletter to be among the first to keep up with the
          latest updates.{" "}
        </text>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <Button onClick={handleSubscribe} type={"submit"}>
          Subscribe
        </Button>
      </div>
    </div>
  );
}
