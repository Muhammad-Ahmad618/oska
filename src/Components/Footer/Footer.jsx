function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto bg-white rounded-4xl py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Work with us</h3>
            <p className="text-muted-foreground">hello@oska.co</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Work with us</h3>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-accent transition">
                twitter
              </a>
              <a href="#" className="hover:text-accent transition">
                dribble
              </a>
              <a href="#" className="hover:text-accent transition">
                aedin
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground">
              ⚡
            </div>
            <div>
              <p className="font-semibold text-foreground">Portfolio</p>
              <p className="text-sm text-muted-foreground">
                OskaTemplate By Flowbase
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center text-sm text-muted-foreground mt-10">
        <p>Template by Flowbase. Powered by Webflow</p>
      </div>
    </footer>
  );
}

export default Footer;
