"Does the next js app router, updates the file name instead or just the url?"

"ok, so i had app.jsx there, if i don't get it into this, how do i render?
Routing Architecture: Deprecate react-router-dom and recreate your routes utilizing Next.js native file-based routing (e.g., architecting a page.js within an app/movie/ directory)."

"i have 2 pages in my previous code file, home and favorites and those are the routes as well, do i just copy the home page in page.js or keep it as component and import it"

"do i need to change the variable while transfering in next.js
Cannot read properties of undefined (reading 'VITE_TMDB_API_KEY')"

"should i use use client or ditch useEffect"

"do I need to put async when creating a function in new component too?"

"how do i switch this in next.js
<Link className=" hover:underline" to="/">Home</Link> 
<Link className=" hover:underline" to="/favorites">Favorites</Link>"

"i had props in app in routes but now what"

"what could this mean 
Cannot read properties of undefined (reading 'some')
src/components/MovieGrid.jsx (33:38) @ <unknown>


  31 |     >
  32 |       {movies.map((movie) => {
> 33 |         const isFavorite = favorites.some(
     |                                      ^
  34 |           (item) => item.id === movie.id
  35 |         );"

"is my favorites url the issue
import Favorites from "@/pages/Favorites";

export default function Page() {
  return (
    <Favorites
      favorites={[]}
    />
  );
}?"

"why should loadPopularMovies(page) be an async function and not useEffect?"

"do i need to make this async too? 
import Favorites from "@/pages/Favorites";

export default function Page() {
  return <Favorites />;
}
why or why not"

"is id undefined but why
Runtime TypeError
Server



Cannot read properties of undefined (reading 'id')
src\app\movie\[id]\page.js (14:50) @ MoviePage


  12 | export default async function MoviePage({Params}){
  13 |     
> 14 |     const movie = await fetchMovieDetails(Params.id);
     |                                                  ^
  15 |
  16 |     const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  17 |     return(
"

"where should the key be in this
Console Error


Each child in a list should have a unique "key" prop.

Check the render method of `MovieGrid`. See https://react.dev/link/warning-keys for more information.
src/components/MovieGrid.jsx (42:11) @ <unknown>


  40 |
  41 |         return (
> 42 |           <Link href={`/movie/${movie.id}`}>
     |           ^
  43 |             <div
  44 |               key={movie.id}
  45 |               className="
"

"is layout.js overriding the metadata?"

"what is jest, RTL and jsdom, explain with example"

"On the react testing library site there was only npm install --save-dev @testing-library/react @testing-library/dom, why should i include npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event . Explain each of the mentioned technology"

"Explain the next.js configuration file for jest to run with Next.js"

"i did button, next is card and input, how can i see if card renders?, by checking div or card title"

"this means, the data i pass as mock in props or the actual fetched data ?

Execution Criteria: Verify the component mounts without crashing and accurately renders text payloads passed via props."

"what's fireEvent? with example"

"Storybook in simple terms, with example"

""