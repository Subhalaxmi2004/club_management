"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  TablePagination, TextField, Select, MenuItem, Typography, Box, InputAdornment, 
  TableSortLabel, Checkbox, Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

interface DataItem {
    id: number;
    fullName: string;
    email: string;
    regdNo: string;
    role: string;
    gender: string;
  }

  const Page: React.FC = () => {
  // Sample data
  const initialData = useRef<DataItem[]>([
    //Actual data will be fetch from backend


    //Demo data
    { id: 1, fullName: "John Doe", email: "john@example.com", regdNo: "R001", role: "Coordinator", gender: "Male" },
    { id: 2, fullName: "Jane Smith", email: "jane@example.com", regdNo: "R002", role: "Assistant Coordinator", gender: "Female" },
    { id: 3, fullName: "Bob Johnson", email: "bob@example.com", regdNo: "R003", role: "Member", gender: "Male" },
    { id: 4, fullName: "Alice Brown", email: "alice@example.com", regdNo: "R004", role: "Member", gender: "Female" },
    { id: 5, fullName: "Charlie Davis", email: "charlie@example.com", regdNo: "R005", role: "Coordinator", gender: "Other" },
    { id: 6, fullName: "Emily Clark", email: "emily@example.com", regdNo: "R006", role: "Member", gender: "Female" },
    { id: 7, fullName: "George Lewis", email: "george@example.com", regdNo: "R007", role: "Assistant Coordinator", gender: "Male" },
    { id: 8, fullName: "Hannah Adams", email: "hannah@example.com", regdNo: "R008", role: "Coordinator", gender: "Female" },
    { id: 9, fullName: "Ian Scott", email: "ian@example.com", regdNo: "R009", role: "Member", gender: "Male" },
    { id: 10, fullName: "Julia Lee", email: "julia@example.com", regdNo: "R010", role: "Member", gender: "Female" },
    { id: 11, fullName: "Kevin Walker", email: "kevin@example.com", regdNo: "R011", role: "Coordinator", gender: "Male" },
    { id: 12, fullName: "Laura White", email: "laura@example.com", regdNo: "R012", role: "Assistant Coordinator", gender: "Female" },
    { id: 13, fullName: "Michael Green", email: "michael@example.com", regdNo: "R013", role: "Member", gender: "Male" },
    { id: 14, fullName: "Nina Harris", email: "nina@example.com", regdNo: "R014", role: "Coordinator", gender: "Female" },
    { id: 15, fullName: "Oliver King", email: "oliver@example.com", regdNo: "R015", role: "Member", gender: "Male" },
    { id: 16, fullName: "Pauline Hill", email: "pauline@example.com", regdNo: "R016", role: "Member", gender: "Female" },
    { id: 17, fullName: "Quincy Turner", email: "quincy@example.com", regdNo: "R017", role: "Assistant Coordinator", gender: "Male" },
    { id: 18, fullName: "Rachel Parker", email: "rachel@example.com", regdNo: "R018", role: "Coordinator", gender: "Female" },
    { id: 19, fullName: "Samuel Collins", email: "samuel@example.com", regdNo: "R019", role: "Member", gender: "Male" },
    { id: 20, fullName: "Tina Wood", email: "tina@example.com", regdNo: "R020", role: "Member", gender: "Female" },
    { id: 21, fullName: "Umar Foster", email: "umar@example.com", regdNo: "R021", role: "Coordinator", gender: "Male" },
    { id: 22, fullName: "Violet Bell", email: "violet@example.com", regdNo: "R022", role: "Assistant Coordinator", gender: "Female" },
    { id: 23, fullName: "William Watson", email: "william@example.com", regdNo: "R023", role: "Member", gender: "Male" },
    { id: 24, fullName: "Xena Brooks", email: "xena@example.com", regdNo: "R024", role: "Coordinator", gender: "Female" },
    { id: 25, fullName: "Yves James", email: "yves@example.com", regdNo: "R025", role: "Member", gender: "Male" },
    { id: 26, fullName: "Zara Powell", email: "zara@example.com", regdNo: "R026", role: "Member", gender: "Female" },
    { id: 27, fullName: "Adam Morris", email: "adam@example.com", regdNo: "R027", role: "Assistant Coordinator", gender: "Male" },
    { id: 28, fullName: "Bella Martinez", email: "bella@example.com", regdNo: "R028", role: "Coordinator", gender: "Female" },
    { id: 29, fullName: "Carlos Russell", email: "carlos@example.com", regdNo: "R029", role: "Member", gender: "Male" },
    { id: 30, fullName: "Daisy Rogers", email: "daisy@example.com", regdNo: "R030", role: "Member", gender: "Female" },
    { id: 31, fullName: "Ethan Phillips", email: "ethan@example.com", regdNo: "R031", role: "Coordinator", gender: "Male" },
    { id: 32, fullName: "Fiona Diaz", email: "fiona@example.com", regdNo: "R032", role: "Assistant Coordinator", gender: "Female" },
    { id: 33, fullName: "Gavin Torres", email: "gavin@example.com", regdNo: "R033", role: "Member", gender: "Male" },
    { id: 34, fullName: "Heather Evans", email: "heather@example.com", regdNo: "R034", role: "Member", gender: "Female" },
    { id: 35, fullName: "Isaac Gomez", email: "isaac@example.com", regdNo: "R035", role: "Coordinator", gender: "Male" },
    { id: 36, fullName: "Jasmine Rivera", email: "jasmine@example.com", regdNo: "R036", role: "Member", gender: "Female" },
    { id: 37, fullName: "Kyle Morgan", email: "kyle@example.com", regdNo: "R037", role: "Assistant Coordinator", gender: "Male" },
    { id: 38, fullName: "Lily Foster", email: "lily@example.com", regdNo: "R038", role: "Coordinator", gender: "Female" },
    { id: 39, fullName: "Mason Bennett", email: "mason@example.com", regdNo: "R039", role: "Member", gender: "Male" },
    { id: 40, fullName: "Natalie Reed", email: "natalie@example.com", regdNo: "R040", role: "Member", gender: "Female" },
    { id: 41, fullName: "Oscar Howard", email: "oscar@example.com", regdNo: "R041", role: "Coordinator", gender: "Male" },
    { id: 42, fullName: "Penelope Cox", email: "penelope@example.com", regdNo: "R042", role: "Assistant Coordinator", gender: "Female" },
    { id: 43, fullName: "Quinn Bell", email: "quinn@example.com", regdNo: "R043", role: "Member", gender: "Male" },
    { id: 44, fullName: "Ruby Perez", email: "ruby@example.com", regdNo: "R044", role: "Coordinator", gender: "Female" },
    { id: 45, fullName: "Sebastian Hughes", email: "sebastian@example.com", regdNo: "R045", role: "Member", gender: "Male" },
    { id: 46, fullName: "Tracy Matthews", email: "tracy@example.com", regdNo: "R046", role: "Member", gender: "Female" },
    { id: 47, fullName: "Ulysses Griffin", email: "ulysses@example.com", regdNo: "R047", role: "Coordinator", gender: "Male" },
    { id: 48, fullName: "Vanessa Powell", email: "vanessa@example.com", regdNo: "R048", role: "Assistant Coordinator", gender: "Female" },
    { id: 49, fullName: "Wesley Hayes", email: "wesley@example.com", regdNo: "R049", role: "Member", gender: "Male" },
    { id: 50, fullName: "Xander Jenkins", email: "xander@example.com", regdNo: "R050", role: "Coordinator", gender: "Male" },
    
  ]);
  
  const [data, setData] = useState<DataItem[]>(initialData.current);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectMode, setSelectMode] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const roles = ["Assistant Coordinator", "Coordinator", "Member"];
  const genders = ["Male", "Female", "Other"];
  useEffect(() => {
    const filteredData = initialData.current.filter(item =>
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setData(filteredData);
    setPage(0);
  }, [searchTerm]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleChange = (id: number, newRole: string) => {
    const updatedData = data.map(item => 
      item.id === id ? { ...item, role: newRole } : item
    );
    setData(updatedData);
    console.log('Updated Row Data:', updatedData.find(item => item.id === id));
  };

  const handleGenderChange = (id: number, newGender: string) => {
    const updatedData = data.map(item => 
      item.id === id ? { ...item, gender: newGender } : item
    );
    setData(updatedData);
    console.log('Updated Row Data:', updatedData.find(item => item.id === id));
  };

  const toggleSelectMode = () => {
    setSelectMode(!selectMode);
    setSelectedRows([]);
  };

  const handleRowSelect = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {

    //Actual delete logic goes here 


    //Demo
    const updatedData = data.filter(item => !selectedRows.includes(item.id));
    setData(updatedData);
    setSelectedRows([]);
    console.log('Deleted rows:', selectedRows);
  };

  const selectStyles = {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: '1px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      borderWidth: '2px',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
  };

  const menuProps = {
    PaperProps: {
      sx: {
        bgcolor: 'black',
        '& .MuiMenuItem-root': {
          color: 'white',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          },
          '&.Mui-selected': {
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.3)',
            },
          },
        },
      },
    },
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white', textAlign: "center" }}>
        Admin Dashboard
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Button
          variant="contained"
          onClick={toggleSelectMode}
          sx={{ backgroundColor: selectMode ? 'primary.dark' : 'primary.main' }}
        >
          {selectMode ? 'Cancel Selection' : 'Select Rows'}
        </Button>

        {selectedRows.length > 0 && (
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleDeleteSelected}
          >
            Delete Selected ({selectedRows.length})
          </Button>
        )}

        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            sx: {
              color: 'white',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            },
          }}
        />
      </Box>

      <TableContainer component={Paper} elevation={3} sx={{ backgroundColor: '#0A0A0A' }}>
        <Table sx={{ minWidth: 650, color: 'white' }} aria-label="admin table">
          <TableHead>
            <TableRow>
              {selectMode && <TableCell padding="checkbox" sx={{ color: 'white' }} />}
              <TableCell sx={{ color: 'white' }}>
                <TableSortLabel sx={{ color: 'white' }}>Full Name</TableSortLabel>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>Email</TableCell>
              <TableCell sx={{ color: 'white' }}>Regd No</TableCell>
              <TableCell sx={{ color: 'white' }}>Role</TableCell>
              <TableCell sx={{ color: 'white' }}>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow 
                  key={item.id} 
                  sx={{ 
                    '&:hover': { backgroundColor: '#444' }, 
                    transition: 'background-color 0.3s', 
                    color: 'white',
                    backgroundColor: selectedRows.includes(item.id) ? 'rgba(255, 255, 255, 0.1)' : 'inherit',
                  }}
                >
                  {selectMode && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedRows.includes(item.id)}
                        onChange={() => handleRowSelect(item.id)}
                        sx={{ color: 'white', '&.Mui-checked': { color: 'primary.main' } }}
                      />
                    </TableCell>
                  )}
                  <TableCell sx={{ color: 'white' }}>{item.fullName}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{item.email}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{item.regdNo}</TableCell>
                  <TableCell>
                    <Select
                      value={item.role}
                      onChange={(e) => handleRoleChange(item.id, e.target.value)}
                      size="small"
                      sx={selectStyles}
                      MenuProps={menuProps}
                    >
                      {roles.map((role) => (
                        <MenuItem key={role} value={role}>{role}</MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={item.gender}
                      onChange={(e) => handleGenderChange(item.id, e.target.value)}
                      size="small"
                      sx={selectStyles}
                      MenuProps={menuProps}
                    >
                      {genders.map((gender) => (
                        <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: 'white' }}
      />
    </Box>
  );
};

export default Page;