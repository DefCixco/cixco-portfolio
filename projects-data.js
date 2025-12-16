const projects = [
    // --- PROJECT: AI-Powered Feedback Filtering for Discourse Community ---
{
    id: "ai-feedback-filtering-discourse",
    title: "AI-Powered Feedback Filtering for an Online Course Community",
    category: "AUTOMATION",
    summary: "Automated the analysis and prioritization of community feedback using Discourse, OpenAI, and Slack to help a course creator focus on high-impact and urgent suggestions.",
    tools: ["Make", "Discourse API", "OpenAI", "Slack"],
    heroImage: "/Example/bc475eb6-aac4-42cf-a3fd-6f9616af0196.png",

    context: "An online course creator was managing a growing community hosted on Discourse. As student feedback and suggestions increased, it became difficult to manually review every topic and identify which ones were urgent, unique, or still unaddressed.",

    goals: [
        "Automatically review new feedback topics from the community",
        "Identify suggestions that are urgent or require attention",
        "Reduce the manual effort needed to monitor community discussions"
    ],

    constraints: [
        "Large volume of community posts",
        "Feedback needed to be reviewed without manual reading of every topic",
        "Notifications had to be concise and actionable"
    ],

    approach: "I focused on automating the feedback review process instead of replacing human decision-making. The goal was to surface only high-quality or urgent topics to the course creator, allowing them to review what mattered most without scanning the entire community.",

    solutionPoints: [
        "Used the Discourse module in Make to list and retrieve new discussion topics",
        "Processed topic content with OpenAI to analyze relevance, uniqueness, and urgency",
        "Designed an AI prompt to generate an urgency score for each topic",
        "Automatically sent high-priority topics to a private Slack channel for review"
    ],

    outcome: "The course creator gained better visibility into important feedback without manually reviewing every post. Urgent and meaningful suggestions were highlighted faster, helping improve responsiveness within the community.",

    reflection: "With more time, the system could be extended to track recurring feedback themes or store analyzed topics in a database for long-term insights and reporting.",

    videoEmbed: "",
    liveLink: ""
},


   // --- PROJECT: Dog Grooming Squeeze Page ---
{
    id: "dog-grooming-squeeze-page",
    title: "Lead Generation Squeeze Page for a Dog Grooming Service",
    category: "WEB & FUNNELS",
    summary: "Designed and deployed a simple, conversion-focused squeeze page to help a local dog grooming business capture leads using a free trial offer.",
    tools: ["GoHighLevel", "HTML/CSS", "Form Automation"],
    heroImage: "/Example/15cf3b7d-3e78-476f-a67c-cf21c7efba90pawtify.png",

    context: "The dog grooming business relied mostly on word-of-mouth and had no structured way to capture leads online. They wanted a simple page that could attract local pet owners and convert visitors into contacts they could follow up with.",

    goals: [
        "Capture contact details from potential customers",
        "Use a clear and simple lead magnet to encourage sign-ups",
        "Create a page that is easy to understand and mobile-friendly"
    ],

    constraints: [
        "Local audience with short attention span",
        "Offer needed to be simple and clearly communicated",
        "Page had to load fast and work well on mobile devices"
    ],

    approach: "I focused on building a straightforward squeeze page with a single goal: collect leads. Instead of adding unnecessary sections, I structured the page around the free trial offer, clear messaging, and a simple form to reduce friction and improve conversions.",

    solutionPoints: [
        "Designed a single-page layout focused on one clear call-to-action",
        "Implemented a lead capture form connected to the client’s follow-up system",
        "Highlighted the free trial offer as the primary incentive",
        "Optimized the page for mobile users and quick load times"
    ],

    outcome: "The business was able to start collecting leads consistently and build a contact list for follow-up and future promotions, creating a more reliable way to grow their customer base.",

    reflection: "If the funnel were expanded further, the next step would be adding automated follow-ups and basic tracking to better understand conversion performance over time.",

    videoEmbed: "",
    liveLink: "https://app.gohighlevel.com/v2/preview/1dbLg4OiUwYCTCERofgh"
},

// --- PROJECT: Automation Agency Website & CRM System ---
{
    id: "automation-agency-website-crm",
    title: "Website & CRM System for an Automation Agency",
    category: "WEB & CRM SYSTEMS",
    summary: "Built a full website and CRM setup in GoHighLevel to help an automation agency capture leads, manage clients, and organize their sales pipeline in one place.",
    tools: ["GoHighLevel", "CRM Pipelines", "Form Automation", "Tagging System"],
    heroImage: "/Example/1217a6c0-054a-4d5d-a959-409abb99a606agency.png",

    context: "The agency needed a professional website that could do more than just present their services. They wanted a single system where they could capture inquiries, manage leads, track client status, and organize ongoing relationships without switching between multiple tools.",

    goals: [
        "Create a clean, professional website for the agency",
        "Capture inbound leads directly into a CRM",
        "Organize leads and clients using pipelines and tags",
        "Support ongoing client management from a single system"
    ],

    constraints: [
        "Website and CRM needed to live inside one platform",
        "System had to be simple enough for daily internal use",
        "Different client types needed clear separation"
    ],

    approach: "I approached the project as a system build rather than just a website. Before designing pages, I mapped how leads would enter the system, how they would move through different stages, and how client information would be organized for long-term use.",

    solutionPoints: [
        "Built the agency website inside GoHighLevel with clear service and contact sections",
        "Connected contact forms directly to the CRM",
        "Set up pipelines to track new leads, active clients, and retained clients",
        "Implemented tagging to categorize different client types and needs",
        "Configured the system to support day-to-day lead and client management"
    ],

    outcome: "The agency gained a centralized system where their website, lead capture, and client management all worked together. This reduced manual tracking and made it easier to understand the status of leads and ongoing client relationships.",

    reflection: "If expanded further, the system could include automated follow-ups and reporting dashboards to provide deeper insights into pipeline performance and client activity.",

    videoEmbed: "",
    liveLink: "https://app.gohighlevel.com/v2/preview/lrqpPENhPXXTwq0Vo0F3"
},

// --- PROJECT: Thinkific FAQ AI Agent ---
{
    id: "thinkific-faq-ai-agent",
    title: "AI-Powered FAQ Agent for Thinkific",
    category: "AI AUTOMATION",
    summary: "Built an AI-powered FAQ agent that automatically responds to student emails on Thinkific, with confidence scoring and human-in-the-loop fallbacks.",
    tools: [
        "Make.com",
        "Make AI Toolkit",
        "Thinkific API",
        "Airtable",
        "Google Docs",
        "Slack",
        "Email Automation"
    ],
    heroImage: "/Example/0cc59cf2-70eb-4a85-880f-d1d96a0f93e4makeai.png",

    context: "Course creators on Thinkific often receive a high volume of repetitive student questions via email. Manually reviewing, understanding enrollment context, and replying accurately becomes time-consuming and error-prone as the student base grows.",

    goals: [
        "Automatically respond to common FAQ emails from students",
        "Filter out system-generated emails and noise",
        "Answer questions using an updatable knowledge base",
        "Ensure high answer accuracy using confidence scoring",
        "Escalate uncertain cases to a human when needed"
    ],

    constraints: [
        "Emails included both human and system-generated messages",
        "Student context (enrollment, course type) was required for accurate replies",
        "Answers needed to remain up-to-date as course content evolved",
        "Incorrect answers could negatively impact student trust"
    ],

    approach: "I designed the automation as a multi-layered system with filtering, enrichment, AI reasoning, and safety checks. The focus was not just on auto-replies, but on ensuring accuracy, context awareness, and responsible escalation when confidence was low.",

    solutionPoints: [
        "Monitored incoming emails using a Watch Email module",
        "Filtered out system-generated emails using the Make AI Toolkit",
        "Implemented fallback routing for unclear email classifications",
        "Matched incoming emails to student records stored in Airtable",
        "Queried Thinkific to retrieve enrollment and course details",
        "Used a Google Docs-based knowledge source for dynamic FAQ updates",
        "Analyzed questions with an AI agent that assigns a confidence score (1–10)",
        "Automatically replied to students when confidence exceeded the threshold",
        "Triggered a human-in-the-loop flow for low-confidence responses",
        "Sent Slack alerts for urgent or unresolved questions"
    ],

    outcome: "The system successfully handled a large portion of student FAQ emails automatically while ensuring that complex or unclear questions were escalated to a human. This reduced manual workload for the course creator while maintaining response accuracy and student trust.",

    reflection: "This project reinforced the importance of designing AI automations with safeguards. Confidence scoring and human-in-the-loop handling were critical to making the system reliable and production-ready.",

    videoEmbed: '<iframe src="https://player.vimeo.com/video/1141638983?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Frequently Asked Questions Agent Auto responder with HIL option"></iframe>',
    liveLink: ""
},

// --- PROJECT: High-Converting Course Sales Funnel (Concept Build) ---
{
    id: "course-sales-funnel-concept",
    title: "High-Converting Course Sales Funnel",
    category: "FUNNELS & CONVERSION DESIGN",
    summary: "Designed and built a long-form course sales funnel in GoHighLevel to demonstrate conversion-focused layout, offer structuring, and CTA placement for digital products.",
    tools: [
        "GoHighLevel",
        "Funnel Builder",
        "VSL Modal",
        "Conversion Copy Structure",
        "Form & CTA Logic"
    ],
    heroImage: "/Example/Screenshot 2025-12-16 223131.png",

    context: "This project was built as a concept funnel to showcase how a high-converting info-product or online course sales page can be structured. The focus was on layout hierarchy, attention flow, and conversion principles rather than promoting a real product or brand.",

    goals: [
        "Demonstrate long-form sales page structure for digital products",
        "Apply proven conversion and direct-response layout principles",
        "Implement a VSL-style modal experience",
        "Showcase GoHighLevel funnel-building capabilities"
    ],

    constraints: [
        "No real product or brand behind the funnel",
        "Concept-only content and placeholder copy",
        "Primary focus on structure and user flow rather than copy accuracy"
    ],

    approach: "I approached this project from a conversion-first perspective. Instead of designing visually in isolation, I structured the page to guide visitors through attention, problem awareness, solution introduction, offer stacking, objection handling, and repeated calls to action.",

    solutionPoints: [
        "Built a long-form sales funnel using GoHighLevel’s funnel builder",
        "Implemented a VSL modal popup for video-based selling",
        "Designed multiple CTA sections to reduce drop-off",
        "Structured offer stack, bonuses, and pricing sections",
        "Included social proof, FAQs, and urgency elements to address objections",
        "Ensured responsive layout across devices"
    ],

    outcome: "The result is a complete, scalable sales funnel structure that can be adapted for real coaching programs, online courses, or digital products. The funnel demonstrates how strategy, layout, and repetition work together to drive conversions.",

    reflection: "This project reinforced the importance of clarity, hierarchy, and repetition in conversion-focused design. Even without real traffic or a live product, the structure itself plays a critical role in guiding user decisions.",

    videoEmbed: "",
    liveLink: "https://app.gohighlevel.com/v2/preview/niQNBm9f2QrCZEl2xy5z"
},

// --- PROJECT: Olerra Homes Lead Page ---
{
    id: "olerra-homes-landing-page",
    title: "Olerra Homes Lead Capture Landing Page",
    category: "LANDING & LEAD GEN",
    summary: "Designed a conversion-focused landing page for Olerra Homes to educate visitors on Flex-Flats modular units and drive lead capture via consultation bookings and rental ROI enquiries.",
    tools: ["GoHighLevel", "Responsive Design", "Conversion Layout", "Lead Capture Forms"],
    heroImage: "/Example/12c49f58-6a3c-4e16-bcdf-3f8d44d1208f.png",

    // Context
    context: "This project involved building a landing page to showcase Olerra's Flex-Flats — modular units optimized for rental income or additional living space — with clear benefits, ROI comparison, and educational content to encourage visitors to book a consultation.",

    goals: [
        "Present the product value and features clearly",
        "Educate visitors on rental and investment potential",
        "Encourage booking of consultations and lead capture",
        "Structure FAQ and benefits to reduce visitor hesitation"
    ],

    constraints: [
        "Concept and product details provided by the client",
        "Page had to balance education with conversion intent",
        "Mobile responsiveness was required"
    ],

    approach: "I focused on creating a clear, hierarchical layout that guides the visitor from initial value proposition to product details, ROI comparisons, and finally the call to action — booking a consultation — without overwhelming them with information.",

    solutionPoints: [
        "Built a top-of-funnel landing page in GoHighLevel with strong value messaging",
        "Structured benefits and features with visual hierarchy and comparison charts",
        "Included an interactive-style ROI section and product variants",
        "Added a three-step process for consultation sign-ups",
        "Integrated clear FAQ and trust elements to address visitor concerns"
    ],

    outcome: "The landing page provides a professional product presence and supports lead capture through strategic layout, content flow, and calls to action designed to encourage visitor engagement and bookings.",

    reflection: "If expanded, this page could be linked with automated follow-ups via CRM and tracked through analytics to optimize conversion funnels and improve messaging over time.",

    videoEmbed: "",
    liveLink: "https://go.olerra.com/olerra-homes"
}


];