import type { SkillsProps } from "../type/Skills"


const SkillCard = ({percentage, title, description}: SkillsProps) => {
   
  return (
    <div className="text-center flex flex-col items-center my-10">
        <div className="w-30">
            <svg viewBox="0 0 36 36" className="w-full h-full  shrink-0">
                {/* <circle
                    cx='50'
                    cy='50'
                    className='stroke-gray-200'
                    strokeWidth='8'
                    fill="transparent"
                />
                <circle
                    cx='50'
                    cy='50'
                    className='stroke-green-500 transition-all duration-500 ease-in-out'
                    strokeWidth='8'
                    fill="transparent"
                    strokeDasharray={circumFerence}
                    strokeLinecap="round"
                    strokeDashoffset={strokeDashoffset}
                /> */}
                <path d="M18 2a16 16 0 010 32 16 16 0 010-32" fill="#fff" className="animate-[progress_1s_forwards]"
                strokeLinecap="round"
                strokeWidth='2.8'
                stroke="#F8F8F8"
                strokeDasharray='100'
                />
                <path d="M18 2a16 16 0 010 32 16 16 0 010-32" fill="#fff" className="animate-[progress_1s_forwards]"
                strokeLinecap="round"
                strokeWidth='2.8'
                stroke="#5BC86D"
                strokeDasharray={`${percentage}, 100`}
                />
                
                <text
                x='50%'
                y='50%'
                className="text-xs font-normal relative"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#5BC86D"
                >{percentage}</text>
            </svg>
            
        </div>
        <div>
            <h2 className="font-bold text-2xl my-10">{title}</h2>
            <p className="opacity-50">{description}</p>
        </div>
    </div>
  )
}

export default SkillCard