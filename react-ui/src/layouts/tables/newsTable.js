import React from "react";
import PropTypes from "prop-types";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Link } from "@mui/material";

const columnStyles = {
  title: { width: "50%" },
  source: { width: "25%" },
  publishedDate: { width: "25%" },
};

function NewsTable({ data }) {
  return (
    <div style={{ maxHeight: "30rem", overflowY: "auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ width: "60%", fontWeight: "bold" }}>Title</TableCell>
              <TableCell style={{ width: "20%", fontWeight: "bold" }}>Source</TableCell>
              <TableCell style={{ width: "20%", fontWeight: "bold" }}>Published Date</TableCell>
            </TableRow>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={columnStyles.title}>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" color="blue">
                    {item.title}
                  </Link>
                </TableCell>
                <TableCell style={columnStyles.source}>{item.source}</TableCell>
                <TableCell style={columnStyles.publishedDate}>{item.published_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

NewsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsTable;
