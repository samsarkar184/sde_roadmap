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

const STORAGE_KEY = "software-roadmap-progress-v2"; // keyed per subtopic: stage-topic-subtopic
let completed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let currentFilter = "all";
let query = "";
const openStages = new Set();
const openTopics = new Set();

const roadmapEl = document.getElementById("roadmap");

/* Parse SUBTOPICS (subtopics.js) into topic.groups = [{name, items:[{label, idx}]}] */
roadmap.forEach(stage => stage.topics.forEach(topic => {
  const raw = (typeof SUBTOPICS !== "undefined" && SUBTOPICS[stage.title] && SUBTOPICS[stage.title][topic[0]]) || [];
  let n = 0;
  topic.groups = raw.map(g => {
    const [name, list] = g.includes("|") ? g.split("|") : ["", g];
    return { name, items: list.split(",").map(s => ({ label: s.trim(), idx: n++ })) };
  });
  if (!n) { topic.groups = [{ name: "", items: [{ label: topic[0], idx: 0 }] }]; n = 1; }
  topic.count = n;
}));

const subKey = (si, ti, idx) => `${si}-${ti}-${idx}`;
const topicDoneCount = (si, ti) =>
  Array.from({ length: roadmap[si].topics[ti].count }, (_, i) => completed[subKey(si, ti, i)]).filter(Boolean).length;
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));

function matchInfo(topic, stage) {
  const q = query.trim().toLowerCase();
  const topicText = [stage.title, stage.description, ...topic.slice(0, 2), ...topic[2]].join(" ").toLowerCase();
  const filterOK = currentFilter === "all" || stage.category === currentFilter || topic[2].includes(currentFilter);
  if (!filterOK) return null;
  if (!q) return { all: true };
  if (topicText.includes(q)) return { all: true };
  const hit = topic.groups.some(g => g.name.toLowerCase().includes(q) || g.items.some(i => i.label.toLowerCase().includes(q)));
  return hit ? { all: false } : null;
}

function render() {
  roadmapEl.innerHTML = "";
  const q = query.trim().toLowerCase();
  let visibleStages = 0;

  roadmap.forEach((stage, si) => {
    const visible = stage.topics
      .map((topic, ti) => ({ topic, ti, info: matchInfo(topic, stage) }))
      .filter(x => x.info);
    if (!visible.length) return;
    visibleStages++;

    const total = stage.topics.reduce((s, t) => s + t.count, 0);
    const done = stage.topics.reduce((s, _, ti) => s + topicDoneCount(si, ti), 0);
    const pct = Math.round((done / total) * 100);
    const stageOpen = openStages.has(si) || q;

    const article = document.createElement("article");
    article.className = "stage" + (stageOpen ? " open" : "");
    article.id = `stage-${si}`;
    article.innerHTML = `
      <div class="stage-marker">${String(si + 1).padStart(2, "0")}</div>
      <div class="stage-header" data-stage="${si}">
        <div class="stage-title">
          <h3>${stage.title}</h3>
          <p>${stage.description}</p>
        </div>
        <div class="stage-progress">
          <span>${done}/${total} subtopics</span>
          <div class="mini-progress"><div style="width:${pct}%"></div></div>
        </div>
        <div class="chevron">⌄</div>
      </div>
      <div class="stage-body">
        <div class="topics">
          ${visible.map(({ topic, ti, info }) => {
            const d = topicDoneCount(si, ti);
            const full = d === topic.count;
            const open = openTopics.has(`${si}-${ti}`) || q;
            const groups = topic.groups.map(g => {
              const items = g.items.filter(i => info.all || i.label.toLowerCase().includes(q) || g.name.toLowerCase().includes(q));
              if (!items.length) return "";
              return `<div class="sub-group">
                ${g.name ? `<h4>${g.name}</h4>` : ""}
                <div class="sub-list">
                  ${items.map(i => `<label class="sub ${completed[subKey(si, ti, i.idx)] ? "done" : ""}">
                    <input type="checkbox" class="sub-cb" data-si="${si}" data-ti="${ti}" data-idx="${i.idx}" ${completed[subKey(si, ti, i.idx)] ? "checked" : ""}>
                    <span>${i.label}</span></label>`).join("")}
                </div>
              </div>`;
            }).join("");
            return `
              <div class="topic ${full ? "done" : ""} ${open ? "open" : ""}" data-topic="${si}-${ti}">
                <div class="topic-head">
                  <input type="checkbox" class="topic-cb" data-si="${si}" data-ti="${ti}" ${full ? "checked" : ""} ${d > 0 && !full ? "data-partial" : ""} title="Mark all subtopics">
                  <div class="topic-content">
                    <div class="topic-name">${topic[0]}</div>
                    <div class="topic-desc">${topic[1]}</div>
                    <div class="tags">${topic[2].map(t => `<span class="tag">${t}</span>`).join("")}</div>
                  </div>
                  <span class="topic-count">${d}/${topic.count}</span>
                  <span class="topic-chevron">⌄</span>
                </div>
                <div class="topic-body">${groups}</div>
              </div>`;
          }).join("")}
        </div>
        <div class="project-box">
          <strong>BUILD THIS</strong>
          <p>${stage.project}</p>
        </div>
      </div>
    `;
    roadmapEl.appendChild(article);
  });

  roadmapEl.querySelectorAll("input[data-partial]").forEach(cb => (cb.indeterminate = true));

  if (!visibleStages) {
    roadmapEl.innerHTML = `<div class="empty">No roadmap topics match your search or filter.</div>`;
  }
  updateProgress();
}

/* Event delegation: survives re-renders and keeps open/closed state */
roadmapEl.addEventListener("click", e => {
  if (e.target.closest("input")) return;
  const head = e.target.closest(".topic-head");
  if (head) {
    const key = head.parentElement.dataset.topic;
    head.parentElement.classList.toggle("open");
    openTopics.has(key) ? openTopics.delete(key) : openTopics.add(key);
    return;
  }
  const sh = e.target.closest(".stage-header");
  if (sh) {
    const si = Number(sh.dataset.stage);
    sh.parentElement.classList.toggle("open");
    openStages.has(si) ? openStages.delete(si) : openStages.add(si);
  }
});

roadmapEl.addEventListener("change", e => {
  const cb = e.target;
  const si = Number(cb.dataset.si), ti = Number(cb.dataset.ti);
  if (cb.classList.contains("sub-cb")) {
    const key = subKey(si, ti, cb.dataset.idx);
    cb.checked ? (completed[key] = true) : delete completed[key];
  } else if (cb.classList.contains("topic-cb")) {
    for (let i = 0; i < roadmap[si].topics[ti].count; i++) {
      const key = subKey(si, ti, i);
      cb.checked ? (completed[key] = true) : delete completed[key];
    }
  } else return;
  save();
  render();
});

function updateProgress() {
  let total = 0, done = 0, next = null;
  roadmap.forEach((stage, si) => stage.topics.forEach((topic, ti) => {
    total += topic.count;
    for (let i = 0; i < topic.count; i++) {
      if (completed[subKey(si, ti, i)]) done++;
      else if (!next) next = { si, ti, stage, topic, sub: topic.groups.flatMap(g => g.items).find(x => x.idx === i) };
    }
  }));
  const pct = total ? Math.round(done / total * 100) : 0;

  document.getElementById("progressPercent").textContent = `${pct}%`;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent = `${done} of ${total} subtopics completed`;

  const title = document.getElementById("nextTitle");
  const desc = document.getElementById("nextDescription");
  const btn = document.getElementById("nextBtn");

  if (next) {
    title.textContent = `${next.topic[0]}: ${next.sub.label}`;
    desc.textContent = `${next.stage.title} · ${next.topic[1]}`;
    btn.textContent = "Open";
    btn.onclick = () => {
      openStages.add(next.si);
      openTopics.add(`${next.si}-${next.ti}`);
      render();
      const el = document.querySelector(`[data-topic="${next.si}-${next.ti}"]`) || document.getElementById(`stage-${next.si}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  } else {
    title.textContent = "Roadmap complete 🎉";
    desc.textContent = "You have checked every subtopic. Keep building and revisiting advanced areas.";
    btn.textContent = "Back to top";
    btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
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
