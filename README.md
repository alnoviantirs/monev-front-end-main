# Getting Started

Make sure you install the following required tools:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [PNPM](https://pnpm.io/)

### Clone the repository

```bash
git https://github.com/digital-infinit/dimentorin-frontend.git
cd dimentorin-frontend
```

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build the project

```bash
pnpm build
```

### Run the project in production mode

```bash
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribution guidelines

To view and track code changes that we share in this repository, we have implemented several code commits to make it easier for you to continue and maintain this code

### Commit Messages

Format Commit: `<type>: <subject>`

### Example Commit

```bash
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
