import Image from "next/image";
import Banner from "./(component)/Banner/page";
import Category from "./(component)/Category/page";
import Dastinations from "./(component)/Dastinations/page";
import BookingTrip from "./(component)/BookingTrip/page";
import Testimonial from "./(component)/Testimonial/page";
import Subscribe from "./(component)/Subscribe/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-black ">
      <div className="w-[100%] h-[60px]"></div>
     <Banner></Banner>
     <Category></Category>
     <Dastinations></Dastinations>
     <BookingTrip></BookingTrip>
     <Testimonial></Testimonial>
     <Subscribe></Subscribe>
    </div>

  );
}
