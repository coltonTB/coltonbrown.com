import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }, {
      name: 'role',
      title: 'Role',
      type: 'string'
    }, {
      name: 'link',
      title: 'URL',
      type: 'string'
    }, {
      name: 'slug',
      title: 'Slug',
      type: 'slug'
    }, {
      name: 'collaborator',
      title: 'Collaborator',
      type: 'object',
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string"
        }, {
          name: "url",
          title: "URL",
          type: "string"
        }
      ]
    }, {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'LL'
      }
    }
  ]
}
