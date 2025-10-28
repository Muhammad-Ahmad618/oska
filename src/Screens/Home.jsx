import Navbar from "../Components/NavBar/Navbar";
import { MdArrowOutward } from "react-icons/md";
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
    <div className="bg-[#f5f5f5] min-h-screen m-0 py-4">
      <Navbar />
      <div className="px-20 my-28">
        <div className="text-center space-y-10">
          <div className="text-[3.3rem] font-medium">
            <h1>
              <span className="bg-[#c0ff5c] p-2 rounded-xl">Hey, I'm Sam</span>
            </h1>
            <h1>Digital Product Designer</h1>
          </div>
          <p className="text-lg">
            The Oska Portfolio template is perfect for creatives, freelancers,
            and small <br /> businesses looking to make a professional
            impression online.
          </p>
        </div>
        <StatsSection />
        <div className="px-28 space-y-28">
          <div className="space-y-5">
            <div className="flex gap-x-5">
              <div className="basis-[57%] p-14 rounded-xl bg-white space-y-5 min-h-88 flex flex-col items-start justify-center">
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
              <div className="bg-[url('/background.png')] bg-cover bg-center p-10 basis-[43%] rounded-xl space-y-3">
                <h6 className="text-white">Interface Designer</h6>
                <p className="text-xs text-gray-400 leading-relaxed max-w-xs whitespace-normal">
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
          <div className="bg-white rounded-xl p-10 ">
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
            <div className="flex gap-x-5">
              {articles.map((article, index) => (
                <ArticleCards key={index} article={article} />
              ))}
            </div>
          </div>
          {/* FAQ's Section */}
          <FaQs />
          <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
            <div className="text-center space-y-8">
              <h2 className="text-5xl sm:text-6xl font-bold text-foreground">
                Want to start a project?
              </h2>

              <div className="flex justify-center">
                <button className="flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition">
                  Let's Talk!
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-accent text-sm font-bold">
                    ●
                  </div>
                </button>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;
