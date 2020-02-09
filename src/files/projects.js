const projects = [
    {
        id: 2,
        title: "fall film",
        medium: "35mm",
        year: 2019,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus finibus hendrerit. Nullam iaculis faucibus neque. In ullamcorper tempus felis. Ut vel mauris a erat tincidunt semper. Nullam rutrum, neque cursus consequat fringilla, ligula est malesuada lectus, et molestie augue magna eget dolor. Nullam dignissim lorem sit amet mauris venenatis, non finibus magna rutrum. Morbi sollicitudin nulla et ligula dignissim porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl neque, gravida non convallis a, vehicula luctus turpis. Mauris felis orci, eleifend at magna eu, aliquam scelerisque nulla. Praesent in metus quis neque elementum dignissim vitae sed urna. Quisque sem purus, pellentesque in leo ac, efficitur dapibus tellus.",
        short_description: "Laguna Beach with my friends :)",
        size: 5,
        images: [
            {
                ref: require('./35mm-fall-one.jpg'),
                caption: "1/5"
            },
            {
                ref: require('./35mm-fall-two.jpg'),
                caption: "2/5"
            },
            {
                ref: require('./35mm-fall-three.jpg'),
                caption: "3/5"
            },
            {
                ref: require('./35mm-fall-four.jpg'),
                caption: "4/5"
            },
            {
                ref: require('./35mm-fall-five.jpg'),
                caption: "5/5"
            }
        ]
    },
    {
        id: 1,
        title: "summer film",
        medium: "35mm",
        year: 2019,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus finibus hendrerit. Nullam iaculis faucibus neque. In ullamcorper tempus felis. Ut vel mauris a erat tincidunt semper. Nullam rutrum, neque cursus consequat fringilla, ligula est malesuada lectus, et molestie augue magna eget dolor. Nullam dignissim lorem sit amet mauris venenatis, non finibus magna rutrum. Morbi sollicitudin nulla et ligula dignissim porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisl neque, gravida non convallis a, vehicula luctus turpis. Mauris felis orci, eleifend at magna eu, aliquam scelerisque nulla. Praesent in metus quis neque elementum dignissim vitae sed urna. Quisque sem purus, pellentesque in leo ac, efficitur dapibus tellus.",
        short_description: "My favorite shots from Denver to LA",
        size: 6,
        images: [
            {
                ref: require('./35mm-summer-one.jpg'),
                caption: "1/6"
            },
            {
                ref: require('./35mm-summer-two.jpg'),
                caption: "2/6"
            },
            {
                ref: require('./35mm-summer-three.jpg'),
                caption: "3/6"
            },
            {
                ref: require('./35mm-summer-four.jpg'),
                caption: "4/6"
            },
            {
                ref: require('./35mm-summer-five.jpg'),
                caption: "5/6"
            },
            {
                ref: require('./35mm-summer-six.jpg'),
                caption: "6/6"
            }
        ]
    }
]
//Following my summer internship at Comcast, I drove from Denver to Los Angeles with my family. The following six photos are my favorite from the trip. As with all of my film, I haven't edited any of these photos. I might one day, but if I do they'll be somewhere else. Enjoy :)
//On a whim my friends and I drove to Laguna beach in September 2019. Some of my favorite photos and memories came from this day. As with all of my film, I haven't edited any of these photos. I might one day, but if I do they'll appear somewhere else. Enjoy :)

export default projects;
