export const mockUser = {
  id: 1,
  name: 'Aibek Sansen',
  email: 'aibek@kido.kz',
  avatar: '🦁',
  totalPoints: 1240,
  completedLessons: 18,
  currentCourse: 'Animals Vocabulary',
  courseProgress: 65,
  joinDate: 'Қаңтар 2025',
};

export const badges = [
  { id: 1, icon: '🌟', title: 'First Words', desc: 'Алғашқы 10 сөзді үйрендің!', earned: true, color: 'from-amber-400 to-yellow-500' },
  { id: 2, icon: '🎧', title: 'Listening Master', desc: '5 аудио сабақты бітірдің!', earned: true, color: 'from-blue-400 to-blue-600' },
  { id: 3, icon: '🗣️', title: 'Speaking Star', desc: '3 speaking сабағын өттің!', earned: true, color: 'from-purple-400 to-purple-600' },
  { id: 4, icon: '🏆', title: 'Quiz Champion', desc: '10 quiz-ді дұрыс жауаптадың!', earned: false, color: 'from-gray-300 to-gray-400' },
];

export const courses = [
  { id: 1, emoji: '🐘', title: 'Animals Vocabulary', description: 'Жануарлар атауларын сурет пен дыбыс арқылы үйрен.', tag: 'Vocabulary', level: 'Beginner', lessons: 8, duration: '40 мин', color: 'from-blue-400 to-blue-600', bg: 'bg-blue-50', rating: 4.9, students: 320 },
  { id: 2, emoji: '🎨', title: 'Colors & Numbers', description: 'Түстер мен сандарды ағылшынша оқып үйрен.', tag: 'Vocabulary', level: 'Beginner', lessons: 6, duration: '30 мин', color: 'from-orange-400 to-orange-600', bg: 'bg-orange-50', rating: 4.8, students: 280 },
  { id: 3, emoji: '🍎', title: 'Food & Fruits', description: 'Тамақ атауларын сурет пен ойын арқылы есте сақта.', tag: 'Vocabulary', level: 'Beginner', lessons: 7, duration: '35 мин', color: 'from-amber-400 to-amber-600', bg: 'bg-amber-50', rating: 4.7, students: 290 },
  { id: 4, emoji: '🎧', title: 'Daily English Listening', description: 'Күнделікті аудио диалогтар арқылы listening дамыт.', tag: 'Listening', level: 'Beginner', lessons: 10, duration: '50 мин', color: 'from-sky-400 to-sky-600', bg: 'bg-sky-50', rating: 4.7, students: 410 },
  { id: 5, emoji: '🗣️', title: 'Speaking Time', description: 'Қарапайым сөйлемдерді айту және қайталау.', tag: 'Speaking', level: 'Beginner', lessons: 7, duration: '35 мин', color: 'from-purple-400 to-purple-600', bg: 'bg-purple-50', rating: 4.9, students: 195 },
  { id: 6, emoji: '🎮', title: 'Mini Quiz Game', description: 'Ойын арқылы жаңа сөздерді қайталап бекіт.', tag: 'Games', level: 'Beginner', lessons: 5, duration: '25 мин', color: 'from-green-400 to-green-600', bg: 'bg-green-50', rating: 5.0, students: 560 },
  { id: 7, emoji: '🏠', title: 'Daily Routine', description: 'Күнделікті іс-әрекеттерді ағылшынша сипатта.', tag: 'Speaking', level: 'Beginner', lessons: 9, duration: '45 мин', color: 'from-rose-400 to-rose-600', bg: 'bg-rose-50', rating: 4.6, students: 230 },
  { id: 8, emoji: '🎵', title: 'Songs & Stories', description: 'Ағылшын тілін ән мен ертегі арқылы үйрен.', tag: 'Songs & Stories', level: 'Beginner', lessons: 6, duration: '30 мин', color: 'from-pink-400 to-pink-600', bg: 'bg-pink-50', rating: 4.8, students: 375 },
];

// Per-course detail content
export const coursesDetail = {
  1: {
    title: 'Animals Vocabulary',
    emoji: '🐘',
    modules: [
      {
        id: 1,
        title: '1-модуль: Үй жануарлары',
        lessons: [
          { id: 1, title: 'Dog & Cat', type: 'vocabulary', done: true },
          { id: 2, title: 'Cow & Horse', type: 'vocabulary', done: true },
          { id: 3, title: 'Тыңдау: Үй дыбыстары', type: 'listening', done: false },
          { id: 4, title: 'Ойын: Жануарларды тап', type: 'game', done: false },
        ],
      },
      {
        id: 2,
        title: '2-модуль: Жабайы жануарлар',
        lessons: [
          { id: 5, title: 'Lion & Tiger', type: 'vocabulary', done: false },
          { id: 6, title: 'Elephant & Giraffe', type: 'vocabulary', done: false },
          { id: 7, title: 'Тыңдау: Жабайы дыбыстар', type: 'listening', done: false },
          { id: 8, title: 'Ойын: Жабайы жануарлар', type: 'game', done: false },
        ],
      },
    ],
    vocabulary: [
      { word: 'Dog', transcription: '/dɒɡ/', translation: 'Ит', emoji: '🐕', sentence: 'I have a dog.' },
      { word: 'Cat', transcription: '/kæt/', translation: 'Мысық', emoji: '🐱', sentence: 'The cat is cute.' },
      { word: 'Elephant', transcription: '/ˈelɪfənt/', translation: 'Піл', emoji: '🐘', sentence: 'The elephant is big.' },
      { word: 'Lion', transcription: '/ˈlaɪən/', translation: 'Арыстан', emoji: '🦁', sentence: 'The lion is strong.' },
    ],
    quiz: [
      {
        question: 'Қайсысы "Ит" дейді?',
        options: [
          { emoji: '🐕', label: 'Dog', correct: true },
          { emoji: '🐱', label: 'Cat', correct: false },
          { emoji: '🐄', label: 'Cow', correct: false },
          { emoji: '🐸', label: 'Frog', correct: false },
        ],
      },
      {
        question: 'Піл ағылшынша қалай аталады?',
        options: [
          { emoji: '🦁', label: 'Lion', correct: false },
          { emoji: '🐘', label: 'Elephant', correct: true },
          { emoji: '🐎', label: 'Horse', correct: false },
          { emoji: '🐑', label: 'Sheep', correct: false },
        ],
      },
    ],
  },

  2: {
    title: 'Colors & Numbers',
    emoji: '🎨',
    modules: [
      {
        id: 1,
        title: '1-модуль: Түстер',
        lessons: [
          { id: 1, title: 'Red & Blue', type: 'vocabulary', done: true },
          { id: 2, title: 'Green & Yellow', type: 'vocabulary', done: false },
          { id: 3, title: 'Тыңдау: Түстер', type: 'listening', done: false },
          { id: 4, title: 'Ойын: Түсті тап', type: 'game', done: false },
        ],
      },
      {
        id: 2,
        title: '2-модуль: Сандар',
        lessons: [
          { id: 5, title: 'One, Two, Three', type: 'vocabulary', done: false },
          { id: 6, title: 'Four — Ten', type: 'vocabulary', done: false },
          { id: 7, title: 'Тыңдау: Сандарды санау', type: 'listening', done: false },
          { id: 8, title: 'Ойын: Санды тап', type: 'game', done: false },
        ],
      },
    ],
    vocabulary: [
      { word: 'Red', transcription: '/red/', translation: 'Қызыл', emoji: '🔴', sentence: 'The apple is red.' },
      { word: 'Blue', transcription: '/bluː/', translation: 'Көк', emoji: '🔵', sentence: 'The sky is blue.' },
      { word: 'One', transcription: '/wʌn/', translation: 'Бір', emoji: '1️⃣', sentence: 'I have one cat.' },
      { word: 'Ten', transcription: '/ten/', translation: 'Он', emoji: '🔟', sentence: 'I see ten stars.' },
    ],
    quiz: [
      {
        question: '"Қызыл" ағылшынша қалай?',
        options: [
          { emoji: '🔴', label: 'Red', correct: true },
          { emoji: '🔵', label: 'Blue', correct: false },
          { emoji: '🟢', label: 'Green', correct: false },
          { emoji: '🟡', label: 'Yellow', correct: false },
        ],
      },
      {
        question: '"Five" санын тап',
        options: [
          { emoji: '3️⃣', label: 'Three', correct: false },
          { emoji: '7️⃣', label: 'Seven', correct: false },
          { emoji: '5️⃣', label: 'Five', correct: true },
          { emoji: '9️⃣', label: 'Nine', correct: false },
        ],
      },
    ],
  },

  3: {
    title: 'Food & Fruits',
    emoji: '🍎',
    modules: [
      {
        id: 1,
        title: '1-модуль: Жемістер',
        lessons: [
          { id: 1, title: 'Apple & Banana', type: 'vocabulary', done: true },
          { id: 2, title: 'Orange & Grape', type: 'vocabulary', done: false },
          { id: 3, title: 'Тыңдау: Жемістер', type: 'listening', done: false },
          { id: 4, title: 'Ойын: Жемісті тап', type: 'game', done: false },
        ],
      },
      {
        id: 2,
        title: '2-модуль: Тамақ',
        lessons: [
          { id: 5, title: 'Bread & Milk', type: 'vocabulary', done: false },
          { id: 6, title: 'Rice & Egg', type: 'vocabulary', done: false },
          { id: 7, title: 'Тыңдау: Тамақ атаулары', type: 'listening', done: false },
          { id: 8, title: 'Ойын: Тамақты тап', type: 'game', done: false },
        ],
      },
    ],
    vocabulary: [
      { word: 'Apple', transcription: '/ˈæpəl/', translation: 'Алма', emoji: '🍎', sentence: 'I eat an apple.' },
      { word: 'Banana', transcription: '/bəˈnɑːnə/', translation: 'Банан', emoji: '🍌', sentence: 'I like banana.' },
      { word: 'Milk', transcription: '/mɪlk/', translation: 'Сүт', emoji: '🥛', sentence: 'I drink milk.' },
      { word: 'Bread', transcription: '/bred/', translation: 'Нан', emoji: '🍞', sentence: 'The bread is fresh.' },
    ],
    quiz: [
      {
        question: '"Алма" ағылшынша қалай?',
        options: [
          { emoji: '🍌', label: 'Banana', correct: false },
          { emoji: '🍎', label: 'Apple', correct: true },
          { emoji: '🍊', label: 'Orange', correct: false },
          { emoji: '🍇', label: 'Grape', correct: false },
        ],
      },
      {
        question: '"Сүт" ағылшынша қалай?',
        options: [
          { emoji: '🍞', label: 'Bread', correct: false },
          { emoji: '🥚', label: 'Egg', correct: false },
          { emoji: '🥛', label: 'Milk', correct: true },
          { emoji: '🧀', label: 'Cheese', correct: false },
        ],
      },
    ],
  },
};

// Fallback for courses without detail
export const defaultCourseDetail = {
  title: 'Сабақ',
  emoji: '📚',
  modules: [
    {
      id: 1,
      title: '1-модуль: Негізгі сөздер',
      lessons: [
        { id: 1, title: 'Жаңа сөздер — 1', type: 'vocabulary', done: false },
        { id: 2, title: 'Жаңа сөздер — 2', type: 'vocabulary', done: false },
        { id: 3, title: 'Тыңдау практикасы', type: 'listening', done: false },
        { id: 4, title: 'Ойын тапсырмасы', type: 'game', done: false },
      ],
    },
  ],
  vocabulary: [
    { word: 'Hello', transcription: '/həˈloʊ/', translation: 'Сәлем', emoji: '👋', sentence: 'Hello! How are you?' },
    { word: 'Goodbye', transcription: '/ˌɡʊdˈbaɪ/', translation: 'Сау бол', emoji: '👋', sentence: 'Goodbye! See you soon.' },
  ],
  quiz: [
    {
      question: '"Сәлем" ағылшынша қалай?',
      options: [
        { emoji: '👋', label: 'Hello', correct: true },
        { emoji: '👋', label: 'Goodbye', correct: false },
        { emoji: '❓', label: 'Sorry', correct: false },
        { emoji: '🙏', label: 'Please', correct: false },
      ],
    },
  ],
};

export const reviews = [
  { name: 'Айгүл А.', role: 'Ата-ана', text: 'Менің балам ағылшынша сөздерді қызығып үйрене бастады.', avatar: '👩' },
  { name: 'Бекзат М.', role: 'Ата-ана', text: 'Listening тапсырмалары өте ыңғайлы және қызықты.', avatar: '👨' },
  { name: 'Дина С.', role: 'Мұғалім', text: 'Балаларға арналған дизайн өте әдемі және тиімді.', avatar: '👩‍🏫' },
];
