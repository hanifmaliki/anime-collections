import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function AnimeDeleteModal({ open, setOpen, selectedAnime, selectedCol, onDelete }) {
    return (
        <Dialog open={open} onClose={() => { setOpen(false) }}>
            <DialogTitle>Delete "{selectedAnime.title?.romaji}"</DialogTitle>
            <DialogContent>
                <Typography>
                    Are you sure you want to delete "{selectedAnime.title?.romaji}" from "{selectedCol.title}"?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                <Button onClick={() => {
                    onDelete();
                    setOpen(false);
                }}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}