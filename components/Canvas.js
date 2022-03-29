import {useRef, useEffect} from 'react'

export default function Canvas(props) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.width = 90
        canvas.height = 175
        
        let binary = '01'
        binary = binary.split('')

        const fontSize = 15
        const columns = 1500 / fontSize

        let drops = []

        for (let i = 0; i < columns; i++) {
            drops[i] = 1
        }

        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)'
            context.fillRect(0, 0, 150, 200)
            
            context.fillStyle = '#f00'
            context.font = fontSize + 'px arial'
    
            for (let i = 0; i < drops.length; i++) {
                const text = binary[Math.floor(Math.random() * binary.length)]
    
                context.fillText(text, i * fontSize, drops[i] * fontSize)
    
                if (drops[i] * fontSize > 1500 && Math.random() > 0.975) {
                    drops[i] = 0
                }
    
                drops[i]++
            }
        }

        setInterval(draw, 10)
        
    }, [])

    return <canvas id={"can"} ref={canvasRef} {...props}></canvas>
}