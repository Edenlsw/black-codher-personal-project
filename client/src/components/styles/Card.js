import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 650px;

  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  // padding: 2px;
  margin-top: 60px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  
  
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin: 0;
`;

export const Text = styled.p`
  line-height: 18px;
  
  margin-top: 20px;
  color: #6c757d;
  text-align: center;
  width: 90%;
  text-align: left;

`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  margin-left: -12px;
  // display: block;
  // margin-top: 50px;
  // margin-bottom: 50px
  // object-fit: cover;
  



  


  `;

export const Button = styled.button`
  cursor: pointer;
  margin-top: auto;
  // margin-left: -30px;
  width: 80%;
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  display: block;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: absolute;
  bottom: 10px;


  &:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }
`;


