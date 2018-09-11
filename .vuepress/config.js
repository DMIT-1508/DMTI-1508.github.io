module.exports = {
    title: 'DMIT-1508 Student Notes',
    description: 'Database Fundamentals',
    markdown: {
        config: md => {
            md.set({ breaks: true })
            md.use(require('markdown-it-imsize'))
            md.use(require('markdown-it-mermaid').default) // leave default options
            md.use(require('markdown-it-checkbox'))
            md.use(require('markdown-it-kbd'))
            md.use(require('markdown-it-deflist'))
            md.use(require('markdown-it-abbr'))
            md.use(require('markdown-it-mark'))
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-sub'))
            md.use(require('markdown-it-sup'))
              }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/about/' },
            { text: 'Normalization', link: '/Design/' },
            { text: 'DDL', link: '/DDL/' },
            { text: 'DML', link: '/DML/' },
            { text: 'SQL', link: '/SQL/' },
            { text: 'DCL', link: '/DCL/' },
            { text: 'Issues/Bugs', link: 'https://github.com/DMIT-1508/DMIT-1508.github.io/issues/new' },
            { text: 'Moodle', link: 'https://moodle.nait.ca' },
        ],
        sidebar: {
            '/Design/': [
                '',
                'erdIntro',
                'erdToEnglish',
                'normalization',
                'lucidChart',
                '/demos/esp/specs/'
            ],

            '/DDL/': [
                '',
                'createTable',
                'primaryKey',
                'foreignKey',
                'defaultConstraint',
                'checkConstraint',
                'uniqueConstraint',
                'alterTable',
                'createView'
            ],

            '/DML/': [
                '',
                'insert',
                'update',
                'delete'
            ],

            '/SQL/': [
                '',
                'simpleQueries',
                'stringFunctions',
                'dateFunctions',
                'aggregateFunctions',
                'aggregateGroupBy',
                'innerJoins',
                'outerJoins',
                'subqueries',
                'unions'
            ],

            '/DCL/': [
                '',
                ''
            ],
            '/demos/esp/specs/' :[
                '',
                'ESP-1-Specs',
                'ESP-1',
                'ESP-1-Proof',
                'ESP-2-Specs',
                'ESP-2',
                'ESP-3-Specs',
                // 'ESP-3',
                'ESP-4-Specs',
                // 'ESP-4',
                'ESP-5-Specs',
                // 'ESP-5',
                'ESP-6-Specs',
                // 'ESP-6'
            ],

            // fallback
            '/about/': [
                '',
                '/LOGs'
                // 'colophon',
                // 'todo',
                // 'markdown-syntax'
            ]
        }
    }
}
