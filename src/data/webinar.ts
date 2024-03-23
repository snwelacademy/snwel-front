
import { constants } from '@/config/constants'
import { Webinar } from '@/types/Webinar'
import slugify from 'slugify'
export const webinarData: Webinar[] = [
    {
        id: "webinar-1",
        title: "Mastering SolidWorks for Mechanical Design",
        shortDescription: "Take your 3D modeling skills to the next level with this in-depth webinar on SolidWorks.",
        content: `
          <p>Join us for a comprehensive webinar on SolidWorks, a leading software for mechanical design. This webinar is ideal for engineers, designers, and anyone who wants to learn how to create complex 3D models efficiently.</p>
          <p>**In this webinar, you will learn:**</p>
          <ul>
            <li>The basics of SolidWorks interface and navigation</li>
            <li>Creating 2D sketches and extruding them into 3D models</li>
            <li>Utilizing advanced features like assemblies, drawings, and simulations</li>
            <li>Best practices for efficient and professional design workflows</li>
          </ul>
          <p>**This webinar is perfect for you if:**</p>
          <ul>
            <li>You are new to SolidWorks and want to get started.</li>
            <li>You have some experience with SolidWorks but want to improve your skills.</li>
            <li>You are looking for tips and tricks to become a more efficient SolidWorks user.</li>
          </ul>
          <p><b>Register now to secure your spot!</b></p>
        `,
        startDate: new Date(2024, 4, 10).toISOString(), // April 10, 2024
        slug: slugify("Mastering SolidWorks for Mechanical Design"),
        thumbnail: `${constants.imagePath}/webinar/Mastering SolidWorks for Mechanical Design.jpg`
      },
      {
        id: "webinar-2",
        title: "Unlocking the Power of BIM for Civil Engineers",
        shortDescription: "Discover how Building Information Modeling (BIM) can revolutionize your civil engineering projects.",
        content: `
          <p>This webinar explores Building Information Modeling (BIM) and its impact on civil engineering. We will delve into the benefits of BIM software like Revit and how it can improve collaboration, design accuracy, and construction efficiency.</p>
          <ul>
            <li>The core concepts of BIM and its benefits for civil engineering projects</li>
            <li>How to create and manage BIM models using software like Revit</li>
            <li>The role of BIM in collaboration between different engineering disciplines</li>
            <li>Real-world case studies showcasing the successful implementation of BIM</li>
          </ul>
          <p>**This webinar is ideal for:**</p>
          <ul>
            <li>Civil engineers who want to learn about BIM</li>
            <li>Project managers and other professionals involved in construction projects</li>
            <li>Anyone interested in the future of civil engineering and design</li>
          </ul>
          <p><b>Register now and take your first step towards a more efficient and collaborative future.</b></p>
        `,
        startDate: new Date(2024, 5, 15).toISOString(), // May 15, 2024
        slug: slugify("Unlocking the Power of BIM for Civil Engineers"),
        thumbnail: `${constants.imagePath}/webinar/Unlocking the Power of BIM for Civil Engineers.jpg`
      },
      {
        id: "webinar-3",
        title: "Essential Skills for Successful Chemical Engineers",
        shortDescription: "Elevate your chemical engineering expertise with this insightful webinar on essential skills.",
        content: `
          <p>The chemical engineering field requires a diverse skillset for success. This webinar dives into the crucial skills every chemical engineer needs to possess, from technical knowledge to soft skills.</p>
          <ul>
            <li>Core chemical engineering principles and their practical applications</li>
            <li>Process design, simulation, and optimization using industry-standard software</li>
            <li>Essential safety considerations and best practices in chemical engineering</li>
            <li>Effective communication, teamwork, and problem-solving skills for engineers</li>
          </ul>
          <p>**This webinar is beneficial for:**</p>
          <ul>
            <li>Chemical engineering students or recent graduates entering the workforce</li>
            <li>Chemical engineers looking to refresh their knowledge and advance their careers</li>
          </ul>
          <p><b>Don't miss this opportunity to learn from industry experts and gain valuable insights!</b></p>
        `,
        startDate: new Date(2024, 3, 21).toISOString(), // March 21, 2024 (past date)
        slug: slugify("Essential Skills for Successful Chemical Engineers"),
        thumbnail: `${constants.imagePath}/webinar/Essential Skills for Successful Chemical Engineers.jpg`
      },

      {
        id: "webinar-4",
        title: "The Future of Electrical Engineering: Embracing the Rise of Automation",
        shortDescription: "Explore the impact of automation on electrical engineering and how to stay ahead of the curve.",
        content: `
          <p>The field of electrical engineering is rapidly evolving with the rise of automation. This webinar explores the latest trends and technologies, and how they are transforming the way we design, build, and maintain electrical systems.</p>
          <p>**In this webinar, you will learn:**</p>
          <ul>
            <li>The impact of artificial intelligence and machine learning on electrical engineering</li>
            <li>How automation is changing the role of electrical engineers</li>
            <li>The skills and knowledge needed to thrive in the automated future of electrical engineering</li>
            <li>Real-world examples of how automation is being used in electrical engineering projects</li>
          </ul>
          <p>**This webinar is ideal for:**</p>
          <ul>
            <li>Electrical engineers of all experience levels</li>
            <li>Students interested in pursuing a career in electrical engineering</li>
            <li>Anyone curious about the future of automation and its impact on engineering</li>
          </ul>
          <p><b>Register now to ensure your spot in this informative webinar!</b></p>
        `,
        startDate: new Date(2024, 6, 20).toISOString(), // June 20, 2024
        slug: slugify("The Future of Electrical Engineering: Embracing the Rise of Automation"),
        thumbnail: `${constants.imagePath}/webinar/The Future of Electrical Engineering Embracing the Rise of Automation.jpg`
      },
      {
        id: "webinar-5",
        title: "Demystifying Cybersecurity: Essential Knowledge for Every Engineer",
        shortDescription: "Learn the fundamentals of cybersecurity and how to protect critical infrastructure in the digital age.",
        content: `
          <p>In today's interconnected world, cybersecurity is a growing concern for all engineers. This webinar provides a basic understanding of cybersecurity threats and best practices for protecting critical infrastructure.</p>
          <p>**In this webinar, you will learn:**</p>
          <ul>
            <li>The different types of cyber threats and vulnerabilities</li>
            <li>The importance of secure coding practices for engineers</li>
            <li>Strategies for protecting data and systems from cyberattacks</li>
            <li>How engineers can contribute to a culture of cybersecurity within their organizations</li>
          </ul>
          <p>**This webinar is beneficial for:**</p>
          <ul>
            <li>Engineers of all disciplines who work on projects with cyber security considerations</li>
            <li>Anyone interested in learning more about cybersecurity and its role in engineering</li>
          </ul>
          <p><b>Don't miss this opportunity to gain valuable knowledge and protect yourself and your projects from cyber threats!</b></p>
        `,
        startDate: new Date(2024, 7, 25).toISOString(), // July 25, 2024
        slug: slugify("Demystifying Cybersecurity: Essential Knowledge for Every Engineer"),
        thumbnail: `${constants.imagePath}/webinar/Demystifying Cybersecurity Essential Knowledge for Every Engineer.jpg`
      },
      {
        id: "webinar-6",
        title: "Effective Communication & Project Management for Engineers",
        shortDescription: "Master the art of communication and project management to excel in your engineering career.",
        content: `
          <p>Technical skills are crucial, but strong communication and project management skills are equally important for engineers. This webinar explores strategies for effective communication and efficient project management.</p>
          <p>**In this webinar, you will learn:**</p>
          <ul>
            <li>The importance of clear and concise communication in engineering projects</li>
            <li>Effective communication techniques for written reports, presentations, and meetings</li>
            <li>Project management fundamentals like planning, scheduling, and risk management</li>
            <li>Tools and techniques for successful project execution and team collaboration</li>
          </ul>
          <p>**This webinar is valuable for:**</p>
          <ul>
            <li>All engineers who want to improve their communication and project management skills</li>
            <li>Aspiring engineering leaders who want to develop the necessary skills for project success</li>
          </ul>
          <p><b>Register now to learn how to communicate effectively, manage projects efficiently, and achieve your engineering goals!</b></p>
        `,
        startDate: new Date(2024, 8, 22).toISOString(), // August 22, 2024
        slug: slugify("Effective Communication & Project Management for Engineers"),
        thumbnail: `${constants.imagePath}/webinar/Effective Communication & Project Management for Engineers.jpg`
      },

      {
        id: "webinar-7",
        title: "Leveraging Data Analytics for Successful Piping Design",
        shortDescription: "Uncover how data analytics is transforming piping design and optimizing engineering workflows.",
        content: `
          <p>Piping systems are critical components in many industries. This webinar explores the power of data analytics in optimizing piping design processes. We'll delve into using data to improve efficiency, reduce costs, and ensure project success.</p>
          <ul>
            <li>The role of data analytics in modern piping design workflows</li>
            <li>Utilizing data for material selection, stress analysis, and code compliance</li>
            <li>Data-driven approaches to streamline piping layout and routing</li>
            <li>Case studies showcasing successful implementation of data analytics in piping projects</li>
          </ul>
          <p>**This webinar is ideal for:**</p>
          <ul>
            <li>Piping engineers and designers seeking to improve their workflows</li>
            <li>Anyone interested in the intersection of data analytics and engineering</li>
          </ul>
          <p><b>Register now to learn how data can revolutionize your approach to piping design!</b></p>
        `,
        startDate: new Date(2024, 9, 19).toISOString(), // September 19, 2024
        slug: slugify("Leveraging Data Analytics for Successful Piping Design"),
        thumbnail: `${constants.imagePath}/webinar/Leveraging Data Analytics for Successful Piping Design.jpg`
      },
      {
        id: "webinar-8",
        title: "The Green Shift: Sustainable Design Strategies for Engineers",
        shortDescription: "Explore sustainable design principles and practices to contribute to a greener future.",
        content: `
          <p>Sustainability is becoming a top priority across all engineering disciplines. This webinar explores how engineers can integrate sustainable design principles into their projects.</p>
          <ul>
            <li>The importance of sustainable design in mitigating climate change</li>
            <li>Key principles of sustainable engineering, including energy efficiency, resource conservation, and life-cycle analysis</li>
            <li>Practical strategies for implementing sustainable design in various engineering fields</li>
            <li>Real-world examples of sustainable engineering projects</li>
          </ul>
          <p>**This webinar is beneficial for:**</p>
          <ul>
            <li>Engineers who want to contribute to a more sustainable future</li>
            <li>Anyone interested in learning about the latest trends in sustainable design</li>
          </ul>
          <p><b>Join us to learn how you can make a positive impact through sustainable engineering practices!</b></p>
        `,
        startDate: new Date(2024, 10, 17).toISOString(), // October 17, 2024
        slug: slugify("The Green Shift: Sustainable Design Strategies for Engineers"),
        thumbnail: `${constants.imagePath}/webinar/Sustainable Design Strategies for Engineers.jpg`
      },
      {
        id: "webinar-9",
        title: "From Chaos to Clarity: Mastering Project Management for Engineering Teams",
        shortDescription: "Discover effective project management techniques to ensure successful project delivery in engineering.",
        content: `
          <p>Engineering projects can be complex and involve multiple stakeholders. This webinar explores proven project management techniques to keep your projects on track.</p>
          <ul>
            <li>Essential project management methodologies, like Agile and Waterfall</li>
            <li>Effective planning, scheduling, and risk management strategies</li>
            <li>Leading and motivating engineering teams for peak performance</li>
            <li>Communication strategies for clear collaboration and stakeholder engagement</li>
          </ul>
          <p>**This webinar is valuable for:**</p>
          <ul>
            <li>Engineering project managers and team leads</li>
            <li>Engineers who want to develop their project management skills</li>
          </ul>
          <p><b>Register now to gain valuable insights and tools for successful project management in engineering!</b></p>
        `,
        startDate: new Date(2024, 11, 14).toISOString(), // November 14, 2024
        slug: slugify("From Chaos to Clarity: Mastering Project Management for Engineering Teams"),
        thumbnail: `${constants.imagePath}/webinar/Mastering Project Management for Engineering Teams.jpg`
      },
      {
        id: "webinar-10",
        title: "Building Your Personal Brand: Strategies for Engineering Professionals",
        shortDescription: "Learn how to build a strong personal brand to advance your engineering career.",

        content: `
          <p>In today's competitive job market, building a strong personal brand is essential for engineers. This webinar provides practical strategies for career advancement through personal branding.</p>
          <ul>
            <li>The importance of personal branding for engineers in today's job market</li>
            <li>Defining your unique value proposition and career goals</li>
            <li>Building a strong online presence through social media and professional platforms</li>
            <li>Content creation strategies to showcase your expertise and thought leadership</li>
            <li>Networking effectively to build meaningful connections and expand your reach</li>
          </ul>
          <p>**This webinar is beneficial for:**</p>
          <ul>
            <li>Engineering professionals at all stages of their careers</li>
            <li>Anyone interested in learning how to build a strong personal brand</li>
          </ul>
          <p><b>Register now to learn how to leverage personal branding to achieve your engineering career goals!</b></p>
        `,
        startDate: new Date(2024, 12, 12).toISOString(), // December 12, 2024
        slug: slugify("Building Your Personal Brand: Strategies for Engineering Professionals"),
        thumbnail: `${constants.imagePath}/webinar/Building Your Personal Brand Strategies for Engineering Professionals.jpg`
      }
]