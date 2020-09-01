const PG_SIZE = 6;

export const projectsQuery = ({ page }) => `*[_type == 'project'] | order(date desc) {
  ...
}`
