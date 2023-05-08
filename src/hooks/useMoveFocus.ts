const useMoveFocus = (initialValue: any)=>{
    const refs = initialValue;
    const moveFocus = (currentLength:any, maxLength:any, key:any)=>{
        if (currentLength >= maxLength) refs[key].current!.focus();
    }

    return [refs, moveFocus]
}

export default useMoveFocus