import React from "react";
import {
  Container,
  Table,
  // TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Listings = () => {

    

  return (
    <Container maxWidth="lg" className="container">
      {/* <h4>Welcome, {props.user.username}</h4> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Container>
  );
}

export default Listings