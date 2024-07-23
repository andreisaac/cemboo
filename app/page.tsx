
import Image from "next/image";
import hero from "@images/hero.png";
import play from "@images/play.svg";
import greenStroke from "@images/greenStroke.svg";
import greyStroke from "@images/greyStroke.svg";
import tactics from "@images/tactics.svg";
import FeaturedCarousel from "@components/ui/featuredCaroussel";

async function getData() {
  const res = await fetch('https://cemboo-9cje.vercel.app/api/featured')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  //Parse the json data
  return res.json()
}

interface cast {
  name: string,
  role: string
}

interface movie {
  id: number,
  title: string,
  release_year: number,
  genre: string[],
  director: string,
  cast: cast[],
  rating: number,
  duration_minutes: number,
  synopsis: string,
  thumbnail_horizontal: string,
  thumbnail_vertical: string
}


export default async function Home() {

  //parse data from mock api
  const d = await getData();
  const featured = d.data;

 
  
  
  return (
    <main className="min-h-screen max-w-[3240px] relative bg-no-repeat lg:bg-right bg-contain lg:bg-[url('../images/hero.png')]">
      

      <div className="lg:min-h-screen relative">
        <Image src={greenStroke} className="max-lg:hidden select-none max-h-full h-auto absolute -left-20 lg:left-60" alt="hero image" loading="lazy"/>
        <Image src={tactics} className="max-lg:hidden select-none max-h-full h-auto absolute left-20 top-20 rotate-[-18deg]" alt="hero image" loading="lazy"/>
        <Image src={greenStroke} className="max-lg:hidden select-none max-h-full h-auto absolute right-10 bottom-20" alt="hero image" loading="lazy"/>
        <Image src={greyStroke} className="max-lg:hidden select-none max-h-full h-auto absolute right-20 bottom-20 rotate-6" alt="hero image" loading="lazy"/>
        
        <Image src={hero} className="max-lg:absolute right-0 max z-0 lg:hidden ml-auto w-[70%] !object-right select-none" alt="hero image" loading="lazy"/>
      
        
        <section className="max-sm:mx-auto sm:ml-10 sm:pt-10 md:pt-10 pt-12 max-lg:top-20 z-50 lg:bottom-20 relative lg:absolute lg:left-20 w-[86%] sm:w-[400px] select-none">
          <h1 className="max-md:text-4xl drop-shadow-text !font-prompt font-black italic text-center">Juve <span className="max-md:text-3xl font-bold text-5xl not-italic text-green900">vs </span> Rome</h1>
          <h2 className="max-md:text-2xl max-md:py-0 mx-14 sm:mx-32 md:mx-20 mb-4 md:mb-8 py-1 font-bold bg-greenWhite text-n800 text-center border-2 border-green200 shadow-squareXl">Highlights</h2>
          <h3 className="drop-shadow-text mt-2 font-bold text-sm sm:text-lg md:text-xl">Serie A 2023/2024 - 6m - Football</h3>
          <p className="drop-shadow-text mb-4 md:mb-8 text-sm sm:text-base md:text-xl">This match was a classic encounter between two Italian giants, showcasing high-quality football and competitive spirit.</p>
          <a className="btn btn-block max-sm:btn-sm md:btn-lg btn-neutral bg-opacity-75 text-xl !z-50"><Image src={play} width={24} className="h-auto" alt="play" loading="lazy"/> Watch Now</a>
        </section>

        <div className="max-lg:hidden absolute bottom-10 lg:right-20 xl:right-40 w-[1000px]">
          <FeaturedCarousel featured={featured.slice(0,5)}/>
        </div>
      </div>
  
      <div className="mt-10 max-md:mt-20 max-lg:mt-40 right-40 bottom-20 z-50 bg-n900">
        <div className="lg:hidden">
          <FeaturedCarousel featured={featured.slice(0,5)}/>
        </div>
        <FeaturedCarousel featured={featured.slice(5,10)}/>
        <FeaturedCarousel featured={featured.slice(10,15)}/>
      
      </div>
      

    </main>
  );
}
