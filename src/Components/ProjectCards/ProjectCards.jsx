import { MdArrowOutward } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa"

function ProjectCards({project}) {
  return (
    <>
      <div className="flex justify-between items-center p-6">
        <div>
          <h1 className="text-[1.7rem] font-medium">{project.title}</h1>
          <p className="text-gray-500 text-sm">A template from Flowbase</p>
        </div>
        <button className="w-14 h-14 rounded-full border border-gray-400 flex justify-center items-center hover:bg-black/10">
          <MdArrowOutward className="text-[1.2rem]"/>
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-7 mt-5">
        <div className="basis-[60%] p-5 bg-[#fdf7f7] rounded-lg w-full">
          <img src={project.thumbnail} alt="thumbnail" className="max-w-140 object-cover mx-auto w-full" />
        </div>
        <div className="basis-[40%]">
         <div className="space-y-8 md:space-y-12 xl:space-y-22"> 
           <div className="space-y-5"> 
          <h4 className="font-medium text-[1.2rem]">Project was about precision and information. That’s all!</h4>
          <p className="text-sm text-gray-700 leading-6">
            Our design team helps clients achieve their marketing and business
            goals through user-friendly, engaging target branding that appeals
            to a website.
          </p>
          <ul className="flex items-center flex-wrap gap-3">
            <li className="py-1 px-5 text-gray-600 bg-gray-100 text-sm font-medium rounded-full">
              Branding
            </li>
            <li className="py-1 px-5 text-gray-600 bg-gray-100 text-sm font-medium rounded-full">
              Graphic Design
            </li>
            <li className="py-1 px-5 text-gray-600 bg-gray-100 text-sm font-medium rounded-full">
              User Stories
            </li>
          </ul>
          </div>

          <div className="space-y-5">
            <p className="text-sm max-w-xs font-medium text-gray-600">
              "The service was excellent. Template example is the next killer
              app. 😎
            </p>
            <div className="flex items-center gap-x-2">
              <div>
                <FaUserCircle className="text-[2.5rem] text-gray-300"/>
              </div>
              <div>
              <h6 className="text-xs font-medium">Jeremy Douglas</h6>
              <p className="text-xs text-gray-600">UI & UX Designer</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
