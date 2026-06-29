# Personal Portfolio Website (v1)

Multi-page personal portfolio site built with HTML5, CSS3, and Sass — with automated deployment via **Azure Pipelines**.

## Pages

| File | Content |
|------|---------|
| `index.html` | Home / landing |
| `experience.html` | Work experience |
| `education.html` | Education history |
| `skills.html` | Technical skills |
| `projects.html` | Project showcase |
| `certification.html` | Certifications |
| `contactinformation.html` | Contact details |

## Tech Stack

- HTML5 / CSS3
- Sass (SCSS) compiled via `node-sass`
- Vanilla JavaScript
- Azure Pipelines (CI/CD)

## Getting Started

```bash
npm install

# Watch and compile Sass
npm run compile:sass
```

Open `index.html` in the browser to view the site.

## CI/CD

Automated build and deployment is configured in `azure-pipelines.yml`. The pipeline compiles Sass and deploys the static site on every push to the main branch.
