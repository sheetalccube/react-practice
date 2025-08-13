import styled from "styled-components";

const Heading = styled.h1({
  color: "yellow",
  backgroundColor: "pink",
  width: "200px",
});

export const StyledButton = styled.button`
  color: var(--COLOR-ERROR);
  background-color: var(--COLOR-PRIMARY-LIGHT);
  width: 130px;

`;
// export const StyledButton = styled.button`
//   color: var(--COLOR-ERROR);
//   background-color: var(--COLOR-PRIMARY-LIGHT);
//   width: 130px;
// `;


function StyledExample() {
  return (
    <div>
      <Heading>hello</Heading>
      <StyledButton>I am a button</StyledButton>
    </div>
  );
}

export default StyledExample;
