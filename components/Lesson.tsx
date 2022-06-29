import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'
import Link from 'next/link';
import { useRouter } from 'next/router';
// import enUS from 'date-fns/esm/locale/en-US/index.js';

interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}


export default function Lesson(props: LessonProps) {
    const {
        query: {slug}} = useRouter()
    

    const isLessonAvaible = isPast(props.availableAt);
    const availableDataFormatted = format(props.availableAt, "EEEE' ◦ 'd' 'MMMM' ◦ 'k'h'mm", {
        // locale: ptBR
    })

    const isActiveLesson = slug == props.slug;

  return (
        <Link  href={`/${props.slug}`} >
            <div className="cursor-pointer group">

            <span className="text-gray-300 capitalize">
            {availableDataFormatted}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson? 'bg-green-500' :'' }`}>
            <header className="flex items-center justify-between">
                {isLessonAvaible? (
                    <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson? 'text-white' : 'text-blue-500' }`}>
                    <CheckCircle size={20}/>
                    Released content
                </span>
                ): (
                    <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                    <Lock size={20}/>
                    Soon
                </span>
                )}
                
                <span className={`text-xs rounded py-[0.125rem] px-2 text-white font-bold border ${isActiveLesson ? 'border-white' : 'border-green-300'}`}>
                    {props.type == 'live' ? 'live' : 'class'}
                </span>
            </header>

            <strong className={`mt-5 block ${isActiveLesson? 'text-white' : 'text-gray-200'}`}>
                {props.title}
            </strong>
            </div>
            </div>
        </Link>
  )
}
