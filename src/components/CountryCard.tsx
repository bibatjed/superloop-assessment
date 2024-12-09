type CountryCardProps = {
  currencyName: string;
  currencySymbol: string;
  flagImage: string;
  coatOfArmsImage: string;
  name: string;
  drivesOn: string;
};

export default function CountryCard(props: CountryCardProps) {
  return (
    <section className="w-full flex flex-col shadow-md rounded-md bg-s-dm-dark-blue text-s-lm-very-light-gray mb-2 p-4 h-full">
      <div className="flex justify-center items-center py-2">
        <span className="font-extrabold text-lg">{props.name}</span>
      </div>

      <div className="w-full flex flex-col items-center mt-6 py-2">
        <div className="flex flex-col items-start gap-2">
          <span className="font-semibold mb-1">
            Currency Name: <span className="font-normal">{props.currencyName}</span>
          </span>

          <span className="font-semibold mb-1">
            Currency Symbol: <span className="font-normal">{props.currencySymbol}</span>
          </span>
        </div>
      </div>

      <div className="flex gap-4 flex-col justify-center py-4 px-10 sm:px-32">
        <div className="flex flex-col items-center py-2 rounded-md p-2">
          <span className="font-semibold mb-2">Flag</span>
          {props.flagImage ? <img className="max-w-[200px] object-cover rounded-md" src={props.flagImage} alt={props.name} /> : <span>No image found</span>}
        </div>

        <div className="flex flex-col items-center py-2 rounded-md p-2">
          <span className="font-semibold mb-2">Coat of Arms</span>
          {props.coatOfArmsImage ? <img className="max-w-[170px] object-cover rounded-md" src={props.coatOfArmsImage} alt={props.name} /> : <span>No image found</span>}
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-2">
        <span className="font-semibold mb-1">
          Drives On: <span className="capitalize font-normal">{props.drivesOn}</span>
        </span>
      </div>
    </section>
  );
}
