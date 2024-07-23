"use client"
import * as React from "react";
import Image from "next/image";
import {useRef, useState} from "react";
import star from "@images/star.svg";
import PreviewPlayer from "@components/ui/previewPlayer";
import { Card, CardContent } from "@components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel"
import VideoPlayer from "@components/ui/videoPlayer";

//augment the interface to control the modal
interface dial extends HTMLDialogElement {
  close(): void;
  closeModal(): void;
  close(returnValue?: string): void;
}

//defining types and interfaces from data
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
type props = {
    featured: movie[]
}

//random video to display the preview on hover
const mockVideo = "https://imdb-video.media-imdb.com/vi1546503705/1434659607842-pgv4ql-1720531155544.mp4?Expires=1721764206&Signature=Vjk9B15EH~n-8a3BxpaBG-C4R46LefzrA4JlJobZl7~kYl3NtExasOkciqdxSVgni53AGAZfPLA3-0DMeoC9PrtcHP030L7KcAtEezHkV9wxuC4oxnimuChgAM5J6ORPK87evfmTxhRTMj5ItbmxDHalIGvVhvo9wkvLJ4KyKI4aURsMNTcrL7S6feWaItaa0UP36c1DbL67CqS0qXmRPfFQlvMFXHoebAx318v1DDhJVDGJqw030P1~hsBzZvDj-Pk0hQ4LAbHaIiHlmLZbUSIp7C4sbuQ~mnQBrJZ~nW4wN3RGst4scJxSQsXQR6FjHIIgE3dvwC1waLNvY8YAGw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";

const FeaturedCarousel:React.FC<props> = ({featured}) => {
  
  const [selected, setSelected] = useState<movie>();

  // controls for the modal
  const modal = useRef<dial>(null);
  const openDialog = (item:movie) => {
      if (modal.current) {
        setSelected(item);
        modal.current.showModal();
      }
    };
    const closeModal = () => {
      if (modal.current) {
        modal.current.close();
      }
    };

   return (
    <>
    <dialog ref={modal} className="modal">
      <div className="mt-20 pb-20 modal-box bg-n800 max-w-full max-h-full max-sm:px-2">

        <a className="mb-4 inline-block float-right text-2xl text-green900 rounded-full bg-n500 py-[5px] px-4 font-jost font-bold cursor-pointer hover:bg-n400 active:scale-90 transition ease-in-out" onClick={closeModal}>x</a>

        <VideoPlayer s={mockVideo} className="w-full object-contain mt-8 rounded-md"/>

        <section className="sm:mt-6 sm:ml-6 lg:ml-20 flex flex-row">

          <div className="avatar flex m-1 sm:m-6 lg:m-2 mr-4 sm:mr-8 lg:mr-10 max-sm:mt-3">
            <div className="h-12 w-12 sm:w-24 sm:h-24 rounded-full">
              <Image src={selected?.thumbnail_vertical||""} width={96} height={96} alt="thumbnail"/>
            </div>
          </div>  
   

          <div className="">
            <h2 className="font-bold text-xl sm:text-3xl mt-2">
              {selected?.title} 
            </h2>
            
            <span className="font-bold text-base sm:text-lg inline-block mr-2 sm:mr-4">
              {selected?.release_year}
            </span>
            <span className="mx-1 sm:mx-2 font-bold text-base sm:text-lg">
                {selected?.rating}
                <Image src={star} className="inline mr-1 sm:mr-2 mb-2" alt="rating" loading="lazy"/>
            </span>
            {selected?.genre ? 
              selected.genre.map((item)=><div key={item} className="badge badge-neutral mr-2">{item}</div>)
            : ""}

            <p className="text-sm sm:text-xl">
              {selected?.synopsis}
            </p>
          </div>  
          

        </section>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>

    </dialog>

   <Carousel className="w-[70%] sm:w-[80%] -mt-2 sm:mt-4 lg:mt-10 mx-auto"
         opts={{
           align: "start",
         }}>
           <CarouselContent>
             {featured.map((item:movie) => (

               <CarouselItem key={item.id} className="pl-1 md:pl-2 sm:mt-4 lg:mt-6 basis-1/3 lg:basis-1/5">

                 <div className="my-4">
                   <Card className="shadow-squareXl hover:scale-105 transition ease-in-out cursor-pointer relative" onClick={()=>openDialog(item)}>
                     <CardContent className="flex aspect-[16/11] bg-n900 items-center justify-center p-0 md:p-[2px] border border-slate-600 rounded-md">

                         <PreviewPlayer className="absolute z-50 opacity-0 hover:opacity-100 transition ease-in-out !object-fill w-full h-full rounded-md" s={mockVideo} />
                         <Image src={item.thumbnail_vertical} width={500} height={300} className="relative object-fill rounded-md" alt={item.title + " thumbnail"} loading="lazy"></Image>
                     
                     </CardContent>
                   </Card>
    
                   <p className="max-sm:hidden text-n100 !font-prompt md:font-bold text-xs sm:text-md text-center drop-shadow-text shadow-neutral-100">{item.title}</p>
                 </div>

               </CarouselItem>
             ))}

           </CarouselContent>
           <CarouselPrevious />
           <CarouselNext />
         </Carousel>
      </>
    )
}
 
export default FeaturedCarousel;