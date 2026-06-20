
interface Props {
  titre:string,
  color?: string
}

const TitleSection = ({titre, color='text-gray-700'}: Props) => {
  return (
    <div>
        <h1 className={`text-5xl font-extrabold text-gray-700 text-center ${color}`}>{titre}</h1>
    </div>
  )
}

export default TitleSection