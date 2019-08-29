const app = new Vue({
    el: '#SkillComp',
    
    data: {
      skills: [
        {
            name: 'HTML5',
            color: '#FF5733',
            perks: ['Website Markup', "SEO oriented code"]
        },
        {
            name: 'CSS3',
            color: '#2965F1',
            perks: ['Layout development', "Component Styling", 'Responsive Design', 'Animation implementation', 'Framework Integration']
        },
        {
            name: 'JavaScript',
            color: '#F0DB4F',
            perks: ['Object Oriented Programming', "API's Integration", 'Custom Features Development', 'Libraries Incorporation']
        },
        {
            name: 'NodeJS',
            color: '#303030',
            perks: ['Backend Creation', "NPM", 'Integration with DB', 'Dynamic Website Development', 'Autentication']
        },
        {
            name: 'React',
            color: '#61DAFB',
            perks: ['State Manipulation', 'Component Creation', 'React Router', 'Single Page Apps', 'React Hooks' ]
        },
        {
            name: 'Vue',
            color: '#41B883',
            perks: ['Component Creation', 'State Manipulation', 'VUE Router', 'Single Page Apps' ]
        },
        {
            name: 'Adobe Xd',
            color: '#2E001F',
            perks: ['Mockup Design', 'Prototipe Design', 'UI-UX ']
        },
        {
            name: 'GIT',
            color: '#F1502F',
            perks: ['Version Control', 'Git Based Workflow', 'Github']
        },
        {
            name: 'MongoDB',
            color: '#4DB33D',
            perks: ['Custom Database Creation', 'Database Integration', 'Shema Development']
        },
        {
            name: 'Others',
            color: '#3076AC',
            perks: ['WordPress']
        },
      ],

      currentSkill: {
          name: 'React',
          color: '#61DAFB',
          perks: ['State Manipulation', 'Component Creation', 'React Router', 'Single Page Apps', 'React Hooks' ]
      },
    },

    computed: {
        borderString () {
            return `2px solid ${this.currentSkill.color}`
        }
    },

    methods: {
        updateDisplay (i) {
            this.currentSkill = this.skills[i]
        }
    }

})