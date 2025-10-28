

function ArticleCards({article}) {
  return (
    <div>
        <div>
            <img src={article.thumbnail} alt="thumbnail" className="object-cover w-full rounded-t-2xl" />
        </div>
        <div className="p-5 space-y-2 border border-gray-200 rounded-xl">
            <h4 className="text-[1.1rem] font-medium">{article.title}</h4>
            <p className="text-sm text-gray-500 leading-6 line-clamp-3">A website is a collection of interconnected web pages, like a digital book, that is published online under a common domain name. It can include text, images, videos, and other media, and is used for various purposes such as sharing information, selling products, and building a digital presence. Websites are accessed by users through browsers and are hosted on web servers</p>

        </div>
      
    </div>
  )
}

export default ArticleCards
