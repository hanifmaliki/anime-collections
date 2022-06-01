import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MyContext from '../context/MyContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select, TextField, Button } from '@mui/material';
import CollectionModalCard from './CollectionModalCard';
import NewCollectionModal from './NewCollectionModal';

const CardWrapper = styled(DialogContent)`
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

export default function CollectionModal({ open, setOpen }) {
    const { animeCol, bulkAdd } = useContext(MyContext);
    const [collectionList, setCollectionList] = useState(JSON.parse(localStorage.getItem('collections')))
    const [selectedId, setSelectedId] = useState('')
    const [selectedIdx, setSelectedIdx] = useState('')
    const [openNewCol, setOpenNewCol] = useState(false)

    const handleOnSelect = (value) => {
        const [id, idx] = value.split(',')
        setSelectedId(id)
        setSelectedIdx(idx)
    }

    const handleClickCollection = (col) => {
        if (!bulkAdd || selectedId !== '') {
            let collections = JSON.parse(localStorage.getItem('collections'))
            collections.forEach(el => {
                if (el.title === col.title) {
                    el['animeList'].push(bulkAdd ? animeCol[selectedIdx] : animeCol[0])
                }
            })
            setCollectionList(collections);
            localStorage.setItem('collections', JSON.stringify(collections));
        }
        else {
            alert('Pilih Anime terlebih dahulu')
        }
    }

    const handleNewCollection = (title) => {
        const colStr = localStorage.getItem('collections') || ''
        let colObj = [];
        colStr && (colObj = JSON.parse(colStr));
        colObj.push({
            title: title,
            animeList: []
        })
        setCollectionList(colObj);
        localStorage.setItem('collections', JSON.stringify(colObj));
    }

    return (
        <BootstrapDialog
            onClose={() => setOpen(false)}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle onClick={() => {
                console.log(animeCol)
                console.log(JSON.parse(localStorage.getItem('collections')))
            }} id="customized-dialog-title" onClose={() => setOpen(false)}>
                {bulkAdd ? 'Select Anime & Collection' : 'Select Collection'}
            </BootstrapDialogTitle>
            <DialogContent dividers>
                {bulkAdd ?
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Anime</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedId ? selectedId + ',' + selectedIdx : ''}
                            label="Anime"
                            onChange={(event) => {
                                handleOnSelect(event.target.value)
                            }}
                        >
                            {animeCol.map((el, idx) => {
                                return <MenuItem key={idx} value={el.id + ',' + idx}>{el.title.romaji}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    :
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Anime"
                        style={{ width: '100%' }}
                        defaultValue={animeCol[0].title.romaji}
                    />}
            </DialogContent>
            <h3 style={{ margin: 0, paddingTop: 10, paddingLeft: '16px', fontWeight: 'normal' }}>Collections</h3>
            <CardWrapper>
                {collectionList.map((el, idx) => {
                    // eslint-disable-next-line
                    let alreadyIn = el.animeList?.filter((a) => bulkAdd ? a?.id == selectedId : a?.id == animeCol[0].id).length
                    return <CollectionModalCard
                        key={idx}
                        text={el.title}
                        onClick={() => {
                            alreadyIn ?
                                alert('Sudah ditambahan ke collection, silahkan pindah ke page collection untuk menghapus') :
                                handleClickCollection(el)
                        }}
                        backgroundColor={alreadyIn ? '#33a13c' : '#5583c3'}
                    />
                })}
            </CardWrapper>
            <Button
                variant="contained"
                onClick={() => { setOpenNewCol(true) }}
                style={{ margin: '0px 16px 16px 16px' }}
            >Create New Collection</Button>
            <NewCollectionModal
                open={openNewCol}
                setOpen={setOpenNewCol}
                onSubmit={(value) => { handleNewCollection(value) }}
            />
        </BootstrapDialog>
    );
}