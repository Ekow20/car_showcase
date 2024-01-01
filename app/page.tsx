import { fetchCars } from "@/utils";
import CarCard from "./components/CarCard";
import CustomFilter from "./components/CustomFilter";
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="pxRes pad-y mt-12 max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-bold">Car Catalogue</h1>
          <p className="">Choose from the cars you might like.</p>
        </div>

        <div className="home_filters">
          <Searchbar />
          <div className="home_filters-container">
            <CustomFilter title="" />
            <CustomFilter title="" />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home_error-container">
            <h2 className="text-xl font-bold">Oops, No results</h2>
            <p className="">{allCars?.message}</p>
          </div>
        ) : (
          <section>
            <div className="home_cars-wrapper">
              {allCars.map((item, i) => (
                <CarCard car={item} key={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
