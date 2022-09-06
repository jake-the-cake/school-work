import { ReactNode } from "react"

interface MainPageCardProps {
  content: ReactNode,
  title: string,
  subtitle?: string
}

export const MainPageCard = ({content, title, subtitle}: MainPageCardProps) => {
  console.log(content)
  return (
    <div className="card bg-info m-auto mt-2" style={{width: '90vw'}}>
      <>
        <h1>{ title }</h1>
        { subtitle && <h3>{subtitle}</h3> }
        {content}
      </>
    </div>
  )
}