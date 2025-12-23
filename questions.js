const questionBank = {
    cognitive: [
        {
            question: "Which number completes the sequence? 2, 6, 12, 20, 30, ?",
            options: ["40", "42", "44", "48"],
            correct: 1,
            explanation: "The pattern adds consecutive even numbers: +4, +6, +8, +10, +12"
        },
        {
            question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
            options: ["Yes", "No", "Cannot be determined", "Only sometimes"],
            correct: 0,
            explanation: "This is a transitive property. If A=B and B=C, then A=C"
        },
        {
            question: "What comes next in the pattern? ◯ △ ◯ △ △ ◯ △ △ △ ?",
            options: ["◯", "△", "◯◯", "△△"],
            correct: 0,
            explanation: "The pattern shows increasing triangles followed by a circle: 1△, 2△, 3△, then ◯"
        },
        {
            question: "A trader buys stocks on day 1, 3, 7, 15, 31. On which day will they buy next?",
            options: ["47", "55", "63", "71"],
            correct: 2,
            explanation: "Each gap doubles: +2, +4, +8, +16, +32 = 63"
        },
        {
            question: "Mirror is to Reflection as Water is to ?",
            options: ["Liquid", "Drink", "Ripple", "Ocean"],
            correct: 2,
            explanation: "Mirror creates reflection; water creates ripples"
        }
    ],
    numerical: [
        {
            question: "A stock worth $150 increases by 20%, then decreases by 20%. What is the final price?",
            options: ["$150", "$144", "$156", "$140"],
            correct: 1,
            context: "Initial: $150\n20% increase: $150 × 1.20 = $180\n20% decrease: $180 × 0.80 = ?",
            explanation: "$180 × 0.80 = $144"
        },
        {
            question: "If a portfolio returns 15% in year 1 and -10% in year 2, what is the total return?",
            options: ["5%", "3.5%", "2.5%", "4.5%"],
            correct: 1,
            context: "Year 1: $100 → $115\nYear 2: $115 → ?",
            explanation: "$115 × 0.90 = $103.50, so 3.5% total return"
        },
        {
            question: "A bond pays 6% annual interest on $10,000. What is the monthly interest?",
            options: ["$50", "$60", "$500", "$600"],
            correct: 0,
            context: "Principal: $10,000\nAnnual rate: 6%\nMonthly = ?",
            explanation: "($10,000 × 0.06) / 12 = $50"
        },
        {
            question: "Company revenue: $5M. Costs: $3.2M. Tax rate: 25%. What is net profit?",
            options: ["$1.35M", "$1.8M", "$1.5M", "$1.2M"],
            correct: 0,
            context: "Revenue: $5,000,000\nCosts: $3,200,000\nTax rate: 25%",
            explanation: "Profit before tax: $1.8M. After 25% tax: $1.8M × 0.75 = $1.35M"
        },
        {
            question: "Investment A returns 8% annually. How much to invest to earn $400/month?",
            options: ["$50,000", "$60,000", "$48,000", "$55,000"],
            correct: 1,
            context: "Monthly income needed: $400\nAnnual return: 8%",
            explanation: "$400 × 12 = $4,800 annually. $4,800 / 0.08 = $60,000"
        }
    ],
    logic: [
        {
            question: "Three analysts make predictions. Only one is correct. A: 'B is wrong', B: 'C is wrong', C: 'Both A and B are wrong'. Who is correct?",
            options: ["Analyst A", "Analyst B", "Analyst C", "None"],
            correct: 2,
            explanation: "If C is correct, both A and B are wrong, which satisfies the 'only one correct' condition"
        },
        {
            question: "In a group of traders: All day traders use technical analysis. Some who use technical analysis trade options. Therefore:",
            options: ["All day traders trade options", "Some day traders might trade options", "No day traders trade options", "All options traders are day traders"],
            correct: 1,
            explanation: "The overlap between day traders and options traders is possible but not certain"
        },
        {
            question: "If the market is efficient, then prices reflect all information. Prices don't reflect insider information. Therefore:",
            options: ["The market is efficient", "The market is not efficient", "Insider information doesn't exist", "Cannot be determined"],
            correct: 1,
            explanation: "The contrapositive: if prices don't reflect all info, the market isn't efficient"
        },
        {
            question: "Five companies rank A>B, B>C, D>E, C>D. What is the correct order?",
            options: ["A>B>C>D>E", "A>B>D>C>E", "A>C>B>D>E", "Cannot be determined"],
            correct: 0,
            explanation: "Combining: A>B>C and C>D>E gives A>B>C>D>E"
        },
        {
            question: "All successful investors are patient. John is impatient. Therefore:",
            options: ["John is not a successful investor", "John might still be successful", "Patience guarantees success", "John is not an investor"],
            correct: 0,
            explanation: "Contrapositive logic: If not patient, then not a successful investor"
        }
    ],
    situational: [
        {
            question: "You discover a calculation error in a report due to your manager in 1 hour. The error slightly overstates profits. What do you do?",
            options: [
                "Immediately inform your manager about the error",
                "Fix it quietly and say nothing",
                "Wait until after the presentation to mention it",
                "Ask a colleague what they would do first"
            ],
            correct: 0,
            explanation: "Integrity requires immediate disclosure, regardless of consequences"
        },
        {
            question: "A client asks for investment advice outside your expertise. Your response:",
            options: [
                "Give your best guess to maintain the relationship",
                "Admit limitations and refer to a specialist",
                "Research quickly and provide an answer",
                "Suggest they consult the internet"
            ],
            correct: 1,
            explanation: "Professional ethics require operating within competence boundaries"
        },
        {
            question: "You notice a colleague consistently leaving early but recording full hours. You should:",
            options: [
                "Ignore it - not your business",
                "Confront them directly first",
                "Report to management immediately",
                "Document and discuss with HR if it continues"
            ],
            correct: 3,
            explanation: "Follow proper channels while giving benefit of the doubt initially"
        },
        {
            question: "During a team project, one member isn't contributing. The deadline is tight. Best approach:",
            options: [
                "Complete their work to ensure deadline is met",
                "Report them to your manager immediately",
                "Discuss concerns with them and offer help",
                "Exclude them and redistribute their tasks"
            ],
            correct: 2,
            explanation: "Address issues directly and collaboratively before escalating"
        },
        {
            question: "You receive confidential information accidentally. The ethical action is:",
            options: [
                "Use it carefully to benefit your work",
                "Share it only with your immediate team",
                "Delete it and notify the sender immediately",
                "Keep it but don't use it"
            ],
            correct: 2,
            explanation: "Confidential information must be handled with complete integrity"
        }
    ]
};
