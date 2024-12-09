# Superloop Assessment

## [Live](https://superloop-assessment.vercel.app)

## Node Version

```
v22.12
```

---

## Running the app

1. Clone this repository:

   ```bash
   git clone https://github.com/bibatjed/superloop-assessment
   cd superloop-assessment
   ```

2. Install the depenendcies
   ```bash
   npm install
   ```
3. Run the app
   ```bash
   npm run dev
   ```

---

## Documentation

#### Flow of the App

Initially, the application will call the API to fetch only the name fields, making the response payload smaller: https://restcountries.com/v3.1/all?fields=name. This data will be used for filtering in the search input (frontend filtering), which should help reduce the chances of hitting the rate limit.

When the user selects a country from the dropdown, the app will call the API to fetch the necessary details:
https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,currencies,flags,coatOfArms,car.
For example, this will retrieve fields such as name, currencies, flags, coat of arms, and car.

I believe calling the API every time a user searches (even with debouncing) would increase the likelihood of hitting the rate limit, considering that the name of a country doesn’t change. It is also more efficient to cache the results of the full-text search rather than caching partial search results.

#### In this project, React Query is used to minimize the chances of hitting the API rate limit. A good example of its usage is when searching for a country:

    1.	Initially, you search for “Australia.”
    2.	Then, you proceed to search for another country, e.g., “Canada.”
    3.	When you go back to search for “Australia,” React Query will prevent the API call from being triggered again (for the same search) within a set time period (in this case, 5 minutes), as the result is cached.

#### Additionally I used React Joyride to create a simple step-by-step guide in the application.

---

#### Codebase Error

##### If you encounter type errors in your code editor (e.g., VSCode), make sure you are using the workspace TypeScript version, not the one provided by VSCode.
