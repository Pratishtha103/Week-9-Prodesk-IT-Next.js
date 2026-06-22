import SearchBar from "./SearchBar";
import { useState } from "react";

export default {
  title: "TMDB/SearchBar",
  component: SearchBar,
  argtypes: {
    query:{
      control:"text",
    },
  },
};

function SearchBarTemplate(args) {
  const [query, setQuery] = useState(args.query);

  return (
    <SearchBar
      query={query}
      setQuery={setQuery}
    />
  );
}

export const Empty = {
  args: {
    query: "",
    setQuery: () => {},
  },
};

export const Interactive = {
  render: (args) => (
    <SearchBarTemplate {...args} />
  ),
  args: {
    query: "hello",
  },
};

export const Disabled = {
  args: {
    query: "",
    disabled: true,
  },
};
