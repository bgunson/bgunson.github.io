module.exports = {
    github: {
        username: 'bgunson',
        /** List your github repos you want to display as "projects" */
        showcase: [
            'onboardpi',
            'obd-socketio',
            'HashMash', 
            'TaffyTangle', 
            'object-serialization'
        ]
    },

    interests: [
        { name: 'DIY', blurb: 'I fix whatever I can myself because it saves time and money!'},
        { name: 'Computer Networks'},
        { name: 'Web Applications', blurb: 'I believe that web is optimal for building cross-platform and user-friendly applications'},
        { name: 'Mountain Biking'},
        { name: 'Fly Fishing', blurb: 'I am on the river most weekends in the summer'},
        { name: 'Car Maintenance', blurb: 'I will tinker and repair my car whenever I get the chance'},
        { name: 'Camping'},
        { name: 'IoT', blurb: 'Currently learning and implementing the MQTT protocol'},
        { name: 'UI Design', blurb: 'I love to use my creative side when designing user interfaces'}
    ],

    languages: [
        { name: 'python', blurb: `Python was the first programming language I learned`},
        { name: 'java',  blurb: `Java taught me Object-oriented programming and is one of my favourites`},
        { name: 'html',  blurb: `HTML is invaluable in today's world and makes learning other markup languages easier`},
        { name: 'css',  blurb: `What's a web page without CSS?`},
        { name: 'scss',  blurb: `I am still learning the ropes of SCSS and its full potential`},
        { name: 'javascript',  blurb: `It is hard to avoid JavaScript and I love to watch its progression`},
        { name: 'typescript',  blurb: `I appreciate that TypeScript mends some the unpredictability that comes with JavaScript`},
        { name: 'c#',  blurb: `I use C# when I develop WPF and Blazor applications`}
    ],

    links: [
        { name: 'github', url: 'https://github.com/bgunson' },
        { name: 'docker', url: 'https://hub.docker.com/u/bgunson'},
        { name: 'email', url: 'mailto:bengunson@gmail.com' },
        { name: 'blog', url: 'https://bengunson.me/blog' },
        { name: 'thingiverse', url: 'https://www.thingiverse.com/bgunson/designs' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/bennett-gunson/' }
    ],
    blog: {
        enable: true,
        feedURL: 'https://bengunson.me/blog/feed.xml'
    }
}
