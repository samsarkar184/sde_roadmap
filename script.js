const roadmap = [
  {
    title: "Programming Foundations",
    category: "core",
    description: "Build the fundamentals that every software developer needs.",
    project: "Build a command-line expense tracker or student management program.",
    topics: [
      ["Programming concepts", "Variables, data types, operators, conditions and loops.", ["core"]],
      ["Functions", "Parameters, return values, scope, recursion and modular code.", ["core"]],
      ["Data structures", "Arrays, strings, objects, sets, maps, stacks and queues.", ["core"]],
      ["Algorithms", "Searching, sorting, complexity and problem-solving patterns.", ["core"]],
      ["OOP", "Classes, objects, inheritance, composition, abstraction and polymorphism.", ["core"]],
      ["Error handling", "Exceptions, validation and defensive programming.", ["core"]],
      ["Debugging", "Breakpoints, stack traces, logging and systematic debugging.", ["core"]],
      ["Problem solving", "Practice coding problems and learn to translate requirements into code.", ["core"]]
    ]
  },
  {
    title: "Developer Tools & Git",
    category: "core",
    description: "Learn the tools used in almost every professional development team.",
    project: "Put a small project on GitHub using branches, commits, pull requests and a README.",
    topics: [
      ["VS Code", "Extensions, terminal, debugging, formatting and project navigation.", ["tools"]],
      ["Command line", "Files, folders, processes, pipes, permissions and shell commands.", ["linux"]],
      ["Git", "Init, add, commit, status, log, diff, reset and restore.", ["git"]],
      ["GitHub", "Repositories, issues, pull requests, releases and collaboration.", ["git"]],
      ["Branching", "Feature branches, merge, rebase and conflict resolution.", ["git"]],
      ["Git workflows", "Pull requests, code review, conventional commits and .gitignore.", ["git"]]
    ]
  },
  {
    title: "Web Fundamentals",
    category: "web",
    description: "Understand how the web works before building applications on it.",
    project: "Build a multi-page responsive website and inspect its network requests in DevTools.",
    topics: [
      ["HTML", "Semantic HTML, forms, accessibility and document structure.", ["frontend"]],
      ["CSS", "Selectors, box model, Flexbox, Grid, responsive design and animations.", ["frontend"]],
      ["JavaScript", "DOM, events, modules, arrays, objects, functions and modern syntax.", ["javascript"]],
      ["Browser DevTools", "Elements, Console, Network, Storage, Performance and Sources.", ["tools"]],
      ["HTTP/HTTPS", "Requests, responses, methods, headers, status codes and TLS basics.", ["networking"]],
      ["JSON", "Data interchange format used heavily by web APIs.", ["web"]]
    ]
  },
  {
    title: "Modern Frontend Development",
    category: "web",
    description: "Move from static pages to component-based web applications.",
    project: "Build a responsive dashboard that consumes a public API.",
    topics: [
      ["TypeScript", "Types, interfaces, generics, unions, narrowing and tsconfig.", ["typescript"]],
      ["React", "Components, props, state, hooks, events and conditional rendering.", ["react"]],
      ["React Router", "Client-side routing and nested layouts.", ["react"]],
      ["State management", "Context, reducers and when to use external state libraries.", ["react"]],
      ["Forms & validation", "Controlled inputs, validation and user feedback.", ["frontend"]],
      ["API integration", "fetch, async/await, loading states, errors and caching.", ["api"]],
      ["Accessibility", "Semantic controls, keyboard navigation and accessible forms.", ["frontend"]],
      ["Build tools", "npm, Vite, environment variables and production builds.", ["tools"]]
    ]
  },
  {
    title: "Backend Development",
    category: "backend",
    description: "Build server-side applications, APIs and business logic.",
    project: "Build a production-style REST API for users, products and orders.",
    topics: [
      ["Node.js", "Runtime, modules, npm, event loop, streams and environment variables.", ["node"]],
      ["Express.js", "Routes, middleware, controllers and API structure.", ["express"]],
      ["REST APIs", "Resource design, CRUD, status codes, pagination and filtering.", ["api"]],
      ["Validation", "Validate request bodies, query parameters and route parameters.", ["backend"]],
      ["Error handling", "Centralized errors, logging and consistent API responses.", ["backend"]],
      ["Architecture", "Routes → controllers → services → repositories.", ["architecture"]],
      ["API documentation", "OpenAPI/Swagger and clear endpoint documentation.", ["api"]]
    ]
  },
  {
    title: "Databases & Data",
    category: "backend",
    description: "Learn how applications store, query and protect data.",
    project: "Design a PostgreSQL database for an e-commerce or marketplace application.",
    topics: [
      ["SQL", "SELECT, INSERT, UPDATE, DELETE, WHERE, JOIN, GROUP BY and aggregates.", ["sql"]],
      ["PostgreSQL", "Tables, constraints, relationships, views and practical database design.", ["postgresql"]],
      ["Database design", "Primary keys, foreign keys, normalization and relationships.", ["sql"]],
      ["Indexes", "Why indexes matter and how they affect query performance.", ["database"]],
      ["Transactions", "Atomicity, consistency, isolation and durability.", ["database"]],
      ["ORM", "Use Prisma or Drizzle to work with databases safely.", ["backend"]],
      ["MongoDB basics", "Documents, collections, queries and when NoSQL is useful.", ["nosql"]]
    ]
  },
  {
    title: "Authentication & Security",
    category: "backend",
    description: "Protect users, APIs and application data.",
    project: "Add registration, login, roles and protected routes to your API.",
    topics: [
      ["Password hashing", "Never store passwords directly; understand hashing and salts.", ["security"]],
      ["Sessions & cookies", "Understand browser sessions, cookies and secure cookie flags.", ["security"]],
      ["JWT", "Access tokens, refresh tokens and token-based authentication.", ["security"]],
      ["Authorization", "Roles, permissions and resource-level access control.", ["security"]],
      ["CORS & CSRF", "Understand browser security boundaries and common attacks.", ["security"]],
      ["XSS & injection", "Input validation, output encoding and parameterized queries.", ["security"]],
      ["Rate limiting", "Protect endpoints from abuse and excessive requests.", ["security"]],
      ["Secrets", "Environment variables, secret managers and safe configuration.", ["security"]]
    ]
  },
  {
    title: "Testing & Code Quality",
    category: "core",
    description: "Learn to write software that remains reliable as it grows.",
    project: "Add unit and integration tests to your backend and frontend.",
    topics: [
      ["Unit testing", "Test individual functions and components.", ["testing"]],
      ["Integration testing", "Test multiple modules working together.", ["testing"]],
      ["API testing", "Test endpoints, authentication and error cases.", ["testing"]],
      ["Jest / Vitest", "Modern JavaScript testing frameworks.", ["testing"]],
      ["Supertest", "Test Node/Express HTTP endpoints.", ["testing"]],
      ["Linting", "ESLint rules that catch common code problems.", ["quality"]],
      ["Formatting", "Prettier and consistent code style.", ["quality"]],
      ["Code review", "Readability, maintainability and constructive review.", ["quality"]]
    ]
  },
  {
    title: "Linux & Server Fundamentals",
    category: "devops",
    description: "Understand the environment where backend software commonly runs.",
    project: "Deploy your API to a Linux server and manage it from the terminal.",
    topics: [
      ["Linux filesystem", "Directories, paths, permissions and common commands.", ["linux"]],
      ["Processes", "ps, top, signals, background processes and services.", ["linux"]],
      ["Networking basics", "IP, ports, DNS, TCP/UDP and sockets.", ["networking"]],
      ["SSH", "Secure remote access and key-based authentication.", ["linux"]],
      ["Environment configuration", "Shell variables, config files and process environments.", ["linux"]],
      ["Nginx", "Reverse proxy, static files and basic load balancing.", ["server"]]
    ]
  },
  {
    title: "Docker & Containerization",
    category: "devops",
    description: "Package applications consistently across development and deployment environments.",
    project: "Containerize your frontend, API and PostgreSQL database with Docker Compose.",
    topics: [
      ["Docker concepts", "Images, containers, registries and container lifecycle.", ["docker"]],
      ["Dockerfile", "Build reproducible application images.", ["docker"]],
      ["Volumes", "Persist database and application data.", ["docker"]],
      ["Networks", "Allow containers to communicate securely.", ["docker"]],
      ["Docker Compose", "Run multi-container applications locally.", ["docker"]],
      ["Container security", "Minimal images, non-root users and secret handling.", ["security"]]
    ]
  },
  {
    title: "CI/CD & Deployment",
    category: "devops",
    description: "Automate testing, builds and deployment.",
    project: "Create a GitHub Actions pipeline that tests and deploys your application.",
    topics: [
      ["CI/CD concepts", "Continuous integration, delivery and deployment.", ["devops"]],
      ["GitHub Actions", "Automate tests, builds and deployments.", ["ci-cd"]],
      ["Build pipelines", "Install, lint, test, build and package applications.", ["ci-cd"]],
      ["Cloud deployment", "Deploy an application using a beginner-friendly cloud platform.", ["cloud"]],
      ["Domains & DNS", "Connect a domain to your deployed application.", ["web"]],
      ["HTTPS", "Certificates, TLS and secure production traffic.", ["security"]]
    ]
  },
  {
    title: "Caching, Queues & Real-Time Systems",
    category: "advanced",
    description: "Learn common building blocks for higher-scale applications.",
    project: "Add Redis caching and a background job queue to a backend application.",
    topics: [
      ["Redis", "In-memory data store for caching and fast operations.", ["redis"]],
      ["Caching", "Cache-aside patterns, TTLs and invalidation.", ["backend"]],
      ["WebSockets", "Real-time two-way communication.", ["realtime"]],
      ["Message queues", "Decouple slow or asynchronous work from API requests.", ["architecture"]],
      ["RabbitMQ / Kafka", "Learn the role of brokers and event streams.", ["distributed"]],
      ["Background jobs", "Emails, notifications, reports and scheduled processing.", ["backend"]]
    ]
  },
  {
    title: "System Design",
    category: "advanced",
    description: "Learn how to design reliable and scalable software systems.",
    project: "Design a URL shortener, chat system or large-scale e-commerce backend.",
    topics: [
      ["Scalability", "Vertical vs horizontal scaling and bottlenecks.", ["system-design"]],
      ["Load balancing", "Distribute traffic across application servers.", ["system-design"]],
      ["Database scaling", "Replication, partitioning and read/write patterns.", ["database"]],
      ["CAP & consistency", "Understand distributed-system trade-offs.", ["distributed"]],
      ["Microservices", "Service boundaries, communication and trade-offs.", ["architecture"]],
      ["Event-driven architecture", "Events, consumers and asynchronous workflows.", ["distributed"]],
      ["Observability", "Logs, metrics, traces and health checks.", ["devops"]]
    ]
  },
  {
    title: "Cloud & Professional Engineering",
    category: "advanced",
    description: "Develop the skills expected in professional engineering teams.",
    project: "Deploy a monitored full-stack application with CI/CD and production documentation.",
    topics: [
      ["AWS / Azure / GCP", "Learn core compute, storage, networking and managed database services.", ["cloud"]],
      ["Infrastructure basics", "Understand servers, networking, security groups and IAM.", ["cloud"]],
      ["Monitoring", "Application health, metrics, alerts and dashboards.", ["devops"]],
      ["Infrastructure as Code", "Terraform basics and reproducible infrastructure.", ["cloud"]],
      ["Kubernetes", "Containers at scale, deployments, services and configuration.", ["advanced"]],
      ["System design interviews", "Requirements, APIs, data models, scaling and trade-offs.", ["career"]],
      ["Engineering practices", "Documentation, estimation, tickets, code reviews and teamwork.", ["career"]]
    ]
  },
  {
    title: "Career & Portfolio",
    category: "core",
    description: "Turn your technical knowledge into evidence that employers can evaluate.",
    project: "Build 2–3 polished projects, publish them and prepare your resume/GitHub/LinkedIn.",
    topics: [
      ["Portfolio projects", "Build complete applications instead of tutorial clones.", ["career"]],
      ["GitHub profile", "Clean repositories, READMEs, screenshots and meaningful commits.", ["career"]],
      ["Resume", "Highlight skills, measurable project outcomes and relevant experience.", ["career"]],
      ["Technical interviews", "DSA, CS fundamentals, projects, SQL and backend questions.", ["career"]],
      ["DSA practice", "Arrays, strings, hashing, trees, graphs, recursion and dynamic programming.", ["career"]],
      ["Communication", "Explain technical decisions clearly and concisely.", ["career"]]
    ]
  }
];

const STORAGE_KEY = "software-roadmap-progress-v1";
let completed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let currentFilter = "all";
let query = "";

const roadmapEl = document.getElementById("roadmap");

function topicKey(stageIndex, topicIndex) {
  return `${stageIndex}-${topicIndex}`;
}

function matches(topic, stage) {
  const text = [stage.title, stage.description, ...topic].join(" ").toLowerCase();
  const searchOK = !query || text.includes(query.toLowerCase());
  const filterOK =
    currentFilter === "all" ||
    stage.category === currentFilter ||
    topic[2].some(t => t === currentFilter);
  return searchOK && filterOK;
}

function render() {
  roadmapEl.innerHTML = "";
  let visibleStages = 0;

  roadmap.forEach((stage, si) => {
    const visibleTopics = stage.topics
      .map((topic, ti) => ({topic, ti}))
      .filter(x => matches(x.topic, stage));

    if (!visibleTopics.length) return;
    visibleStages++;

    const stageDone = stage.topics.filter((_, ti) => completed[topicKey(si, ti)]).length;
    const pct = Math.round((stageDone / stage.topics.length) * 100);

    const article = document.createElement("article");
    article.className = "stage";
    article.id = `stage-${si}`;

    article.innerHTML = `
      <div class="stage-marker">${String(si + 1).padStart(2, "0")}</div>
      <div class="stage-header">
        <div class="stage-title">
          <h3>${stage.title}</h3>
          <p>${stage.description}</p>
        </div>
        <div class="stage-progress">
          <span>${stageDone}/${stage.topics.length} complete</span>
          <div class="mini-progress"><div style="width:${pct}%"></div></div>
        </div>
        <div class="chevron">⌄</div>
      </div>
      <div class="stage-body">
        <div class="topics">
          ${visibleTopics.map(({topic, ti}) => `
            <label class="topic ${completed[topicKey(si, ti)] ? "done" : ""}">
              <input type="checkbox" data-si="${si}" data-ti="${ti}" ${completed[topicKey(si, ti)] ? "checked" : ""}>
              <div class="topic-content">
                <div class="topic-name">${topic[0]}</div>
                <div class="topic-desc">${topic[1]}</div>
                <div class="tags">${topic[2].map(t => `<span class="tag">${t}</span>`).join("")}</div>
              </div>
            </label>
          `).join("")}
        </div>
        <div class="project-box">
          <strong>BUILD THIS</strong>
          <p>${stage.project}</p>
        </div>
      </div>
    `;

    article.querySelector(".stage-header").addEventListener("click", () => {
      article.classList.toggle("open");
    });

    article.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.addEventListener("change", e => {
        const key = topicKey(e.target.dataset.si, e.target.dataset.ti);
        completed[key] = e.target.checked;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
        render();
      });
    });

    roadmapEl.appendChild(article);
  });

  if (!visibleStages) {
    roadmapEl.innerHTML = `<div class="empty">No roadmap topics match your search or filter.</div>`;
  }

  updateProgress();
}

function updateProgress() {
  const total = roadmap.reduce((sum, s) => sum + s.topics.length, 0);
  const done = Object.values(completed).filter(Boolean).length;
  const pct = total ? Math.round(done / total * 100) : 0;

  document.getElementById("progressPercent").textContent = `${pct}%`;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent = `${done} of ${total} topics completed`;

  let next = null;
  for (let si = 0; si < roadmap.length && !next; si++) {
    for (let ti = 0; ti < roadmap[si].topics.length; ti++) {
      if (!completed[topicKey(si, ti)]) {
        next = {si, ti, stage: roadmap[si], topic: roadmap[si].topics[ti]};
        break;
      }
    }
  }

  const title = document.getElementById("nextTitle");
  const desc = document.getElementById("nextDescription");
  const btn = document.getElementById("nextBtn");

  if (next) {
    title.textContent = next.topic[0];
    desc.textContent = `${next.stage.title} · ${next.topic[1]}`;
    btn.onclick = () => {
      const stageEl = document.getElementById(`stage-${next.si}`);
      if (stageEl) {
        stageEl.classList.add("open");
        stageEl.scrollIntoView({behavior: "smooth", block: "center"});
      }
    };
  } else {
    title.textContent = "Roadmap complete 🎉";
    desc.textContent = "You have checked every topic. Keep building and revisiting advanced areas.";
    btn.textContent = "Back to top";
    btn.onclick = () => window.scrollTo({top: 0, behavior: "smooth"});
  }
}

document.getElementById("searchInput").addEventListener("input", e => {
  query = e.target.value;
  render();
});

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("Reset all roadmap progress?")) {
    completed = {};
    localStorage.removeItem(STORAGE_KEY);
    render();
  }
});

render();
