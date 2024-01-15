import { Genres } from "@/typings";

async function GenreDropDown() {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

    const options: RequestInit = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24, //24 hours
        },
    };

    const response = await fetch(url, options);
    const data = ( await response.json()) as Genres;

    console.log(data.genres);
    return (
    <div>GenreDropDown</div>
  )
}
export default GenreDropDown