
import cn from 'classnames'
import styles from './Button.module.css'
type Props={
    children : string
    className?:string
    outlined?:boolean
    fullWidth?:boolean
}

const Button =({children,className='',outlined,fullWidth}:Props)=>{
    return(
        <button className={cn(styles.button, className,{
            [styles.fullWidth]:fullWidth,
            [styles.outlined]:outlined,
        })}>
            {children}
        </button>
    )
}
export default Button