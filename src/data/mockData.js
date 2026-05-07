export const mockUser = {
  id: 1,
  name: 'Aibek Sansen',
  email: 'aibek@kido.kz',
  avatar: '🦁',
  totalPoints: 0,
  completedLessons: 0,
  courseProgress: 0,
  currentCourse: 'Animals Vocabulary',
  joinDate: 'Мамыр 2025',
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
  { id: 3, emoji: '🎧', title: 'Daily English Listening', description: 'Күнделікті аудио диалогтар арқылы listening дамыт.', tag: 'Listening', level: 'Beginner', lessons: 8, duration: '40 мин', color: 'from-sky-400 to-sky-600', bg: 'bg-sky-50', rating: 4.7, students: 410 },
  { id: 4, emoji: '🗣️', title: 'Speaking Time', description: 'Қарапайым сөйлемдерді айту және қайталау.', tag: 'Speaking', level: 'Beginner', lessons: 8, duration: '35 мин', color: 'from-purple-400 to-purple-600', bg: 'bg-purple-50', rating: 4.9, students: 195 },
  { id: 5, emoji: '🎮', title: 'Mini Quiz Game', description: 'Ойын арқылы жаңа сөздерді қайталап бекіт.', tag: 'Games', level: 'Beginner', lessons: 8, duration: '25 мин', color: 'from-green-400 to-green-600', bg: 'bg-green-50', rating: 5.0, students: 560 },
  { id: 6, emoji: '🏠', title: 'Daily Routine', description: 'Күнделікті іс-әрекеттерді ағылшынша сипатта.', tag: 'Speaking', level: 'Beginner', lessons: 8, duration: '45 мин', color: 'from-rose-400 to-rose-600', bg: 'bg-rose-50', rating: 4.6, students: 230 },
  { id: 7, emoji: '🎵', title: 'Songs & Stories', description: 'Ағылшын тілін ән мен ертегі арқылы үйрен.', tag: 'Songs & Stories', level: 'Beginner', lessons: 8, duration: '30 мин', color: 'from-pink-400 to-pink-600', bg: 'bg-pink-50', rating: 4.8, students: 375 },
  { id: 8, emoji: '🍎', title: 'Food & Fruits', description: 'Тамақ атауларын сурет пен ойын арқылы есте сақта.', tag: 'Vocabulary', level: 'Beginner', lessons: 8, duration: '35 мин', color: 'from-amber-400 to-amber-600', bg: 'bg-amber-50', rating: 4.7, students: 290 },
];

function makeModules(lessons) {
  return [
    {
      id: 1,
      title: '1-модуль: Негізгі сөздер',
      lessons: [
        { id: 1, title: lessons[0], type: 'vocabulary', done: false },
        { id: 2, title: lessons[1], type: 'vocabulary', done: false },
        { id: 3, title: 'Тыңдау практикасы', type: 'listening', done: false },
        { id: 4, title: 'Ойын тапсырмасы — 1', type: 'game', done: false },
      ],
    },
    {
      id: 2,
      title: '2-модуль: Жаттығу',
      lessons: [
        { id: 5, title: lessons[2], type: 'vocabulary', done: false },
        { id: 6, title: lessons[3], type: 'vocabulary', done: false },
        { id: 7, title: 'Тыңдау практикасы — 2', type: 'listening', done: false },
        { id: 8, title: 'Ойын тапсырмасы — 2', type: 'game', done: false },
      ],
    },
  ];
}

export const coursesDetail = {
  // ── 1: Animals Vocabulary ──────────────────────────────────────
  1: {
    title: 'Animals Vocabulary',
    emoji: '🐘',
    modules: makeModules(['Dog & Cat', 'Cow & Horse', 'Lion & Tiger', 'Elephant & Giraffe']),
    vocabulary: [
      { word: 'Dog', transcription: '/dɒɡ/', translation: 'Ит', emoji: '🐕', sentence: 'I have a dog.' },
      { word: 'Cat', transcription: '/kæt/', translation: 'Мысық', emoji: '🐱', sentence: 'The cat is cute.' },
      { word: 'Elephant', transcription: '/ˈelɪfənt/', translation: 'Піл', emoji: '🐘', sentence: 'The elephant is big.' },
      { word: 'Lion', transcription: '/ˈlaɪən/', translation: 'Арыстан', emoji: '🦁', sentence: 'The lion is strong.' },
    ],
    quiz: [
      {
        question: 'Қайсысы "Ит"?',
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

  // ── 2: Colors & Numbers ────────────────────────────────────────
  2: {
    title: 'Colors & Numbers',
    emoji: '🎨',
    modules: makeModules(['Red & Blue', 'Green & Yellow', 'One, Two, Three', 'Four — Ten']),
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

  // ── 3: Daily English Listening ─────────────────────────────────
  3: {
    title: 'Daily English Listening',
    emoji: '🎧',
    modules: makeModules(['Hello & Goodbye', 'How are you?', 'Good morning!', 'Thank you!']),
    vocabulary: [
      { word: 'Hello', transcription: '/həˈloʊ/', translation: 'Сәлем', emoji: '👋', sentence: 'Hello! How are you?' },
      { word: 'How are you', transcription: '/haʊ ɑːr juː/', translation: 'Қалыңыз қалай?', emoji: '🙂', sentence: 'Hello! How are you? I am fine.' },
      { word: 'Good morning', transcription: '/ɡʊd ˈmɔːrnɪŋ/', translation: 'Қайырлы таң', emoji: '🌅', sentence: 'Good morning! Have a nice day.' },
      { word: 'Thank you', transcription: '/θæŋk juː/', translation: 'Рақмет', emoji: '🙏', sentence: 'Thank you very much!' },
    ],
    quiz: [
      {
        question: '"Сәлем" дегені қандай сөз?',
        options: [
          { emoji: '👋', label: 'Hello', correct: true },
          { emoji: '🙏', label: 'Thank you', correct: false },
          { emoji: '🌅', label: 'Good morning', correct: false },
          { emoji: '👋', label: 'Goodbye', correct: false },
        ],
      },
      {
        question: '"Рақмет" ағылшынша қалай?',
        options: [
          { emoji: '👋', label: 'Hello', correct: false },
          { emoji: '🙂', label: 'How are you', correct: false },
          { emoji: '🙏', label: 'Thank you', correct: true },
          { emoji: '🌅', label: 'Good morning', correct: false },
        ],
      },
    ],
  },

  // ── 4: Speaking Time ───────────────────────────────────────────
  4: {
    title: 'Speaking Time',
    emoji: '🗣️',
    modules: makeModules(['I like apples', 'My name is...', 'I am happy', 'I play football']),
    vocabulary: [
      { word: 'I like apples', transcription: '/aɪ laɪk ˈæpəlz/', translation: 'Мен алманы ұнатамын', emoji: '🍎', sentence: 'I like apples. They are sweet.' },
      { word: 'My name is', transcription: '/maɪ neɪm ɪz/', translation: 'Менің атым...', emoji: '🏷️', sentence: 'My name is Aibek. Nice to meet you!' },
      { word: 'I am happy', transcription: '/aɪ æm ˈhæpi/', translation: 'Мен бақыттымын', emoji: '😊', sentence: 'I am happy today!' },
      { word: 'I play football', transcription: '/aɪ pleɪ ˈfʊtbɔːl/', translation: 'Мен футбол ойнаймын', emoji: '⚽', sentence: 'I play football every day.' },
    ],
    quiz: [
      {
        question: '"Мен бақыттымын" ағылшынша?',
        options: [
          { emoji: '😊', label: 'I am happy', correct: true },
          { emoji: '😢', label: 'I am sad', correct: false },
          { emoji: '🍎', label: 'I like apples', correct: false },
          { emoji: '⚽', label: 'I play football', correct: false },
        ],
      },
      {
        question: '"Менің атым" ағылшынша қалай?',
        options: [
          { emoji: '😊', label: 'I am happy', correct: false },
          { emoji: '🏷️', label: 'My name is', correct: true },
          { emoji: '🍎', label: 'I like apples', correct: false },
          { emoji: '⚽', label: 'I play football', correct: false },
        ],
      },
    ],
  },

  // ── 5: Mini Quiz Game ──────────────────────────────────────────
  5: {
    title: 'Mini Quiz Game',
    emoji: '🎮',
    modules: makeModules(['Сөздерді қайталау', 'Жануарлар — quiz', 'Түстер — quiz', 'Тамақ — quiz']),
    vocabulary: [
      { word: 'Happy', transcription: '/ˈhæpi/', translation: 'Қуанышты', emoji: '😊', sentence: 'I am happy!' },
      { word: 'Big', transcription: '/bɪɡ/', translation: 'Үлкен', emoji: '🐘', sentence: 'The elephant is big.' },
      { word: 'Small', transcription: '/smɔːl/', translation: 'Кішкентай', emoji: '🐭', sentence: 'The mouse is small.' },
      { word: 'Fast', transcription: '/fɑːst/', translation: 'Жылдам', emoji: '🐆', sentence: 'The cheetah is fast.' },
    ],
    quiz: [
      {
        question: '"Үлкен" ағылшынша?',
        options: [
          { emoji: '🐭', label: 'Small', correct: false },
          { emoji: '🐘', label: 'Big', correct: true },
          { emoji: '🐆', label: 'Fast', correct: false },
          { emoji: '😊', label: 'Happy', correct: false },
        ],
      },
      {
        question: '"Жылдам" ағылшынша?',
        options: [
          { emoji: '🐆', label: 'Fast', correct: true },
          { emoji: '🐘', label: 'Big', correct: false },
          { emoji: '🐭', label: 'Small', correct: false },
          { emoji: '😊', label: 'Happy', correct: false },
        ],
      },
    ],
  },

  // ── 6: Daily Routine ───────────────────────────────────────────
  6: {
    title: 'Daily Routine',
    emoji: '🏠',
    modules: makeModules(['Wake up & Brush teeth', 'Go to school', 'Read a book', 'Go to sleep']),
    vocabulary: [
      { word: 'Wake up', transcription: '/weɪk ʌp/', translation: 'Ояну', emoji: '⏰', sentence: 'I wake up at 7 o\'clock.' },
      { word: 'Brush teeth', transcription: '/brʌʃ tiːθ/', translation: 'Тіс тазалау', emoji: '🪥', sentence: 'I brush my teeth every morning.' },
      { word: 'Go to school', transcription: '/ɡoʊ tə skuːl/', translation: 'Мектепке бару', emoji: '🏫', sentence: 'I go to school at 8 AM.' },
      { word: 'Read a book', transcription: '/riːd ə bʊk/', translation: 'Кітап оқу', emoji: '📖', sentence: 'I read a book before bed.' },
    ],
    quiz: [
      {
        question: '"Ояну" ағылшынша?',
        options: [
          { emoji: '⏰', label: 'Wake up', correct: true },
          { emoji: '🪥', label: 'Brush teeth', correct: false },
          { emoji: '🏫', label: 'Go to school', correct: false },
          { emoji: '📖', label: 'Read a book', correct: false },
        ],
      },
      {
        question: '"Кітап оқу" ағылшынша?',
        options: [
          { emoji: '⏰', label: 'Wake up', correct: false },
          { emoji: '🏫', label: 'Go to school', correct: false },
          { emoji: '📖', label: 'Read a book', correct: true },
          { emoji: '🪥', label: 'Brush teeth', correct: false },
        ],
      },
    ],
  },

  // ── 7: Songs & Stories ─────────────────────────────────────────
  7: {
    title: 'Songs & Stories',
    emoji: '🎵',
    modules: makeModules(['King & Queen', 'Magic & Castle', 'Dragon & Hero', 'Forest & River']),
    vocabulary: [
      { word: 'King', transcription: '/kɪŋ/', translation: 'Патша', emoji: '👑', sentence: 'The king lives in a castle.' },
      { word: 'Queen', transcription: '/kwiːn/', translation: 'Патшайым', emoji: '👸', sentence: 'The queen is beautiful.' },
      { word: 'Magic', transcription: '/ˈmædʒɪk/', translation: 'Сиқыр', emoji: '✨', sentence: 'Magic makes dreams come true.' },
      { word: 'Castle', transcription: '/ˈkæsəl/', translation: 'Сарай', emoji: '🏰', sentence: 'The castle is very old.' },
    ],
    quiz: [
      {
        question: '"Патша" ағылшынша?',
        options: [
          { emoji: '👑', label: 'King', correct: true },
          { emoji: '👸', label: 'Queen', correct: false },
          { emoji: '✨', label: 'Magic', correct: false },
          { emoji: '🏰', label: 'Castle', correct: false },
        ],
      },
      {
        question: '"Сарай" ағылшынша?',
        options: [
          { emoji: '👑', label: 'King', correct: false },
          { emoji: '✨', label: 'Magic', correct: false },
          { emoji: '👸', label: 'Queen', correct: false },
          { emoji: '🏰', label: 'Castle', correct: true },
        ],
      },
    ],
  },

  // ── 8: Food & Fruits ───────────────────────────────────────────
  8: {
    title: 'Food & Fruits',
    emoji: '🍎',
    modules: makeModules(['Apple & Banana', 'Orange & Grape', 'Bread & Milk', 'Rice & Egg']),
    vocabulary: [
      { word: 'Apple', transcription: '/ˈæpəl/', translation: 'Алма', emoji: '🍎', sentence: 'I eat an apple every day.' },
      { word: 'Banana', transcription: '/bəˈnɑːnə/', translation: 'Банан', emoji: '🍌', sentence: 'Monkeys like bananas.' },
      { word: 'Milk', transcription: '/mɪlk/', translation: 'Сүт', emoji: '🥛', sentence: 'I drink milk every morning.' },
      { word: 'Bread', transcription: '/bred/', translation: 'Нан', emoji: '🍞', sentence: 'The bread is fresh and warm.' },
    ],
    quiz: [
      {
        question: '"Алма" ағылшынша?',
        options: [
          { emoji: '🍌', label: 'Banana', correct: false },
          { emoji: '🍎', label: 'Apple', correct: true },
          { emoji: '🍊', label: 'Orange', correct: false },
          { emoji: '🍇', label: 'Grape', correct: false },
        ],
      },
      {
        question: '"Сүт" ағылшынша?',
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

export const defaultCourseDetail = coursesDetail[1];

export const reviews = [
  { name: 'Айгүл А.', role: 'Ата-ана', text: 'Менің балам ағылшынша сөздерді қызығып үйрене бастады.', avatar: '👩' },
  { name: 'Бекзат М.', role: 'Ата-ана', text: 'Listening тапсырмалары өте ыңғайлы және қызықты.', avatar: '👨' },
  { name: 'Дина С.', role: 'Мұғалім', text: 'Балаларға арналған дизайн өте әдемі және тиімді.', avatar: '👩‍🏫' },
];
