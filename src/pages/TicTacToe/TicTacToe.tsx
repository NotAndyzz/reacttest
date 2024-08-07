import { memo, useCallback, useEffect, useState } from "react";
import StyledButton, { Button } from "../../components/Button";
import styled from "styled-components";
import x from '../../assets/x.svg'
import o from '../../assets/o.svg'
import { Link } from "react-router-dom";
import { ModalType, openModal, setModalType } from "../../state/modal/modalSlice";
import { AppDispatch, RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import IconX from "../../assets/components/x";
import IconO from "../../assets/components/o";

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin:50px auto;
  text-align: center;
`;


const TicTacButton = styled(Button)`
  height: 150px;
  width: 150px;
  margin: 2px;
  border-radius: 12px;
  border: 0.5px solid rgb(255,255,255,0.3);
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-top: 60px;
  color: white;
  font-size: 60px;
`;


const StyledSpan = styled.span`
color: #26ffcb;
`;

const Reset = styled(Button)`
  color:#26ffcb;
  padding: 5px;
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  font-weight: bold;
`;

export enum GameState{
  xWin,
  oWin,
  draw,
  inplay,
}



const TicTacToe = () => {
  const [data, setData] = useState<Array<string>>(["","","","","","","","",""]);
  const [gameState, setGameState] = useState(GameState.inplay);
  const [xTurn, setXTurn] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    if(gameState != GameState.inplay){
      dispatch(setModalType({type: ModalType.ticTacToe, data: gameState}))
    }
  },[gameState]);

  const toggle = useCallback((index: number) => {
    if(!data[index] && gameState == GameState.inplay){
      const savedData = [...data];
      savedData[index] = xTurn ? "x": "o";
      setData(savedData);
      const res = checkWin(savedData);
      setGameState(res);
      if(res == GameState.inplay){
        setXTurn(!xTurn);
      }
    }
  },[xTurn, data, gameState]);
  
  const checkWin = useCallback((data: Array<string>) =>{
    const size = 3;

    console.log({curr: data});
    let checkRows = [true, true]; /// [X, O]
    let checkCols = [true, true];
    let checkDiagUp = [true, true];
    let checkDiagDown = [true, true];
    let filled = true;

    for(let i = 0; i< size; i++){
      checkRows = [true, true];
      checkCols = [true, true];
      if(checkDiagDown[0] && data[i*size+i] != "x"){
        
        checkDiagDown[0] = false;
      }
      if(checkDiagDown[1] && data[i*size+i] != "o"){
        checkDiagDown[1] = false;
      }
      if(checkDiagUp[0] && data[(size - 1 - i) * size + i] != "x"){
        checkDiagUp[0] = false;
      }
      if(checkDiagUp[1] && data[(size - 1 - i) * size + i] != "o"){
        checkDiagUp[1] = false;
      }
      for(let j = 0; j < size; j++){
        if(filled && !data[i*size+j]){
          filled = false;
        }  
        if(checkRows[0] && data[i*size+j] != 'x'){
          console.log("false when", i, j);
          checkRows[0] = false;
        }
        if(checkRows[1] && data[i*size+j] != 'o'){
          checkRows[1] = false;
        }
        if(checkCols[0] && data[j*size+i] != 'x'){
          checkCols[0] = false;
        }
        if(checkCols[1] && data[j*size+i] != 'o'){
          checkCols[1] = false;
        }
      }
      if(checkRows[0] || checkCols[0]){
        return GameState.xWin;
      }

      if(checkRows[1] || checkCols[1]){
        return GameState.oWin;
      }
    }

    if(checkDiagUp[0] || checkDiagDown[0]){
      return GameState.xWin;
    }
    if(checkDiagUp[1] || checkDiagDown[1]){
      return GameState.oWin;
    }
    if(filled){
      return GameState.draw;
    }

    return GameState.inplay;
  }, []);


  const ResetComponent = useCallback(()=>{
    return (
    <Reset onClick={() => {
      setData(Array(9).fill(""));
      setGameState(GameState.inplay);
      setXTurn(true);
    }}>
      Reset
    </Reset>);
  },[]);

  const renderedItem = useCallback((element : string, index: number)=>{
    return (
      <TicTacButton
        key={""+index}
        background="rgba(38, 255, 203, 0.2)"
        hovercolor="rgba(0,0,0, 0.2)"
        onClick={() => toggle(index)}
      >
        {
          element == "x" ? <IconX height="100%" width="100%"/> :
          element == "o" ? <IconO height="100%" width="100%"/> : ""
        }
      </TicTacButton>
    );
  },[data]);

  return (
    <Container>
      <TitleContainer>
        TIC TAC TOE <StyledSpan>REACT</StyledSpan>
      </TitleContainer>
      <GridContainer>
          {data.map(renderedItem)}
      </GridContainer>
      <ResetComponent/>
    </Container>
  );
}

export default memo(TicTacToe);
