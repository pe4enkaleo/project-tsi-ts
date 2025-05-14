import { ReactNode } from "react"

export const Container = ({children}:{children: ReactNode}) => 
{
    return (
        <div className='bg-gray-200
        md:bg-amber-200 lg:bg-amber-500
        w-[100%] h-[calc(100vh-100px)] m-auto
        mt-[100px] rounded-2x1 shadow'>
            {children}
        </div>
    )
}