import Marquee from "react-fast-marquee";

export default function Header(){
    return (
        <header className="py-8">
            <div className="container mx-auto py-8">
                <div className="inline-block w-4/5 text-start"> 
                    <span className="px-4 bg-gray-100 text-black rounded-md font-bold"> 
                        <span className="text-slate-500	">VN</span> / 
                        <span>EN</span>
                    </span>
                </div>
                <div className="w-1/5 ml-auto inline-block border-y-2 border-x-8">
                <Marquee> 
                    <span>01 STAY AUTHENTIC   //   02 VALUE DRIVEN    //   03 TRUST </span>
                </Marquee>
                </div>
                
                <hr className="my-2 border-t-4"/>
                <span className="text-8xl font-bold block 	"> ARROW-STUDIO ➤</span>
                <div className="flex justify-between text-2xl font-normal block mb-4 italic">
                    <span>  Digital Design & Marketing Agency / Saigon, Vietnam © 2023 </span>
                </div>
                <hr className="my-2 border-t-4"/>
            </div>
            <div className="container mx-auto justify-between">
                    <ul className="inline-flex justify-start">
                        <li className="group rounded-lg border border-transparent px-5 mr-2  transition-colors hover:border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"> Work(s) </li>
                        <li className="group rounded-lg border border-transparent px-5 mr-2 transition-colors hover:border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"> About </li>
                        <li className="group rounded-lg border border-transparent px-5 mr-2 transition-colors hover:border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"> Contact </li>
                        <li className="group rounded-lg border border-transparent px-5 mr-2 transition-colors hover:border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"> Services </li>
                    </ul>
                </div>
        </header>
    )
}