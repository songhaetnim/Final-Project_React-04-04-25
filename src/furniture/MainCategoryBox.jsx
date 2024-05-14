import React from 'react';
import { TableCell, TableRow, IconButton, Stack, Typography, TableBody, Table } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import WeekendIcon from '@mui/icons-material/Weekend';
import DeskIcon from '@mui/icons-material/Desk';
import HotelIcon from '@mui/icons-material/Hotel';
import KitchenIcon from '@mui/icons-material/Kitchen';
import WorkIcon from '@mui/icons-material/Work';
import './maincategorytable.css';

export default function MainCategoryBox() {
    return (
        <Table className="main-category-table">
            <TableBody>
                <TableRow>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <ChairAltIcon />
                                <Typography variant="body2">의자</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <WeekendIcon />
                                <Typography variant="body2">소파</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <DeskIcon />
                                <Typography variant="body2">책상</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <HotelIcon />
                                <Typography variant="body2">침대</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <KitchenIcon />
                                <Typography variant="body2">옷장</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <WorkIcon />
                                <Typography variant="body2">일</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <ShoppingCartIcon />
                                <Typography variant="body2">장바구니</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <ShoppingCartIcon />
                                <Typography variant="body2">장바구니</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <ShoppingCartIcon />
                                <Typography variant="body2">장바구니</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">
                        <IconButton size="small" color="inherit">
                            <Stack direction="column" alignItems="center">
                                <ShoppingCartIcon />
                                <Typography variant="body2">장바구니</Typography>
                            </Stack>
                        </IconButton>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
