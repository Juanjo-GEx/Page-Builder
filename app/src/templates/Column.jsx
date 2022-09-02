const Column = ({ children }) => {

    return (
        <div className="flex flex-col justify-start items-center gap-4 w-full">
            {children}
        </div>
    )
}

export default Column