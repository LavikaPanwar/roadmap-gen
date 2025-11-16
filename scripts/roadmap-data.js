// Comprehensive roadmap data with detailed weekly breakdowns for all skills
const roadmapData = {
    "Web Development": {
        phases: [
            {
                title: "Foundation Building (Weeks 1-6)",
                description: "Establish a solid foundation with core web technologies and fundamental principles that will serve as the bedrock for your entire development journey.",
                weeks: [
                    {
                        title: "Week 1: HTML5 Fundamentals & Document Structure",
                        tasks: [
                            "Day 1-2: Learn HTML5 document structure (<!DOCTYPE>, <html>, <head>, <body>)",
                            "Day 3-4: Master basic HTML tags (headings, paragraphs, lists, links, images)",
                            "Day 5-6: Practice creating semantic HTML5 elements (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>)",
                            "Day 7: Build a simple personal bio page with proper semantic structure",
                            "Weekly Project: Create a semantic HTML portfolio page with navigation, sections, and footer"
                        ]
                    },
                    {
                        title: "Week 2: Advanced HTML & Forms",
                        tasks: [
                            "Day 1-2: Master HTML forms with different input types (text, email, password, number, date)",
                            "Day 3-4: Learn form validation attributes and accessibility features",
                            "Day 5-6: Practice creating tables, iframes, and multimedia elements (audio, video)",
                            "Day 7: Implement ARIA labels and roles for accessibility",
                            "Weekly Project: Build a comprehensive contact form with validation and accessibility features"
                        ]
                    },
                    {
                        title: "Week 3: CSS3 Fundamentals & Box Model",
                        tasks: [
                            "Day 1-2: Master CSS Box Model (margin, border, padding, content)",
                            "Day 3-4: Learn CSS positioning (static, relative, absolute, fixed, sticky)",
                            "Day 5-6: Practice CSS selectors, specificity, and inheritance",
                            "Day 7: Implement CSS variables and custom properties",
                            "Weekly Project: Style the HTML portfolio page with proper box model and positioning"
                        ]
                    },
                    {
                        title: "Week 4: CSS Layouts & Responsive Design",
                        tasks: [
                            "Day 1-2: Master Flexbox for one-dimensional layouts (flex-container, flex-items, alignment)",
                            "Day 3-4: Learn CSS Grid for two-dimensional layouts (grid-template, grid-areas, alignment)",
                            "Day 5-6: Practice responsive design with media queries and relative units",
                            "Day 7: Implement mobile-first responsive design approach",
                            "Weekly Project: Convert portfolio to fully responsive design using Flexbox and Grid"
                        ]
                    },
                    {
                        title: "Week 5: JavaScript Basics & DOM Manipulation",
                        tasks: [
                            "Day 1-2: Learn JavaScript syntax, variables, data types, and operators",
                            "Day 3-4: Master functions, scope, and control structures (if/else, loops)",
                            "Day 5-6: Practice DOM manipulation (selecting elements, changing content, styles)",
                            "Day 7: Understand event handling and listeners",
                            "Weekly Project: Build an interactive to-do list with add, delete, and mark complete features"
                        ]
                    },
                    {
                        title: "Week 6: Modern JavaScript & ES6+ Features",
                        tasks: [
                            "Day 1-2: Master ES6+ features (arrow functions, template literals, destructuring)",
                            "Day 3-4: Learn array methods (map, filter, reduce, forEach)",
                            "Day 5-6: Practice asynchronous JavaScript (callbacks, promises, async/await)",
                            "Day 7: Implement local storage and basic error handling",
                            "Weekly Project: Enhance to-do list with local storage and advanced features"
                        ]
                    }
                ]
            },
            {
                title: "Frontend Frameworks & Advanced Concepts (Weeks 7-14)",
                description: "Build dynamic, interactive user interfaces with modern frameworks and tools that power today's web applications.",
                weeks: [
                    {
                        title: "Week 7-8: React.js Fundamentals",
                        tasks: [
                            "Day 1-2: Learn React basics (JSX, components, props, state)",
                            "Day 3-4: Master functional components and hooks (useState, useEffect)",
                            "Day 5-6: Practice event handling and conditional rendering",
                            "Day 7: Build forms and controlled components in React",
                            "Weekly Project: Create a React weather app with API integration"
                        ]
                    },
                    {
                        title: "Week 9-10: Advanced React & State Management",
                        tasks: [
                            "Day 1-2: Learn React Router for single-page applications",
                            "Day 3-4: Master Context API for global state management",
                            "Day 5-6: Practice custom hooks and component composition",
                            "Day 7: Implement performance optimization techniques",
                            "Weekly Project: Build a React e-commerce site with routing and cart functionality"
                        ]
                    },
                    {
                        title: "Week 11-12: State Management & API Integration",
                        tasks: [
                            "Day 1-2: Learn Redux for complex state management",
                            "Day 3-4: Master asynchronous actions with Redux Thunk",
                            "Day 5-6: Practice RESTful API integration and error handling",
                            "Day 7: Implement authentication and protected routes",
                            "Weekly Project: Create a social media app with Redux and API integration"
                        ]
                    },
                    {
                        title: "Week 13-14: Testing & Deployment",
                        tasks: [
                            "Day 1-2: Learn unit testing with Jest and React Testing Library",
                            "Day 3-4: Master end-to-end testing with Cypress",
                            "Day 5-6: Practice deployment on platforms like Netlify/Vercel",
                            "Day 7: Implement CI/CD pipelines and performance monitoring",
                            "Weekly Project: Deploy a complete React application with testing suite"
                        ]
                    }
                ]
            },
            {
                title: "Backend Development & Full-Stack Integration (Weeks 15-22)",
                description: "Create robust server-side applications and APIs with modern backend technologies that can handle real-world business logic.",
                weeks: [
                    {
                        title: "Week 15-16: Node.js & Express.js Fundamentals",
                        tasks: [
                            "Day 1-2: Learn Node.js runtime environment and module system",
                            "Day 3-4: Master Express.js framework and middleware",
                            "Day 5-6: Practice RESTful API design and route handling",
                            "Day 7: Implement error handling and logging",
                            "Weekly Project: Build a RESTful API for a blog application"
                        ]
                    },
                    {
                        title: "Week 17-18: Database Integration",
                        tasks: [
                            "Day 1-2: Learn MongoDB and Mongoose ODM",
                            "Day 3-4: Master database design and schema creation",
                            "Day 5-6: Practice CRUD operations and data validation",
                            "Day 7: Implement relationships and data aggregation",
                            "Weekly Project: Add database functionality to the blog API"
                        ]
                    },
                    {
                        title: "Week 19-20: Authentication & Security",
                        tasks: [
                            "Day 1-2: Learn JWT authentication and password hashing",
                            "Day 3-4: Master OAuth integration and social login",
                            "Day 5-6: Practice input validation and sanitization",
                            "Day 7: Implement security headers and CORS configuration",
                            "Weekly Project: Add user authentication to the blog application"
                        ]
                    },
                    {
                        title: "Week 21-22: Advanced Backend Features",
                        tasks: [
                            "Day 1-2: Learn file upload and cloud storage integration",
                            "Day 3-4: Master real-time features with WebSockets",
                            "Day 5-6: Practice API documentation with Swagger",
                            "Day 7: Implement caching and rate limiting",
                            "Weekly Project: Build a real-time chat application"
                        ]
                    }
                ]
            }
        ]
    },
    "Data Science": {
        phases: [
            {
                title: "Mathematics & Programming Foundation (Weeks 1-8)",
                description: "Build strong mathematical foundation essential for data science and machine learning with practical applications.",
                weeks: [
                    {
                        title: "Week 1-2: Python Programming Fundamentals",
                        tasks: [
                            "Day 1-2: Learn Python syntax, variables, data types, and basic operations",
                            "Day 3-4: Master control structures (if/else, loops, functions)",
                            "Day 5-6: Practice working with lists, dictionaries, and sets",
                            "Day 7: Understand file I/O and error handling",
                            "Weekly Project: Build a data processing script that reads CSV files and performs basic analysis"
                        ]
                    },
                    {
                        title: "Week 3-4: Statistics & Probability Fundamentals",
                        tasks: [
                            "Day 1-2: Learn descriptive statistics (mean, median, mode, variance, standard deviation)",
                            "Day 3-4: Master probability distributions (normal, binomial, Poisson)",
                            "Day 5-6: Practice hypothesis testing and confidence intervals",
                            "Day 7: Understand correlation and covariance",
                            "Weekly Project: Perform statistical analysis on a real dataset and create a report"
                        ]
                    },
                    {
                        title: "Week 5-6: Data Analysis with Pandas & NumPy",
                        tasks: [
                            "Day 1-2: Master NumPy arrays and mathematical operations",
                            "Day 3-4: Learn Pandas DataFrames and Series operations",
                            "Day 5-6: Practice data cleaning and preprocessing techniques",
                            "Day 7: Implement data aggregation and grouping",
                            "Weekly Project: Clean and analyze a messy dataset using Pandas"
                        ]
                    },
                    {
                        title: "Week 7-8: Data Visualization",
                        tasks: [
                            "Day 1-2: Learn Matplotlib for basic plotting and customization",
                            "Day 3-4: Master Seaborn for statistical visualizations",
                            "Day 5-6: Practice creating interactive plots with Plotly",
                            "Day 7: Understand dashboard creation and storytelling with data",
                            "Weekly Project: Create a comprehensive data visualization dashboard"
                        ]
                    }
                ]
            },
            {
                title: "Machine Learning & Advanced Analytics (Weeks 9-16)",
                description: "Master machine learning algorithms and build predictive models for real-world applications.",
                weeks: [
                    {
                        title: "Week 9-10: Supervised Learning - Regression",
                        tasks: [
                            "Day 1-2: Learn linear regression and polynomial regression",
                            "Day 3-4: Master regularization techniques (Ridge, Lasso)",
                            "Day 5-6: Practice model evaluation metrics (MSE, R-squared)",
                            "Day 7: Implement cross-validation and hyperparameter tuning",
                            "Weekly Project: Build a house price prediction model"
                        ]
                    },
                    {
                        title: "Week 11-12: Supervised Learning - Classification",
                        tasks: [
                            "Day 1-2: Learn logistic regression and k-Nearest Neighbors",
                            "Day 3-4: Master decision trees and random forests",
                            "Day 5-6: Practice SVM and Naive Bayes algorithms",
                            "Day 7: Understand ensemble methods and voting classifiers",
                            "Weekly Project: Create a customer churn prediction system"
                        ]
                    },
                    {
                        title: "Week 13-14: Unsupervised Learning",
                        tasks: [
                            "Day 1-2: Learn clustering algorithms (K-means, hierarchical)",
                            "Day 3-4: Master dimensionality reduction (PCA, t-SNE)",
                            "Day 5-6: Practice association rule learning",
                            "Day 7: Implement anomaly detection techniques",
                            "Weekly Project: Perform customer segmentation for marketing"
                        ]
                    },
                    {
                        title: "Week 15-16: Model Deployment & Production",
                        tasks: [
                            "Day 1-2: Learn model serialization with pickle/joblib",
                            "Day 3-4: Master Flask/FastAPI for creating ML APIs",
                            "Day 5-6: Practice containerization with Docker",
                            "Day 7: Implement monitoring and model retraining pipelines",
                            "Weekly Project: Deploy a machine learning model as a web service"
                        ]
                    }
                ]
            }
        ]
    },
    "Mobile Development": {
        phases: [
            {
                title: "React Native Fundamentals (Weeks 1-8)",
                description: "Learn to build cross-platform mobile applications using React Native framework.",
                weeks: [
                    {
                        title: "Week 1-2: React Native Setup & Basics",
                        tasks: [
                            "Day 1-2: Set up development environment (Node.js, Android Studio, Xcode)",
                            "Day 3-4: Learn React Native components and styling",
                            "Day 5-6: Practice navigation with React Navigation",
                            "Day 7: Understand debugging and developer tools",
                            "Weekly Project: Build a simple weather app with navigation"
                        ]
                    },
                    {
                        title: "Week 3-4: State Management & API Integration",
                        tasks: [
                            "Day 1-2: Master state management with React hooks",
                            "Day 3-4: Learn API integration with Fetch and Axios",
                            "Day 5-6: Practice handling asynchronous operations",
                            "Day 7: Implement error handling and loading states",
                            "Weekly Project: Create a news app with API integration"
                        ]
                    },
                    {
                        title: "Week 5-6: Advanced UI Components",
                        tasks: [
                            "Day 1-2: Learn custom components and reusable UI patterns",
                            "Day 3-4: Master forms and user input handling",
                            "Day 5-6: Practice animations and gestures",
                            "Day 7: Implement responsive design for different screen sizes",
                            "Weekly Project: Build a social media app UI"
                        ]
                    },
                    {
                        title: "Week 7-8: Native Features & Storage",
                        tasks: [
                            "Day 1-2: Learn camera and image picker integration",
                            "Day 3-4: Master geolocation and maps",
                            "Day 5-6: Practice local storage with AsyncStorage",
                            "Day 7: Implement push notifications",
                            "Weekly Project: Create a photo-sharing app with camera features"
                        ]
                    }
                ]
            }
        ]
    },
    "UI/UX Design": {
        phases: [
            {
                title: "Design Principles & User Research (Weeks 1-8)",
                description: "Master the principles of user-centered design and create intuitive, beautiful interfaces.",
                weeks: [
                    {
                        title: "Week 1-2: Design Fundamentals",
                        tasks: [
                            "Day 1-2: Learn color theory and psychology",
                            "Day 3-4: Master typography fundamentals and hierarchy",
                            "Day 5-6: Practice layout and composition principles",
                            "Day 7: Understand grid systems and spacing",
                            "Weekly Project: Create a design system for a brand"
                        ]
                    },
                    {
                        title: "Week 3-4: User Research & Personas",
                        tasks: [
                            "Day 1-2: Learn user research methods (interviews, surveys)",
                            "Day 3-4: Master creating user personas and empathy maps",
                            "Day 5-6: Practice user journey mapping",
                            "Day 7: Understand competitive analysis techniques",
                            "Weekly Project: Conduct user research and create personas for a product"
                        ]
                    },
                    {
                        title: "Week 5-6: Wireframing & Prototyping",
                        tasks: [
                            "Day 1-2: Learn low-fidelity wireframing techniques",
                            "Day 3-4: Master high-fidelity mockups in Figma",
                            "Day 5-6: Practice creating interactive prototypes",
                            "Day 7: Understand design handoff and specifications",
                            "Weekly Project: Design and prototype a complete mobile app"
                        ]
                    },
                    {
                        title: "Week 7-8: Usability Testing & Iteration",
                        tasks: [
                            "Day 1-2: Learn usability testing methodologies",
                            "Day 3-4: Master analyzing and synthesizing user feedback",
                            "Day 5-6: Practice design iteration based on testing results",
                            "Day 7: Understand accessibility standards and implementation",
                            "Weekly Project: Conduct usability tests and iterate on designs"
                        ]
                    }
                ]
            }
        ]
    },
    "Digital Marketing": {
        phases: [
            {
                title: "Marketing Strategy & Analytics (Weeks 1-8)",
                description: "Learn to create effective digital marketing strategies and campaigns that drive results.",
                weeks: [
                    {
                        title: "Week 1-2: SEO Fundamentals",
                        tasks: [
                            "Day 1-2: Learn keyword research and analysis tools",
                            "Day 3-4: Master on-page SEO optimization techniques",
                            "Day 5-6: Practice technical SEO and site structure",
                            "Day 7: Understand local SEO and Google My Business",
                            "Weekly Project: Perform SEO audit and create optimization plan"
                        ]
                    },
                    {
                        title: "Week 3-4: Content Marketing Strategy",
                        tasks: [
                            "Day 1-2: Learn content planning and calendar creation",
                            "Day 3-4: Master blog writing and content creation",
                            "Day 5-6: Practice content promotion and distribution",
                            "Day 7: Understand content performance measurement",
                            "Weekly Project: Create a 30-day content marketing plan"
                        ]
                    },
                    {
                        title: "Week 5-6: Social Media Marketing",
                        tasks: [
                            "Day 1-2: Learn platform-specific strategies (Facebook, Instagram, Twitter, LinkedIn)",
                            "Day 3-4: Master paid advertising and campaign setup",
                            "Day 5-6: Practice community management and engagement",
                            "Day 7: Understand social media analytics and reporting",
                            "Weekly Project: Run a social media campaign and analyze results"
                        ]
                    },
                    {
                        title: "Week 7-8: Analytics & Conversion Optimization",
                        tasks: [
                            "Day 1-2: Learn Google Analytics implementation and reporting",
                            "Day 3-4: Master conversion rate optimization techniques",
                            "Day 5-6: Practice A/B testing and experimentation",
                            "Day 7: Understand marketing automation tools",
                            "Weekly Project: Create comprehensive marketing dashboard and optimization plan"
                        ]
                    }
                ]
            }
        ]
    },
    "Machine Learning": {
        phases: [
            {
                title: "ML Engineering & Deep Learning (Weeks 1-8)",
                description: "Advanced machine learning concepts and deep learning implementations.",
                weeks: [
                    {
                        title: "Week 1-2: Neural Networks Fundamentals",
                        tasks: [
                            "Day 1-2: Learn perceptrons and activation functions",
                            "Day 3-4: Master backpropagation and gradient descent",
                            "Day 5-6: Practice building neural networks from scratch",
                            "Day 7: Understand regularization and optimization techniques",
                            "Weekly Project: Build a neural network for image classification"
                        ]
                    },
                    {
                        title: "Week 3-4: Deep Learning with TensorFlow/Keras",
                        tasks: [
                            "Day 1-2: Learn TensorFlow/Keras framework and syntax",
                            "Day 3-4: Master convolutional neural networks (CNNs)",
                            "Day 5-6: Practice recurrent neural networks (RNNs, LSTMs)",
                            "Day 7: Understand transfer learning and pre-trained models",
                            "Weekly Project: Create an image recognition system using transfer learning"
                        ]
                    },
                    {
                        title: "Week 5-6: Natural Language Processing",
                        tasks: [
                            "Day 1-2: Learn text preprocessing and tokenization",
                            "Day 3-4: Master word embeddings (Word2Vec, GloVe)",
                            "Day 5-6: Practice sentiment analysis and text classification",
                            "Day 7: Understand transformer models and BERT",
                            "Weekly Project: Build a sentiment analysis system for product reviews"
                        ]
                    },
                    {
                        title: "Week 7-8: ML Operations & Deployment",
                        tasks: [
                            "Day 1-2: Learn ML pipeline automation",
                            "Day 3-4: Master model versioning and experiment tracking",
                            "Day 5-6: Practice cloud deployment (AWS SageMaker, GCP AI Platform)",
                            "Day 7: Understand model monitoring and maintenance",
                            "Weekly Project: Deploy a complete ML pipeline with monitoring"
                        ]
                    }
                ]
            }
        ]
    },
    "Cybersecurity": {
        phases: [
            {
                title: "Security Fundamentals & Ethical Hacking (Weeks 1-8)",
                description: "Learn the essential principles and practices of cybersecurity and ethical hacking.",
                weeks: [
                    {
                        title: "Week 1-2: Network Security & Protocols",
                        tasks: [
                            "Day 1-2: Learn TCP/IP protocol suite and OSI model",
                            "Day 3-4: Master firewall configuration and management",
                            "Day 5-6: Practice network scanning with Nmap",
                            "Day 7: Understand VPN technologies and implementation",
                            "Weekly Project: Set up and configure a secure network environment"
                        ]
                    },
                    {
                        title: "Week 3-4: Cryptography & Encryption",
                        tasks: [
                            "Day 1-2: Learn symmetric and asymmetric encryption algorithms",
                            "Day 3-4: Master hash functions and digital signatures",
                            "Day 5-6: Practice cryptographic protocols (SSL/TLS, SSH)",
                            "Day 7: Understand PKI infrastructure and certificate authorities",
                            "Weekly Project: Implement secure communication channel"
                        ]
                    },
                    {
                        title: "Week 5-6: Web Application Security",
                        tasks: [
                            "Day 1-2: Learn OWASP Top 10 vulnerabilities",
                            "Day 3-4: Master SQL injection prevention techniques",
                            "Day 5-6: Practice cross-site scripting (XSS) protection",
                            "Day 7: Understand CSRF and authentication vulnerabilities",
                            "Weekly Project: Perform security assessment on a web application"
                        ]
                    },
                    {
                        title: "Week 7-8: Penetration Testing & Defense",
                        tasks: [
                            "Day 1-2: Learn penetration testing methodologies",
                            "Day 3-4: Master vulnerability assessment tools",
                            "Day 5-6: Practice social engineering techniques",
                            "Day 7: Understand incident response and recovery",
                            "Weekly Project: Conduct complete penetration test and write report"
                        ]
                    }
                ]
            }
        ]
    },
    "Cloud Computing": {
        phases: [
            {
                title: "AWS Cloud Practitioner (Weeks 1-8)",
                description: "Master cloud computing concepts and gain hands-on experience with AWS services.",
                weeks: [
                    {
                        title: "Week 1-2: AWS Fundamentals & Core Services",
                        tasks: [
                            "Day 1-2: Learn AWS global infrastructure and regions",
                            "Day 3-4: Master EC2 instances and auto-scaling",
                            "Day 5-6: Practice S3 storage and management",
                            "Day 7: Understand VPC networking and security groups",
                            "Weekly Project: Deploy a web application on EC2 with S3 storage"
                        ]
                    },
                    {
                        title: "Week 3-4: Database & Storage Services",
                        tasks: [
                            "Day 1-2: Learn RDS relational database service",
                            "Day 3-4: Master DynamoDB NoSQL database",
                            "Day 5-6: Practice EBS and EFS storage solutions",
                            "Day 7: Understand database migration and backup strategies",
                            "Weekly Project: Set up and configure database for application"
                        ]
                    },
                    {
                        title: "Week 5-6: Serverless & Containers",
                        tasks: [
                            "Day 1-2: Learn AWS Lambda and serverless architecture",
                            "Day 3-4: Master API Gateway and microservices",
                            "Day 5-6: Practice containerization with ECS and EKS",
                            "Day 7: Understand Docker and container orchestration",
                            "Weekly Project: Build serverless application with Lambda"
                        ]
                    },
                    {
                        title: "Week 7-8: Security & Monitoring",
                        tasks: [
                            "Day 1-2: Learn IAM policies and security best practices",
                            "Day 3-4: Master CloudWatch monitoring and logging",
                            "Day 5-6: Practice cost optimization and budgeting",
                            "Day 7: Understand compliance and governance frameworks",
                            "Weekly Project: Implement complete security and monitoring solution"
                        ]
                    }
                ]
            }
        ]
    },
    "Blockchain": {
        phases: [
            {
                title: "Blockchain Development & Smart Contracts (Weeks 1-8)",
                description: "Learn blockchain technology, smart contracts, and decentralized application development.",
                weeks: [
                    {
                        title: "Week 1-2: Blockchain Fundamentals",
                        tasks: [
                            "Day 1-2: Learn blockchain architecture and consensus mechanisms",
                            "Day 3-4: Master cryptocurrency fundamentals and wallets",
                            "Day 5-6: Practice transaction validation and mining",
                            "Day 7: Understand different blockchain platforms",
                            "Weekly Project: Create a simple blockchain implementation"
                        ]
                    },
                    {
                        title: "Week 3-4: Smart Contract Development",
                        tasks: [
                            "Day 1-2: Learn Solidity programming language syntax",
                            "Day 3-4: Master smart contract development and testing",
                            "Day 5-6: Practice deploying contracts on test networks",
                            "Day 7: Understand gas optimization and security best practices",
                            "Weekly Project: Build and deploy ERC-20 token contract"
                        ]
                    },
                    {
                        title: "Week 5-6: DApp Development",
                        tasks: [
                            "Day 1-2: Learn Web3.js and ethers.js libraries",
                            "Day 3-4: Master frontend integration with smart contracts",
                            "Day 5-6: Practice event handling and state management",
                            "Day 7: Understand IPFS and decentralized storage",
                            "Weekly Project: Create a decentralized voting application"
                        ]
                    },
                    {
                        title: "Week 7-8: Advanced Blockchain Concepts",
                        tasks: [
                            "Day 1-2: Learn DeFi protocols and applications",
                            "Day 3-4: Master NFT development and standards",
                            "Day 5-6: Practice layer 2 scaling solutions",
                            "Day 7: Understand blockchain security audits",
                            "Weekly Project: Build a complete NFT marketplace"
                        ]
                    }
                ]
            }
        ]
    },
    "Game Development": {
        phases: [
            {
                title: "Unity Game Development (Weeks 1-8)",
                description: "Learn game design principles and development using Unity game engine.",
                weeks: [
                    {
                        title: "Week 1-2: Unity Basics & 3D Environment",
                        tasks: [
                            "Day 1-2: Learn Unity interface and workflow",
                            "Day 3-4: Master 3D modeling and asset import",
                            "Day 5-6: Practice scene creation and lighting",
                            "Day 7: Understand physics and collision detection",
                            "Weekly Project: Create a simple 3D environment with interactive objects"
                        ]
                    },
                    {
                        title: "Week 3-4: C# Scripting & Game Mechanics",
                        tasks: [
                            "Day 1-2: Learn C# syntax and Unity scripting API",
                            "Day 3-4: Master character controller implementation",
                            "Day 5-6: Practice animation and state machines",
                            "Day 7: Understand audio implementation and sound design",
                            "Weekly Project: Build a platformer game with character movement"
                        ]
                    },
                    {
                        title: "Week 5-6: UI/UX & Game Systems",
                        tasks: [
                            "Day 1-2: Learn Unity UI system and canvas",
                            "Day 3-4: Master game state management",
                            "Day 5-6: Practice inventory and scoring systems",
                            "Day 7: Understand particle systems and visual effects",
                            "Weekly Project: Create a complete game with UI and scoring"
                        ]
                    },
                    {
                        title: "Week 7-8: Advanced Features & Publishing",
                        tasks: [
                            "Day 1-2: Learn multiplayer game development",
                            "Day 3-4: Master optimization and performance tuning",
                            "Day 5-6: Practice VR/AR development basics",
                            "Day 7: Understand game publishing process",
                            "Weekly Project: Publish a complete game to app stores"
                        ]
                    }
                ]
            }
        ]
    },
    "Artificial Intelligence": {
        phases: [
            {
                title: "AI Engineering & Advanced Applications (Weeks 1-8)",
                description: "Master artificial intelligence concepts and build intelligent systems.",
                weeks: [
                    {
                        title: "Week 1-2: AI Fundamentals & Search Algorithms",
                        tasks: [
                            "Day 1-2: Learn AI problem-solving and search strategies",
                            "Day 3-4: Master uninformed search algorithms (BFS, DFS)",
                            "Day 5-6: Practice informed search algorithms (A*, greedy best-first)",
                            "Day 7: Understand adversarial search and game theory",
                            "Weekly Project: Implement pathfinding algorithm for game AI"
                        ]
                    },
                    {
                        title: "Week 3-4: Knowledge Representation & Reasoning",
                        tasks: [
                            "Day 1-2: Learn propositional and first-order logic",
                            "Day 3-4: Master knowledge representation techniques",
                            "Day 5-6: Practice inference engines and rule-based systems",
                            "Day 7: Understand expert systems and decision trees",
                            "Weekly Project: Build a simple expert system for diagnostics"
                        ]
                    },
                    {
                        title: "Week 5-6: Natural Language Processing",
                        tasks: [
                            "Day 1-2: Learn text preprocessing and tokenization",
                            "Day 3-4: Master named entity recognition and POS tagging",
                            "Day 5-6: Practice sentiment analysis and text classification",
                            "Day 7: Understand language models and transformers",
                            "Weekly Project: Create a chatbot with NLP capabilities"
                        ]
                    },
                    {
                        title: "Week 7-8: Computer Vision & Robotics",
                        tasks: [
                            "Day 1-2: Learn image processing and feature extraction",
                            "Day 3-4: Master object detection and recognition",
                            "Day 5-6: Practice image segmentation and analysis",
                            "Day 7: Understand robotics and autonomous systems",
                            "Weekly Project: Build a computer vision application for object detection"
                        ]
                    }
                ]
            }
        ]
    },
    "DevOps": {
        phases: [
            {
                title: "DevOps Engineering & Automation (Weeks 1-8)",
                description: "Learn DevOps practices and tools for efficient software development and deployment.",
                weeks: [
                    {
                        title: "Week 1-2: Linux & Infrastructure Automation",
                        tasks: [
                            "Day 1-2: Learn Linux system administration basics",
                            "Day 3-4: Master shell scripting and automation",
                            "Day 5-6: Practice configuration management with Ansible",
                            "Day 7: Understand infrastructure as code concepts",
                            "Weekly Project: Automate server provisioning and configuration"
                        ]
                    },
                    {
                        title: "Week 3-4: CI/CD Pipelines & Version Control",
                        tasks: [
                            "Day 1-2: Learn Git workflows and branching strategies",
                            "Day 3-4: Master Jenkins pipeline creation and management",
                            "Day 5-6: Practice automated testing integration",
                            "Day 7: Understand deployment strategies (blue-green, canary)",
                            "Weekly Project: Set up complete CI/CD pipeline for application"
                        ]
                    },
                    {
                        title: "Week 5-6: Containerization & Orchestration",
                        tasks: [
                            "Day 1-2: Learn Docker container creation and management",
                            "Day 3-4: Master Docker Compose for multi-container apps",
                            "Day 5-6: Practice Kubernetes cluster management",
                            "Day 7: Understand service mesh and networking",
                            "Weekly Project: Containerize application and deploy to Kubernetes"
                        ]
                    },
                    {
                        title: "Week 7-8: Monitoring & Security",
                        tasks: [
                            "Day 1-2: Learn monitoring with Prometheus and Grafana",
                            "Day 3-4: Master logging with ELK stack",
                            "Day 5-6: Practice security scanning and vulnerability assessment",
                            "Day 7: Understand disaster recovery and backup strategies",
                            "Weekly Project: Implement complete monitoring and security solution"
                        ]
                    }
                ]
            }
        ]
    },
    "Software Engineering": {
        phases: [
            {
                title: "Software Architecture & System Design (Weeks 1-8)",
                description: "Master software development methodologies, architecture, and best practices.",
                weeks: [
                    {
                        title: "Week 1-2: Design Patterns & Principles",
                        tasks: [
                            "Day 1-2: Learn SOLID principles and clean code",
                            "Day 3-4: Master creational design patterns",
                            "Day 5-6: Practice structural design patterns",
                            "Day 7: Understand behavioral design patterns",
                            "Weekly Project: Refactor legacy code using design patterns"
                        ]
                    },
                    {
                        title: "Week 3-4: Software Architecture",
                        tasks: [
                            "Day 1-2: Learn monolithic vs microservices architecture",
                            "Day 3-4: Master domain-driven design principles",
                            "Day 5-6: Practice event-driven architecture",
                            "Day 7: Understand API design and REST best practices",
                            "Weekly Project: Design system architecture for large application"
                        ]
                    },
                    {
                        title: "Week 5-6: Development Methodologies",
                        tasks: [
                            "Day 1-2: Learn Agile and Scrum methodologies",
                            "Day 3-4: Master test-driven development practices",
                            "Day 5-6: Practice code review and pair programming",
                            "Day 7: Understand DevOps and continuous delivery",
                            "Weekly Project: Implement TDD for feature development"
                        ]
                    },
                    {
                        title: "Week 7-8: System Design & Scalability",
                        tasks: [
                            "Day 1-2: Learn system design fundamentals",
                            "Day 3-4: Master database design and optimization",
                            "Day 5-6: Practice caching strategies and CDN implementation",
                            "Day 7: Understand load balancing and horizontal scaling",
                            "Weekly Project: Design scalable system for high-traffic application"
                        ]
                    }
                ]
            }
        ]
    },
    "Product Management": {
        phases: [
            {
                title: "Product Strategy & Development (Weeks 1-8)",
                description: "Learn product strategy, development, and management from concept to launch.",
                weeks: [
                    {
                        title: "Week 1-2: Product Discovery & Research",
                        tasks: [
                            "Day 1-2: Learn market research techniques and tools",
                            "Day 3-4: Master user persona creation and validation",
                            "Day 5-6: Practice competitive analysis and market positioning",
                            "Day 7: Understand product vision and strategy development",
                            "Weekly Project: Create comprehensive product strategy document"
                        ]
                    },
                    {
                        title: "Week 3-4: Product Planning & Roadmapping",
                        tasks: [
                            "Day 1-2: Learn Agile product management frameworks",
                            "Day 3-4: Master user story creation and prioritization",
                            "Day 5-6: Practice product roadmap creation and maintenance",
                            "Day 7: Understand stakeholder management and communication",
                            "Weekly Project: Develop product roadmap for new feature launch"
                        ]
                    },
                    {
                        title: "Week 5-6: Development & Execution",
                        tasks: [
                            "Day 1-2: Learn sprint planning and backlog grooming",
                            "Day 3-4: Master MVP definition and validation",
                            "Day 5-6: Practice cross-functional team collaboration",
                            "Day 7: Understand product metrics and success criteria",
                            "Weekly Project: Lead product development simulation"
                        ]
                    },
                    {
                        title: "Week 7-8: Launch & Growth",
                        tasks: [
                            "Day 1-2: Learn product launch strategies and go-to-market plans",
                            "Day 3-4: Master analytics and performance tracking",
                            "Day 5-6: Practice A/B testing and experimentation",
                            "Day 7: Understand user feedback collection and iteration",
                            "Weekly Project: Create complete product launch and growth plan"
                        ]
                    }
                ]
            }
        ]
    },
    "Content Writing": {
        phases: [
            {
                title: "Professional Writing & Content Strategy (Weeks 1-8)",
                description: "Master the art of creating engaging, SEO-optimized content for various platforms.",
                weeks: [
                    {
                        title: "Week 1-2: Writing Fundamentals & Style",
                        tasks: [
                            "Day 1-2: Learn grammar rules and style guidelines",
                            "Day 3-4: Master different writing tones and brand voices",
                            "Day 5-6: Practice headline creation and hook writing",
                            "Day 7: Understand audience targeting and persona development",
                            "Weekly Project: Create diverse writing samples for different audiences"
                        ]
                    },
                    {
                        title: "Week 3-4: SEO & Digital Content Creation",
                        tasks: [
                            "Day 1-2: Learn SEO best practices and keyword research",
                            "Day 3-4: Master blog post and article writing techniques",
                            "Day 5-6: Practice social media content creation and scheduling",
                            "Day 7: Understand content marketing strategy and planning",
                            "Weekly Project: Build comprehensive content calendar and portfolio"
                        ]
                    },
                    {
                        title: "Week 5-6: Advanced Writing Techniques",
                        tasks: [
                            "Day 1-2: Learn copywriting and persuasion techniques",
                            "Day 3-4: Master technical writing and documentation",
                            "Day 5-6: Practice editing and proofreading skills",
                            "Day 7: Understand content optimization and performance analysis",
                            "Weekly Project: Write and optimize content for conversion"
                        ]
                    },
                    {
                        title: "Week 7-8: Professional Development",
                        tasks: [
                            "Day 1-2: Learn freelance writing business setup",
                            "Day 3-4: Master client communication and project management",
                            "Day 5-6: Practice portfolio development and personal branding",
                            "Day 7: Understand content strategy consulting",
                            "Weekly Project: Create professional writing portfolio and business plan"
                        ]
                    }
                ]
            }
        ]
    }
};
