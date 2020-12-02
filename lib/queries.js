const PG_SIZE = 6;

export const projectsQuery = ({ page }) => `*[_type == 'project' && hidden != true] | order(date desc) {
  ...
}`
