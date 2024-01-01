'use client'
import Image from "next/image"
import CustomBtn from "./CustomBtn"

const handleClick=()=>{

}

const Hero = () => {
  return (
    <div className="hero">
        <div className="flex-1 pxRes pt-36">
          <h1 className="hero_title">Find, Book or Rent a car - quickly and easily</h1>
          <p className="hero_subtitle">
            Streamline your car rental experience with our effortless booking process.
          </p>
          <CustomBtn title='View Cars' 
          btnStyle='bg-primary-blue mt-10 rounded-full text-white'
           handleClick={handleClick} />
        </div>

        <div className="hero_image-container">
          <div className="hero_image">
            <Image src={'/hero.png'} alt="hero" fill className="object-contain" />
          </div>
          <div className="hero_image-overlay"></div>
        </div>
    </div>
  )
}

export default Hero