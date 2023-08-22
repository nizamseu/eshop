import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import Card from "./Share/Card/Card";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
        {[...Array(10)].map((item) => (
          <Card />
        ))}
      </div>
    </main>
  );
}
