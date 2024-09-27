import React, { ReactNode } from 'react'

type HearingProps = {
    children: ReactNode,
    variante?: string
}
const HeatingTitle: React.FC<HearingProps> = ({children, variante}) => {
    const classDefault = 'px-7 py-3 bg-primary uppercase font-bold inline-block'
     
    switch (variante) {
        case "h3":
            
            return (
                <div className='flex items-center justify-center my-5'>
                    <h3 className={` text-sm ${classDefault}`}>
                        {children}
                    </h3>

                </div>
            )
    
        default:    
            return (
                <div className='flex items-center justify-center my-5'>
                    <h3 className={` text-lg ${classDefault}`}>
                        {children}
                    </h3>

                </div>
            )
    }
}

export default HeatingTitle