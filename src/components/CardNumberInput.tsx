// import styled from "styled-components";
// import Input from "./Input";

// const InputBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   height: 2rem;
//   align-items: center;
//   gap: 0.5rem;
//   margin-bottom: 8px;
// `;
// export default function CardNumberInput({handleInput} : {handleInput : () => void}) {
//   return (
//     <InputBox>
//     {Array.from({ length: 4 }, (_, index) => (
//       <Input
//         key={index}
//         type="number"
//         maxLength={4}
//         placeholder="1234"
//         onChange={handleInput}
//       />
//     ))}
//   </InputBox>
//   )
// }