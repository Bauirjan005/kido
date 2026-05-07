import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Volume2, CheckCircle, Circle, Menu, X, Zap } from 'lucide-react';
import { courses, coursesDetail, defaultCourseDetail } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const speakWord = (text) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 0.85;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
};

// ── Confetti Toast ────────────────────────────────────────────────
function PointsParticle({ visible }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 animate-pop-in">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-7 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-black text-lg">
          <Zap size={22} className="fill-yellow-300 text-yellow-300" />
          <div>
            <p className="text-sm font-bold text-green-100">Жарайсың! 🎉</p>
            <p>+10 ұпай қосылды!</p>
          </div>
        </div>
      </div>
      {['🌟','⭐','✨','🎉','🎊','💫'].map((e, i) => (
        <div
          key={i}
          className="absolute text-3xl"
          style={{
            left: `${15 + i * 14}%`,
            top: '30%',
            animation: 'confettiFall 1.2s ease-out forwards',
            animationDelay: `${i * 80}ms`,
          }}
        >
          {e}
        </div>
      ))}
    </div>
  );
}

// ── Progress bar ───────────────────────────────────────────────────
function LessonProgressBar({ current, total }) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 rounded-full transition-all duration-700 ease-out relative"
          style={{ width: `${pct}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
        </div>
      </div>
      <span className="text-xs font-black text-blue-600 whitespace-nowrap min-w-[36px] text-right">{pct}%</span>
    </div>
  );
}

// ── Vocabulary Card (FIXED flip — no mirror text) ─────────────────
function VocabularyLesson({ card, onPrev, onNext, isFirst, isLast, onComplete }) {
  const [flipped, setFlipped] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [awarded, setAwarded] = useState(false);

  useEffect(() => { setFlipped(false); setAwarded(false); }, [card.word]);

  const handleSpeak = useCallback(() => {
    setSpeaking(true);
    speakWord(card.word);
    setTimeout(() => setSpeaking(false), 1500);
  }, [card.word]);

  const handleNext = () => {
    if (!awarded) { onComplete(); setAwarded(true); }
    onNext();
  };

  return (
    <div className="flex flex-col items-center gap-8 animate-fade-in-up">
      <div className="text-center">
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-black px-4 py-1.5 rounded-full mb-3 border border-blue-200 uppercase tracking-wide">
          📚 Vocabulary
        </span>
        <h2 className="text-2xl font-black text-gray-800">Жаңа сөзді үйрен</h2>
        <p className="text-gray-400 text-sm mt-1">Картаны басып аударыңыз 👆</p>
      </div>

      {/* ── FIXED 3D Flip Card ── */}
      {/* Step 1: perspective wrapper */}
      <div
        onClick={() => setFlipped(v => !v)}
        className="cursor-pointer w-full max-w-sm select-none"
        style={{ perspective: '1200px' }}
      >
        {/* Step 2: the rotating element — transform-style: preserve-3d */}
        <div
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            position: 'relative',
            width: '100%',
            height: '280px',
          }}
        >
          {/* Step 3 FRONT — backface-visibility: hidden */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              position: 'absolute',
              inset: 0,
            }}
            className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-3 px-6 overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400/20 rounded-full blur-xl" />
            <div className="text-8xl drop-shadow-lg relative z-10">{card.emoji}</div>
            <div className="text-white text-5xl font-black relative z-10 tracking-wide">{card.word}</div>
            <div className="text-blue-200 text-lg font-medium relative z-10">{card.transcription}</div>
            <div className="text-blue-300 text-xs relative z-10 mt-1">аудару үшін басыңыз ↩</div>
          </div>

          {/* Step 4 BACK — rotateY(180deg) pre-applied + backface-visibility: hidden */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',   /* ← KEY FIX: pre-rotate back face */
              position: 'absolute',
              inset: 0,
            }}
            className="bg-gradient-to-br from-orange-400 via-orange-500 to-pink-500 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 px-6 overflow-hidden"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            <div className="text-7xl drop-shadow-lg">{card.emoji}</div>
            <div className="text-white text-4xl font-black">{card.translation}</div>
            <div className="text-white/85 text-base italic text-center px-4">"{card.sentence}"</div>
          </div>
        </div>
      </div>

      {/* Listen button */}
      <button
        onClick={handleSpeak}
        className={`flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:scale-95 ${
          speaking
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/30'
            : 'bg-white border-2 border-blue-200 text-blue-600 hover:border-blue-400 hover:shadow-blue-200'
        }`}
      >
        <Volume2 size={18} className={speaking ? 'animate-pulse' : 'animate-pulse text-blue-500'} />
        {speaking ? '🔊 Айтылуда...' : '🔊 Тыңдау'}
      </button>

      <div className="flex gap-4 w-full max-w-sm">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-gray-200 font-bold text-sm text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft size={18} /> Алдыңғы
        </button>
        <button
          onClick={handleNext}
          disabled={isLast}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 font-bold text-sm text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all duration-200"
        >
          Келесі <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

// ── Listening Lesson ───────────────────────────────────────────────
function ListeningLesson({ card, onPrev, onNext, isFirst, isLast, onComplete }) {
  const [playing, setPlaying] = useState(false);
  const [awarded, setAwarded] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    speakWord(card.sentence);
    setTimeout(() => setPlaying(false), 3000);
    if (!awarded) { onComplete(); setAwarded(true); }
  };

  return (
    <div className="flex flex-col items-center gap-8 animate-fade-in-up">
      <div className="text-center">
        <span className="inline-block bg-sky-100 text-sky-600 text-xs font-black px-4 py-1.5 rounded-full mb-3 border border-sky-200 uppercase tracking-wide">
          🎧 Listening
        </span>
        <h2 className="text-2xl font-black text-gray-800">Мұқият тыңдаңыз</h2>
        <p className="text-gray-400 text-sm mt-1">Сөйлемді тыңдап, қайталаңыз</p>
      </div>

      <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl w-full max-w-sm p-8 flex flex-col items-center gap-5 border-2 border-sky-200 shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-7xl hover:scale-110 transition-transform cursor-default">{card.emoji}</div>
        <p className="text-gray-700 text-xl font-bold text-center">"{card.sentence}"</p>
        <p className="text-gray-400 text-sm font-medium">{card.translation}</p>
      </div>

      <button
        onClick={handlePlay}
        className={`flex items-center gap-2.5 px-9 py-4 rounded-2xl font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 active:scale-95 ${
          playing
            ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-sky-500/30'
            : 'bg-white border-2 border-sky-300 text-sky-600 hover:border-sky-500 hover:shadow-sky-200'
        }`}
      >
        <Volume2 size={18} className="animate-pulse" />
        {playing ? '🎧 Ойнатылуда...' : '🎧 Аудиоды тыңдау'}
      </button>

      <div className="flex gap-4 w-full max-w-sm">
        <button onClick={onPrev} disabled={isFirst} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-gray-200 font-bold text-sm text-gray-600 hover:border-sky-300 hover:text-sky-600 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
          <ChevronLeft size={18} /> Алдыңғы
        </button>
        <button onClick={onNext} disabled={isLast} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 font-bold text-sm text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all">
          Келесі <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

// ── Quiz ──────────────────────────────────────────────────────────
function QuizLesson({ question, onPrev, onNext, isFirst, isLast, onComplete }) {
  const [selected, setSelected] = useState(null);
  const answered = selected !== null;
  const correct = answered && question.options[selected]?.correct;

  useEffect(() => { setSelected(null); }, [question]);

  const handleSelect = (i) => {
    if (answered) return;
    setSelected(i);
    if (question.options[i]?.correct) onComplete();
  };

  return (
    <div className="flex flex-col items-center gap-8 animate-fade-in-up">
      <div className="text-center">
        <span className="inline-block bg-green-100 text-green-600 text-xs font-black px-4 py-1.5 rounded-full mb-3 border border-green-200 uppercase tracking-wide">
          🎮 Quiz Ойыны
        </span>
        <h2 className="text-2xl font-black text-gray-800 mb-2">{question.question}</h2>
        <p className="text-gray-400 text-sm">Дұрыс жауапты таңдаңыз</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {question.options.map((opt, i) => {
          let base = 'border-2 border-gray-200 bg-white';
          let extra = 'hover:border-blue-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer active:scale-95';
          if (answered) {
            if (opt.correct) { base = 'border-2 border-green-400 bg-green-50 shadow-green-200 shadow-lg'; extra = 'cursor-default scale-105'; }
            else if (i === selected) { base = 'border-2 border-red-400 bg-red-50'; extra = 'cursor-default'; }
            else { base = 'border-2 border-gray-100 bg-gray-50 opacity-50'; extra = 'cursor-default'; }
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`${base} ${extra} rounded-3xl p-5 flex flex-col items-center gap-2 font-bold text-gray-700 transition-all duration-300`}
            >
              <span className={`text-5xl transition-all duration-300 ${answered && opt.correct ? 'scale-125 animate-pop-in' : ''}`}>{opt.emoji}</span>
              <span className="text-base">{opt.label}</span>
              {answered && opt.correct && <span className="text-green-500 text-xl animate-pop-in">✅</span>}
              {answered && i === selected && !opt.correct && <span className="text-red-500 text-xl">❌</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className={`w-full max-w-md px-6 py-4 rounded-2xl text-center font-bold text-sm animate-scale-in ${
          correct
            ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200'
            : 'bg-red-50 text-red-600 border border-red-200'
        }`}>
          {correct ? '🎉 Керемет! Дұрыс жауап! +10 ұпай!' : '😅 Қате болды. Жасыл — дұрыс жауап.'}
        </div>
      )}

      <div className="flex gap-4 w-full max-w-md">
        <button onClick={onPrev} disabled={isFirst} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-gray-200 font-bold text-sm text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
          <ChevronLeft size={18} /> Алдыңғы
        </button>
        <button onClick={onNext} disabled={isLast} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 font-bold text-sm text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all">
          Келесі <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────
export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addPoints } = useAuth();
  const courseId = Number(id);

  const course = courses.find(c => c.id === courseId) || courses[0];
  const detail = coursesDetail[courseId] || defaultCourseDetail;

  const [activeLesson, setActiveLesson] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const allLessons = detail.modules.flatMap(m => m.lessons);
  const totalLessons = allLessons.length;
  const currentLesson = allLessons[activeLesson];
  const vocabCard = detail.vocabulary[activeLesson % detail.vocabulary.length];
  const quizQ = detail.quiz[activeLesson % detail.quiz.length];

  const handleComplete = useCallback(() => {
    addPoints(10);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  }, [addPoints]);

  const goNext = () => setActiveLesson(i => Math.min(totalLessons - 1, i + 1));
  const goPrev = () => setActiveLesson(i => Math.max(0, i - 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 flex flex-col">
      <PointsParticle visible={showToast} />

      {/* Top bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-4 shadow-sm">
        <button
          onClick={() => navigate('/courses')}
          className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 font-semibold text-sm transition-all hover:-translate-x-0.5 shrink-0"
        >
          <ChevronLeft size={18} /> Каталогқа оралу
        </button>

        <div className="flex-1 hidden sm:flex items-center gap-3 min-w-0">
          <span className="text-2xl shrink-0">{course.emoji}</span>
          <div className="min-w-0">
            <h1 className="font-black text-gray-800 text-base leading-tight truncate">{detail.title}</h1>
            <p className="text-gray-400 text-xs">{activeLesson + 1} / {totalLessons} сабақ</p>
          </div>
        </div>

        <div className="hidden sm:block flex-1 max-w-xs">
          <LessonProgressBar current={activeLesson} total={totalLessons} />
        </div>

        <button
          onClick={() => setSidebarOpen(v => !v)}
          className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition text-gray-600 shrink-0"
        >
          <div className={`transition-transform duration-300 ${sidebarOpen ? 'rotate-90' : ''}`}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 fixed md:relative z-40 md:z-auto
          w-72 bg-white border-r border-gray-100 flex flex-col
          h-[calc(100vh-56px)] md:h-auto shadow-2xl md:shadow-none
          transition-transform duration-300 ease-in-out
        `}>
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-transparent">
            <h2 className="font-black text-gray-800 text-sm">📋 Сабақтар тізімі</h2>
          </div>
          <div className="overflow-y-auto flex-1 p-3">
            {detail.modules.map(mod => (
              <div key={mod.id} className="mb-5">
                <p className="text-xs font-black text-gray-400 uppercase tracking-wider px-2 mb-2">{mod.title}</p>
                {mod.lessons.map(lesson => {
                  const idx = allLessons.findIndex(l => l.id === lesson.id);
                  const isActive = idx === activeLesson;
                  const isDone = lesson.done || idx < activeLesson;
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => { setActiveLesson(idx); setSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-3 rounded-2xl flex items-center gap-3 mb-1 transition-all duration-200 text-sm font-semibold ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/20'
                          : isDone
                          ? 'text-gray-400 hover:bg-gray-50'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="shrink-0">
                        {isDone
                          ? <CheckCircle size={16} className={isActive ? 'text-white' : 'text-green-500'} />
                          : <Circle size={16} className={isActive ? 'text-white' : 'text-gray-300'} />
                        }
                      </div>
                      <span className="flex-1 leading-tight">{lesson.title}</span>
                      <span className="text-base shrink-0">
                        {lesson.type === 'vocabulary' ? '📚' : lesson.type === 'game' ? '🎮' : '🎧'}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </aside>

        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/30 z-30 md:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        )}

        <main className="flex-1 overflow-y-auto p-6 md:p-12 flex items-start justify-center">
          <div className="w-full max-w-lg">
            {currentLesson?.type === 'vocabulary' && (
              <VocabularyLesson key={`vocab-${activeLesson}`} card={vocabCard} onPrev={goPrev} onNext={goNext} isFirst={activeLesson === 0} isLast={activeLesson === totalLessons - 1} onComplete={handleComplete} />
            )}
            {currentLesson?.type === 'listening' && (
              <ListeningLesson key={`listen-${activeLesson}`} card={vocabCard} onPrev={goPrev} onNext={goNext} isFirst={activeLesson === 0} isLast={activeLesson === totalLessons - 1} onComplete={handleComplete} />
            )}
            {currentLesson?.type === 'game' && (
              <QuizLesson key={`quiz-${activeLesson}`} question={quizQ} onPrev={goPrev} onNext={goNext} isFirst={activeLesson === 0} isLast={activeLesson === totalLessons - 1} onComplete={handleComplete} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
