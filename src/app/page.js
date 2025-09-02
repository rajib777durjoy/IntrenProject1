import Image from "next/image";
import Banner from "./(component)/Banner/page";
import Category from "./(component)/Category/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-black ">
      <div className="w-[100%] h-[60px]"></div>
     <Banner></Banner>
     <Category></Category>
    </div>

  );
}
