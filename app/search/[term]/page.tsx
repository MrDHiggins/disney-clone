import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string
    };
};

function SearchPage({params: {term}}: Props) {
    if(!term ) notFound();

    const termToUse = decodeURI(term);

    //API call to get the search results
    //API call to get the popular movies
  return (
    <div>Welcome to the search page: {termToUse}</div>
  )
}
export default SearchPage