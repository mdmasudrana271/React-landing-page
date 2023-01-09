import './App.css';
import header from '../src/asserts/logo.png'
import banner1 from "../src/asserts/1.png"
import banner2 from "../src/asserts/2.png"
import banner3 from "../src/asserts/3.png"
import { FaPhoneAlt, FaFacebook, FaGlobe } from "react-icons/fa";

function App() {
  return (
    <div className='bg-gradient-to-t from-yellow-100 md:pb-1'>
      <header className=' mt-5 flex justify-center items-center'>
        <img src={header} className="h-20 my-5" alt="" />
      </header>
      <section className='md:flex justify-center items-center'>
        <div className='md:w-1/2'>
          <img src={banner1} className="w-96" alt="" />
        </div>
        <div className='mx-7 md:mx-0 w-2/3'>
          <h3 className='text-md mb-3 font-bold ml-[-20px]'>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time</h3>
          <li className='text-sm font-bold'>C.R.I.'s energy efficient product are well recognized by various Government Institutions. as trustworthy products for various <br /> projects across the globe to save energy.</li>
          <li className='text-sm font-bold'>C.R.I is the highest contributor in the country for projects of EESL(Energy Efficiency Services Limited) to replace the <br /> old inefficient pumps with 5 star rated energy efficient smart pumps with lot enabled control panel.</li>
          <img src={banner2} className="my-5" alt="" />
          <p className='font-semibold'>Government of india has awarded the <strong>"NATIONAL Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj. joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri Raj Kumar Singh. Honorable <br /> Minister of State.</p>
        </div>
      </section>
      <section className='mt-10'>
        <h1 className='font-bold text-sm md:mx-10 mx-5 mb-5'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</h1>
        <img src={banner3} className="w-[75vw] mx-auto" alt="" />
        <h3 className='font-bold my-5 text-center'>Valves - Pumps - Pipes - IoT - Drives & Controllers - Wires & Cables - Solar Systems - Motors</h3>
        <hr className='bg-red-400 h-[3px] w-[95vw] mx-auto' />
        <h2 className='text-center text-md font-bold mt-3'>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
      </section>
      <section className='my-7'>
        <p className='font-bold text-sm text-center'>CHEMICAL & PROCESS <span className='text-red-400'>|</span> POWER <span className='text-red-400'>|</span> WATER & WASTE WATER <span className='text-red-400'>|</span> OILS & GAS <span className='text-red-400'>|</span> PHARMA <span className='text-red-400'>|</span> SUGARS & DISTILLERIES <span className='text-red-400'>|</span> PAPER & PULPS <span className='text-red-400'>|</span> MARINE & DEFENCE <span className='text-red-400'>|</span> METAL & MINING <span className='text-red-400'>|</span> FOOD & BEVERAGE <span className='text-red-400'>|</span> PETROCHEMICAL & REFINERIES <span className='text-red-400'>|</span> SOLAR <span className='text-red-400'>|</span> BUILDING <span className='text-red-400'>|</span>HVAC <span className='text-red-400'>|</span> FIRE FIGHTING <span className='text-red-400'>|</span> AGRICULTURE & RESIDENTIAL</p>
      </section>
      <footer className='bg-red-500 md:h-[20vh] md:mx-2 md:mb-2'>
        <div className='md:flex justify-evenly gap-5 pt-10 text-white'>
        <div className='flex gap-3'>
          <FaPhoneAlt className='text-3xl'></FaPhoneAlt>
          <p className='text-xl font-semibold mt-[10px]'>Toll free 1800 200 1234</p>
        </div>
        <div className='flex gap-3'>
          <FaFacebook className='text-3xl'></FaFacebook>
          <p className='text-xl font-semibold mt-[10px]'>www.facebook.com/cripumps</p>
        </div>
        <div className='flex gap-3'>
          <FaGlobe className='text-3xl'></FaGlobe>
          <p className='text-xl font-semibold mt-[10px]'>www.crigroups.com</p>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
