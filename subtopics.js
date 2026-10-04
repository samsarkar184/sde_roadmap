/* Detailed subtopics for every topic.
   Format: "Group name|item, item, item"  (a plain string without "|" = ungrouped items).
   Items are separated by commas, so avoid commas inside an item. */
const SUBTOPICS = {
"Programming Foundations": {
"Programming concepts": ["Basics|Variables,Constants,Data types,Type conversion,Operators,Expressions,Comments,Input/output","Control flow|if/else,switch,for loops,while loops,break/continue,Nested loops","Thinking|Pseudocode,Flowcharts,Reading error messages"],
"Functions": ["Basics|Defining/calling,Parameters/arguments,Return values,Default parameters","Scope|Local/global scope,Closures,Pure functions,Side effects","Advanced|Recursion,Higher-order functions,Callbacks,Lambda/anonymous functions,Modules/imports"],
"Data structures": ["Linear|Arrays,Linked lists,Stacks,Queues,Deques","Hash-based|Hash maps,Sets,Hashing/collisions","Non-linear|Trees,Binary search trees,Heaps/priority queues,Graphs,Tries","Strings|String methods,Immutability,Parsing"],
"Algorithms": ["Complexity|Big-O notation,Time vs space,Best/average/worst case","Searching|Linear search,Binary search","Sorting|Bubble/selection/insertion sort,Merge sort,Quick sort,Built-in sort","Techniques|Two pointers,Sliding window,Recursion/backtracking,Greedy,Dynamic programming,BFS/DFS,Divide and conquer"],
"OOP": ["Core|Classes/objects,Constructors,Encapsulation,Abstraction,Inheritance,Polymorphism","Design|Composition vs inheritance,Interfaces,SOLID principles,Common design patterns,UML basics"],
"Error handling": ["Exceptions|try/catch/finally,Throwing errors,Custom errors,Error propagation","Defensive|Input validation,Assertions,Fail-fast,Graceful degradation"],
"Debugging": ["Tools|Breakpoints,Step through code,Watch variables,Call stack","Techniques|Reading stack traces,Logging,Rubber-duck debugging,Bisecting,Reproducing bugs,Minimal repro cases"],
"Problem solving": ["Process|Understand the problem,Break into steps,Edge cases,Dry runs,Test cases,Refactor","Practice|Easy problems,Pattern recognition,Time-boxed practice,Reviewing solutions"]
},
"Developer Tools & Git": {
"VS Code": ["Editor|Shortcuts,Command palette,Multi-cursor,Search/replace,Snippets","Workflow|Integrated terminal,Debugger,Extensions,Settings/workspaces,Format on save,Git integration"],
"Command line": ["Navigation|pwd/ls/cd,Absolute/relative paths,Hidden files","Files|mkdir/touch,cp/mv/rm,cat/less/head/tail,grep/find,Wildcards","Shell|Pipes,Redirection,Environment variables,PATH,Permissions/chmod,Processes,Aliases,Shell scripts"],
"Git": ["Basics|git init/clone,Staging area,add/commit,status/log/diff","Undoing|restore,reset,revert,commit --amend,stash","Config|User config,.gitignore,Aliases,SSH keys","History|Log formatting,blame,Tags,reflog"],
"GitHub": ["Repositories,Remotes/origin,push/pull/fetch,Forks,Issues,Pull requests,Releases,Projects boards,README files,Actions intro,Open-source contribution"],
"Branching": ["Basics|Create/switch branches,Merging,Fast-forward vs merge commits,Deleting branches","Advanced|Rebase,Interactive rebase,Conflict resolution,Cherry-pick"],
"Git workflows": ["Feature branch workflow,Gitflow,Trunk-based development,Pull request reviews,Conventional commits,Semantic versioning,Protected branches"]
},
"Web Fundamentals": {
"HTML": ["Document basics|DOCTYPE,html/head/body,Meta tags (charset/viewport),Title/favicon,Comments,Character entities,Block vs inline elements","Text content|Headings h1-h6,Paragraphs,Line breaks/hr,strong/em/b/i,blockquote/cite/q,code/pre,Lists (ul/ol/dl),abbr/mark/sub/sup/time","Links & media|Anchors/href,Absolute vs relative URLs,target/rel,Anchor (#) links,Images/alt text,figure/figcaption,Responsive images (srcset/picture),Audio/video,iframe,SVG/canvas","Semantic layout|header/nav/main,section/article/aside,footer,div/span,Landmarks/document outline","Tables|table/tr/td/th,thead/tbody/tfoot,colspan/rowspan,caption,Accessible tables","Forms|form/action/method,Input types,label/for,textarea,select/option,Checkbox/radio,Button types,fieldset/legend,datalist,Validation attributes,Autocomplete,File upload,Form submission","Accessibility & SEO|ARIA roles/attributes,Keyboard focus/tabindex,Alt text,Heading hierarchy,Meta description/Open Graph,Structured data,lang attribute","Modern HTML|details/summary,dialog,data-* attributes,Script loading (async/defer),Lazy loading,Web components basics,W3C validator"],
"CSS": ["Fundamentals|Ways to add CSS,Selectors,Specificity,Cascade/inheritance,Pseudo-classes,Pseudo-elements,Combinators,Attribute selectors,Units (px/rem/em/%/vw/vh),Colors,CSS variables,calc()/clamp()","Box model|Margin/padding/border,box-sizing,Margin collapse,Overflow,Display/visibility,Width/height/min/max","Typography|font-family/web fonts,font-size/weight,line-height,Text alignment/decoration,Letter/word spacing","Backgrounds & effects|Background images/gradients,Border radius,Box/text shadow,Opacity,Filters,Blend modes,object-fit,Cursor","Layout|Normal flow,Position (static/relative/absolute/fixed/sticky),z-index,Float/clear,Flexbox,CSS Grid,Grid areas,Gap/alignment,Multi-column","Responsive design|Mobile-first,Media queries,Breakpoints,Fluid layouts,Container queries,Responsive images/typography,Viewport meta","Animation|Transitions,Transforms,Keyframe animations,Easing,will-change/performance,prefers-reduced-motion","Modern CSS|Nesting,:has()/:is()/:where(),Cascade layers,Logical properties,Dark mode (prefers-color-scheme),Scroll snap,aspect-ratio","Tooling|BEM naming,CSS reset/normalize,Sass/SCSS,Tailwind CSS,CSS Modules,Bootstrap,Design tokens"],
"JavaScript": ["Basics|let/const/var,Primitive types,Type coercion/equality,Operators,Template literals,Conditionals,Loops,Truthy/falsy,Hoisting","Functions|Declarations/expressions,Arrow functions,Default/rest parameters,Closures,this keyword,call/apply/bind,IIFE,Callbacks","Objects & arrays|Object literals,Property access,Destructuring,Spread/rest,map/filter/reduce,find/some/every,Sorting,Object.keys/entries,Optional chaining/nullish,JSON.stringify/parse,Map/Set,Immutability","Built-ins|String methods,Regular expressions,Number/Math,Date/Intl","OOP|Prototypes,Classes,Inheritance/super,Getters/setters,Private fields,Static members","DOM|Selecting elements,Changing content/attributes/styles,Creating/removing nodes,classList,Event listeners,Event bubbling/delegation,Form/input events,dataset","Async|Event loop,Callbacks,Promises,async/await,Promise.all/allSettled,fetch API,Async error handling,AbortController,Timers","Modules & tooling|ES modules (import/export),npm packages,Strict mode,try/catch,Debugging with console","Browser APIs|localStorage/sessionStorage,Cookies,History API,URL/URLSearchParams,IntersectionObserver,Geolocation,Clipboard,Web Workers,Service workers,Canvas"],
"Browser DevTools": ["Elements|Inspect/edit DOM,Edit CSS live,Box model viewer","Console|Logging,Run JavaScript,Error inspection","Network|Requests/responses,Headers,Waterfall/timing,Throttling,Cache","Application|localStorage/cookies,Service workers,IndexedDB","Performance|Lighthouse,Performance panel,Core Web Vitals,Memory","Sources|Breakpoints,Step debugging,Device emulation"],
"HTTP/HTTPS": ["Basics|Client-server model,URLs,DNS lookup,Request/response cycle","Messages|Methods (GET/POST/PUT/PATCH/DELETE),Headers,Status codes,Body/content types,Cookies,Caching headers","Versions|HTTP/1.1 vs 2 vs 3,Keep-alive","Security|TLS/SSL,Certificates,HTTPS handshake"],
"JSON": ["Syntax|Objects/arrays,Valid data types,Common syntax errors","Usage|Parse/stringify,Validating JSON,Content-Type application/json,JSON Schema,Working with APIs"]
},
"Modern Frontend Development": {
"TypeScript": ["Basics|Primitive types,Arrays/tuples,any/unknown/never,Type inference,Annotations","Types|Interfaces,Type aliases,Union/intersection,Literal types,Enums,Optional/readonly,Narrowing,Type guards","Advanced|Generics,Utility types,Mapped/conditional types,Index signatures,keyof/typeof","Config|tsconfig.json,Strict mode,Declaration files,Modules,Typing third-party libraries"],
"React": ["Core|JSX,Components,Props,Children,Lists/keys,Conditional rendering,Events,Fragments","State & hooks|useState,useEffect,useRef,useMemo,useCallback,useContext,useReducer,Custom hooks,Rules of hooks","Patterns|Lifting state up,Controlled/uncontrolled inputs,Composition,Error boundaries,Portals,Code splitting/lazy,Suspense","Data|Fetching in effects,TanStack Query,Optimistic updates","Performance|Re-rendering,React.memo,Profiler","Frameworks|Next.js overview,SSR/SSG"],
"React Router": ["BrowserRouter setup,Routes/Route,Link/NavLink,Dynamic params,Nested routes/Outlet,useNavigate,Protected routes,Search params,Loaders/actions,404 pages,Lazy routes"],
"State management": ["Built-in|Local vs global state,Context API,useReducer","Libraries|Redux Toolkit,Zustand,Jotai,Server state vs client state","Concepts|Derived state,Normalization,Immutable updates,Devtools"],
"Forms & validation": ["Controlled inputs,Uncontrolled inputs/refs,Validation on blur/submit,React Hook Form,Zod/Yup schemas,Error messages,Disabled/loading states,File inputs,Multi-step forms"],
"API integration": ["fetch/axios,async/await,Loading/error states,HTTP error handling,Request cancellation,Caching,Pagination/infinite scroll,Debouncing,Auth headers,Env-based API URLs"],
"Accessibility": ["Semantic HTML,Keyboard navigation,Focus management,ARIA,Color contrast,Screen readers,Accessible forms,Alt text,Reduced motion,Audit tools (axe/Lighthouse),WCAG basics"],
"Build tools": ["npm/package.json,Semver/lockfile,npm scripts,Vite,Bundling/tree shaking,Env variables,Production builds,Source maps,Code splitting,Deploying static sites"]
},
"Backend Development": {
"Node.js": ["Fundamentals|What Node is (V8),Event loop,Non-blocking I/O,Running scripts/REPL,global/process objects,__dirname/import.meta","Modules|CommonJS vs ES modules,require/import,Built-in modules,npm/package.json,npx,Semantic versioning,Publishing packages","Core modules|fs/fs.promises,path,os,http/https,events/EventEmitter,url,crypto,util,child_process,worker_threads,cluster","Async|Callbacks,Promises,async/await,process.nextTick/setImmediate,Error-first callbacks,Unhandled rejections","Streams & buffers|Buffers,Readable/Writable/Transform,pipe/pipeline,File streaming,Backpressure","HTTP servers|Raw http server,Manual routing,Parsing request bodies,Serving static files","Config & tooling|process.env,dotenv,nodemon,Inspector debugging,Logging (pino/winston),Graceful shutdown,Profiling/performance"],
"Express.js": ["Setup|Create an app,Routing,Route params/query,Request/response objects,Status codes/res.json","Middleware|Built-in middleware,express.json,Custom middleware,Third-party (cors/helmet/morgan),Middleware order,Error-handling middleware","Structure|Router/modular routes,Controllers,Services,Static files,Template engines,File uploads (multer),Cookies/sessions,Async handlers,Environment config"],
"REST APIs": ["Principles|Resources/URLs,HTTP methods,Statelessness,Idempotency,Content negotiation","Design|CRUD endpoints,Status codes,Pagination,Filtering/sorting/searching,Versioning,Nested resources,Consistent error format","Beyond REST|GraphQL overview,gRPC overview,Webhooks"],
"Validation": ["Request body/query/params,Schema validation (Zod/Joi),Sanitization,Type coercion,Custom validators,Validation error responses,File upload validation"],
"Error handling": ["Operational vs programmer errors,Custom error classes,Centralized error handler,Async error handling,HTTP status mapping,Logging errors,Consistent response shape,Unhandled rejections/exceptions,404 handler"],
"Architecture": ["Layers|Routes,Controllers,Services,Repositories,DTOs","Principles|Separation of concerns,Dependency injection,Config management,Folder structure,Clean/hexagonal overview,12-factor app","Practices|Logging,Health checks,Environment separation"],
"API documentation": ["OpenAPI spec,Swagger UI,Documenting schemas,Auth in docs,Request/response examples,Postman collections,Changelog/versioning docs"]
},
"Databases & Data": {
"SQL": ["Querying|SELECT,WHERE,ORDER BY/LIMIT,DISTINCT,LIKE/IN/BETWEEN,NULL handling,Aliases","Modifying|INSERT,UPDATE,DELETE,UPSERT,Bulk operations","Joins & aggregates|INNER/LEFT/RIGHT/FULL JOIN,Self joins,GROUP BY/HAVING,COUNT/SUM/AVG/MIN/MAX","Advanced|Subqueries,CTEs,Window functions,CASE,UNION/set operations,String/date functions,EXPLAIN","DDL|CREATE/ALTER/DROP TABLE,Data types,Constraints"],
"PostgreSQL": ["Setup|Install/psql,Users/roles,Databases/schemas","Features|Data types,JSONB,Arrays,Enums,Views/materialized views,Functions/triggers,Full-text search,Extensions","Operations|Backups (pg_dump),Migrations,Connection pooling,Query plans"],
"Database design": ["Entities/attributes,Primary keys,Foreign keys,One-to-one/many/many-to-many,Normalization (1NF-3NF),Denormalization,ER diagrams,Naming conventions,Soft deletes/timestamps,Migrations"],
"Indexes": ["B-tree indexes,Composite indexes,Unique indexes,Partial indexes,Covering indexes,EXPLAIN ANALYZE,When not to index,Write overhead"],
"Transactions": ["ACID,BEGIN/COMMIT/ROLLBACK,Isolation levels,Dirty/phantom reads,Locking,Deadlocks,Optimistic vs pessimistic concurrency"],
"ORM": ["Why ORMs,Prisma/Drizzle setup,Schema definition,Migrations,CRUD,Relations,Filtering/pagination,Transactions,Raw queries,N+1 problem,Seeding"],
"MongoDB basics": ["Documents/collections,CRUD operations,Query operators,Indexes,Aggregation pipeline,Embedding vs referencing,Mongoose,Schema validation,When to choose NoSQL"]
},
"Authentication & Security": {
"Password hashing": ["Hashing vs encryption,Salting,bcrypt/argon2,Cost factors,Password policies,Reset flows,Breach awareness"],
"Sessions & cookies": ["Cookies,HttpOnly/Secure/SameSite flags,Session stores,Session expiry,Logout/invalidation,Session fixation"],
"JWT": ["JWT structure,Signing algorithms,Access tokens,Refresh tokens,Token storage,Rotation/revocation,Expiry,OAuth 2.0/OIDC overview,Social login"],
"Authorization": ["RBAC,ABAC overview,Middleware guards,Ownership checks,Least privilege,Admin routes,Permission modeling"],
"CORS & CSRF": ["Same-origin policy,CORS headers,Preflight requests,Credentials mode,CSRF tokens,SameSite cookies,Double-submit cookie"],
"XSS & injection": ["Stored/reflected/DOM XSS,Output encoding,Content Security Policy,SQL injection,Parameterized queries,NoSQL/command injection,OWASP Top 10,Security headers (helmet)"],
"Rate limiting": ["Fixed/sliding window,Token bucket,Per-IP/per-user limits,Brute-force protection,express-rate-limit,429 responses,Redis-backed limits"],
"Secrets": [".env files,Never committing secrets,Secret managers,Rotation,Environment separation,Scanning for leaked secrets,Dependency auditing (npm audit)"]
},
"Testing & Code Quality": {
"Unit testing": ["AAA pattern,Assertions,Test isolation,Mocks/stubs/spies,Edge cases,Test coverage,TDD"],
"Integration testing": ["Test databases,Setup/teardown,Fixtures/seeding,Testing modules together,Mocking external services,Docker for test dependencies,End-to-end tests (Playwright)"],
"API testing": ["Endpoint tests,Auth scenarios,Error cases,Response schema checks,Postman/Newman,Contract testing overview"],
"Jest / Vitest": ["Install/config,describe/it/expect,Matchers,Async tests,Mock functions,Module mocking,Snapshots,Fake timers,Coverage reports,React Testing Library"],
"Supertest": ["Request against app,Status/body assertions,Headers/cookies,Auth tests,Database cleanup between tests"],
"Linting": ["ESLint setup,Rule configuration,Shared configs,TypeScript-ESLint,Pre-commit hooks (Husky/lint-staged),Linting in CI"],
"Formatting": ["Prettier config,Editor integration,Format on save,EditorConfig,Format checks in CI"],
"Code review": ["Review checklist,Small PRs,Giving feedback,Receiving feedback,Readability,Security/performance checks,Refactoring"]
},
"Linux & Server Fundamentals": {
"Linux filesystem": ["Directory layout (/etc /var /home),Absolute/relative paths,ls/cd/cp/mv/rm,Permissions (rwx),chmod/chown,Users/groups,sudo,Links,Disk usage (df/du),Package managers (apt),Editors (nano/vim),grep/find/awk/sed,Logs in /var/log"],
"Processes": ["ps/top/htop,Foreground/background jobs,kill/signals,systemd/systemctl,Service unit files,journalctl,cron jobs,Resource usage,nohup/screen/tmux,pm2"],
"Networking basics": ["IP/subnets,Ports,DNS,TCP vs UDP,Sockets,curl/wget,ping/traceroute,netstat/ss,Firewalls (ufw),Localhost/loopback,NAT/proxies"],
"SSH": ["Key pairs,ssh-keygen,authorized_keys,ssh config file,scp/rsync,Port forwarding,Disabling password login,Fail2ban"],
"Environment configuration": ["Environment variables,.bashrc/.profile,PATH,Config files,systemd environment,dotenv,Shell scripting basics"],
"Nginx": ["Install/config structure,Server blocks,Reverse proxy,Static files,Load balancing,HTTPS with Let's Encrypt,Gzip/caching,Rate limiting,Access/error logs"]
},
"Docker & Containerization": {
"Docker concepts": ["Containers vs VMs,Images/layers,Registries/Docker Hub,Container lifecycle,docker run/ps/stop/rm,Logs/exec,Image tags,Cleanup/prune"],
"Dockerfile": ["FROM/WORKDIR/COPY/RUN,CMD vs ENTRYPOINT,ENV/ARG,EXPOSE,Layer caching,.dockerignore,Multi-stage builds,Slim/alpine images,Health checks"],
"Volumes": ["Named volumes,Bind mounts,tmpfs,Persisting database data,Backup/restore volumes"],
"Networks": ["Bridge network,Container DNS names,Port mapping,Custom networks,Isolating services"],
"Docker Compose": ["docker-compose.yml,Services,Env files,depends_on/healthchecks,Volumes/networks in Compose,Profiles,Override files,Dev vs prod config,Compose commands"],
"Container security": ["Non-root user,Minimal base images,Image scanning,Secrets handling,Read-only filesystems,Pinning versions,Resource limits,Trusted registries"]
},
"CI/CD & Deployment": {
"CI/CD concepts": ["Continuous integration,Continuous delivery vs deployment,Pipeline stages,Environments (dev/staging/prod),Blue-green/canary deploys,Rollbacks,Feature flags"],
"GitHub Actions": ["Workflows/jobs/steps,Triggers,Runners,Marketplace actions,Secrets/variables,Matrix builds,Caching,Artifacts,Environments/approvals,Reusable workflows"],
"Build pipelines": ["Install dependencies,Lint,Test,Build,Docker build/push,Versioning,Artifacts,Fail-fast,Pipeline speed"],
"Cloud deployment": ["Render/Railway/Vercel/Fly.io,Managed databases,Env vars,Logs,Zero-downtime deploys,Static vs server hosting,Cost awareness"],
"Domains & DNS": ["Registrars,A/CNAME/MX/TXT records,Nameservers,Subdomains,TTL/propagation,CDN (Cloudflare)"],
"HTTPS": ["TLS handshake,Certificates/CAs,Let's Encrypt,Auto-renewal,HSTS,Redirect HTTP to HTTPS,Mixed content"]
},
"Caching, Queues & Real-Time Systems": {
"Redis": ["Data types (strings/hashes/lists/sets/sorted sets),Key expiry/TTL,Pub/Sub,Persistence (RDB/AOF),Client libraries,Rate limiting/session use,Eviction policies"],
"Caching": ["Cache-aside,Write-through/write-back,TTLs,Invalidation,Cache stampede,HTTP caching/ETag,CDN caching,Browser caching"],
"WebSockets": ["WebSocket protocol,Socket.IO/ws,Rooms/broadcast,Auth for sockets,Reconnection,Server-sent events,Long polling,Scaling sockets"],
"Message queues": ["Producers/consumers,Acknowledgements,Retries/dead-letter queues,At-least-once vs exactly-once,Idempotent consumers,Pub/sub vs queues"],
"RabbitMQ / Kafka": ["Exchanges/queues/bindings,Topics/partitions,Consumer groups,Offsets,Ordering guarantees,Retention,Use-case comparison"],
"Background jobs": ["BullMQ,Scheduled/cron jobs,Retries/backoff,Job priorities,Workers/concurrency,Monitoring jobs,Emails/notifications/reports"]
},
"System Design": {
"Scalability": ["Vertical vs horizontal scaling,Stateless services,Bottleneck analysis,Capacity estimation,Latency vs throughput,CDNs,Autoscaling,Performance testing"],
"Load balancing": ["L4 vs L7,Round-robin/least connections,Health checks,Sticky sessions,Reverse proxies,Global load balancing,API gateways"],
"Database scaling": ["Read replicas,Replication lag,Sharding/partitioning,Consistent hashing,Connection pooling,Caching layer,CQRS overview,SQL vs NoSQL choices"],
"CAP & consistency": ["Consistency/availability/partition tolerance,Eventual consistency,Strong consistency,Consensus (Raft/Paxos) overview,Distributed transactions/sagas,Idempotency,Clocks/ordering"],
"Microservices": ["Service boundaries/DDD,Sync vs async communication,API gateway,Service discovery,Data ownership,Distributed tracing,Monolith vs microservices,Resilience (circuit breaker/retries)"],
"Event-driven architecture": ["Events vs commands,Event sourcing,Outbox pattern,Saga pattern,Consumers/idempotency,Schema evolution,Eventual consistency"],
"Observability": ["Structured logging,Metrics (Prometheus),Tracing (OpenTelemetry),Dashboards (Grafana),Alerting/SLOs,Health/readiness checks,Error tracking (Sentry),Incident response"]
},
"Cloud & Professional Engineering": {
"AWS / Azure / GCP": ["Compute (EC2/Lambda),Storage (S3),Managed databases (RDS),Networking (VPC),IAM,Load balancers,Serverless,Cost management,Regions/AZs,Managed queues"],
"Infrastructure basics": ["VPC/subnets,Security groups,IAM roles/policies,Least privilege,Bastion hosts,Secrets management,Backup/disaster recovery,Shared responsibility model"],
"Monitoring": ["Uptime checks,Metrics/dashboards,Alert rules,On-call basics,Log aggregation,Error tracking,Postmortems"],
"Infrastructure as Code": ["Terraform providers/resources,State,Variables/outputs,Modules,Plan/apply,Remote state,Ansible overview,Drift detection"],
"Kubernetes": ["Pods,Deployments,Services,Ingress,ConfigMaps/Secrets,Namespaces,Volumes,Probes,Autoscaling (HPA),kubectl,Helm"],
"System design interviews": ["Requirements clarification,Back-of-envelope estimation,API design,Data modeling,High-level diagram,Deep dives,Trade-offs,Classic problems"],
"Engineering practices": ["Agile/Scrum/Kanban,Estimation,Tickets/user stories,Technical documentation,Architecture decision records,Code review culture,Tech debt,On-call/incidents,Pair programming"]
},
"Career & Portfolio": {
"Portfolio projects": ["Pick 2-3 projects,Full-stack app with auth,Live deployed URL,Tests/CI,README with screenshots,Architecture diagram,Solve a real problem,Maintain/iterate"],
"GitHub profile": ["Profile README,Pinned repos,Meaningful commits,Clean READMEs,Issue/PR history,Open-source contributions"],
"Resume": ["One-page format,Impact bullets with metrics,Skills section,Projects section,ATS-friendly layout,Tailoring per role,Proofreading"],
"Technical interviews": ["Coding rounds,CS fundamentals (OS/networking/DBMS),SQL questions,Backend/API questions,Behavioral (STAR),System design,Mock interviews,Take-home assignments"],
"DSA practice": ["Arrays/strings,Hashing,Two pointers/sliding window,Linked lists,Stacks/queues,Trees/BST,Graphs,Recursion/backtracking,Dynamic programming,Heaps,Binary search,Sorting"],
"Communication": ["Explaining trade-offs,Writing clear docs,Asking good questions,Status updates,Giving/receiving feedback,Presentations,Remote collaboration,Networking/LinkedIn"]
}
};
