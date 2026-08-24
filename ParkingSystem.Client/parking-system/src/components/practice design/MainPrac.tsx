import React, { type ReactNode } from 'react'
import SidePrac from './SidePrac'


interface LayoutProps {
    children: ReactNode;
}

const MainPrac = ({ children }: LayoutProps) => {
    return (
        <>

           <SidePrac />



            <div className="p-4 sm:ml-64">
                {children}
            </div>

        </>
    )
}

export default MainPrac
