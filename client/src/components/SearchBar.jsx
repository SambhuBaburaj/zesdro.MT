import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
    setSearchQuery('');
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex justify-center">
      {!isOpen && (
        <div className=''>
 <button
          className=" text-black ml-96 px-4 py-2 rounded-md flex justify-end"
          onClick={toggleSearchBar}
        >
<FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        </div>
       
      )}
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="searchbar"
        unmountOnExit
      >
        <div className="flex items-center">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          {searchQuery && (
           <></>
          )} <button
          className=" ml-2"
          onClick={toggleSearchBar}
        >
          Cancel
        </button>
        </div>
      </CSSTransition>
      <FontAwesomeIcon icon={faCartShopping} className="p-2 ml-26" />

    </div>
  );
};

export default SearchBar;
