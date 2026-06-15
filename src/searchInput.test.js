import { render, screen } from "@testing-library/react";

import SearchBar from "./components/SearchBar";

test('renders search bar',()=>{
    const searchQuery = "Burning Days";

    render(
        <SearchBar 
            query={searchQuery}
            setQuery={()=>{}}
        />
    );

    expect(
        screen.getByDisplayValue(searchQuery)
    ).toBeInTheDocument();
});