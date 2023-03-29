function load() {
    var feed ="http://feeds.bbci.co.uk/news/world/rss.xml";
    new GFdynamicFeedControl(feed, "feedControl");
    
    }

google.load("feeds", "1");
google.setonloadCallback(load);


// как сделать новости на сайте
// http://www.coolwebmasters.com/rssfeeds/2580-a-simple-way-to-add-free-news-content-to-your-website.html