export type ServiceArticle = {
  title: string;
  type: "service";
  readTime: string;
  views: string;
  about: string;
  benefits: string[];
  requirements: string[];
  steps: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  cta: { text: string; link: string; note: string };
};

export type GuidanceArticle = {
  title: string;
  type: "guidance";
  description: string;
  rows: {
    situation: string;
    action: { text: string; link?: string }[];
  }[];
};

export type Tier4Article = 
  | { title: string; type: "content" } 
  | ServiceArticle
  | GuidanceArticle;

export type Tier3Category = {
  title: string;
  children: Record<string, Tier4Article>;
};

export type Tier2Category = {
  title: string;
  description: string;
  icon?: string;
  children: Record<string, Tier3Category>;
};

export type IAData = Record<string, Tier2Category>;

export const iaData: IAData = {
  "start-business": {
    title: "Start or Register a Business",
    description: "Register your business and get legal in Niger State.",
    icon: "rocket",
    children: {
      "register": {
        title: "Register my business",
        children: {
          "cac": { 
            title: "Register with CAC (Corporate Affairs Commission)", 
            type: "service",
            readTime: "3 min read",
            views: "1.2k views",
            about: "This service lets you register your business with CAC. It's for small business owners and partners. Once done, your business is legal and recognized. You do everything online — no office visits.",
            benefits: [
              "Get a digital certificate sent to your email",
              "Open a business bank account with your number",
              "Access government loans and funding programs",
              "Win contracts clients trust registered businesses",
              "Protect your name no one else can use it"
            ],
            requirements: [
              "Your NIN, driver's licence, voter's card, or passport",
              "A recent passport photo (clear, plain background)",
              "Your home or business address",
              "Your email address and phone number",
              "2 business name ideas (in case one is taken)",
              "A short description of what your business does"
            ],
            steps: [
              { title: "Check if your name is free", description: "Go to icrp.cac.gov.ng and search your business name." },
              { title: "Reserve the name", description: "Pay ₦500 to lock in your name for 60 days." },
              { title: "Fill in the form", description: "Complete the CAC-BN1 form and upload your documents." },
              { title: "Pay the fee", description: "Pay ₦10,000 registration fee via Remita online." },
              { title: "Get your certificate", description: "Your digital certificate arrives by email within 3 days." }
            ],
            faq: [
              { question: "Do I need to go to a CAC office?", answer: "No — the whole process is 100% online." },
              { question: "How much does it cost in total?", answer: "Expect to pay around ₦11,000–₦20,000 in total." },
              { question: "How long does it take?", answer: "Your certificate is usually ready within 24 to 72 hours." },
              { question: "Can I register a partnership business?", answer: "Ye this covers sole owners and partnerships too." }
            ],
            cta: {
              text: "Start your registration →",
              link: "https://icrp.cac.gov.ng",
              note: "You'll be taken to icrp.cac.gov.ng — CAC's official portal"
            }
          },
            "smedan": { 
              title: "Register your business with SMEDAN", 
              type: "service",
              readTime: "4 min read",
              views: "2.1k views",
              about: "SMEDAN helps small businesses in Nigeria grow faster. Register now to get loans, grants, and free training. It is free and takes under 10 minutes.",
              benefits: [
                "Get access to government loans and grants",
                "Access ₦50,000 conditional grants for nano businesses",
                "Get free business training and mentorship",
                "Qualify for free CAC business registration",
                "Connect with local and international markets",
                "Access insurance for your business",
                "Get your SMEDAN certificate and unique number",
                "Join programs like SMEDAN Select Programme"
              ],
              requirements: [
                "Your full name and email address",
                "Your phone number",
                "Your business name",
                "Your business address",
                "Valid ID card (NIN, voter's card, or driver's license)",
                "CAC registration number (if you have one)",
                "Your business description",
                "Note: You can register even if your business is not registered with CAC yet."
              ],
              steps: [
                { title: "Go to the website", description: "Visit portal.smedan.gov.ng or smedanregister.ng to start." },
                { title: "Create your account", description: "Enter your name, email, and create a password." },
                { title: "Confirm your email", description: "Check your inbox and click the verification link." },
                { title: "Fill in business details", description: "Add your business name, address, and other information." },
                { title: "Submit your form", description: "Review everything and click submit to finish." },
                { title: "Get your certificate", description: "Check your email for your SMEDAN number and certificate." }
              ],
              faq: [
                { question: "Is SMEDAN registration really free?", answer: "Yes, it is 100% free from start to finish." },
                { question: "Do I need CAC registration first?", answer: "No, you can register without CAC and get it later." },
                { question: "How long does registration take?", answer: "The online registration takes less than 10 minutes to complete." },
                { question: "What is a SMEDAN number?", answer: "It is your unique ID number to access all SMEDAN benefits." },
                { question: "Can I get a loan immediately after registering?", answer: "No, you apply for specific loan programs after you register." },
                { question: "Does my SMEDAN registration expire?", answer: "No, your registration is valid for life once completed." },
                { question: "What is the ₦50,000 conditional grant?", answer: "It is a grant for nano businesses if you hire one employee." },
                { question: "Can I register from any state in Nigeria?", answer: "Yes, SMEDAN registration covers all 36 states and FCT." },
                { question: "What programs can I access after registering?", answer: "You can access CGS, SSP, GCSS, AGOA, and many other programs." },
                { question: "How do I know my registration is successful?", answer: "You receive an email with your certificate and SMEDAN number." }
              ],
              cta: {
                text: "Register your business now",
                link: "https://portal.smedan.gov.ng",
                note: "You'll be taken to https://smedan.gov.ng/ — SMEDAN's official portal"
              }
            },
            "cooperative": { 
              title: "Register a cooperative (Ministry of Commerce)", 
              type: "service",
              readTime: "5 min read",
              views: "850 views",
              about: "Join a cooperative to grow and save money with others. Register with the Ministry of Commerce to get legal protection. This helps your group get government loans.",
              benefits: [
                "Get legal protection across Niger State",
                "Access government loans and grants more easily",
                "Open a bank account in your group name",
                "Get help with business registration at one stop shops",
                "Join tax simplification programs",
                "Get support from SEDIN business programs",
                "Access mediation services for business disputes",
                "Protect members from losing personal property"
              ],
              requirements: [
                "Three proposed names for your cooperative",
                "Constitution and bylaws of your cooperative",
                "List of all members with their signatures",
                "Valid ID for all trustees and board members",
                "Minutes of your first general meeting",
                "Letter explaining your cooperative's goals",
                "Proof of your cooperative's address in Niger State",
                "Feasibility study or business plan",
                "Resolution signed by all founding members",
                "Official stamp with your cooperative name and logo",
                "Member requirement: Agricultural cooperative - Minimum 50 members",
                "Member requirement: Savings and credit cooperative - Minimum 20 members",
                "Member requirement: Multi-purpose cooperative - Minimum 10 members",
                "Member requirement: All members must be at least 15 years old",
                "Member requirement: Board members must be at least 18 years old"
              ],
              steps: [
                { title: "Form your cooperative group", description: "Get your minimum members together and hold the first meeting." },
                { title: "Draft your constitution", description: "Write rules for membership, fees, meetings, and money management." },
                { title: "Visit the One Stop Shop", description: "Go to Niger State One Stop Investment Center in Minna." },
                { title: "Check if your name is available", description: "Submit three name options to the Ministry of Commerce." },
                { title: "Get your official stamp made", description: "Create a stamp with your cooperative name and logo." },
                { title: "Submit all your documents", description: "Take everything to the Ministry of Commerce and Industry." },
                { title: "Pay your registration fees", description: "Fees are set by Niger State Tax Administration Act." },
                { title: "Get your recognition letter", description: "You receive approval to operate for 3 years first." },
                { title: "Run your cooperative for 3 years", description: "Follow all rules and keep proper records and accounts." },
                { title: "Get your final certificate", description: "After 3 years, collect your permanent registration certificate." }
              ],
              faq: [
                { question: "Where do I register in Niger State?", answer: "Visit the Ministry of Commerce and Industry in Minna." },
                { question: "Can I use the One Stop Shop?", answer: "Yes, Niger State has one stop investment centers for registration." },
                { question: "How much does registration cost?", answer: "Fees follow the Niger State Tax Administration Act of 2022." },
                { question: "What happens after 3 years?", answer: "You get your permanent certificate and certified copy of bylaws." },
                { question: "Can we start operating before full registration?", answer: "Yes, with the recognition letter for the first 3 years." },
                { question: "Do all members need to be from Niger State?", answer: "No, but your cooperative address must be in Niger State." },
                { question: "What is the One Stop Investment Center?", answer: "It links all government offices in one place for easier registration." },
                { question: "Can we access SEDIN programs?", answer: "Yes, registered cooperatives can join SEDIN business support programs." },
                { question: "Do we get tax benefits?", answer: "Yes, cooperatives qualify for tax simplification programs in Niger State." },
                { question: "What support does the state give cooperatives?", answer: "You get help with business registration, tax, mediation, and finance access." },
                { question: "What if our chosen name is taken?", answer: "Submit three name options so you have backup choices." },
                { question: "Where is the ministry located?", answer: "Visit the Secretariat Complex on Paiko Road in Minna." }
              ],
              cta: {
                text: "Visit the One Stop Shop",
                link: "/start-business",
                note: "Visit Niger State One Stop Investment Center in Minna for in-person support."
              }
            },
            "bank-account": { 
              title: "Open a business bank account", 
              type: "service",
              readTime: "5 min read",
              views: "4.2k views",
              about: "Open a business bank account at any bank. Keep your business money separate from your personal money. This helps you track spends and get loans.",
              benefits: [
                "Keep business and personal money separate",
                "Get access to business loans and credit",
                "Accept card payments from your customers",
                "Build credit for your business",
                "Track expenses more easily",
                "Look more professional to clients"
              ],
              requirements: [
                "Your CAC certificate or business registration",
                "Your company documents (Memart)",
                "Your TIN number",
                "Board resolution signed by all directors",
                "Valid ID for all directors and signatories",
                "BVN for all people who will sign",
                "Proof of where your business is located",
                "Two passport photos of each signatory",
                "SCUML certificate (if your business needs it)",
                "Two business references"
              ],
              steps: [
                { title: "Pick your bank", description: "Compare banks and choose one that fits your needs." },
                { title: "Gather your documents", description: "Get all required papers ready before you visit." },
                { title: "Fill the application form", description: "Complete the form the bank gives you carefully." },
                { title: "Submit everything", description: "Take all documents to the bank or apply online." },
                { title: "Make your first deposit", description: "Put money in to activate your new account." },
                { title: "Get your account details", description: "Receive your account number and debit card if needed." }
              ],
              faq: [
                { question: "Can I open this online?", answer: "Yes, many banks now let you apply fully online." },
                { question: "How long does it take?", answer: "Most banks approve your account within 1 to 3 days." },
                { question: "Do I need to register my business first?", answer: "Yes, your business must be registered with CAC first." },
                { question: "What is a BVN and why do I need it?", answer: "It is your Bank Verification Number that all banks require." },
                { question: "How much money do I need to open it?", answer: "Usually between ₦5,000 and ₦100,000 depending on the bank." },
                { question: "Can a foreigner open a business account?", answer: "Yes, but you need a residence permit and work permit." },
                { question: "What is SCUML?", answer: "It is a registration needed for certain business types." },
                { question: "Do sole proprietors need a business account?", answer: "Not required, but highly recommended for better money management." }
              ],
              cta: {
                text: "Find a bank near you",
                link: "https://www.google.com/search?q=banks+near+me",
                note: "Any licensed commercial or microfinance bank can open this for you."
              }
            },
          },
        },
        "type-registration": {
          title: "What type of registration do I need?",
          children: {
            "guidance": { 
              title: "Registration Guidance", 
              type: "guidance",
              description: "Pick the right registration for your business size and type.",
              rows: [
                { 
                  situation: "You work alone: a shop, stall, or trader", 
                  action: [
                    { text: "Register with SMEDAN", link: "/start-business/register/smedan" },
                    { text: ", then " },
                    { text: "CAC Business Name", link: "/start-business/register/cac" }
                  ] 
                },
                { 
                  situation: "Two or more people running a business together", 
                  action: [
                    { text: "CAC Partnership", link: "/start-business/register/cac" }
                  ] 
                },
                { 
                  situation: "A company with shareholders and formal accounts", 
                  action: [
                    { text: "CAC Limited Liability Company", link: "/start-business/register/cac" }
                  ] 
                },
                { 
                  situation: "A group of farmers, traders, or artisans", 
                  action: [
                    { text: "Cooperative (Ministry of Commerce)", link: "/start-business/register/cooperative" }
                  ] 
                }
              ]
            },
          },
        },
        "licence-permit": {
          title: "Get a licence or permit",
          children: {
            "permit-operational": { title: "Business permit and operational licence", type: "content" },
            "signage": { title: "Apply for signage", type: "content" },
            "right-of-way": { title: "Apply for right of way in the state", type: "content" },
            "licence-guidance": { title: "What type of licence do I need?", type: "content" },
          },
        },
      },
    },
    "tax-compliance": {
      title: "Tax & Compliance",
      description: "Learn about your taxes and how to follow state laws.",
      icon: "clipboard-check",
      children: {
        "how-to-pay": {
          title: "How to pay tax",
          children: {
            "pay-online": { title: "Pay online", type: "content" },
            "pay-physical": { title: "Pay at a physical office", type: "content" },
          },
        },
        "what-taxes": {
          title: "What taxes apply to my business?",
          children: {
            "tax-guidance": { title: "Guidance on applicable taxes", type: "content" },
          },
        },
        "state-vs-local": {
          title: "State vs local government tax",
          children: {
            "tax-differences": { title: "Understanding the difference", type: "content" },
          },
        },
      },
    },
    "get-funding": {
      title: "Get Funding",
      description: "Find loans and money support for your business.",
      icon: "coins",
      children: {
        "loans": {
          title: "Loans",
          children: {
            "find-loans": { title: "Find loans available to my business", type: "content" },
            "loan-eligibility": { title: "Check loan eligibility", type: "content" },
            "apply-loan": { title: "How to apply for a loan", type: "content" },
          },
        },
        "grants": {
          title: "Grants",
          children: {
            "find-grants": { title: "Find grants available to my business", type: "content" },
            "grant-eligibility": { title: "Check grant eligibility", type: "content" },
            "apply-grant": { title: "How to apply for a grant", type: "content" },
          },
        },
        "scam-alerts": {
          title: "Scam alerts",
          children: {
            "spot-fake": { title: "How to spot fake loans and scam warnings", type: "content" },
          },
        },
        "difference-loans-grants": {
          title: "What is the difference between loans and grants?",
          children: {
            "funding-differences": { title: "Guidance on funding types", type: "content" },
          },
        },
      },
    },
    "land-premises": {
      title: "Land & Premises",
      description: "Find the best shops or land for your business.",
      icon: "map",
      children: {
        "shop-market": {
          title: "Get a shop or market stall",
          children: {
            "apply-shop": { title: "How to apply for a shop", type: "content" },
            "shop-eligibility": { title: "Eligibility criteria", type: "content" },
          },
        },
        "get-land": {
          title: "Get land for my business",
          children: {
            "apply-land": { title: "How to apply for land", type: "content" },
            "land-eligibility": { title: "Eligibility criteria", type: "content" },
          },
        },
        "report-land-issue": {
          title: "Report a land issue",
          children: {
            "land-form": { title: "Contact / form", type: "content" },
          },
        },
      },
    },
    "learn-connect": {
      title: "Learn & Connect",
      description: "Learn new skills and meet other business owners.",
      icon: "users",
      children: {
        "training-skills": {
          title: "Training & skills",
          children: {
            "biz-training": { title: "Business training programmes", type: "content" },
            "giz-platform": { title: "GIZ Platform – Financial literacy training", type: "content" },
            "women-youth": { title: "Women and youth support programmes", type: "content" },
          },
        },
        "general-advice": {
          title: "General Advice",
          children: {
            "hear-opportunities": { title: "How to hear about opportunities early", type: "content" },
          },
        },
        "associations": {
          title: "Associations directory",
          children: {
            "biz-associations": { title: "Business Associations (directory listing)", type: "content" },
            "market-associations": { title: "Market Associations (directory listing)", type: "content" },
          },
        },
      },
    },
    "help-disputes": {
      title: "Help & Disputes",
      description: "Fix problems, give feedback, and get help.",
      icon: "help-circle",
      children: {
        "complaints-feedback": {
          title: "Complaints & feedback",
          children: {
            "make-complaint": { title: "Make a complaint about a service", type: "content" },
            "give-feedback": { title: "Give feedback", type: "content" },
          },
        },
        "report-delay": {
          title: "Report a delay",
          children: {
            "delay-form": { title: "Contact / form", type: "content" },
          },
        },
        "verify-agents": {
          title: "Verify agents & offices",
          children: {
            "verify-checker": { title: "Directory / checker page", type: "content" },
          },
        },
        "contact-desk-officer": {
          title: "Contact a desk officer",
          children: {
            "desk-officer": { title: "Directory page", type: "content" },
          },
        },
        "small-claims-new": {
          title: "Small Claims - File a new claim",
          children: {
            "tenant-disputes": { title: "Tenant disputes", type: "content" },
            "property-damage": { title: "Property damage", type: "content" },
            "debt-recovery": { title: "Debt recovery", type: "content" },
            "breach-contract": { title: "Breach of contract", type: "content" },
            "consumer-protection": { title: "Consumer protection", type: "content" },
          },
        },
        "small-claims-resources": {
          title: "Small Claims - Resources",
          children: {
            "nearest-court": { title: "Find your nearest Small Claims court (map)", type: "content" },
            "legal-guides": { title: "Legal guides", type: "content" },
          },
        },
      },
    },
  };
  
