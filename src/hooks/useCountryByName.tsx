import { useState } from "react";
import HTTPCountry from "../service/http";
import { useQuery } from "react-query";
import { CountryName } from "./useAllCountries";

export type Country = {
  name: CountryName["name"];
  capital: string;
  flags: {
    svg: string;
  };
  coatOfArms: {
    svg: string;
  };
  currencies: { [key: string]: { name: string; symbol: string } };
  car: {
    side: string;
  };
};

async function fetchCountryByName(countryName: string) {
  return HTTPCountry.getCountryByName(countryName.toLowerCase());
}

export default function useCountryByName() {
  const [countryName, setCountryName] = useState("");
  const { data, isLoading } = useQuery<Country[]>(["countryName", countryName], () => fetchCountryByName(countryName), {
    refetchOnWindowFocus: false,
    enabled: !!countryName,
    staleTime: 1000 * 60 * 5,
  });

  const searchCountry = (countryName: string) => {
    setCountryName(countryName);
  };

  const country = data && data.length > 0 ? data[0] : null;

  return { data: country, isLoading, searchCountry };
}
