import React, { useState } from 'react';

type GroupListTypes = {
  os: string[];
  languages: string[];
  onFilter: (filterBy: string) => void;
};

const GroupList = ({ os, languages, onFilter }: GroupListTypes) => {
  const [showDropdown, setShowDropdown] = useState<string>();
  const [chosen, setChosen] = useState<string>();

  const handleDropdown = (dropdownName: 'os' | 'lang'): void => {
    if (dropdownName === showDropdown) {
      setShowDropdown('');
    } else {
      setShowDropdown(dropdownName);
    }
  };

  const handleClick = (filterBy: string): void => {
    setChosen(filterBy);
    onFilter(filterBy);
  };

  return (
    <ul className="list-group">
      <h3>Filter</h3>
      <li className="list-group-item border border-primary nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          onClick={() => handleDropdown('os')}
        >
          OS
        </a>
        <ul
          className={`dropdown-menu ${showDropdown === 'os' ? ' show ' : ''}`}
        >
          {os.map((os, index) => (
            <li key={index} onClick={() => handleClick(`os/${os}`)}>
              <a
                className={`dropdown-item ${
                  chosen?.includes(os) ? 'active' : ''
                }`}
                href="#"
              >
                {os}
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`list-group-item border border-primary ${
          chosen === 'isOnline' ? 'active' : ''
        }`}
        role="button"
        onClick={() => handleClick('isOnline')}
      >
        Online
      </li>
      <li className="list-group-item border border-primary nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          onClick={() => handleDropdown('lang')}
        >
          Languages
        </a>
        <ul
          className={`dropdown-menu ${showDropdown === 'lang' ? ' show ' : ''}`}
        >
          {languages.map((lang, index) => (
            <li key={index} onClick={() => handleClick(`languages/${lang}`)}>
              <a
                className={`dropdown-item ${
                  chosen?.includes(lang) ? 'active' : ''
                }`}
                href="#"
              >
                {lang}
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`list-group-item border border-primary mt-2 ${
          !chosen ? 'active' : ''
        }`}
        role="button"
        onClick={() => handleClick('')}
      >
        Clear Filter
      </li>
    </ul>
  );
};

export default GroupList;
