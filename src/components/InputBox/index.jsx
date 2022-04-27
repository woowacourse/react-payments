import {InputWrapper} from './style';


function InputBox({size, background, border, children}){
  return(
    <InputWrapper  
      background={background}
      border={border}
      size={size}
      >
        {children}
    </InputWrapper>
  )
} 

export default InputBox