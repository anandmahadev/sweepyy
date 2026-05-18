# Contributing to Sweepyy

Thank you for your interest in contributing to Sweepyy! We welcome all contributions that help improve this web application replica.

## Development Environment Setup

To begin working locally:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view local live changes.

3. **Run Linter Checks**:
   ```bash
   npm run lint
   ```
   Please ensure all code passes our linter rules before submitting a PR.

## Branch Naming Strategies

Use prefixes for clarity:
- `feature/` for new interactive capabilities (e.g., `feature/contact-validation`)
- `bugfix/` for resolving existing logic or visual errors (e.g., `bugfix/header-menu-padding`)
- `docs/` for any changes inside guides and readme (e.g., `docs/architecture-guide`)

## Git Commit Style Guidelines

We strictly follow Conventional Commits formatting. A commit message must follow this structure:

`<type>(<scope>): <short description>`

### Approved Types:
- `feat`: A new user-facing capability (e.g., `feat(careers): add resume upload callback`)
- `fix`: Resolves a visual or logical bug (e.g., `fix(header): repair accessibility overlay close`)
- `refactor`: Changes that neither fix a bug nor add a feature, but restructure code (e.g., `refactor(cookie-bar): simplify categories state`)
- `docs`: Documentation updates only (e.g., `docs(contributing): add developer guidelines`)
- `style`: Changes that do not affect code logic (e.g., CSS updates, alignment, spacing)

## Pull Request Guidelines

1. Make sure your changes have clean styles and responsive checks for mobile viewports.
2. Confirm the production build compiles perfectly:
   ```bash
   npm run build
   ```
3. Open a detailed Pull Request detailing the goal, changes made, and a summary of your testing steps.

## Automated Checks and Formatting

To ensure consistent code styling and prevent syntax errors, we use ESLint. You can automatically fix many code quality and formatting issues by running:
```bash
npm run lint:fix
```

Before submitting a Pull Request, please run a final production check:
```bash
npm run build
```
This verifies that Vite's bundler can compile all assets (HTML, CSS, JS) cleanly without any ESM resolution failures.

Thank you for helping us keep Sweepyy clean, fast, and accessible!
