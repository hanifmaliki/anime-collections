import { DeleteForever, Edit } from '@mui/icons-material';
import Card from '@mui/material/Card';
import styled from "@emotion/styled";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 6% 0 6%;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    border-width: 1px 0 3px 0;
    border-style: solid;
    padding: 10px 25px;
    background-color: #dee7fc;
    border-color: #889fd6;
    margin-bottom: 15px;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
`

export const ActionWrapper = styled.div`
    position: absolute;
    z-index: 1000;
    background-color: #525151a1;
    margin: 6px 0 0 6px;
    padding: 3px;
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const DeleteButton = styled(DeleteForever)`
    color: white;
    &:hover {
        color: red;
    }
`

export const EditButton = styled(Edit)`
    color: white;
    &:hover {
        color: red;
    }
`

export const PrimaryCard = styled(Card)`
    width: 31%;
    max-height: 250px;

    @media (min-width:550px) and (max-width:850px) {
        width: 48%;
    }

    @media (min-width:0px) and (max-width:550px) {
        width: 100%;
    }
`