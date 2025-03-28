import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black py-6 px-12 text-white">
        <Link href="#" className="scroll-smooth w-fit">
          <p className="mb-8">
            <u className="cursor-pointer hover:text-slate-600">Back to Top</u>
          </p>
        </Link>
        <div className="flex flex-row">
          <div className="flex justify-between w-[50%]">
            <div>
              <p className="mb-3">
                <b>HOME</b>
              </p>
              <div className="flex flex-col gap-1">
                <p>TOP POSTS</p>
                <p>LOCAL BARBERS</p>
                <p>CREATE ACCOUNT</p>
                <p>BARBER ESSENTIALS</p>
                <p>BARBERSHOP ETIQUETTE</p>
                <p>CLIPPERS CRASH COURSE</p>
              </div>
            </div>
            <div>
              <p className="mb-3">
                <b>EXPLORE</b>
              </p>
              <div className="flex flex-col gap-1">
                <p>FADES</p>
                <p>SKINFADES</p>
                <p>STYLES</p>
                <p>GENERAL KNOWLEDGE</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex justify-end w-[50%]">
            <div>
            <p className="mb-3 text-lg tracking-wide">CREATE YOUR ACCOUNT</p>
            <div className="flex flex-col gap-2">

              <input type="text" placeholder="email" className="bg-white text-md text-black py-2 px-1 rounded-md w-96" />
              <button className="bg-[#1500FF] text-white py-4 rounded-md font-[NeueMontreal-Medium] text-sm hover:bg-black active:bg-[#1500FF] cursor-pointer">
                ENTER
              </button>
            </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer