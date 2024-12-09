import HTTPCountry from "../service/http";
import { useQuery } from "react-query";

export type CountryName = {
  name: {
    official: string;
    common: string;
  };
};

async function fetchCountriesName() {
  return HTTPCountry.getCountryName();
}

export default function useAllCountries() {
  const { data, isLoading } = useQuery<CountryName[]>({
    queryFn: () => fetchCountriesName(),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
}
