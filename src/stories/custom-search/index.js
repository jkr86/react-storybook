import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Index, Configure, connectAutoComplete } from "react-instantsearch-dom";
import { UserIcon, HomeIcon, DocumentIcon, SearchIcon } from "./icons";
import styles from "./custom-search.module.scss";
// initialize algolia search
const searchClient = algoliasearch("IS2CO907A7", "d8ba3f9daecf7f028568728e8846f701");
// helper function
const renderFormat = (name) => (name.length > 34 ? `${name.slice(0, 30)}...` : name);
// main component
const CustomSearch = ({data}) => {
  // states
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const SearchBox = connectAutoComplete(({ currentRefinement, refine }) => (
    <div className="relative">
      <div className="w-4 h-4 m-auto absolute inset-0 ml-4">
        <SearchIcon />
      </div>
      <input
        className="rounded-full bg-gray-100 pl-10 pr-4 py-2"
        type="search"
        value={currentRefinement}
        placeholder="Search"
        onChange={(event) => {
          setIsSearchEnabled(true);
          refine(event.currentTarget.value);
        }}
      />
    </div>
  ));
  const AutoCompleteHits = connectAutoComplete(({ hits, indexName }) => {
    const { hits: indexHits = [] } = hits.find((x) => x.index === indexName) || {};
    const isUser = indexName === "users" || indexName === "staff" || indexName === "partners";
    const isHome = indexName === "projects" || indexName === "products";
    const isDocument = indexName === "documents";
    const isFullName = indexName === "staff" || indexName === "users";
    return (
      <ul className="p-0">
        {indexHits.map((hit) => (
          <li className="mt-2 flex items-center justify-between">
            <button type="button" className="flex items-center hover:bg-gray-100 focus:bg-gray-200 rounded-md p-3 w-full" key={hit.objectID}>
              <div className="w-full flex items-center">
                {isDocument && <DocumentIcon />}
                {isUser && <UserIcon />}
                {isHome && <HomeIcon />}
                <p className="ml-5 text-sm text-gray-600">{isFullName ? renderFormat(hit.fullName) : isDocument ? hit.type : renderFormat(hit.name)}</p>
              </div>
              {indexName === "users" && <p className="text-xs text-gray-400">{hit.type}</p>}
            </button>
          </li>
        ))}
      </ul>
    );
  });
  return (
    <div className={`${styles.searchWidth} mt-4 mr-40 flex flex-col items-center`}>
      <InstantSearch searchClient={searchClient} indexName="products">
        <SearchBox />
        <div className={`${styles.searchResults} ${styles.searchWidth} ${isSearchEnabled ? styles.expand : styles.collapse} mt-2.5 relative z-20 bg-white p-3 overflow-y-scroll shadow-md rounded-xl`}>
          {data.indices.map((index, idx) => {
            return (
              <div key={idx}>
                <AutoCompleteHits indexName={index.name} />
                <Index indexName={index.name}>
                  <Configure hitsPerPage={index.limit} />
                </Index>
              </div>
            );
          })}
          <AutoCompleteHits indexName="products" />
        </div>
      </InstantSearch>
    </div>
  );
};

export default CustomSearch;
