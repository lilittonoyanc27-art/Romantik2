import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Music, 
  Mic2, 
  Disc, 
  Guitar, 
  Drum, 
  Wind, 
  Heart, 
  Anchor, 
  ShieldCheck, 
  Target, 
  Coffee,
  Volume2
} from "lucide-react";

interface LyricSection {
  type: "verse" | "chorus" | "bridge" | "instrumental";
  text: string[];
  icon?: React.ReactNode;
}

const LYRICS: LyricSection[] = [
  {
    type: "verse",
    icon: <Wind className="w-6 h-6" />,
    text: [
      "Мой самолёт вошёл в пике –",
      "Крутые сделав виражи,",
      "Чем больше звёзд на коньяке –",
      "Внизу тем ближе миражи."
    ]
  },
  {
    type: "bridge",
    text: [
      "Ты если был романтиком –",
      "В глазах людей стал фантиком,",
      "Для них всё чёрно – белое,",
      "Им дай скандалы… - И так далее."
    ]
  },
  {
    type: "verse",
    icon: <Coffee className="w-6 h-6" />,
    text: [
      "И я не смею в чём-то лгать,",
      "По мне-так вовсе смысла нет,",
      "Но мне интим не предлагать –",
      "Я так воспитан с малых лет."
    ]
  },
  {
    type: "bridge",
    text: [
      "Пусть я вам нравлюсь, но, увы,",
      "Я не отдамся без любви,",
      "Я в этом непоколебим",
      "И принципиален… - И так далее."
    ]
  },
  {
    type: "chorus",
    icon: <Mic2 className="w-8 h-8" />,
    text: [
      "Припев:",
      "А люди слишком много ценят фантик,",
      "Съедят конфетку, ну, а фантик мнут,",
      "И если вы в душе ещё романтик,",
      "То люди вас, конечно не поймут."
    ]
  },
  {
    type: "verse",
    icon: <Guitar className="w-6 h-6" />,
    text: [
      "Могу носить вас на руках,",
      "Но вы сказали: - Нет, не сметь!",
      "Но вот, ходить на каблуках –",
      "Эт тоже надо бы уметь."
    ]
  },
  {
    type: "bridge",
    text: [
      "Чтоб был прямым всегда ваш путь,",
      "Потренируйтесь хоть чуть-чуть,",
      "Ну, чтобы криво не ходить,",
      "Чтоб не упали… - И так далее."
    ]
  },
  {
    type: "verse",
    icon: <Disc className="w-6 h-6" />,
    text: [
      "Она при выборе меня",
      "Ушла от норм от дедовских,",
      "Считала лайки все три дня",
      "Просмотров интернетовских.",
      "Потом решила: подхожу!",
      "А я теперь с ума схожу,",
      "Она забыла про любовь,",
      "Про все детали… - И так далее."
    ]
  },
  {
    type: "chorus",
    text: [
      "Припев:",
      "А люди слишком много ценят фантик,",
      "Съедят конфетку, ну, а фантик мнут,",
      "И если вы в душе ещё романтик,",
      "То люди вас, конечно не поймут."
    ]
  },
  {
    type: "verse",
    icon: <ShieldCheck className="w-6 h-6" />,
    text: [
      "Мне вновь на истребителе",
      "Пробить путь к чести хочется,",
      "Но люди – потребители",
      "Своё создали общество,",
      "Где всем плевать на личности,",
      "Царит культ неприличности,",
      "Где чем тупее – тем смешней",
      "И тем скандальней… - И так далее."
    ]
  },
  {
    type: "verse",
    icon: <Target className="w-6 h-6" />,
    text: [
      "И так, внимание, экипаж,",
      "Прицел – приличной дальности,",
      "В чём самый главный принцип ваш?",
      "В отсутствии принципиальности.",
      "Ну вот, отлично вижу цель,",
      "Осталось навести прицел,",
      "Надеюсь, в яблочко попасть,",
      "Жму на педали… - И так далее."
    ]
  },
  {
    type: "chorus",
    text: [
      "Припев:",
      "А люди слишком много ценят фантик,",
      "Съедят конфетку, ну, а фантик мнут,",
      "И если вы в душе ещё романтик,",
      "То люди вас, конечно не поймут."
    ]
  },
  {
    type: "instrumental",
    icon: <Music className="w-10 h-10 text-brass animate-pulse" />,
    text: ["(соло на саксофоне играет в зале...)"]
  },
  {
    type: "verse",
    icon: <Drum className="w-6 h-6" />,
    text: [
      "Упрямство есть крутая вещь,",
      "И в этом нет сомнения,",
      "Ну что же тут поделаешь?",
      "У вас своё есть мнение.",
      "Не любите романтику,",
      "Ваш выбор – лишь по фантику,",
      "Ну, оставайтесь при своём,",
      "Уже достали… - И так далее."
    ]
  },
  {
    type: "verse",
    icon: <Anchor className="w-6 h-6 text-brass/60" />,
    text: [
      "Тебе казалось ты не спал,",
      "Но обнаруживаешь вдруг,",
      "Как не заметил и попал",
      "Ты в заколдованный тот круг.",
      "И если круг ты разорвал,",
      "Чтоб не упасть – держи штурвал,",
      "Здесь все те, кто тебя поймут,",
      "Они нас ждали… - И так далее."
    ]
  },
  {
    type: "chorus",
    icon: <Heart className="w-8 h-8 text-velvet fill-brass shadow-brass" />,
    text: [
      "Припев:",
      "А люди слишком много ценят фантик,",
      "Но я их мнений вовсе не боюсь,",
      "И пусть для них я конченый романтик,",
      "Каким я был – таким и остаюсь!"
    ]
  }
];

const FloatingNote = ({ delay, x, y }: { delay: number, x: string, y: string }) => (
  <motion.div
    initial={{ y: "100vh", opacity: 0, x: x }}
    animate={{ y: "-10vh", opacity: [0, 0.2, 0] }}
    transition={{ duration: 15, delay, repeat: Infinity, ease: "linear" }}
    className="musical-note"
    style={{ left: x, top: y }}
  >
    <Music size={24} />
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen relative sheet-music-container selection:bg-brass selection:text-onyx">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        <FloatingNote delay={0} x="10%" y="80%" />
        <FloatingNote delay={4} x="30%" y="90%" />
        <FloatingNote delay={8} x="70%" y="85%" />
        <FloatingNote delay={12} x="90%" y="70%" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-5 pointer-events-none" />
      </div>

      {/* Progress Bar (Brass Wire) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brass shadow-[0_0_10px_rgba(212,175,55,0.5)] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Header */}
      <header className="relative pt-24 pb-20 text-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="inline-block relative"
        >
          <div className="absolute -inset-8 border border-brass/20 rounded-full animate-spin-slow opacity-20" />
          <div className="absolute -inset-16 border border-brass/10 rounded-full animate-reverse-spin opacity-10" />
          <Mic2 className="w-16 h-16 text-brass mx-auto mb-6 glow-text" />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-script text-7xl md:text-9xl text-brass glow-text mb-2"
        >
          Романтик
        </motion.h1>
        
        <div className="jazz-line w-64 mx-auto my-6" />
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          className="font-serif tracking-[.4em] text-brass/60 uppercase text-xs"
        >
          Symphonic Noir Edition • 1920
        </motion.p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-40 space-y-24">
        {LYRICS.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className={`relative group ${section.type === 'chorus' ? 'max-w-2xl mx-auto' : ''}`}
          >
            {/* Section Indicator */}
            {section.icon && (
              <div className="absolute -left-16 top-0 hidden lg:block opacity-20 group-hover:opacity-60 transition-opacity text-brass">
                {section.icon}
              </div>
            )}

            <div className={`
              ${section.type === 'chorus' ? 'velvet-card p-10 md:p-14 text-center relative overflow-hidden' : ''}
              ${section.type === 'bridge' ? 'pl-8 border-l-2 border-brass/20 italic opacity-70' : ''}
              ${section.type === 'instrumental' ? 'text-center py-10 opacity-60 flex flex-col items-center gap-4' : ''}
            `}>
              {/* Chorus Background Ornament */}
              {section.type === 'chorus' && (
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <Volume2 className="absolute -right-10 -bottom-10 w-40 h-40" />
                </div>
              )}

              {section.text.map((line, lIdx) => (
                <motion.p
                  key={lIdx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: lIdx * 0.1 }}
                  className={`
                    mb-3 font-serif leading-relaxed tracking-wide
                    ${line.startsWith('Припев:') ? 'font-script text-brass text-4xl mb-6 block' : ''}
                    ${section.type === 'chorus' ? 'text-2xl md:text-3xl text-parchment font-semibold italic' : 'text-parchment/80 text-xl md:text-2xl'}
                    ${section.type === 'instrumental' ? 'text-brass/60 font-sans italic text-lg' : ''}
                  `}
                >
                  {line.startsWith('Припев:') ? line.replace('Припев:', '') : line}
                </motion.p>
              ))}

              {section.type === 'instrumental' && (
                <div className="flex gap-2 text-brass/40">
                  <span className="animate-bounce delay-75">♪</span>
                  <span className="animate-bounce delay-150">♫</span>
                  <span className="animate-bounce delay-225">♪</span>
                </div>
              )}
            </div>
          </motion.section>
        ))}
      </main>

      {/* Decorative Footer */}
      <footer className="relative py-20 text-center px-4 bg-onyx">
        <div className="jazz-line w-full absolute top-0" />
        <div className="mb-8 opacity-20 flex justify-center gap-12">
          <Music />
          <Guitar />
          <Drum />
          <Disc />
        </div>
        <p className="font-script text-3xl text-brass mb-2">fin.</p>
        <p className="font-serif text-[10px] text-brass/30 tracking-[.5em] uppercase">
          recorded at the velvet lounge • MCMXX
        </p>
      </footer>
    </div>
  );
}
