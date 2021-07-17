import { gql } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        description
        url
      }
    }
  }
`;
