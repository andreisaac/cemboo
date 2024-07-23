"use client"
import * as React from "react";
import Image from "next/image";
import {useRef, useState} from "react";
import star from "@images/star.svg";
import PreviewPlayer from "@components/ui/previewPlayer";
import thumbsUp from "@images/thumbsUp.svg";
import thumbsDown from "@images/thumbsDown.svg";
import arrowDown from "@images/arrowDown.svg";
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

const emptyObj:movie = {
  id: 0,
  title: "",
  release_year: 0,
  genre: [],
  director: "",
  cast: [],
  rating: 0,
  duration_minutes: 0,
  synopsis: "",
  thumbnail_horizontal: "",
  thumbnail_vertical: ""
};

const comments = [{
  id: "qweq123",
  date: new Date(),
  userId: "qasedpi213",
  userName: "Diana",
  thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  comment: "It was said that you would, destroy the Sith, not join them.",
  likes: ["asdolk", "aslsd", "asdiu", "weuyo", "yoiu"],
  replys: [{
    id: "qweq123",
    userId: "qasedpi213",
    userName: "Obi Wan",
    thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    comment: "True Jedi stuff.",
    likes: ["asdolk", "aslsd", "asdiu", "weuyo", "yoiu"]
  },
  {
    id: "qweq123",
    userId: "qasedpi213",
    userName: "Obi Jan",
    thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    comment: "Not really.",
    likes: ["asdolk", "aslsd", "asdiu"]
  }]
},
{
  id: "qweq123",
  date: new Date(),
  userId: "qasedpi213",
  userName: "Anakin",
  thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  comment: "Not leave it in Darkness.",
  likes: ["asdolk", "aslsd", "asdiu", "weuyo", "yoiu"],
  replys: [{
    id: "qweq123",
    userId: "qasedpi213",
    userName: "Obi Wan",
    thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    comment: "True Jedi stuff.",
    likes: ["asdolk", "aslsd", "asdiu", "weuyo", "yoiu"]
  },
  {
    id: "qweq123",
    userId: "qasedpi213",
    userName: "Obi Jan",
    thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    comment: "Not really.",
    likes: ["asdolk", "aslsd", "asdiu"]
  }]
},
{
  id: "qweq123",
  date: new Date(),
  userId: "qasedpi213",
  userName: "Ronin 47",
  thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  comment: "It was you who would bring balance to the Force",
  likes: ["asdolk", "aslsd", "asdiu"],
  replys: [{
    id: "qweq123",
    userId: "qasedpi213",
    userName: "Obi Wan",
    thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    comment: "True Jedi stuff.",
    likes: ["asdolk", "aslsd", "asdiu", "weuyo", "yoiu"]
  },
  {
    id: "qweq123",
    userId: "qasedpi213",
    userName: "Obi Jan",
    thumbnail: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    comment: "Not really.",
    likes: ["asdolk", "aslsd", "asdiu"]
  }]
}];

//random video to display the preview on hover
const mockVideo = "https://videos.pexels.com/video-files/26776979/12005612_1920_1080_30fps.mp4";

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
        setSelected(emptyObj);
        modal.current.close();
      }
    };

   return (
    <> 
    {
    //modal to display the videos
    }
    <dialog ref={modal} className="modal">
      <div className="mt-20 pb-20 modal-box bg-n800 max-w-full max-h-full max-sm:px-2">

        <a className="mb-4 inline-block float-right text-2xl text-green900 rounded-full bg-n500 py-[5px] px-4 font-jost font-bold cursor-pointer hover:bg-n400 active:scale-90 transition ease-in-out" onClick={closeModal}>x</a>
        
        {
        //video player
        }
        <VideoPlayer s={mockVideo} className="w-full object-contain mt-8 rounded-md"/>
        
      <section className="flex flex-col">
            {
            //title and buttons row
            }
          <div className="flex flex-row sm:mx-1 md:mx-4 lg:mx-10  mt-4 lg:mt-8">
            <h2 className="flex font-bold text-xl sm:text-2xl ml-4 md:ml-36">
              {selected?.title} 
            </h2>
            
            <div className="flex-1 flex justify-end gap-2">
              <a className="btn btn-neutral h-9 min-h-9 rounded-full justify-self-end">Likes</a>
              <a className="btn btn-neutral h-9 min-h-9 rounded-full justify-self-end">Share</a>
              <a className="btn btn-neutral h-9 min-h-9 rounded-full justify-self-end">...</a>
            </div>
          </div>
          <div className="flex flex-row sm:mx-1 md:mx-4 lg:mx-10">
              <div className="flex m-1 sm:m-6 lg:m-2 mr-4 sm:mr-8 lg:mr-10 max-sm:mt-3">
                <div className="avatar">
                  <div className="h-12 w-12 sm:w-24 sm:h-24 rounded-full">
                    <Image src={selected?.thumbnail_vertical||""} width={96} height={96} alt="thumbnail"/>
                  </div>
                </div>
              </div>
              {
            // description row
            }
            <div className="flex-1 mt-2 sm:mt-4 md:mt-6 pr-4">
              <span className="text-base sm:text-lg inline-block mr-2 sm:mr-4">
                {selected?.release_year}
              </span>
              <span className="mx-1 sm:mx-2 text-base sm:text-lg">
                  {selected?.rating}
                  <Image src={star} className="inline mr-1 sm:mr-2 mb-2" alt="rating" loading="lazy"/>
              </span>
              {selected?.genre ? 
                selected.genre.map((item)=><div key={item} className="badge badge-neutral mr-2">{item}</div>)
              : ""}

              <p className="text-sm sm:text-lg">
                {selected?.synopsis}
              </p>
            </div>  
          </div>
        </section>

        {
          //comment section
        }
        <section className="mt-8 flex flex-col gap-4 px-6 lg:mx-20 text-sm">
        <h3 className="text-lg ml-4">Comments:</h3>
        {comments.map((item)=>{
          return (
            <div key={item.id} className="flex flex-row">
              <div className="avatar mt-2 mr-4">
                <div className="w-10 h-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <p className="font-bold">{item.userName}</p>
                <p>{item.comment}</p>
                <div className="flex flex-row gap-2">
                  <a className="cursor-pointer">
                    <Image src={thumbsUp} width={30} height={30} className="inline mr-2" alt="thumbs up" loading="lazy"/>
                    <span className="mt-2 mr-5">{item.likes.length}</span>
                  </a>
                  <a className="cursor-pointer">
                    <Image src={thumbsDown} width={30} height={30} className="inline mr-2" alt="thumbs down" loading="lazy"/>
                    <span className="mt-2 mr-5">1</span>
                  </a>
                </div>
                <a className="text-blue-500 mt-1 cursor-pointer"><Image src={arrowDown} width={20} height={20} className="inline mr-3" alt="arrow down" loading="lazy"/>{item.replys.length} replys</a>
              </div>
            </div>
          )
        })}
        </section>
        
    </div>















      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>

    </dialog>

    {
    // carousel
    }

   <Carousel className="w-[75%] sm:w-[80%] -mt-2 sm:mt-4 lg:mt-10 mx-auto"
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