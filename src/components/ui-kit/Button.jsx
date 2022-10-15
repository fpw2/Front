import clsx from "clsx"

export default function Button({children, edit, className, ...rest}) {
    
    const classNames = clsx(
        {
        "btn": true, // allways add btn
        "btn-default": !edit, // add btn-default when they are no props outline
        "btn-edit": edit, // add btn-outline when they are a props outline
        },
        className // add the class what u want
    )

    return <button className={classNames} {...rest}>{children}</button>
}