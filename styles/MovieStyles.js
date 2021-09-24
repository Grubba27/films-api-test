import styled from "@emotion/styled";

export const GoButton = styled.button`
  margin-top: 5px;
  border-radius: 15px;
`;

export const CenteredColumnSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  flex-direction: column;

`;
export const FlexStartColumnSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  flex-direction: column;
  margin: 0;
`;
export const CustomP = styled.p`
  margin: 5px 0;
  @media (max-width: 499px) {
    margin-top: .5rem;
  }
`;
export const CustomH4 = styled.div`
  margin: 0;
`;
export const CustomUl= styled.ul`
  text-align: left;
  margin: .5rem 0 ;
`;
export const MainMovieSectionStyle = styled(CenteredColumnSection)`
  width: 100%;
  text-align: center;
  padding: 0 5%;
`;


export const BannerMainSection = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 756px) {
    flex-wrap: wrap ;
  }
`;


export const SpecSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  margin: 1rem 0 0 0;

  @media (max-width: 499px) {
    flex-direction: row;
    
  }
`;



export const CheckValidator = styled.span`
  color: red;
`;
