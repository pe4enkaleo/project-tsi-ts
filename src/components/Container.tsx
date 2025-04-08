import { ReactNode } from "react"

export const Container = ({children}:{children: ReactNode}) => 
{
    return (
        <div className='bg-gray-200
        md:bg-amber-200 lg:bg-amber-500
        w-[90%] h-[calc(100vh-300px)] m-auto
        mt-[100px] rounded-2x1 shadow'>
            {children}
        </div>
    )
}