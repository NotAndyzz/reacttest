
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { emptyModal, ModalType } from "../../state/modal/modalSlice";
import Modal from "react-modal";
import IconX from "../../assets/components/x";
import styled from "styled-components";
import { GameState } from "../../pages/TicTacToe/TicTacToe";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SideButton = styled.button`
  background: transparent;
  align-self: flex-end;
  border: 0px;
  padding: 10px;
  cursor: pointer;
`

const Header = styled.h1`

`
const Description = styled.h3`

`

const ModalTTT= ()=>{
    const type = useSelector((state: RootState)=> state.modal.type);
    const data = useSelector((state: RootState)=> state.modal.data);
    const dispatch = useDispatch<AppDispatch>();
    const closeModal = ()=>{
         dispatch(emptyModal())
    }
    return (
        <Modal
        style={{
            overlay: {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              position: 'fixed',
              inset: 0,
              display: "flex"
            },
            content: {
              position: "absolute",
              margin: "auto",
              border: '1px solid #ccc',
              background: '#fff',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '10px',
              outline: 'none',
              padding: 10,
              width: 300,
              height: 250,
            }
          }}
        isOpen={type == ModalType.ticTacToe}
        onRequestClose={closeModal}
        contentLabel="Game result modal"
      >
        <Container>
          <SideButton onClick={closeModal}>
            <IconX height="10px" width="10px" fill="black"/>
          </SideButton>
          <Header>{data == GameState.draw ? "Draw" : 
                  data == GameState.xWin ? "X wins": 
                  data == GameState.oWin ? "O wins" : ""}</Header>
          <Description></Description>
        </Container>
      </Modal>
    )
}


export default memo(ModalTTT);