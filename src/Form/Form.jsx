import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const Form = () => {
    return (
        <>
            <div className='modal'>
                <h2>Product Add Form</h2>
                <h4><a href="">API link to check</a></h4>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            defaultValue="EUR"
                            helperText="Please select your currency"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </Box>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="0" variant="outlined" />


                    </Box>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Units in Stock" variant="outlined" />
                    <input type="checkbox" name="" id="" />
                </Box>
                <TextField id="outlined-basic" label="Quantity per Unit" variant="outlined" />
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                </Stack>

            </div>
        </>
    )
}

export default Form