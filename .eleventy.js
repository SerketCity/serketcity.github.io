import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default async function(eleventyConfig) {
    eleventyConfig.setOutputDirectory("docs");

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom",
        outputPath: "/feed.xml",
        collection: {
            name: "post",
            limit: 0
        },
        metadata: {
            language: "en",
            title: "egregore.garden",
            subtitle: "a blog from me to you",
            base: "https://egregore.garden/",
            author: {
                name: "john"
            }
        }
    })
};