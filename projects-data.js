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
}


];