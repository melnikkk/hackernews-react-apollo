import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "./Link";
import { FEED_QUERY } from "../queries";

export const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};
