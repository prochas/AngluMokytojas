/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://anglumokytojas.lt",
  generateRobotsTxt: true, // generates /robots.txt
  sitemapSize: 7000, // splits if > 7000 URLs
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/admin/*", "/drafts/*"],
};