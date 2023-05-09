type InitialType = {
    [key: string]: React.RefObject<HTMLInputElement>;
  };

const useMoveFocus = (initialValue: InitialType)=>{
    const refs = initialValue;
    const moveFocus = (currentLength:number, maxLength:number, key:string)=>{
        if (currentLength >= maxLength) refs[key].current!.focus();
    }

    return [refs, moveFocus] as const
}

export default useMoveFocus
