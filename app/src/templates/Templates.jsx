

export const mountTemplate = (refContainer, value, TEMPLATES ) => {
    if (value === TEMPLATES.Column){
        refContainer.current.className = "flex flex-col justify-start items-center gap-4 w-full";
        
    } else {
        refContainer.current.className = "flex justify-between items-start gap-4 w-full";
    }
}