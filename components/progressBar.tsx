import { FC } from "react";

type Tprops = {
    length: number;
    current: number;
}

export const ProgressBar: FC<Tprops> = ({length, current}) => {

    return (
        <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-full h-3">
                <div className="h-full bg-oukonva-orange rounded-full" style={{width: `${(current*100)/length}%`, transition: "all 0.3s"}} />
            </div>
            <p className="mt-2">{`${current}/${length}`}</p>
        </div>
    )
}