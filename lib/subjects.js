// Get all the subjects for a given language in the subjects variable
export function getSubjects(req) {
    const lang = req.substring(1)
    for (let i = 0; i < subjects.length; i++) {
        if (lang === subjects[i].language) {
            return subjects[i].data
        }
    }
}

// Extracts subject from the pathname
export function extractSubject(pathname) {
   const cutPath = pathname.substring(4, pathname.length + 1)
   const index = cutPath.indexOf('/')

   if (index === -1) {
    return cutPath
   }
   
   return cutPath.substring(0, index)
}

// Create a map to get subjects' themes more easily
export const themes = new Map()
themes.set('tech', '#0266b8')

const subjects = [
    {
        language: 'en',
        data: [
            {
                id: 1,
                subject: 'Tech',
                imageDesktop: '/subjects/techD.png',
                imageMobile: '/subjects/techM.png',
                description: 'The tools mankind uses for survival and prosperity. A quintessential part of being human.',
                theme: '#0266b8'
            }
        ]
    },
    {
        language: 'pt',
        data: [
            {
                id: 1,
                subject: 'Tecnologia',
                imageDesktop: '/subjects/techD.png',
                imageMobile: '/subjects/techM.png',
                description: 'As ferramentas que a humanidade utiliza para sua sobrevivência e prosperidade. Âmago do ser humano.',
                theme: '#0266b8'
            }
        ]
    }
]

// use #e61717 for red
// old blue #134480