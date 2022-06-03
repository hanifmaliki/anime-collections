import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MyContext from '../context/MyContext';
import CollectionModalCard from './CollectionModalCard';
import { useNavigate } from 'react-router-dom';
import emotionStyled from '@emotion/styled';

const CardWrapperOuter = styled(DialogContent)`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const CardWrapperInner = emotionStyled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
`

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm': {
        width: '80%',
        '@media (min-width:0px) and (max-width:500px)': {
            width: '100%'
        }
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CollectionListModal({ open, setOpen, collectionList }) {
    const navigate = useNavigate();
    const { animeCol } = useContext(MyContext);

    return (
        <BootstrapDialog
            onClose={() => setOpen(false)}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setOpen(false)}>
                Collection List
            </BootstrapDialogTitle>
            <CardWrapperOuter dividers>
                <CardWrapperInner style={{ justifyContent: 'space-around' }}>
                    <div style={{ fontWeight: 'bold', color: '#33a13c' }}>◉ In Collection</div>
                    <div style={{ fontWeight: 'bold', color: '#4579c1' }}>◉ Not In Collection</div>
                </CardWrapperInner>
                <CardWrapperInner>
                    {collectionList.map((el, idx) => {
                        // eslint-disable-next-line
                        let alreadyIn = el.animeList?.filter((a) => a?.id == animeCol[0]?.id).length
                        return <CollectionModalCard
                            key={idx}
                            text={el.title}
                            onClick={() => { navigate('/collection-detail/' + idx) }}
                            backgroundColor={alreadyIn ? '#33a13c' : '#4579c1'}
                        />
                    })}
                    {collectionList.length < 1 && <div><span>No collections to display</span></div>}
                </CardWrapperInner>
            </CardWrapperOuter>
        </BootstrapDialog>
    );
}