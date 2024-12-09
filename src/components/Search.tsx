import { ChangeEvent, useState, useMemo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useAllCountries, { CountryName } from "../hooks/useAllCountries";

interface SearchProps {
  onSelectCountry: (country: string) => void;
}

export default function Search({ onSelectCountry }: SearchProps) {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: countries, isLoading } = useAllCountries();

  const filterCountries = (countries: CountryName[], filterName: string) => countries.filter((country) => country.name.common.toLowerCase().includes(filterName.toLowerCase())).slice(0, 10);

  const filteredCountries = useMemo(() => {
    if (!countries || !search) return [];
    return filterCountries(countries, search);
  }, [countries, search]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    setShowDropdown(query.length > 0);
  };

  const handleSelectCountry = (countryName: string) => {
    setSearch(countryName);
    setShowDropdown(false);
    onSelectCountry(countryName);
  };

  return (
    <div className="relative w-full max-w-lg search-component">
      <div className="flex items-center gap-4 shadow-md p-3 bg-s-dm-dark-blue rounded-md">
        <div className="flex justify-center items-center ml-3">
          <AiOutlineSearch size="20" className="transition-all duration-500 text-s-lm-very-light-gray" />
        </div>
        <input value={search} onChange={handleInputChange} className="transition-all duration-500 outline-none border-none placeholder-s-lm-very-light-gray bg-s-dm-dark-blue text-s-lm-very-light-gray p-1 text-sm w-full" placeholder="Search for a country..." disabled={isLoading} />
        {isLoading && <span className="text-s-lm-very-light-gray">Loading...</span>}
      </div>

      {showDropdown && filteredCountries.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full shadow-lg rounded-md bg-s-dm-dark-blue dropdown-component">
          {filteredCountries.map((country) => (
            <li key={country.name.common} className="p-2 cursor-pointer hover:bg-s-lm-very-light-gray hover:text-s-lm-very-dark-blue text-s-lm-very-light-gray" onClick={() => handleSelectCountry(country.name.common)}>
              {country.name.common}
            </li>
          ))}
        </ul>
      )}

      {!isLoading && showDropdown && filteredCountries.length === 0 && <div className="absolute z-10 mt-1 w-full shadow-lg rounded-md p-2 text-center bg-s-dm-dark-blue text-s-lm-very-light-gray">No results found.</div>}
    </div>
  );
}
