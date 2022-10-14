import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar/sidebar";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { apolloClient } from "../utils/apolloclient";
import { gql } from "@apollo/client";

export function Layout({ children }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    (async function () {
      const tagsData = await apolloClient.query({
        query: gql`
          query MyQuery {
            tags {
              name
            }
          }
        `,
      });
      setTags(tagsData.data.tags);
    })();
  }, []);
  return (
    <div className={"flex flex-col justify-between min-h-screen gap-6"}>
      <Navbar />
      <div
        className={
          "flex mx-auto md:w-8/12 w-11/12 justify-between md:flex-row flex-col gap-12"
        }
      >
        {children}
        <Sidebar
          map={tags.map((tag) => (
            <Button
              key={tag.name}
              className={"hover:-translate-y-1 transition-all"}
              variant={"contained"}
              sx={{
                backgroundColor: "black!important",
                color: "white",
                fontSize: "12px",
                textTransform: "none",
              }}
            >
              #{tag.name}
            </Button>
          ))}
        />
      </div>

      <Footer />
    </div>
  );
}
