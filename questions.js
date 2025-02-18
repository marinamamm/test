const questions = [
    // Page 1
    [
        {
            id: 1,
            text: "In business or unfamiliar social situations:",
            options: [
                { text: "I am easy to know personally", value: "O" },
                { text: "I am more difficult to know personally", value: "S" }
            ]
        },
        {
            id: 2,
            text: "In conversations:",
            options: [
                { text: "I prefer to focus the conversation on issues and tasks at hand; I like to stick to the agenda", value: "S" },
                { text: "My conversation reflects personal life experiences; I may stray from 'the agenda'", value: "O" }
            ]
        },
        {
            id: 3,
            text: "In group conversations:",
            options: [
                { text: "I am an infrequent contributor", value: "I" },
                { text: "I am a frequent contributor", value: "D" }
            ]
        }
    ],
    // Page 2
    [
        {
            id: 4,
            text: "When following rules:",
            options: [
                { text: "I prefer to do things precisely according to rules", value: "I" },
                { text: "I prefer to interpret rules to suit the situation", value: "D" }
            ]
        },
        {
            id: 5,
            text: "When making business decisions:",
            options: [
                { text: "I rely on goals, facts, or documented evidence", value: "S" },
                { text: "I rely on feelings, experiences, or relationships", value: "O" }
            ]
        },
        {
            id: 6,
            text: "When communicating:",
            options: [
                { text: "I rarely use gestures and voice intonation to emphasize points", value: "I" },
                { text: "I frequently use gestures and voice intonation to emphasize points", value: "D" }
            ]
        }
    ],
    // Page 3
    [
        {
            id: 7,
            text: "When expressing opinions:",
            options: [
                { text: "I am more likely to make emphatic statements like, 'This is the way...', 'We should...'", value: "D" },
                { text: "I am more likely to make qualified statements like, 'According to our sources...'", value: "I" }
            ]
        },
        {
            id: 8,
            text: "During conversations:",
            options: [
                { text: "I usually display animated facial expressions and observable body responses when speaking and listening", value: "O" },
                { text: "I rarely display animated facial expressions or observable body responses when speaking and listening", value: "S" }
            ]
        },
        {
            id: 9,
            text: "Regarding personal feelings:",
            options: [
                { text: "I prefer to keep intimate personal feelings private; I share only when necessary", value: "S" },
                { text: "I am more willing to allow or share intimate personal feelings quite openly", value: "O" }
            ]
        }
    ],
    // Page 4
    [
        {
            id: 10,
            text: "Compared to others:",
            options: [
                { text: "I tend to display less enthusiasm than the average person", value: "S" },
                { text: "I tend to display more enthusiasm than the average person", value: "O" }
            ]
        },
        {
            id: 11,
            text: "At social gatherings:",
            options: [
                { text: "I am likely to introduce myself to others at social gatherings", value: "D" },
                { text: "I am likely to wait for others to introduce themselves to me at social gatherings", value: "I" }
            ]
        },
        {
            id: 12,
            text: "Regarding my time:",
            options: [
                { text: "I am flexible about how my time is used by others", value: "O" },
                { text: "I am disciplined about how my time is used by others", value: "S" }
            ]
        }
    ],
    // Page 5
    [
        {
            id: 13,
            text: "Choose the statement that best describes you:",
            options: [
                { text: "I prefer to stick to my own agenda", value: "S" },
                { text: "I prefer to go with the flow", value: "O" }
            ]
        },
        {
            id: 14,
            text: "Choose the statement that best describes you:",
            options: [
                { text: "I display more naturally assertive behaviour", value: "D" },
                { text: "I display more naturally reserved behaviour", value: "I" }
            ]
        },
        {
            id: 15,
            text: "With my opinions:",
            options: [
                { text: "I like to express my own opinions quite openly", value: "D" },
                { text: "I like to reserve the expression of my own opinions", value: "I" }
            ]
        }
    ],
    // Page 6
    [
        {
            id: 16,
            text: "When making decisions:",
            options: [
                { text: "I naturally decide more quickly or spontaneously", value: "D" },
                { text: "I naturally decide more slowly or deliberately", value: "I" }
            ]
        },
        {
            id: 17,
            text: "In work situations:",
            options: [
                { text: "I like to work independently or dictate the relationship conditions", value: "S" },
                { text: "I like to work in a team or be included in relationships", value: "O" }
            ]
        },
        {
            id: 18,
            text: "Regarding risk or change:",
            options: [
                { text: "I prefer to approach risk or change slowly and cautiously", value: "I" },
                { text: "I prefer to approach risk or change quickly and spontaneously", value: "D" }
            ]
        }
    ]
];

const personalityTypes = {
    Performer: { 
        description: "Open and Direct",
        traits: "High in both Direct (D) and Open (O) traits"
    },
    Controller: { 
        description: "Self-Contained and Direct",
        traits: "High in Direct (D) and Self-Contained (S) traits"
    },
    Counsellor: { 
        description: "Open and Indirect",
        traits: "High in Open (O) and Indirect (I) traits"
    },
    Engineer: { 
        description: "Self-Contained and Indirect",
        traits: "High in Self-Contained (S) and Indirect (I) traits"
    }
}; 