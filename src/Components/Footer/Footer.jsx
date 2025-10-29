function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto bg-white rounded-4xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-semibold text-gray-400 mb-4">Work with us</h3>
            <p className="text-sm sm:text-base text-muted-foreground">hello@oska.co</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-gray-400">Work with us</h3>
            <div className="text-sm sm:text-base flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-amber-500 transition">
                twitter
              </a>
              <a href="#" className="hover:text-amber-500 transition">
                dribble
              </a>
              <a href="#" className="hover:text-amber-500 transition">
                linkedin
              </a>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-end gap-4">
             <img src="/Logo.png" alt="logo" className="max-w-[3rem] w-full object-cover" />
            <div>
              <p className="font-medium text-foreground text-gray-400">Portfolio</p>
              <p className="text-sm text-muted-foreground font-medium">
                OskaTemplate By Flowbase
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center text-sm text-muted-foreground mt-10 font-medium">
        <p>Template by Flowbase. Powered by Webflow</p>
      </div>
    </footer>
  );
}

export default Footer;
