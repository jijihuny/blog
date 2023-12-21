
function SearchBar() {
  return (
    <span className="h-6 md:h-9 text-sm md:text-base flex flex-row items-center rounded-2xl transition border-2 p-4">
      <input
        type="text"
        placeholder="search keyword"
        className="outline-none placeholder:text-xs md:placeholder:text-lg font-medium bg-transparent"
        size={15}
      />
      <input
        type="button"
        className="
                bg-[url('/assets/icons/search.svg')] bg-contain bg-no-repeat
                size-3 md:size-7
                hover:-translate-x-1 hover:-translate-y-1
                active:translate-x-0 active:translate-y-0
                ease-in transition-all duration-[50ms]
                "
      />
    </span>
  );
}

export default SearchBar;
