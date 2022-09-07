import { ReactNode } from "react"

interface MainPageCardProps {
  content: ReactNode,
  title: string,
  subtitle?: string
}

export const MainPageCard = ({content, title, subtitle}: MainPageCardProps) => {
  console.log(content)
  return (
    <div className="card bg-light m-auto mt-2 mb-3 align-items-center" style={{width: '90vw'}}>
      <>
        <h1 className="text-primary page-title mt-2">{ title }</h1>
        { subtitle && <h3 className="text-success page-subtitle">{subtitle}</h3> }
        <div className="mt-1 mb-3 content">
          {content}
        </div>
      </>
    </div>
  )
}