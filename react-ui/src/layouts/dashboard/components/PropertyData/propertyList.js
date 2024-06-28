// components/PropertyTable.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { setPropertyTypeFilter, setPaginationSettings, fetchProperties } from '../../../../actions/propertyActions';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tableCell: {
    padding: '8px 16px', // Adjust padding as needed
    // Add any other styles to ensure consistency
  },
});

const PropertyTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, error, properties, propertyTypeFilter, paginationSettings } = useSelector((state) => state.property);

  useEffect(() => {
    const { pageNumber, pageSize } = paginationSettings;
    const url = `http://127.0.0.1:5000/api/properties/?page=${pageNumber}&page_size=${pageSize}&property_type=${propertyTypeFilter}`;
    dispatch(fetchProperties(url));
  }, [dispatch, paginationSettings, propertyTypeFilter]);

  const handlePropertyTypeChange = (event) => {
    dispatch(setPropertyTypeFilter(event.target.value));
  };

  const handlePageNumberChange = (event) => {
    dispatch(setPaginationSettings(event.target.value, paginationSettings.pageSize));
  };

  const handlePageSizeChange = (event) => {
    dispatch(setPaginationSettings(paginationSettings.pageNumber, event.target.value));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box>
      <FormControl variant="outlined" margin="normal">
        <InputLabel>Property Type</InputLabel>
        <Select value={propertyTypeFilter} onChange={handlePropertyTypeChange} label="Property Type">
          <MenuItem value="house">House</MenuItem>
          <MenuItem value="unit">Unit</MenuItem>
          <MenuItem value="townhouse">Townhouse</MenuItem>
          <MenuItem value="apartment">Apartment</MenuItem>
          <MenuItem value="duplex">Duplex</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Page Number"
        type="number"
        variant="outlined"
        margin="normal"
        value={paginationSettings.pageNumber}
        onChange={handlePageNumberChange}
      />
      <TextField
        label="Page Size"
        type="number"
        variant="outlined"
        margin="normal"
        value={paginationSettings.pageSize}
        onChange={handlePageSizeChange}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align="left">Address</TableCell>
              <TableCell >Suburb</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Bathroom</TableCell>
              <TableCell>Bedroom</TableCell>
              <TableCell>Parking</TableCell>
              <TableCell>Land Area</TableCell>
              <TableCell>Listing URL</TableCell>
              <TableCell>Floorplan URL</TableCell>
              <TableCell>Price Guide URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.domain_property_id}>
                <TableCell className={classes.tableCell} align="left">{property.address}</TableCell>
                <TableCell>{property.suburb}</TableCell>
                <TableCell>{property.price}</TableCell>
                <TableCell>{property.bathroom}</TableCell>
                <TableCell>{property.bedroom}</TableCell>
                <TableCell>{property.parking}</TableCell>
                <TableCell>{property.land_area}</TableCell>
                <TableCell>
                  <Link href={property.listing_url} target="_blank">
                    Listing
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={property.floorplan_url} target="_blank">
                    Floorplan
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={property.price_guide_url} target="_blank">
                    Price Guide
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Button
          variant="contained"
          onClick={() => dispatch(setPaginationSettings(paginationSettings.pageNumber - 1, paginationSettings.pageSize))}
          disabled={paginationSettings.pageNumber === 1}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(setPaginationSettings(paginationSettings.pageNumber + 1, paginationSettings.pageSize))}
          disabled={properties.length < paginationSettings.pageSize}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PropertyTable;
