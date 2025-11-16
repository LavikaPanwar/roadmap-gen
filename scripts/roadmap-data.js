// Ultra-Detailed Comprehensive Roadmap Data with Hourly Breakdowns
const roadmapData = {
    "Web Development": {
        phases: [
            {
                title: "Foundation Building (Weeks 1-6)",
                description: "Establish a solid foundation with core web technologies and fundamental principles that will serve as the bedrock for your entire development journey.",
                weeks: [
                    {
                        title: "Week 1: HTML5 Fundamentals & Semantic Structure",
                        tasks: [
                            "Day 1 (4 hours): HTML5 Document Structure Mastery\n• 2 hours: Deep dive into HTML5 doctype declaration and document structure\n• 1 hour: Practice creating proper HTML skeleton with all essential elements\n• 1 hour: Understand the difference between HTML4 and HTML5 document types\n• Exercise: Create 5 different HTML5 document templates",
                            "Day 2 (5 hours): Core HTML Elements & Text Formatting\n• 2 hours: Master heading hierarchy (h1-h6) and paragraph elements\n• 1 hour: Practice text formatting tags (strong, em, mark, small, sub, sup)\n• 1 hour: Learn about lists (ordered, unordered, definition lists)\n• 1 hour: Create complex nested list structures\n• Exercise: Build a detailed recipe page with proper text formatting",
                            "Day 3 (6 hours): Links, Images & Multimedia\n• 2 hours: Master anchor tags with all attributes (href, target, rel, download)\n• 2 hours: Learn image optimization and responsive images (srcset, sizes)\n• 1 hour: Practice embedding audio and video elements\n• 1 hour: Understand figure and figcaption for multimedia content\n• Exercise: Create a media-rich gallery page with optimized images",
                            "Day 4 (5 hours): Semantic HTML5 Elements\n• 2 hours: Deep dive into semantic elements (header, nav, main, article, section)\n• 1 hour: Practice using aside, footer, and time elements correctly\n• 1 hour: Learn about details, summary, and mark elements\n• 1 hour: Understand when to use div vs semantic elements\n• Exercise: Convert a non-semantic page to fully semantic HTML5",
                            "Day 5 (6 hours): Tables & Complex Data Structures\n• 2 hours: Master table structure (thead, tbody, tfoot, tr, th, td)\n• 1 hour: Learn about colspan, rowspan, and table accessibility\n• 2 hours: Practice creating complex data tables with proper semantics\n• 1 hour: Understand caption and scope attributes\n• Exercise: Build a financial report table with proper accessibility",
                            "Day 6 (6 hours): Forms & User Input\n• 2 hours: Learn all form input types (text, email, password, number, date, etc.)\n• 2 hours: Master form validation attributes (required, pattern, min, max)\n• 1 hour: Practice creating complex forms with fieldset and legend\n• 1 hour: Understand form accessibility and label associations\n• Exercise: Create a multi-step registration form with validation",
                            "Day 7 (4 hours): Accessibility & Best Practices\n• 2 hours: Learn ARIA roles, states, and properties\n• 1 hour: Practice implementing keyboard navigation\n• 1 hour: Understand screen reader compatibility\n• Weekly Project: Build a fully accessible personal portfolio website with semantic HTML, forms, tables, and multimedia content"
                        ]
                    },
                    {
                        title: "Week 2: Advanced HTML & CSS Integration",
                        tasks: [
                            "Day 1 (5 hours): CSS Reset & Normalization\n• 2 hours: Understand browser default styles and CSS reset\n• 2 hours: Practice creating custom CSS reset files\n• 1 hour: Learn about CSS normalization vs reset approaches\n• Exercise: Create and test a comprehensive CSS reset file",
                            "Day 2 (6 hours): CSS Box Model Mastery\n• 2 hours: Deep dive into content, padding, border, and margin\n• 2 hours: Practice box-sizing: border-box vs content-box\n• 1 hour: Learn about collapsing margins and their solutions\n• 1 hour: Master margin: auto and centering techniques\n• Exercise: Build a complex layout using only box model properties",
                            "Day 3 (6 hours): CSS Positioning Systems\n• 2 hours: Master static, relative, absolute positioning\n• 2 hours: Practice fixed and sticky positioning scenarios\n• 1 hour: Learn about z-index and stacking context\n• 1 hour: Understand position: absolute within relative containers\n• Exercise: Create a complex overlapping element design",
                            "Day 4 (6 hours): CSS Display Property & Layout\n• 2 hours: Deep dive into display: block, inline, inline-block\n• 2 hours: Practice using display: none vs visibility: hidden\n• 1 hour: Learn about display: table and related properties\n• 1 hour: Understand the new display: flow-root property\n• Exercise: Build a newspaper-style layout using display properties",
                            "Day 5 (6 hours): CSS Selectors & Specificity\n• 2 hours: Master basic selectors (element, class, ID, universal)\n• 2 hours: Practice advanced selectors (attribute, pseudo-class, pseudo-element)\n• 1 hour: Learn about selector specificity and calculation\n• 1 hour: Understand !important and when to use it\n• Exercise: Create a stylesheet using only advanced selectors",
                            "Day 6 (6 hours): CSS Variables & Custom Properties\n• 2 hours: Learn CSS custom properties syntax and usage\n• 2 hours: Practice creating design systems with CSS variables\n• 1 hour: Understand variable inheritance and scope\n• 1 hour: Learn about CSS calculations with variables\n• Exercise: Build a themeable website using CSS variables",
                            "Day 7 (5 hours): CSS Architecture & Organization\n• 2 hours: Learn BEM (Block Element Modifier) methodology\n• 2 hours: Practice organizing CSS files and imports\n• 1 hour: Understand CSS performance optimization\n• Weekly Project: Create a responsive, accessible, and well-organized website using all learned HTML and CSS concepts"
                        ]
                    },
                    {
                        title: "Week 3: Advanced CSS Layouts & Flexbox",
                        tasks: [
                            "Day 1 (6 hours): Flexbox Fundamentals\n• 2 hours: Learn flex container properties (display: flex)\n• 2 hours: Master flex-direction and flex-wrap\n• 1 hour: Practice justify-content alignment\n• 1 hour: Understand align-items and align-content\n• Exercise: Create various flexbox layouts for different scenarios",
                            "Day 2 (6 hours): Flex Items Properties\n• 2 hours: Deep dive into flex-grow, flex-shrink, flex-basis\n• 2 hours: Practice using the flex shorthand property\n• 1 hour: Learn about order property and reordering\n• 1 hour: Master align-self for individual item alignment\n• Exercise: Build a complex card layout using flex item properties",
                            "Day 3 (6 hours): Real-world Flexbox Projects\n• 2 hours: Create a navigation bar with flexbox\n• 2 hours: Build a card grid with equal height cards\n• 1 hour: Practice holy grail layout with flexbox\n• 1 hour: Create a responsive image gallery\n• Exercise: Implement a complete website layout using only flexbox",
                            "Day 4 (6 hours): CSS Grid Fundamentals\n• 2 hours: Learn grid container (display: grid)\n• 2 hours: Master grid-template-columns and grid-template-rows\n• 1 hour: Practice grid gap and grid alignment\n• 1 hour: Understand implicit vs explicit grids\n• Exercise: Create basic grid layouts with various configurations",
                            "Day 5 (6 hours): Advanced Grid Properties\n• 2 hours: Learn grid-template-areas for visual layout\n• 2 hours: Master grid line names and positioning\n• 1 hour: Practice minmax(), repeat(), and auto-fill/auto-fit\n• 1 hour: Understand grid auto-flow and dense packing\n• Exercise: Build a magazine-style layout using CSS Grid",
                            "Day 6 (6 hours): Grid Item Placement\n• 2 hours: Learn grid-column and grid-row placement\n• 2 hours: Practice grid-area for complex placements\n• 1 hour: Master justify-self and align-self in grid\n• 1 hour: Understand grid span and negative values\n• Exercise: Create overlapping grid layouts with precise placement",
                            "Day 7 (6 hours): Responsive Grid Systems\n• 2 hours: Learn media queries for grid responsiveness\n• 2 hours: Practice creating mobile-first grid systems\n• 1 hour: Master grid auto-placement algorithms\n• 1 hour: Build a complete responsive website with CSS Grid\n• Weekly Project: Create a fully responsive portfolio website using both Flexbox and CSS Grid for different layout sections"
                        ]
                    },
                    {
                        title: "Week 4: Advanced CSS Techniques & Responsive Design",
                        tasks: [
                            "Day 1 (6 hours): Advanced CSS Selectors & Pseudo-classes\n• 2 hours: Master :nth-child, :nth-of-type selectors\n• 2 hours: Practice :not(), :empty, :target pseudo-classes\n• 1 hour: Learn about form pseudo-classes (:checked, :valid, :invalid)\n• 1 hour: Understand :before and :after pseudo-elements\n• Exercise: Create interactive elements using advanced selectors",
                            "Day 2 (6 hours): CSS Transforms & 3D Effects\n• 2 hours: Learn 2D transforms (translate, rotate, scale, skew)\n• 2 hours: Practice 3D transforms and perspective\n• 1 hour: Master transform-origin and transform-style\n• 1 hour: Create complex animation sequences with transforms\n• Exercise: Build a 3D card flip animation",
                            "Day 3 (6 hours): CSS Transitions & Animations\n• 2 hours: Learn transition properties and timing functions\n• 2 hours: Practice @keyframes and animation properties\n• 1 hour: Master animation-fill-mode and iteration count\n• 1 hour: Create complex multi-step animations\n• Exercise: Implement a loading spinner with smooth animations",
                            "Day 4 (6 hours): Advanced Responsive Design\n• 2 hours: Deep dive into media queries and breakpoints\n• 2 hours: Practice mobile-first responsive design approach\n• 1 hour: Learn about responsive typography and units\n• 1 hour: Understand container queries and aspect ratio\n• Exercise: Create a fully responsive website from mobile to desktop",
                            "Day 5 (6 hours): CSS Custom Properties & Theming\n• 2 hours: Learn advanced CSS variable techniques\n• 2 hours: Practice creating dark/light theme systems\n• 1 hour: Master CSS custom properties with JavaScript\n• 1 hour: Build a theme switcher with CSS variables\n• Exercise: Create a website with multiple theme options",
                            "Day 6 (6 hours): CSS Architecture & Methodology\n• 2 hours: Learn SMACSS (Scalable Modular Architecture)\n• 2 hours: Practice OOCSS (Object Oriented CSS) principles\n• 1 hour: Understand ITCSS (Inverted Triangle CSS)\n• 1 hour: Master CSS file organization and naming conventions\n• Exercise: Refactor a large CSS codebase using methodology",
                            "Day 7 (6 hours): Performance & Optimization\n• 2 hours: Learn CSS performance best practices\n• 2 hours: Practice critical CSS and above-the-fold optimization\n• 1 hour: Master CSS minification and compression\n• 1 hour: Understand browser rendering and repaint optimization\n• Weekly Project: Build a high-performance, animated, responsive website with advanced CSS features and optimal loading times"
                        ]
                    },
                    {
                        title: "Week 5: JavaScript Fundamentals & DOM Manipulation",
                        tasks: [
                            "Day 1 (6 hours): JavaScript Basics & Syntax\n• 2 hours: Learn variables (var, let, const) and data types\n• 2 hours: Practice operators and type coercion\n• 1 hour: Master control structures (if/else, switch)\n• 1 hour: Understand truthy/falsy values and comparisons\n• Exercise: Create a basic calculator with all operations",
                            "Day 2 (6 hours): Functions & Scope\n• 2 hours: Learn function declarations vs expressions\n• 2 hours: Practice parameters, arguments, and return values\n• 1 hour: Master function scope and hoisting\n• 1 hour: Understand IIFE (Immediately Invoked Function Expressions)\n• Exercise: Build a utility library with multiple functions",
                            "Day 3 (6 hours): Arrays & Array Methods\n• 2 hours: Learn array creation and basic methods\n• 2 hours: Practice advanced array methods (map, filter, reduce)\n• 1 hour: Master array destructuring and spread operator\n• 1 hour: Understand multidimensional arrays\n• Exercise: Create data processing functions with array methods",
                            "Day 4 (6 hours): Objects & Object Methods\n• 2 hours: Learn object creation and property access\n• 2 hours: Practice object methods and 'this' keyword\n• 1 hour: Master object destructuring and spread\n• 1 hour: Understand object prototypes and inheritance\n• Exercise: Build a contact management system with objects",
                            "Day 5 (6 hours): DOM Selection & Manipulation\n• 2 hours: Learn DOM query selection methods\n• 2 hours: Practice element creation and insertion\n• 1 hour: Master attribute and class manipulation\n• 1 hour: Understand event delegation and propagation\n• Exercise: Create a dynamic task list with DOM manipulation",
                            "Day 6 (6 hours): Event Handling & Forms\n• 2 hours: Learn event listeners and event object\n• 2 hours: Practice form validation and submission\n• 1 hour: Master keyboard and mouse events\n• 1 hour: Understand custom events and event creation\n• Exercise: Build an interactive form with real-time validation",
                            "Day 7 (6 hours): Advanced DOM Techniques\n• 2 hours: Learn template literals and dynamic content\n• 2 hours: Practice working with datasets and data attributes\n• 1 hour: Master element traversal and sibling navigation\n• 1 hour: Understand performance optimization in DOM manipulation\n• Weekly Project: Create a complete interactive application (like a task manager or shopping cart) with all JavaScript fundamentals"
                        ]
                    },
                    {
                        title: "Week 6: Modern JavaScript & ES6+ Features",
                        tasks: [
                            "Day 1 (6 hours): ES6+ Syntax Features\n• 2 hours: Master arrow functions and their 'this' binding\n• 2 hours: Practice template literals and string methods\n• 1 hour: Learn enhanced object literals\n• 1 hour: Understand default parameters and rest parameters\n• Exercise: Refactor old JavaScript code to use modern syntax",
                            "Day 2 (6 hours): Destructuring & Spread Operator\n• 2 hours: Learn array destructuring with default values\n• 2 hours: Practice object destructuring and nested destructuring\n• 1 hour: Master spread operator with arrays and objects\n• 1 hour: Understand practical use cases for destructuring\n• Exercise: Create utility functions using destructuring and spread",
                            "Day 3 (6 hours): Modules & Import/Export\n• 2 hours: Learn ES6 module syntax (import/export)\n• 2 hours: Practice named exports vs default exports\n• 1 hour: Master module bundling concepts\n• 1 hour: Understand tree shaking and dead code elimination\n• Exercise: Build a modular JavaScript application",
                            "Day 4 (6 hours): Promises & Async/Await\n• 2 hours: Learn Promise constructor and methods\n• 2 hours: Practice Promise chaining and error handling\n• 1 hour: Master async/await syntax and error handling\n• 1 hour: Understand Promise.all, Promise.race, Promise.allSettled\n• Exercise: Create multiple async operations with proper error handling",
                            "Day 5 (6 hours): Fetch API & HTTP Requests\n• 2 hours: Learn Fetch API basics and response handling\n• 2 hours: Practice GET, POST, PUT, DELETE requests\n• 1 hour: Master request headers and authentication\n• 1 hour: Understand CORS and cross-origin requests\n• Exercise: Build a weather app with API integration",
                            "Day 6 (6 hours): Classes & OOP in JavaScript\n• 2 hours: Learn class syntax and constructor methods\n• 2 hours: Practice inheritance and super keyword\n• 1 hour: Master static methods and properties\n• 1 hour: Understand private fields and methods\n• Exercise: Create a complete class hierarchy for a application",
                            "Day 7 (6 hours): Modern JavaScript Patterns\n• 2 hours: Learn functional programming concepts\n• 2 hours: Practice higher-order functions and composition\n• 1 hour: Master currying and partial application\n• 1 hour: Understand modern JavaScript tooling and setup\n• Weekly Project: Build a complete single-page application using all modern JavaScript features with API integration and proper architecture"
                        ]
                    }
                ]
            },
            {
                title: "Frontend Frameworks & Advanced Concepts (Weeks 7-14)",
                description: "Build dynamic, interactive user interfaces with modern frameworks and tools that power today's web applications.",
                weeks: [
                    {
                        title: "Week 7-8: React.js Fundamentals & Component Architecture",
                        tasks: [
                            "Day 1 (6 hours): React Setup & JSX Fundamentals\n• 2 hours: Set up React development environment (Create React App)\n• 2 hours: Learn JSX syntax and rules\n• 1 hour: Practice creating functional components\n• 1 hour: Understand React elements vs components\n• Exercise: Create a basic React app with multiple components",
                            "Day 2 (6 hours): Props & Component Communication\n• 2 hours: Learn passing props to components\n• 2 hours: Practice prop types and default props\n• 1 hour: Master component composition patterns\n• 1 hour: Understand children prop and slot patterns\n• Exercise: Build a reusable component library",
                            "Day 3 (6 hours): State Management with useState\n• 2 hours: Learn useState hook and state updates\n• 2 hours: Practice state lifting and sharing state\n• 1 hour: Master state initialization and updates\n• 1 hour: Understand state batching and async updates\n• Exercise: Create a stateful counter and form components",
                            "Day 4 (6 hours): Event Handling in React\n• 2 hours: Learn synthetic events and event handlers\n• 2 hours: Practice form handling and controlled components\n• 1 hour: Master event propagation in React\n• 1 hour: Understand custom event handlers\n• Exercise: Build an interactive form with validation",
                            "Day 5 (6 hours): useEffect Hook & Side Effects\n• 2 hours: Learn useEffect for side effects\n• 2 hours: Practice dependency array and cleanup\n• 1 hour: Master useEffect for API calls\n• 1 hour: Understand useLayoutEffect vs useEffect\n• Exercise: Create a data fetching component with loading states",
                            "Day 6 (6 hours): Conditional Rendering & Lists\n• 2 hours: Learn conditional rendering patterns\n• 2 hours: Practice rendering lists with map\n• 1 hour: Master key prop and list optimization\n• 1 hour: Understand fragment and short-circuit evaluation\n• Exercise: Build a dynamic list with add/remove functionality",
                            "Day 7 (6 hours): React Developer Tools & Debugging\n• 2 hours: Learn React DevTools installation and usage\n• 2 hours: Practice debugging React components\n• 1 hour: Master React error boundaries\n• 1 hour: Understand performance profiling\n• Weekly Project: Build a complete React todo application with all fundamental concepts"
                        ]
                    },
                    // Continuing with similar ultra-detailed breakdown for remaining weeks...
                    {
                        title: "Week 9-10: Advanced React Hooks & Context API",
                        tasks: [
                            "Day 1 (6 hours): useReducer Hook for Complex State\n• 2 hours: Learn useReducer syntax and patterns\n• 2 hours: Practice reducer functions and actions\n• 1 hour: Master useReducer vs useState use cases\n• 1 hour: Understand useReducer with useContext\n• Exercise: Implement a shopping cart with useReducer",
                            "Day 2 (6 hours): useContext for Global State\n• 2 hours: Learn Context API and createContext\n• 2 hours: Practice useContext hook for state consumption\n• 1 hour: Master context provider patterns\n• 1 hour: Understand context performance considerations\n• Exercise: Create a theme context for dark/light mode",
                            "Day 3 (6 hours): Custom Hooks Development\n• 2 hours: Learn custom hook creation rules\n• 2 hours: Practice creating useLocalStorage hook\n• 1 hour: Master useFetch custom hook\n• 1 hour: Understand custom hook testing\n• Exercise: Build a library of reusable custom hooks",
                            "Day 4 (6 hours): useMemo & useCallback Optimization\n• 2 hours: Learn useMemo for expensive calculations\n• 2 hours: Practice useCallback for function memoization\n• 1 hour: Master dependency array optimization\n• 1 hour: Understand when to use memoization\n• Exercise: Optimize a performance-intensive component",
                            "Day 5 (6 hours): useRef & DOM Access\n• 2 hours: Learn useRef for DOM element references\n• 2 hours: Practice useRef for mutable values\n• 1 hour: Master forwardRef for component refs\n• 1 hour: Understand useImperativeHandle\n• Exercise: Create a custom input with focus management",
                            "Day 6 (6 hours): Advanced Hook Patterns\n• 2 hours: Learn hook composition patterns\n• 2 hours: Practice hook rules and ESLint plugins\n• 1 hour: Master testing custom hooks\n• 1 hour: Understand hook flow and order\n• Exercise: Build complex hook-based components",
                            "Day 7 (6 hours): State Management Architecture\n• 2 hours: Learn state management patterns\n• 2 hours: Practice combining multiple hooks\n• 1 hour: Master state normalization\n• 1 hour: Understand state machine concepts\n• Weekly Project: Build a complete React application with advanced hooks and context for state management"
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
                        title: "Week 1-2: Python Programming Mastery",
                        tasks: [
                            "Day 1 (6 hours): Python Setup & Basic Syntax\n• 2 hours: Install Python and set up development environment\n• 2 hours: Learn Python syntax and basic data types\n• 1 hour: Practice variables and basic operations\n• 1 hour: Understand Python interpreter and REPL\n• Exercise: Write Python scripts for basic calculations",
                            "Day 2 (6 hours): Control Structures & Functions\n• 2 hours: Learn if/else statements and boolean logic\n• 2 hours: Practice for and while loops\n• 1 hour: Master function definition and parameters\n• 1 hour: Understand scope and namespaces\n• Exercise: Create utility functions for data processing",
                            "Day 3 (6 hours): Data Structures - Lists & Tuples\n• 2 hours: Learn list creation and manipulation\n• 2 hours: Practice list comprehensions\n• 1 hour: Master tuple operations and immutability\n• 1 hour: Understand sequence unpacking\n• Exercise: Build data analysis functions with lists",
                            "Day 4 (6 hours): Data Structures - Dictionaries & Sets\n• 2 hours: Learn dictionary creation and access\n• 2 hours: Practice dictionary comprehensions\n• 1 hour: Master set operations and methods\n• 1 hour: Understand hashable types\n• Exercise: Create data aggregation functions",
                            "Day 5 (6 hours): File I/O & Exception Handling\n• 2 hours: Learn file reading and writing\n• 2 hours: Practice CSV and JSON file handling\n• 1 hour: Master try/except blocks\n• 1 hour: Understand custom exceptions\n• Exercise: Build a data file processor with error handling",
                            "Day 6 (6 hours): Object-Oriented Programming\n• 2 hours: Learn class definition and instantiation\n• 2 hours: Practice inheritance and polymorphism\n• 1 hour: Master special methods (__init__, __str__)\n• 1 hour: Understand properties and descriptors\n• Exercise: Create custom data structure classes",
                            "Day 7 (6 hours): Advanced Python Features\n• 2 hours: Learn decorators and generators\n• 2 hours: Practice context managers\n• 1 hour: Master lambda functions\n• 1 hour: Understand functional programming in Python\n• Weekly Project: Build a complete data processing application with custom classes and error handling"
                        ]
                    },
                    {
                        title: "Week 3-4: Statistics & Probability Fundamentals",
                        tasks: [
                            "Day 1 (6 hours): Descriptive Statistics - Central Tendency\n• 2 hours: Learn mean, median, mode calculations\n• 2 hours: Practice weighted mean and geometric mean\n• 1 hour: Master trimmed mean and robust statistics\n• 1 hour: Understand when to use each measure\n• Exercise: Calculate central tendency for real datasets",
                            "Day 2 (6 hours): Descriptive Statistics - Variability\n• 2 hours: Learn range, variance, standard deviation\n• 2 hours: Practice interquartile range and quartiles\n• 1 hour: Master coefficient of variation\n• 1 hour: Understand skewness and kurtosis\n• Exercise: Analyze dataset variability and distribution shape",
                            "Day 3 (6 hours): Probability Fundamentals\n• 2 hours: Learn basic probability rules\n• 2 hours: Practice conditional probability\n• 1 hour: Master Bayes' theorem\n• 1 hour: Understand probability distributions introduction\n• Exercise: Solve real-world probability problems",
                            "Day 4 (6 hours): Discrete Probability Distributions\n• 2 hours: Learn binomial distribution\n• 2 hours: Practice Poisson distribution\n• 1 hour: Master geometric distribution\n• 1 hour: Understand hypergeometric distribution\n• Exercise: Model real scenarios with discrete distributions",
                            "Day 5 (6 hours): Continuous Probability Distributions\n• 2 hours: Learn normal distribution properties\n• 2 hours: Practice standard normal distribution\n• 1 hour: Master exponential distribution\n• 1 hour: Understand uniform distribution\n• Exercise: Calculate probabilities for continuous distributions",
                            "Day 6 (6 hours): Statistical Inference - Estimation\n• 2 hours: Learn point estimation\n• 2 hours: Practice confidence intervals\n• 1 hour: Master margin of error\n• 1 hour: Understand sampling distributions\n• Exercise: Estimate population parameters from samples",
                            "Day 7 (6 hours): Statistical Inference - Hypothesis Testing\n• 2 hours: Learn null and alternative hypotheses\n• 2 hours: Practice p-values and significance levels\n• 1 hour: Master type I and type II errors\n• 1 hour: Understand power of test\n• Weekly Project: Conduct complete statistical analysis on a real dataset with hypothesis testing"
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
                        title: "Week 1-2: React Native Setup & Core Components",
                        tasks: [
                            "Day 1 (6 hours): Environment Setup & First App\n• 2 hours: Install Node.js, Watchman, and React Native CLI\n• 2 hours: Set up Android Studio and Xcode\n• 1 hour: Create first React Native project\n• 1 hour: Understand metro bundler and development server\n• Exercise: Run hello world app on both iOS and Android",
                            "Day 2 (6 hours): Core Components - View & Text\n• 2 hours: Learn View component and styling\n• 2 hours: Practice Text component and typography\n• 1 hour: Master flexbox layout in React Native\n• 1 hour: Understand platform-specific styling\n• Exercise: Create a responsive layout with View and Text",
                            "Day 3 (6 hours): Core Components - Images & Touchables\n• 2 hours: Learn Image component and sources\n• 2 hours: Practice TouchableOpacity and TouchableHighlight\n• 1 hour: Master image optimization and caching\n• 1 hour: Understand Pressable component\n• Exercise: Build an image gallery with touch interactions",
                            "Day 4 (6 hours): Core Components - ScrollView & FlatList\n• 2 hours: Learn ScrollView for scrollable content\n• 2 hours: Practice FlatList for efficient lists\n• 1 hour: Master SectionList for grouped data\n• 1 hour: Understand virtualization and performance\n• Exercise: Create a contact list with smooth scrolling",
                            "Day 5 (6 hours): Core Components - TextInput & Forms\n• 2 hours: Learn TextInput component and props\n• 2 hours: Practice form handling and validation\n• 1 hour: Master keyboard handling and dismissal\n• 1 hour: Understand secure text entry\n• Exercise: Build a login form with validation",
                            "Day 6 (6 hours): Styling & Theming\n• 2 hours: Learn StyleSheet API and organization\n• 2 hours: Practice platform-specific code\n• 1 hour: Master responsive design techniques\n• 1 hour: Understand dark mode implementation\n• Exercise: Create a themed app with responsive design",
                            "Day 7 (6 hours): Navigation Fundamentals\n• 2 hours: Learn React Navigation setup\n• 2 hours: Practice stack navigation\n• 1 hour: Master tab navigation\n• 1 hour: Understand navigation parameters\n• Weekly Project: Build a complete mobile app with multiple screens and navigation"
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
                        title: "Week 1-2: Design Fundamentals & Visual Hierarchy",
                        tasks: [
                            "Day 1 (6 hours): Design Principles & Psychology\n• 2 hours: Learn Gestalt principles of perception\n• 2 hours: Practice visual weight and balance\n• 1 hour: Master proximity and grouping\n• 1 hour: Understand color psychology basics\n• Exercise: Analyze existing designs using principles",
                            "Day 2 (6 hours): Color Theory & Palettes\n• 2 hours: Learn color wheel and color relationships\n• 2 hours: Practice creating harmonious color palettes\n• 1 hour: Master accessibility and contrast ratios\n• 1 hour: Understand color in different cultures\n• Exercise: Create multiple color schemes for a brand",
                            "Day 3 (6 hours): Typography Fundamentals\n• 2 hours: Learn type classification and anatomy\n• 2 hours: Practice font pairing and hierarchy\n• 1 hour: Master readability and legibility\n• 1 hour: Understand web font optimization\n• Exercise: Design typographic systems for different contexts",
                            "Day 4 (6 hours): Layout & Composition\n• 2 hours: Learn grid systems and alignment\n• 2 hours: Practice visual hierarchy creation\n• 1 hour: Master white space and breathing room\n• 1 hour: Understand F-pattern and Z-pattern layouts\n• Exercise: Create multiple layout variations for a webpage",
                            "Day 5 (6 hours): Iconography & Visual Elements\n• 2 hours: Learn icon design principles\n• 2 hours: Practice creating icon families\n• 1 hour: Master illustration styles\n• 1 hour: Understand data visualization basics\n• Exercise: Design a complete icon set for an application",
                            "Day 6 (6 hours): Design Tools - Figma Basics\n• 2 hours: Learn Figma interface and tools\n• 2 hours: Practice creating frames and artboards\n• 1 hour: Master components and variants\n• 1 hour: Understand auto layout and constraints\n• Exercise: Recreate existing designs in Figma",
                            "Day 7 (6 hours): Design System Fundamentals\n• 2 hours: Learn design tokens and variables\n• 2 hours: Practice creating component libraries\n• 1 hour: Master documentation and guidelines\n• 1 hour: Understand version control for design\n• Weekly Project: Create a complete design system with color, typography, and components"
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
                        title: "Week 1-2: SEO Fundamentals & Technical Optimization",
                        tasks: [
                            "Day 1 (6 hours): SEO Basics & Search Engine Understanding\n• 2 hours: Learn how search engines work\n• 2 hours: Practice keyword research techniques\n• 1 hour: Master search intent analysis\n• 1 hour: Understand SEO terminology and metrics\n• Exercise: Conduct keyword research for a niche website",
                            "Day 2 (6 hours): On-Page SEO Optimization\n• 2 hours: Learn title tag optimization\n• 2 hours: Practice meta description writing\n• 1 hour: Master header tag hierarchy\n• 1 hour: Understand URL structure best practices\n• Exercise: Optimize existing webpage for on-page SEO",
                            "Day 3 (6 hours): Technical SEO Fundamentals\n• 2 hours: Learn website crawling and indexing\n• 2 hours: Practice XML sitemap creation\n• 1 hour: Master robots.txt configuration\n• 1 hour: Understand canonical tags and duplicate content\n• Exercise: Conduct technical SEO audit of a website",
                            "Day 4 (6 hours): Site Structure & Internal Linking\n• 2 hours: Learn website architecture principles\n• 2 hours: Practice internal linking strategies\n• 1 hour: Master breadcrumb navigation\n• 1 hour: Understand URL structure optimization\n• Exercise: Create optimal site structure for an e-commerce site",
                            "Day 5 (6 hours): Content Optimization & E-A-T\n• 2 hours: Learn content quality factors\n• 2 hours: Practice E-A-T (Expertise, Authoritativeness, Trustworthiness)\n• 1 hour: Master content freshness and updates\n• 1 hour: Understand user engagement signals\n• Exercise: Optimize existing content for E-A-T principles",
                            "Day 6 (6 hours): Local SEO & Google My Business\n• 2 hours: Learn local search ranking factors\n• 2 hours: Practice Google My Business optimization\n• 1 hour: Master local citation building\n• 1 hour: Understand review management\n• Exercise: Optimize a local business for Google search",
                            "Day 7 (6 hours): SEO Tools & Analytics\n• 2 hours: Learn Google Search Console setup\n• 2 hours: Practice SEO auditing tools\n• 1 hour: Master rank tracking and monitoring\n• 1 hour: Understand SEO reporting\n• Weekly Project: Conduct complete SEO audit and create optimization plan for a website"
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
                        title: "Week 1-2: Neural Networks & Deep Learning Fundamentals",
                        tasks: [
                            "Day 1 (6 hours): Neural Network Mathematics\n• 2 hours: Learn linear algebra for neural networks\n• 2 hours: Practice matrix operations and derivatives\n• 1 hour: Master chain rule and backpropagation math\n• 1 hour: Understand activation function derivatives\n• Exercise: Implement forward propagation from scratch",
                            "Day 2 (6 hours): Perceptrons & Activation Functions\n• 2 hours: Learn single layer perceptron\n• 2 hours: Practice different activation functions\n• 1 hour: Master sigmoid, tanh, and ReLU\n• 1 hour: Understand vanishing gradient problem\n• Exercise: Build a perceptron for binary classification",
                            "Day 3 (6 hours): Multi-layer Perceptrons\n• 2 hours: Learn hidden layers and architecture\n• 2 hours: Practice forward propagation in MLP\n• 1 hour: Master backpropagation algorithm\n• 1 hour: Understand weight initialization\n• Exercise: Implement MLP from scratch for regression",
                            "Day 4 (6 hours): Gradient Descent & Optimization\n• 2 hours: Learn gradient descent algorithm\n• 2 hours: Practice stochastic gradient descent\n• 1 hour: Master momentum and adaptive learning rates\n• 1 hour: Understand optimization challenges\n• Exercise: Implement different optimization algorithms",
                            "Day 5 (6 hours): TensorFlow/Keras Introduction\n• 2 hours: Learn TensorFlow installation and setup\n• 2 hours: Practice Keras sequential API\n• 1 hour: Master model compilation and training\n• 1 hour: Understand callbacks and monitoring\n• Exercise: Build first neural network with Keras",
                            "Day 6 (6 hours): Model Evaluation & Validation\n• 2 hours: Learn train/test split and cross-validation\n• 2 hours: Practice evaluation metrics for classification\n• 1 hour: Master confusion matrix analysis\n• 1 hour: Understand overfitting detection\n• Exercise: Evaluate model performance comprehensively",
                            "Day 7 (6 hours): Hyperparameter Tuning\n• 2 hours: Learn grid search and random search\n• 2 hours: Practice learning rate scheduling\n• 1 hour: Master early stopping techniques\n• 1 hour: Understand model checkpointing\n• Weekly Project: Build and optimize a neural network for image classification"
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
                        title: "Week 1-2: Network Security & Protocol Analysis",
                        tasks: [
                            "Day 1 (6 hours): Networking Fundamentals\n• 2 hours: Learn OSI model and TCP/IP stack\n• 2 hours: Practice IP addressing and subnetting\n• 1 hour: Master network protocols (TCP, UDP, ICMP)\n• 1 hour: Understand packet structure and headers\n• Exercise: Analyze network traffic with Wireshark",
                            "Day 2 (6 hours): Network Scanning & Enumeration\n• 2 hours: Learn Nmap scanning techniques\n• 2 hours: Practice port scanning and service detection\n• 1 hour: Master OS fingerprinting\n• 1 hour: Understand vulnerability scanning\n• Exercise: Conduct complete network reconnaissance",
                            "Day 3 (6 hours): Firewalls & Access Control\n• 2 hours: Learn firewall types and architectures\n• 2 hours: Practice iptables configuration\n• 1 hour: Master network segmentation\n• 1 hour: Understand DMZ and security zones\n• Exercise: Design and implement firewall rules",
                            "Day 4 (6 hours): VPN & Remote Access Security\n• 2 hours: Learn VPN protocols (IPsec, SSL/TLS)\• 2 hours: Practice VPN server configuration\n• 1 hour: Master authentication methods\n• 1 hour: Understand VPN security considerations\n• Exercise: Set up secure remote access solution",
                            "Day 5 (6 hours): Wireless Network Security\n• 2 hours: Learn wireless encryption protocols\n• 2 hours: Practice WPA2/WPA3 configuration\n• 1 hour: Master wireless intrusion detection\n• 1 hour: Understand rogue access points\n• Exercise: Secure a wireless network infrastructure",
                            "Day 6 (6 hours): Network Monitoring & IDS/IPS\n• 2 hours: Learn intrusion detection systems\n• 2 hours: Practice Snort rule creation\n• 1 hour: Master network traffic analysis\n• 1 hour: Understand SIEM integration\n• Exercise: Deploy and configure network monitoring",
                            "Day 7 (6 hours): Network Defense Strategies\n• 2 hours: Learn defense in depth principles\n• 2 hours: Practice network hardening techniques\n• 1 hour: Master incident response planning\n• 1 hour: Understand security policies\n• Weekly Project: Design and implement complete network security architecture"
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
                            "Day 1 (6 hours): AWS Introduction & Account Setup\n• 2 hours: Learn AWS global infrastructure\n• 2 hours: Practice AWS account creation and security\n• 1 hour: Master AWS management console\n• 1 hour: Understand billing and cost management\n• Exercise: Set up multi-factor authentication and billing alerts",
                            "Day 2 (6 hours): EC2 & Compute Services\n• 2 hours: Learn EC2 instance types and families\n• 2 hours: Practice launching and connecting to instances\n• 1 hour: Master security groups and key pairs\n• 1 hour: Understand instance storage options\n• Exercise: Deploy web application on EC2 instances",
                            "Day 3 (6 hours): S3 & Storage Services\n• 2 hours: Learn S3 buckets and object storage\n• 2 hours: Practice S3 permissions and policies\n• 1 hour: Master S3 versioning and lifecycle policies\n• 1 hour: Understand storage classes and costs\n• Exercise: Create static website hosting on S3",
                            "Day 4 (6 hours): VPC & Networking\n• 2 hours: Learn VPC components and architecture\n• 2 hours: Practice subnet creation and routing\n• 1 hour: Master internet gateway and NAT gateway\n• 1 hour: Understand security groups vs NACLs\n• Exercise: Design and implement multi-tier VPC",
                            "Day 5 (6 hours): IAM & Security\n• 2 hours: Learn IAM users, groups, and roles\n• 2 hours: Practice IAM policy creation\n• 1 hour: Master permission boundaries\n• 1 hour: Understand cross-account access\n• Exercise: Implement least privilege access control",
                            "Day 6 (6 hours): Load Balancing & Auto Scaling\n• 2 hours: Learn ELB types and features\n• 2 hours: Practice application load balancer setup\n• 1 hour: Master auto scaling groups\n• 1 hour: Understand scaling policies\n• Exercise: Create highly available application architecture",
                            "Day 7 (6 hours): Monitoring & Management\n• 2 hours: Learn CloudWatch metrics and alarms\n• 2 hours: Practice AWS CLI installation and usage\n• 1 hour: Master resource tagging\n• 1 hour: Understand AWS organizations\n• Weekly Project: Deploy complete three-tier web application on AWS"
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
                        title: "Week 1-2: Blockchain Fundamentals & Cryptography",
                        tasks: [
                            "Day 1 (6 hours): Blockchain Basics & History\n• 2 hours: Learn blockchain architecture and components\n• 2 hours: Practice understanding distributed ledger technology\n• 1 hour: Master blockchain use cases and applications\n• 1 hour: Understand cryptocurrency evolution\n• Exercise: Research and present different blockchain platforms",
                            "Day 2 (6 hours): Cryptography Fundamentals\n• 2 hours: Learn hash functions and properties\n• 2 hours: Practice SHA-256 and other hash algorithms\n• 1 hour: Master digital signatures\n• 1 hour: Understand public key cryptography\n• Exercise: Implement basic cryptographic functions",
                            "Day 3 (6 hours): Consensus Mechanisms\n• 2 hours: Learn Proof of Work algorithm\n• 2 hours: Practice understanding mining process\n• 1 hour: Master Proof of Stake and variations\n• 1 hour: Understand other consensus algorithms\n• Exercise: Simulate different consensus mechanisms",
                            "Day 4 (6 hours): Bitcoin & Cryptocurrency Basics\n• 2 hours: Learn Bitcoin transaction structure\n• 2 hours: Practice understanding UTXO model\n• 1 hour: Master wallet creation and management\n• 1 hour: Understand blockchain explorers\n• Exercise: Create and use Bitcoin testnet wallet",
                            "Day 5 (6 hours): Ethereum & Smart Contract Platform\n• 2 hours: Learn Ethereum architecture\n• 2 hours: Practice understanding gas and fees\n• 1 hour: Master Ethereum accounts and transactions\n• 1 hour: Understand EVM and bytecode\n• Exercise: Set up Ethereum development environment",
                            "Day 6 (6 hours): Solidity Programming Basics\n• 2 hours: Learn Solidity syntax and structure\n• 2 hours: Practice writing simple smart contracts\n• 1 hour: Master data types and variables\n• 1 hour: Understand function modifiers\n• Exercise: Create basic token contract",
                            "Day 7 (6 hours): Development Tools & Testing\n• 2 hours: Learn Remix IDE and Hardhat\n• 2 hours: Practice contract compilation and deployment\n• 1 hour: Master testing frameworks\n• 1 hour: Understand debugging techniques\n• Weekly Project: Develop and test complete smart contract application"
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
                        title: "Week 1-2: Unity Fundamentals & 3D Environment",
                        tasks: [
                            "Day 1 (6 hours): Unity Installation & Interface\n• 2 hours: Install Unity Hub and Unity Editor\n• 2 hours: Learn Unity interface and windows\n• 1 hour: Practice scene creation and navigation\n• 1 hour: Understand project organization\n• Exercise: Create first Unity project and basic scene",
                            "Day 2 (6 hours): Game Objects & Components\n• 2 hours: Learn GameObject hierarchy and parenting\n• 2 hours: Practice adding and configuring components\n• 1 hour: Master Transform component and coordinates\n• 1 hour: Understand prefabs and instances\n• Exercise: Build simple object hierarchy with components",
                            "Day 3 (6 hours): 3D Modeling & Asset Import\n• 2 hours: Learn 3D modeling basics\n• 2 hours: Practice importing 3D models\n• 1 hour: Master material creation and shaders\n• 1 hour: Understand texture mapping\n• Exercise: Create and import custom 3D models",
                            "Day 4 (6 hours): Lighting & Rendering\n• 2 hours: Learn different light types\n• 2 hours: Practice lighting setups and baking\n• 1 hour: Master post-processing effects\n• 1 hour: Understand render pipelines\n• Exercise: Create cinematic lighting for scene",
                            "Day 5 (6 hours): Physics & Collision\n• 2 hours: Learn Rigidbody component\n• 2 hours: Practice collision detection\n• 1 hour: Master physics materials\n• 1 hour: Understand trigger colliders\n• Exercise: Build physics-based interactive scene",
                            "Day 6 (6 hours): Audio & Sound Design\n• 2 hours: Learn audio source and listener\n• 2 hours: Practice importing and configuring audio\n• 1 hour: Master audio mixing and effects\n• 1 hour: Understand spatial audio\n• Exercise: Create immersive audio environment",
                            "Day 7 (6 hours): Basic Game Mechanics\n• 2 hours: Learn player input handling\n• 2 hours: Practice simple movement scripts\n• 1 hour: Master camera follow systems\n• 1 hour: Understand basic game loops\n• Weekly Project: Create complete simple 3D game with mechanics"
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
                            "Day 1 (6 hours): AI Introduction & Problem Solving\n• 2 hours: Learn AI history and applications\n• 2 hours: Practice problem formulation\n• 1 hour: Master state space representation\n• 1 hour: Understand intelligent agents\n• Exercise: Formulate real-world problems for AI solution",
                            "Day 2 (6 hours): Uninformed Search Strategies\n• 2 hours: Learn breadth-first search algorithm\n• 2 hours: Practice depth-first search implementation\n• 1 hour: Master uniform-cost search\n• 1 hour: Understand search completeness and optimality\n• Exercise: Implement search algorithms for maze solving",
                            "Day 3 (6 hours): Informed Search Strategies\n• 2 hours: Learn greedy best-first search\n• 2 hours: Practice A* search algorithm\n• 1 hour: Master heuristic function design\n• 1 hour: Understand admissible heuristics\n• Exercise: Create A* implementation for pathfinding",
                            "Day 4 (6 hours): Local Search & Optimization\n• 2 hours: Learn hill-climbing algorithm\n• 2 hours: Practice simulated annealing\n• 1 hour: Master genetic algorithms\n• 1 hour: Understand local beam search\n• Exercise: Solve optimization problems with local search",
                            "Day 5 (6 hours): Adversarial Search - Minimax\n• 2 hours: Learn game theory basics\n• 2 hours: Practice minimax algorithm\n• 1 hour: Master alpha-beta pruning\n• 1 hour: Understand evaluation functions\n• Exercise: Implement AI for tic-tac-toe game",
                            "Day 6 (6 hours): Constraint Satisfaction Problems\n• 2 hours: Learn CSP formulation\n• 2 hours: Practice backtracking search\n• 1 hour: Master constraint propagation\n• 1 hour: Understand forward checking\n• Exercise: Solve Sudoku with CSP techniques",
                            "Day 7 (6 hours): Knowledge Representation\n• 2 hours: Learn propositional logic\n• 2 hours: Practice first-order logic\n• 1 hour: Master inference rules\n• 1 hour: Understand resolution theorem proving\n• Weekly Project: Build complete AI system for game playing"
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
                            "Day 1 (6 hours): Linux Fundamentals\n• 2 hours: Learn Linux file system hierarchy\n• 2 hours: Practice basic command line operations\n• 1 hour: Master file permissions and ownership\n• 1 hour: Understand process management\n• Exercise: Perform system administration tasks via command line",
                            "Day 2 (6 hours): Shell Scripting Basics\n• 2 hours: Learn bash scripting syntax\n• 2 hours: Practice variables and control structures\n• 1 hour: Master functions and parameter passing\n• 1 hour: Understand exit codes and error handling\n• Exercise: Create system administration scripts",
                            "Day 3 (6 hours): Advanced Shell Scripting\n• 2 hours: Learn text processing tools\n• 2 hours: Practice regular expressions\n• 1 hour: Master awk and sed usage\n• 1 hour: Understand process substitution\n• Exercise: Build data processing pipelines",
                            "Day 4 (6 hours): Configuration Management - Ansible\n• 2 hours: Learn Ansible architecture\n• 2 hours: Practice playbook creation\n• 1 hour: Master inventory management\n• 1 hour: Understand roles and modules\n• Exercise: Automate server configuration with Ansible",
                            "Day 5 (6 hours): Infrastructure as Code\n• 2 hours: Learn Terraform basics\n• 2 hours: Practice resource definition\n• 1 hour: Master state management\n• 1 hour: Understand provisioning workflows\n• Exercise: Create infrastructure with Terraform",
                            "Day 6 (6 hours): Package Management & Deployment\n• 2 hours: Learn package managers (apt, yum)\n• 2 hours: Practice application deployment\n• 1 hour: Master dependency management\n• 1 hour: Understand version control integration\n• Exercise: Create automated deployment scripts",
                            "Day 7 (6 hours): Monitoring & Logging\n• 2 hours: Learn system monitoring tools\n• 2 hours: Practice log management\n• 1 hour: Master alert configuration\n• 1 hour: Understand performance metrics\n• Weekly Project: Automate complete infrastructure provisioning and configuration"
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
                            "Day 1 (6 hours): SOLID Principles\n• 2 hours: Learn Single Responsibility Principle\n• 2 hours: Practice Open/Closed Principle\n• 1 hour: Master Liskov Substitution Principle\n• 1 hour: Understand Interface Segregation and Dependency Inversion\n• Exercise: Refactor code to follow SOLID principles",
                            "Day 2 (6 hours): Creational Design Patterns\n• 2 hours: Learn Singleton pattern\n• 2 hours: Practice Factory Method pattern\n• 1 hour: Master Abstract Factory pattern\n• 1 hour: Understand Builder and Prototype patterns\n• Exercise: Implement creational patterns in real scenarios",
                            "Day 3 (6 hours): Structural Design Patterns\n• 2 hours: Learn Adapter pattern\n• 2 hours: Practice Decorator pattern\n• 1 hour: Master Facade pattern\n• 1 hour: Understand Composite and Proxy patterns\n• Exercise: Apply structural patterns to existing codebase",
                            "Day 4 (6 hours): Behavioral Design Patterns\n• 2 hours: Learn Observer pattern\n• 2 hours: Practice Strategy pattern\n• 1 hour: Master Command pattern\n• 1 hour: Understand State and Template Method patterns\n• Exercise: Implement behavioral patterns for application logic",
                            "Day 5 (6 hours): Architectural Patterns\n• 2 hours: Learn MVC pattern\n• 2 hours: Practice MVP and MVVM patterns\n• 1 hour: Master layered architecture\n• 1 hour: Understand microservices architecture\n• Exercise: Design system architecture using patterns",
                            "Day 6 (6 hours): Anti-patterns & Code Smells\n• 2 hours: Learn common anti-patterns\n• 2 hours: Practice identifying code smells\n• 1 hour: Master refactoring techniques\n• 1 hour: Understand technical debt management\n• Exercise: Refactor problematic code examples",
                            "Day 7 (6 hours): Design Pattern Implementation\n• 2 hours: Learn pattern combinations\n• 2 hours: Practice pattern selection criteria\n• 1 hour: Master pattern documentation\n• 1 hour: Understand pattern evolution\n• Weekly Project: Design and implement complete application using multiple design patterns"
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
                        title: "Week 1-2: Product Discovery & Market Research",
                        tasks: [
                            "Day 1 (6 hours): Product Management Fundamentals\n• 2 hours: Learn product manager roles and responsibilities\n• 2 hours: Practice product lifecycle understanding\n• 1 hour: Master stakeholder management basics\n• 1 hour: Understand product metrics and KPIs\n• Exercise: Create product manager role description",
                            "Day 2 (6 hours): Market Research Techniques\n• 2 hours: Learn quantitative research methods\n• 2 hours: Practice qualitative research approaches\n• 1 hour: Master competitive analysis frameworks\n• 1 hour: Understand market sizing techniques\n• Exercise: Conduct market analysis for a product idea",
                            "Day 3 (6 hours): User Research & Personas\n• 2 hours: Learn user interview techniques\n• 2 hours: Practice survey design and analysis\n• 1 hour: Master persona creation\n• 1 hour: Understand empathy mapping\n• Exercise: Create detailed user personas",
                            "Day 4 (6 hours): Problem Definition & Opportunity Assessment\n• 2 hours: Learn problem statement formulation\n• 2 hours: Practice opportunity sizing\n• 1 hour: Master hypothesis creation\n• 1 hour: Understand risk assessment\n• Exercise: Define product opportunity with data",
                            "Day 5 (6 hours): Product Strategy & Vision\n• 2 hours: Learn vision statement creation\n• 2 hours: Practice strategy development\n• 1 hour: Master goal setting frameworks\n• 1 hour: Understand strategic alignment\n• Exercise: Create product vision and strategy document",
                            "Day 6 (6 hours): Roadmap Planning\n• 2 hours: Learn roadmap types and formats\n• 2 hours: Practice feature prioritization\n• 1 hour: Master timeline estimation\n• 1 hour: Understand dependency management\n• Exercise: Create detailed product roadmap",
                            "Day 7 (6 hours): Business Case & Metrics\n• 2 hours: Learn business case development\n• 2 hours: Practice metric definition and tracking\n• 1 hour: Master success criteria definition\n• 1 hour: Understand ROI calculation\n• Weekly Project: Create complete product proposal with business case"
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
                        title: "Week 1-2: Writing Fundamentals & Style Development",
                        tasks: [
                            "Day 1 (6 hours): Grammar & Style Mastery\n• 2 hours: Learn advanced grammar rules\n• 2 hours: Practice style guide implementation\n• 1 hour: Master punctuation and mechanics\n• 1 hour: Understand voice and tone development\n• Exercise: Edit and improve existing content",
                            "Day 2 (6 hours): Writing for Different Audiences\n• 2 hours: Learn audience analysis techniques\n• 2 hours: Practice adapting tone for different readers\n• 1 hour: Master B2B vs B2C writing\n• 1 hour: Understand cultural considerations\n• Exercise: Rewrite content for different audience segments",
                            "Day 3 (6 hours): Storytelling & Narrative Techniques\n• 2 hours: Learn story structure and arc\n• 2 hours: Practice character development\n• 1 hour: Master emotional engagement\n• 1 hour: Understand pacing and suspense\n• Exercise: Create compelling brand stories",
                            "Day 4 (6 hours): Headline & Hook Writing\n• 2 hours: Learn headline formulas and patterns\n• 2 hours: Practice hook creation techniques\n• 1 hour: Master curiosity gaps\n• 1 hour: Understand A/B testing for headlines\n• Exercise: Write 50 different headlines for one topic",
                            "Day 5 (6 hours): Research & Fact-Checking\n• 2 hours: Learn research methodology\n• 2 hours: Practice source evaluation\n• 1 hour: Master fact-checking techniques\n• 1 hour: Understand citation styles\n• Exercise: Research and fact-check existing articles",
                            "Day 6 (6 hours): Editing & Proofreading\n• 2 hours: Learn structural editing\n• 2 hours: Practice line editing techniques\n• 1 hour: Master proofreading strategies\n• 1 hour: Understand editing tools and software\n• Exercise: Complete editing pass on long-form content",
                            "Day 7 (6 hours): Writing Portfolio Development\n• 2 hours: Learn portfolio organization\n• 2 hours: Practice sample creation\n• 1 hour: Master personal branding\n• 1 hour: Understand client presentation\n• Weekly Project: Create comprehensive writing portfolio with varied samples"
                        ]
                    }
                ]
            }
        ]
    }
};
