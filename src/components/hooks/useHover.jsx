import {useEffect, useState, useRef} from 'react'

export default function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter(){
        setHovered(true)
    }
    function leave(){
        setHovered(false)
    }

    function eventList(){
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', leave)
    
        return () => {   
        ref.current.removeEventListener('mouseenter', enter)
        ref.current.removeEventListener('mouseleave', leave)
        }  
    }
    useEffect(() => {
        eventList()
    }, [])

    return [hovered, ref]

}
//useRef - used to keep values of a propertiesfor the entire function 