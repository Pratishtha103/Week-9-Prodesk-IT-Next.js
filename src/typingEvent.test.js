import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';

import SearchBar from './components/SearchBar';

test("user types movie to be searched", async ()=> {
    const setQuery = jest.fn();

    render(
        <SearchBar 
            query=''
            setQuery={setQuery}
        />
    );
    const input = screen.getByRole('textbox');

    await userEvent.type(input, "Burning Days");
    
    expect(setQuery).toHaveBeenCalled();
});