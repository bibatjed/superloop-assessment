import CountryCard from "../components/CountryCard";
import Main from "../components/Main";
import Search from "../components/Search";
import useCountryByName from "../hooks/useCountryByName";
import JoyRideCountry from "../joyride/Country";

export default function Country() {
  const { searchCountry, data, isLoading } = useCountryByName();

  const handleCountrySelect = (country: string) => {
    searchCountry(country);
  };

  const currency = data?.currencies && Object.values(data.currencies)[0];
  const currencyName = currency ? currency.name : "";
  const currencySymbol = currency ? currency.symbol : "";

  return (
    <Main>
      <JoyRideCountry />
      <main className="w-full flex-col h-full flex items-center">
        <div className="flex items-center md:mt-12 flex-col w-11/12 gap-8 mt-6">
          <Search onSelectCountry={handleCountrySelect} />
        </div>
        <article className="w-[90%] md:w-4/5 max-w-[580px] mt-5 country-info">
          {isLoading && <span className="text-s-white">Loading...</span>}
          {data && <CountryCard flagImage={data.flags?.svg ?? ""} drivesOn={data.car.side} currencyName={currencyName} currencySymbol={currencySymbol} coatOfArmsImage={data?.coatOfArms?.svg ?? ""} name={data.name.official} />}
        </article>
      </main>
    </Main>
  );
}
