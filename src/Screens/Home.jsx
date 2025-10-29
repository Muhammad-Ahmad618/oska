import Navbar from "../Components/NavBar/Navbar";
import { MdArrowOutward } from "react-icons/md";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import StatsSection from "../Components/StatsSection/StatsSection";
import CustomBtn from "../Components/CustomBtn/CustomBtn";
import Testimonial from "../Components/Testimonials/Testimonial";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import ArticleCards from "../Components/ArticlesCards/ArticleCards";
import FaQs from "../Components/FaQ/FaQs";
import Footer from "../Components/Footer/Footer";

function Home() {
  const projects = [
    {
      title: "Raze",
      thumbnail: "/project1.png",
    },
    {
      title: "July",
      thumbnail: "/project2.png",
    },
    {
      title: "Quillow",
      thumbnail: "/project3.png",
    },
  ];

  const articles = [
    {
      title: "The role of typography in website design",
      thumbnail: "/article1.png",
    },
    {
      title: "Creating a visual hierarchy for betterwebsite readability",
      thumbnail: "/article2.png",
    },
    {
      title: "Creating a user-friendly websitenavigation",
      thumbnail: "/article3.png",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen m-0 pt-0 pb-4 lg:py-4 ">
      <Navbar />
      <div className="mt-28 max-w-screen-2xl mx-auto">
        <div className="text-center  flex items-center justify-center md:justify-between px-5 md:px-0">
          <div className="hidden md:block">
            <img src="/background1.png" alt="bg" className="object-cover max-w-64 w-full" />
          </div>
          <div className="space-y-10">
            <div className="text-[2.4rem] sm:text-[3.3rem] font-medium">
              <h1>
                <span className="bg-[#c0ff5c] p-2 rounded-xl">
                  Hey, I'm Sam
                </span>
              </h1>
              <h1>Digital Product Designer</h1>
            </div>
            <p className="text-sm sm:text-lg">
              The Oska Portfolio template is perfect for creatives, freelancers,
              and small <br /> businesses looking to make a professional
              impression online.
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/background2.png" alt="bg" className="object-cover max-w-64 w-full"/>
          </div>
        </div>
        <StatsSection />
        <div className="space-y-14 sm:space-y-28 px-5 lg:px-28 2xl:px-48">
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="basis-[57%] p-7 sm:p-14 rounded-xl bg-white space-y-5 min-h-88 flex flex-col items-start justify-center">
                <h3 className="text-[1.6rem] font-medium">
                  Achievements in my professional life.
                </h3>
                <p className=" text-gray-600 text-sm leading-relaxed max-w-sm whitespace-normal">
                  The Oska Portfolio template is fully responsive, meaning it
                  looks great on any device, from desktop computers to
                  smartphones.
                </p>
                <div className="mt-5">
                  <CustomBtn
                    label="Contact Me - it's free"
                    styling="bg-black text-white hover:bg-gray-900"
                  />
                </div>
              </div>
              <div className="bg-[url('/background.png')] bg-cover bg-no-repeat sm:bg-center p-10 basis-[43%] rounded-xl space-y-3">
                <h6 className="text-white">Interface Designer</h6>
                <p className="text-xs text-white sm:text-gray-400 leading-relaxed max-w-xs whitespace-normal">
                  As a UI designer, I work closely with clients to understand
                  their needs and goals for their software or website.
                </p>
              </div>
            </div>
            <Testimonial />
          </div>
          {/* Project Section */}
          <div>
            <div className="space-y-5">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-3">
                  <ProjectCards project={project} />
                </div>
              ))}
            </div>
            <CustomBtn
              label="See All ~ Templates"
              styling="w-full text-white bg-black hover:bg-gray-900 rounded-full my-5"
            />
          </div>
          {/* Article Section */}
          <div className="bg-white rounded-xl px-3 py-10 sm:p-10 ">
            <div className="flex justify-between items-center mb-10 ">
              <div>
                <h1 className="text-[1.7rem] font-medium">Articles</h1>
                <p className="text-gray-500 text-sm">
                  A template from Flowbase
                </p>
              </div>
              <button className="w-14 h-14 rounded-full border border-gray-400 flex justify-center items-center hover:bg-black/10">
                <MdArrowOutward className="text-[1.2rem]" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              {articles.map((article, index) => (
                <ArticleCards key={index} article={article} />
              ))}
            </div>
          </div>
          {/* FAQ's Section */}
          <FaQs />
          <section className="py-20 max-w-7xl mx-auto bg-white rounded-4xl flex items-center justify-center min-[860px]:justify-between">
            <div className="hidden min-[860px]:block">
              <img src="/cta1.png" alt="bg" />
            </div>
            <div className="text-center space-y-8">
              <h2 className="text-3xl sm:text-5xl font-semibold text-foreground leading-18">
                <span className="py-2 px-5 border border-gray-300 rounded-full">
                  Want to start
                </span>
                <br /> a project?
              </h2>

              <div className="flex justify-center">
                <button className="flex bg-[#FFEE5B] text-sm sm:text-base items-center gap-9 px-5 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition cursor-pointer">
                  Let's Talk!
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent text-sm font-bold">
                    <IoArrowForwardCircleSharp className="text-[1.2rem]" />
                  </div>
                </button>
              </div>
            </div>
            <div className="hidden min-[860px]:block">
              <img src="/cta2.png" alt="bg" />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
