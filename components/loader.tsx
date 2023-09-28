import { FC } from "react"
import '@/styles/loader.style.css'

export const Loader: FC = () => {
    return (
        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}