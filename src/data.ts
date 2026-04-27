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

export type ListingArticle = {
  title: string;
  type: "listing";
  description: string;
  warning?: string;
  items: {
    status: string;
    title: string;
    issuer: string;
    amount: string;
    eligibility: string;
    link: string;
  }[];
};

export type DirectoryArticle = {
  title: string;
  type: "directory";
  description: string;
  items: {
    name: string;
    description: string;
    image: string;
    excos: {
      role: string;
      name: string;
      image: string;
    }[];
    contact: {
      phone?: string;
      email?: string;
      website?: string;
      address?: string;
    };
  }[];
};

export type Tier4Article = 
  | { title: string; type: "content" } 
  | ServiceArticle
  | GuidanceArticle
  | ListingArticle
  | DirectoryArticle;

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
              { question: "Can I register a partnership business?", answer: "Yes this covers sole owners and partnerships too." }
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
            "find-loans": { 
              title: "Find loans available to my business", 
              type: "listing",
              description: "A loan is money you borrow and must pay back with interest. Different loans have different rules about how much you can get and when you pay it back.",
              warning: "Only take loans from licensed banks or official government programs. Beware of 'instant' loan apps that ask for your contacts — they are often predatory.",
              items: [
                {
                  status: "Ongoing recruitment",
                  title: "Agricultural Support Loan",
                  issuer: "Ministry of Agriculture and Rural Development",
                  amount: "₦1,000,000 to ₦10,000,000",
                  eligibility: "Farmers and agro-processors in Niger State. Must have farm land or warehouse.",
                  link: "/get-funding/loans/agric-loan"
                },
                {
                  status: "Apply via Commercial Banks",
                  title: "SMEDAN MSME Development Fund",
                  issuer: "SMEDAN / Central Bank of Nigeria",
                  amount: "₦500,000 to ₦5,000,000",
                  eligibility: "Small businesses with at least 1 year of operation. Must be registered with SMEDAN and CAC.",
                  link: "/get-funding/loans/smedan-msme-loan"
                }
              ]
            },
            "agric-loan": {
              title: "Agricultural Support Loan",
              type: "service",
              readTime: "6 min read",
              views: "2.8k views",
              about: "This loan program is specifically designed to boost food security in Niger State. It provides low-interest capital for seasonal farming, livestock production, and agricultural equipment procurement.",
              benefits: [
                "Low interest rate of 9% per annum",
                "Grace period of up to 6 months before repayment starts",
                "Technical advisory services from ministry extension workers",
                "Help with sourcing quality fertilizers and seeds",
                "Support for finding off-takers for your harvest"
              ],
              requirements: [
                "Evidence of farm ownership or lease agreement in Niger State",
                "Business registration certificate (CAC)",
                "Passport photograph and valid ID (NIN or Voter's Card)",
                "Two guarantors (civil servants or recognized community leaders)",
                "A simple production plan showing what you will grow"
              ],
              steps: [
                { title: "Obtain application form", description: "Visit the Area Office of the Ministry of Agriculture nearest to you." },
                { title: "Farm inspection", description: "Ministry officials will visit your farm to verify your location and activity." },
                { title: "Interview and screening", description: "Discuss your needs with the credit committee." },
                { title: "Account opening", description: "Open an account with the designated partner bank for disbursement." },
                { title: "Loan disbursement", description: "Funds are released directly for your farm inputs or equipment." }
              ],
              faq: [
                { question: "Can I use the loan for non-farming business?", answer: "No, this loan is strictly for agricultural activities within Niger State." },
                { question: "What is the maximum repayment period?", answer: "Usually 12 to 24 months, depending on the crop cycle." },
                { question: "Do I need collateral?", answer: "For loans above ₦2m, some form of security or stronger guarantors may be required." }
              ],
              cta: {
                text: "Apply at the Ministry",
                link: "/contact-desk-officer",
                note: "Visit the Ministry of Agriculture at the State Secretariat, Minna."
              }
            },
            "smedan-msme-loan": {
              title: "SMEDAN MSME Development Fund",
              type: "service",
              readTime: "5 min read",
              views: "7.1k views",
              about: "The SMEDAN MSME Development Fund is a federal initiative implemented in partnership with state governments and commercial banks. It aims to bridge the funding gap for small businesses by providing accessible credit.",
              benefits: [
                "Competitive interest rates lower than standard commercial loans",
                "Access to business management training modules",
                "Inclusion in the national MSME database",
                "Flexible repayment terms based on business cash flow",
                "Direct mentorship from business development experts"
              ],
              requirements: [
                "SMEDAN registration number (ESSN)",
                "CAC business registration documents",
                "Tax Identification Number (TIN)",
                "Bank statements for the last 6 to 12 months",
                "Proof of business location (utility bill)"
              ],
              steps: [
                { title: "Register with SMEDAN", description: "Ensure you have your SMEDAN certificate from portal.smedan.gov.ng." },
                { title: "Choose a partner bank", description: "Identify which commercial or microfinance banks are participating in the fund." },
                { title: "Submit loan application", description: "Provide your business plan and financial records to the bank." },
                { title: "Bank appraisal", description: "The bank will evaluate your business's ability to repay the loan." },
                { title: "Approval and funding", description: "Once approved, the loan is disbursed to your business account." }
              ],
              faq: [
                { question: "Does SMEDAN give the money directly?", answer: "No, SMEDAN facilitates the process, but the actual loans are disbursed through partner banks." },
                { question: "What is the minimum loan amount?", answer: "The fund starts from ₦500,000 for qualified businesses." },
                { question: "Can I apply without CAC registration?", answer: "Generally no, most participating banks require formal registration." }
              ],
              cta: {
                text: "Visit SMEDAN Portal",
                link: "https://portal.smedan.gov.ng",
                note: "Start by getting your SMEDAN number if you don't have one."
              }
            },
            "loan-eligibility": { title: "Check loan eligibility", type: "content" },
            "apply-loan": { title: "How to apply for a loan", type: "content" },
          },
        },
        "grants": {
          title: "Grants",
          children: {
            "find-grants": { 
              title: "Find grants available to my business", 
              type: "listing",
              description: "A grant is money given to your business that you do not pay back. Grants are competitive — not everyone who applies will get one.",
              warning: "Never pay anyone to help you get a grant. Official grants cost nothing to apply for. Anyone asking for a fee is running a scam.",
              items: [
                {
                  status: "Open — closes 30 June 2026",
                  title: "Youth Business Grant 2026",
                  issuer: "Ministry of Youths and Social Development",
                  amount: "₦500,000 to ₦2,000,000",
                  eligibility: "Business owners aged 18 to 35. Business must be less than 3 years old.",
                  link: "/get-funding/grants/youth-business-grant"
                },
                {
                  status: "Open — accepting applications now",
                  title: "MSME Support Fund",
                  issuer: "Ministry of Commerce, Industry and Cooperative",
                  amount: "₦200,000 to ₦1,000,000",
                  eligibility: "Small and micro businesses in Niger State. You must be registered with CAC.",
                  link: "/get-funding/grants/msme-support-fund"
                }
              ]
            },
            "youth-business-grant": {
              title: "Youth Business Grant 2026",
              type: "service",
              readTime: "4 min read",
              views: "3.5k views",
              about: "The Youth Business Grant is a state-funded initiative designed to empower young entrepreneurs in Niger State. It provides non-repayable capital to start or grow small businesses that have high potential for job creation.",
              benefits: [
                "Get up to ₦2,000,000 in non-repayable funding",
                "Receive 6 months of business mentorship",
                "Access to specialized workshops on financial management",
                "Networking opportunities with other young entrepreneurs",
                "Certificate of participation from the Ministry"
              ],
              requirements: [
                "Must be a resident of Niger State",
                "Aged between 18 and 35 years",
                "Business must be registered with CAC",
                "A clear business plan or growth strategy",
                "Proof of address (utility bill or tax clearance)",
                "Passport photograph and valid ID"
              ],
              steps: [
                { title: "Download the application form", description: "Get the form from the official Ministry website or at the Paiko Road office." },
                { title: "Fill in your details", description: "Provide accurate information about yourself and your business model." },
                { title: "Attach required documents", description: "Upload or attach your CAC certificate, ID, and business plan." },
                { title: "Submit for review", description: "Send your completed application via the portal or at the designated drop-off points." },
                { title: "Attend the interview", description: "Shortlisted candidates will be invited for a brief presentation of their business." }
              ],
              faq: [
                { question: "Is this a loan?", answer: "No, this is a grant. You do not need to pay the money back." },
                { question: "Can I apply if my business is not yet registered?", answer: "No, CAC registration is a mandatory requirement for this grant." },
                { question: "How long does the selection process take?", answer: "Usually 4-6 weeks after the application window closes." }
              ],
              cta: {
                text: "Apply for the grant now",
                link: "https://youth.nigerstate.gov.ng/grants",
                note: "You'll be taken to the Ministry of Youths and Social Development portal"
              }
            },
            "msme-support-fund": {
              title: "MSME Support Fund",
              type: "service",
              readTime: "5 min read",
              views: "5.2k views",
              about: "The MSME Support Fund aims to provide a safety net and growth capital for micro and small enterprises in Niger State. This fund focuses on businesses in agriculture, manufacturing, and technology sectors.",
              benefits: [
                "Direct funding of up to ₦1,000,000",
                "Low-interest follow-on loan options",
                "Free access to Niger State trade fairs",
                "Technical support for product standardization",
                "Tax advisory services for the first year"
              ],
              requirements: [
                "Registered business with CAC",
                "Tax Identification Number (TIN)",
                "Niger State Business Premises registration",
                "Bank statement for the last 6 months",
                "Evidence of at least 2 employees (for small businesses)",
                "Minimum 1 year of operation"
              ],
              steps: [
                { title: "Register on the MSME Portal", description: "Create an account on the state's MSME support portal." },
                { title: "Complete the eligibility quiz", description: "Answer a few questions to see if your business qualifies for this specific fund." },
                { title: "Upload business documents", description: "Provide your CAC and Tax documents as requested." },
                { title: "Submit your funding request", description: "Specify what the funds will be used for in your business." },
                { title: "Site verification visit", description: "Ministry officials may visit your business location for verification." }
              ],
              faq: [
                { question: "What business sectors are prioritized?", answer: "Agriculture, light manufacturing, and tech-enabled services are highly encouraged." },
                { question: "Do I need a guarantor?", answer: "For the grant portion, no guarantor is needed. Only for additional loans." },
                { question: "Can I apply for both MSME and Youth grants?", answer: "No, you must choose the one that best fits your business profile." }
              ],
              cta: {
                text: "Register for MSME Support",
                link: "https://msme.nigerstate.gov.ng",
                note: "Official portal for the Ministry of Commerce, Industry and Cooperative"
              }
            },
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
            "biz-associations": { 
              title: "Business Associations", 
              type: "directory",
              description: "Connect with key business associations in Niger State to grow your network, access advocacy, and stay informed about industry trends.",
              items: [
                {
                  name: "Niger State Chamber of Commerce, Industry, Mines and Agriculture (NACCIMA)",
                  description: "The primary voice of the private sector in Niger State, dedicated to promoting and protecting the interests of businesses across all sectors.",
                  image: "https://i.pinimg.com/736x/9f/de/68/9fde682430b44379915141a13641fde5.jpg",
                  excos: [
                    { role: "President", name: "Alhaji Muhammad Usman", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200" },
                    { role: "Director General", name: "Dr. Elizabeth Okoro", image: "https://i.pinimg.com/1200x/bb/6c/96/bb6c96152d16bc2e08dfb87b52df3da5.jpg" }
                  ],
                  contact: {
                    phone: "+234 803 123 4567",
                    email: "info@nigerchamber.org",
                    website: "https://nigerchamber.org",
                    address: "Commerce House, Paiko Road, Minna"
                  }
                },
                {
                  name: "Association of Small Business Owners of Nigeria (ASBON) - Niger Chapter",
                  description: "Empowering small business owners through training, financial inclusion, and collective bargaining with government agencies.",
                  image: "https://i.pinimg.com/736x/a9/f0/6b/a9f06bc96b1ccc1c0354391fd3b0c8b0.jpg",
                  excos: [
                    { role: "State Coordinator", name: "Mallam Ibrahim Sani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
                    { role: "Secretary", name: "Mrs. Fatima Bello", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200" }
                  ],
                  contact: {
                    phone: "+234 805 987 6543",
                    email: "niger@asbon.org.ng",
                    address: "Suite 4, Bosso Road Shopping Complex, Minna"
                  }
                },
                {
                  name: "Manufacturers Association of Nigeria (MAN) - North Central Branch",
                  description: "Advocating for the manufacturing sector in Niger State, focusing on infrastructure, policy, and market access for locally made goods.",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
                  excos: [
                    { role: "Branch Chairman", name: "Engr. Yusuf Abubakar", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200" },
                    { role: "Executive Secretary", name: "Grace Adeyemi", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200" }
                  ],
                  contact: {
                    phone: "+234 802 345 6789",
                    email: "northcentral@man.eg",
                    website: "https://manufacturersnigeria.org",
                    address: "Industrial Layout, Chanchaga, Minna"
                  }
                },
                {
                  name: "Niger State Association of Professional Bodies (NSAPB)",
                  description: "An umbrella organization for professional associations (ICAN, NBA, NSE, etc.) promoting ethics and professional excellence in the state.",
                  image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800",
                  excos: [
                    { role: "Chairman", name: "Barr. Ahmed Idris", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
                    { role: "Vice Chairman", name: "Arc. Amina Yunusa", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200" }
                  ],
                  contact: {
                    phone: "+234 703 555 1122",
                    email: "nsapb.minna@gmail.com",
                    address: "Professional Center, Near State Assembly, Minna"
                  }
                },
                {
                  name: "Niger State Entrepreneurs Forum",
                  description: "A dynamic group of young and innovative entrepreneurs focused on technology, creative industries, and modern services.",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
                  excos: [
                    { role: "Convener", name: "Chidi Nwosu", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
                    { role: "Operations Lead", name: "Hadiza Umar", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
                  ],
                  contact: {
                    phone: "+234 810 444 3322",
                    email: "hello@nsef.ng",
                    website: "https://nsef.ng",
                    address: "Innovation Hub, Top Floor, Shiroro Road, Minna"
                  }
                }
              ]
            },
            "market-associations": { 
              title: "Market Associations", 
              type: "directory",
              description: "Directory of major market unions and trader associations across Niger State's commercial hubs.",
              items: [
                {
                  name: "Minna Central Market Traders Association",
                  description: "Representing thousands of traders in the state capital's largest commercial center. Coordinates security, sanitation, and welfare.",
                  image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800",
                  excos: [
                    { role: "Chairman (Sarkin Kasuwa)", name: "Alhaji Shehu Vatsa", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
                    { role: "Market Secretary", name: "Bala Mohammed", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
                  ],
                  contact: {
                    phone: "+234 803 777 8899",
                    address: "Market Administrative Block, Central Market, Minna"
                  }
                },
                {
                  name: "Suleja Modern Market Traders Union",
                  description: "One of the busiest market associations in Nigeria, serving as a gateway for goods entering and leaving the North and FCT.",
                  image: "https://images.unsplash.com/photo-1531053326607-9d349096d887?w=800",
                  excos: [
                    { role: "Union President", name: "Chief Emeka Okafor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
                    { role: "Financial Secretary", name: "Alhaji Musa Gwari", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200" }
                  ],
                  contact: {
                    phone: "+234 706 111 2233",
                    email: "sulejamarket@niger.gov.ng",
                    address: "International Market Complex, Suleja"
                  }
                },
                {
                  name: "Bida Artisans and Traders Association",
                  description: "Focused on the traditional crafts and trade sectors of Bida, including brass works, glass making, and food commodities.",
                  image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800",
                  excos: [
                    { role: "Chairman", name: "Alhaji Yahaya Nuhu", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
                    { role: "Treasurer", name: "Malam Dauda Bida", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" }
                  ],
                  contact: {
                    phone: "+234 812 333 4455",
                    address: "Emir's Market Square, Bida"
                  }
                },
                {
                  name: "Kontagora Market Union",
                  description: "Coordinating trade in the western corridor of the state, specializing in livestock and large-scale grain commodities.",
                  image: "https://i.pinimg.com/736x/2b/7e/d2/2b7ed24437020914897984f11ef1927b.jpg",
                  excos: [
                    { role: "General Coordinator", name: "Alhaji Garba Kontagora", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
                    { role: "Public Relations Officer", name: "Usman Danladi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
                  ],
                  contact: {
                    phone: "+234 905 666 7788",
                    address: "Main Market Road, Kontagora"
                  }
                },
                {
                  name: "New Bussa Traders & Farmers Association",
                  description: "A unique association linking producers and sellers in the Borgu region, with a focus on fish and agricultural products.",
                  image: "https://i.pinimg.com/736x/97/46/37/974637a383fab8461352b44abc812631.jpg",
                  excos: [
                    { role: "Association Lead", name: "Mrs. Sarah James", image: "https://i.pinimg.com/736x/05/4c/8b/054c8b430a0dd172042b93a42f4e9034.jpg" },
                    { role: "Secretary", name: "Isah Borgu", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
                  ],
                  contact: {
                    phone: "+234 808 222 1100",
                    email: "newbussa.traders@gmail.com",
                    address: "Kainji Market Area, New Bussa"
                  }
                }
              ]
            },
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
  
