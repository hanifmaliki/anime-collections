import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function NewCollectionModal({ open, setOpen, onSubmit }) {
    const [name, setName] = React.useState('')

    return (
        <Dialog open={open} onClose={() => { setOpen(false) }}>
            <DialogTitle>New Collection</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Collection Name"
                    type="text"
                    value={name}
                    fullWidth
                    variant="standard"
                    onChange={(event) => setName(event.target.value.replace(/[^a-zA-Z0-9 ]/g, ''))}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { setOpen(false) }}>Cancel</Button>
                <Button onClick={() => {
                    const sameName = JSON.parse(localStorage.getItem('collections')).filter((el) => el.title === name);
                    if (!name) {
                        alert('Isi nama dahulu')
                    }
                    else if (sameName.length > 0) {
                        alert('Nama collection harus unik')
                    }
                    else {
                        onSubmit(name);
                        setOpen(false);
                    }
                }}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}