export default {
  //(Please Do Not Remove The comma(,) after every variable)

  //Change The Website Template
  name: "Vijay Vethanayagam",

  //Contact Email
  contactEmail: "vj@gmail.com",

  // Landing Page Name
  landingPageName: "Vijay",

  // Landing Page Paragraph
  landingPagePara: 'I\'ve been a full stack developer for almost a decade! During this time I\'ve picked up some life saving tips/tricks to very annoying quirks with various applications and frameworks. I think it\'s what makes me unique in solving a lot of interesting problems.',

  // Landing Page Image (replace - root/public/assets/photo.jpg)
  landingPageImage: "assets/avatar.jpg",

  experience : [
    {
      position   : 'Senior full stack developer',
      company    : 'Instaclick Inc',
      website    : 'https://www.instaclick.com/',
      location   : 'Toronto, ON, CAN',
      start_date : '07/2015',
      end_date   :  null,
      summary    : 'An email marketing company which designs tools to meet affiliate needs to help drive customer acquisitions on products. Originally hired to migrate their legacy applications and systems to current technologies.',
      bullets    : [
          'Rapidly prototyping & deploying large scale concepts & ideas.',
          'Working closely with operations & QA to bring quality products to users.',
          'Updating legacy code to modern frameworks, technologies & best practices.',
          'Updated geo-location platform to better track and understand user data based on regions.',
      ]
    },
    {
      position   : 'Full Stack Developer & UX/UI Engineer',
      company    : 'Pala Interactive',
      website    : 'https://www.palainteractive.com',
      location   : 'Toronto, ON, CAN',
      start_date : '06/2011',
      end_date   : '07/2015',
      summary    : 'Pala Interactive is an online gambling company; One of their most notable applications made would be world poker tour. My responsibilities here were to develop tools to help manage their large & heavily regulated (and audited) applications.',
      bullets    : [
          'Migrated applications to a more modern MVC framework (CakePHP).',
          'Migrated legacy systems and applications to modern technologies, which improved development time on new features.',
          'Developed tools for internally and externally for partners and vendors.',
          'Managed multiple projects that demanded developing rapidly for deployment.',
          'Integrated external services such as payment services (PayPal ) & social media (Twitter, Facebook).',
          'Improved efficiency and performance of out-dated applications.',
          'Integrated with many third party APIs from partners and vendors.'
      ]
    },
    {
      position   : 'Web developer',
      company    : 'DSM Computing Solutions / itControl Solutions',
      website    : 'https://apogeeitservices.com',
      location   : 'Toronto, ON, CAN',
      start_date : '02/2008',
      end_date   :  '06/2011',
      summary    : 'A B2B SaaS start-up (now known as Apogee IT Services) that worked as the IT department for 50+ businesses primarily developing applications to assist in the upkeep & inventory of all workstations and servers.',
      bullets    : [
        'Migrated applications to a more modern MVC framework (CakePHP).',
        'Designed easy user interfaces and great user experiences for the digital platforms of small companies.',
        'Proficiently created and maintained easy-to-use aesthetic UIs.',
      ]
    },
    {
      position   : 'Data Analyst',
      company    : 'Canadian Bankers Association',
      website    : 'https://cba.ca',
      location   : 'Toronto, ON, CAN',
      start_date : '07/2007',
      end_date   : '02/2008',
      summary    : 'The Canadian Bankers Association advocates for public policies that contribute to a sound, thriving banking system. The association also helps enforce new policies & regulations for the big banks to stay under check.',
      bullets    : [
        'Analyzed security data to identify potential exposure to fraud.',
        'Ensured proper security and testing of various ATMs.',
        'Trained employees about security risks and procedures.',
      ]
    },
    {
      position   : 'Support Analyst / QA Software Tester',
      company    : 'TNS Smart Network',
      website    : 'https://tns-smart.net',
      location   : 'Toronto, ON, CAN',
      start_date : '01/2006',
      end_date   : '02/2008',
      summary    : 'TNS helps businesses complete their transactions without going through one of the "Big Banks". They are a payment processor and channel for white label ATMs.',
      bullets    : [
        '2nd tier technical support for a wide set of ATM Models.',
        'Ensured software being pushed to ATMs & processing units were bug-free.',
        'Trained employees on new standards and practices.',
      ]
    },
  ],

  skills : {
    frontend : [
      'Javascript',
      'ReactJs',
      'BackboneJs',
      'VueJs',
      'JQuery',
      'ES6',
      'HTML5',
      'Bootstrap',
    ],
    backend : [
      'PHP',
      'MySql',
      'Oracle',
      'Laravel',
      'ZendPHP',
      'CakePHP',
      'NodeJs',
      'SocketIO',
      'RabbitMQ',
      'Elasticsearch',
      'Logstash',
    ],
    tools   : [
      'Git',
      'Apache',
      'SVN',
      'Google APIs',
      'Facebook APIs',
      'NPM',
      'Jira',
      'Maxmind',
      'Rest APIs',
      'Postman',
      'Kibana'
    ],
    soft    : [
      'Disciplined & patient with demonstrated leadership ability',
      'Excellent time management skills.',
      'Works effectively in a team enviornment & individually.',
      'Interacts well with users, peers & superiors',
      'Excellent troubleshooting & problem solving skills'
    ],
  },
  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Quirky Turkeys", //Project Title - Add Your Project Title Here
      // Image Size Should be (300X300 px)
      imageSrc: "/assets/snap-quirk-turkeys.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://quirkyturkeys.com/"
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Club World Poker Tour",
      imageSrc: "/assets/snap-clubwpt.jpg",
      url: "https://www.clubwpt.com/"
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "California Lottery",
      imageSrc: "/assets/snap-calottery.jpg",
      url: "https://www.calottery.com/"
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Pala Casino (New Jersey)",
      imageSrc: "/assets/snap-nj-palacasino.png",
      url: "https://playcasino.palacasino.com/"
    },
    // {
    //   id: 5, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Five",
    //   imageSrc: "https://via.placeholder.com/300",
    //   url: "http://chetanverma.com/"
    // },
    // {
    //   id: 6, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Six",
    //   imageSrc: "https://via.placeholder.com/300",
    //   url: "http://chetanverma.com/"
    // },
    // Paste more projects here from the template

    /*
    // If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    {
      id: 7,
      service: 'Something Amazing',
      imageSrc: "",
      url: ''
    }
    */
  ],

  // Contact Section
  contactPara: "We all have a problems in our application that stackoverflow can't solve. Give me a shout, so I can solve it.",
  social: [
    // Add Or Remove The Link Accordingly
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vjryan/"
    },
    {
      name: "Github",
      url: "https://github.com/vjryan"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/"
    }
  ],

  // About Page
  aboutTitle : "I love a good problem to solve!",
  aboutPara  : "I have been working in web development since 2008, the period during which I have worked in different environments, from big companies to start-ups. I am an educated professional, but my real knowledge and experience has come from the various industries and people I've worked with throughout the years."
};