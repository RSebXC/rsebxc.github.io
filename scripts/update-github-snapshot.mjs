import { writeFile } from 'node:fs/promises';

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'Rodrigo-Portfolio',
};
if (process.env.GITHUB_TOKEN)
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const repos = [];
for (let page = 1; ; page++) {
  const response = await fetch(
    `https://api.github.com/users/RSebXC/repos?per_page=100&sort=updated&page=${page}`,
    { headers },
  );
  if (!response.ok)
    throw new Error(
      `GitHub returned ${response.status}; existing data was not changed.`,
    );
  const result = await response.json();
  repos.push(...result);
  if (result.length < 100) break;
}
const primary = {};
for (const repo of repos)
  if (!repo.fork && repo.language)
    primary[repo.language] = (primary[repo.language] || 0) + 1;
const colors = {
  Python: '#5378e8',
  Java: '#a46ded',
  JavaScript: '#d6a116',
  TypeScript: '#3b93c8',
  Fortran: '#c776b8',
  Kotlin: '#9c72ef',
  Go: '#2a9faa',
  CSS: '#7869ce',
  HTML: '#db7956',
  Makefile: '#8b99b0',
};
const date = new Date();
const snapshot = {
  updatedAt: date.toLocaleDateString('en-CA', {
    timeZone: 'America/Guatemala',
  }),
  dateLabel: date.toLocaleDateString('es-GT', {
    timeZone: 'America/Guatemala',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }),
  repositoryCount: repos.length,
  source: 'https://github.com/RSebXC?tab=repositories',
  languages: Object.entries(primary)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name, count]) => ({
      name,
      count,
      color: colors[name] || '#73839e',
    })),
  repositories: repos.map(({ name, html_url, language, fork }) => ({
    name,
    url: html_url,
    language,
    fork,
  })),
};
await writeFile(
  'src/data/github.ts',
  `// Snapshot verified against the public GitHub API. Refresh with npm run sync:github.\nexport const githubSnapshot = ${JSON.stringify(snapshot, null, 2)} as const;\n`,
);
console.log(
  `Updated public GitHub snapshot: ${repos.length} repositories. Review the diff before committing.`,
);
