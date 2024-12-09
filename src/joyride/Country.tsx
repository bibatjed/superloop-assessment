import { useEffect, useState } from "react";
import Joyride, { CallBackProps, Step } from "react-joyride";
import DropdownImage from "../assets/dropdown.png";
import CountryDetailsImage from "../assets/country-details.png";
export default function JoyRideCountry() {
  const [runTour, setRunTour] = useState(false);
  const steps: Step[] = [
    {
      target: ".search-component",
      content: (
        <div>
          Search for a country by name here, and a dropdown will appear.
          <img className="mt-5" src={DropdownImage} />
        </div>
      ),
    },
    {
      target: ".country-info",
      content: (
        <div>
          Once you select a country, the country details will be displayed here. <img className="mt-5" src={CountryDetailsImage} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setRunTour(true);
    }
  }, []);

  const handleJoyride = (data: CallBackProps) => {
    const { status } = data;

    if (["finished", "skipped"].includes(status)) {
      localStorage.setItem("hasVisited", "true");
      setRunTour(false);
    }
  };
  return (
    <>
      <Joyride
        steps={steps}
        run={runTour}
        continuous
        scrollToFirstStep
        showSkipButton
        callback={handleJoyride}
        styles={{
          options: {
            arrowColor: "hsl(209, 23%, 22%)",
            backgroundColor: "hsl(207, 26%, 17%)",
            textColor: "hsl(0, 0%, 100%)",
            overlayColor: "rgba(0, 0, 0, 0.5)",
            primaryColor: "hsl(200, 15%, 8%)",
          },
          buttonNext: {
            backgroundColor: "hsl(200, 15%, 8%)",
            color: "hsl(0, 0%, 100%)",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            fontFamily: "'Nunito Sans', sans-serif",
          },
          buttonBack: {
            color: "hsl(0, 0%, 52%)",
            fontFamily: "'Nunito Sans', sans-serif",
          },
          buttonClose: {
            color: "hsl(0, 0%, 98%)",
          },
        }}
      />
    </>
  );
}
