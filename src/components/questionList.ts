const initialQuestionList = [
  {
    question: {
      id: 'q001',
      desc: 'Please select the correct option.',
      content: 'What is the correct answer?'
    },
    multipleChoice: [
      {
        id: 'mc001',
        content: 'Apple (correct)',
      },
      {
        id: 'mc002',
        content: 'Banana (wrong)',
      },
      {
        id: 'mc003',
        content: 'Cat (wrong)',
      },
      {
        id: 'mc004',
        content: 'Dog (wrong)',
      },
    ],
    correctAns: 'mc001',
  },
  {
    question: {
      id: 'q002',
      desc: 'Please select the correct option.',
      content: 'What is the correct answer?'
    },
    multipleChoice: [
      {
        id: 'mc001',
        content: 'Apple (correct)',
      },
      {
        id: 'mc002',
        content: 'Banana (wrong)',
      },
      {
        id: 'mc003',
        content: 'Cat (wrong)',
      },
      {
        id: 'mc004',
        content: 'Dog (wrong)',
      },
    ],
    correctAns: 'mc001',
  },
  {
    question: {
      id: 'q003',
      desc: 'Please select the correct option.',
      content: 'What is the correct answer?'
    },
    multipleChoice: [
      {
        id: 'mc001',
        content: 'Apple (correct)',
      },
      {
        id: 'mc002',
        content: 'Banana (wrong)',
      },
      {
        id: 'mc003',
        content: 'Cat (wrong)',
      },
      {
        id: 'mc004',
        content: 'Dog (wrong)',
      },
    ],
    correctAns: 'mc001',
  },
];

const shuffleArray: <T>(arr: T[]) => T[] = (array) => {
  const result = array.slice(0);

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result
}

const questionList = initialQuestionList.map((question) => (
  {
    ...question,
    multipleChoice: shuffleArray(question.multipleChoice),
  }
));

export default questionList;
