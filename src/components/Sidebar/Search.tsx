

const Search = () => {
  

  return (
    <>
      <div 
        className="bg-stone-300 hover:bg-stone-400 transition-colors mb-4 flex rounded items-center justify-between px-2.5 py-1.5 text-sm mr-1 cursor-pointer gap-2"
      >
        
          <i className="ri-search-line text-stone-500"></i>
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent text-stone-900 placeholder:text-stone-500 focus:outline-none w-full cursor-pointer text-sm"
          />
          <i className="ri-command-line"></i>
        
      </div>
      
    </>
  );
};

export default Search;
