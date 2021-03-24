export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605b7a782433e30fd2406dee',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1jdbnbck',
                  apiId: 'b622d779-aa6f-4675-93f4-f05164a79311'
                },
                {
                  buildHookId: '605b7a78747c27121aac56b2',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-qngtoyh6',
                  apiId: 'c662f083-3af0-4708-be9e-28fa72c42fa8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/malcmail/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-qngtoyh6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
