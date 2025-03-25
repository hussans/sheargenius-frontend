import Navbar from "@/components/ui/navbar";
import Link from "next/link";

export default function Home() {

  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col gap-1 mb-1 text-center px-10">
        <Link
          className="bg-slate-300 p-4 hover:bg-black hover:text-white active:bg-slate-200 active:text-black" href={"./login"}> Login </Link>
        <Link className="bg-slate-300 p-4 hover:bg-black hover:text-white active:bg-slate-200 active:text-black" href={"./register"}> Register </Link>
      </div>
    </div>
  );
}
