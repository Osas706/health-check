import { ThumbsUp } from "lucide-react";

function NewsLetter() {
  return (
    <div className="w-full bg-slate-900 px-2 text-center text-white pt-20 pb-10 flex flex-col items-center justify-center">
      <p className="text-red-600 font-medium">Get updated</p>
      <h1 className="max-w-lg font-semibold text-4xl/[34px] md:text-4xl/[44px]  mt-2">
        Subscribe to our newsletter & get the latest news
      </h1>

      <div className="flex items-center justify-center border border-red-600 mt-10 focus-within:outline focus-within:outline-red-600 text-sm rounded-full h-14 max-w-sm md:max-w-md">
        <input
          type="text"
          className="bg-transparent outline-none rounded-full px-4 h-full md:flex-1"
          placeholder="Enter your email address"
        />
        <button className="bg-red-600 text-white rounded-full h-11 mr-1 px-8 flex items-center gap-1 justify-center">
          Subscribe <ThumbsUp size={18}/>
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;