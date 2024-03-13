import * as React from "react";
import Box from "@mui/material/Box";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "@mui/icons-material";
import Navbar from "../Home/Navbar";
import { removeOrder } from "../../Actions/orderAction";

const YourOrders = () => {
  const dispatch = useDispatch();
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "itemQty",
      headerName: "itemQty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "totalPrice",
      headerName: "Total Amount (Rs)",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,

      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <Link to={`/order/view/${params.id}`}>
              <Edit />
            </Link>
            <button
              onClick={() => {
                deleteOrderHandler(params.id);
              }}
            >
              <Delete
                style={{ margin: "1vmax", cursor: "pointer", color: "red" }}
              />
            </button>
          </>
        );
      },
    },
  ];
  const { orderItem } = useSelector((state) => state.order);
  const deleteOrderHandler = (id) => {
    console.log(id);
    dispatch(removeOrder(id));
  };

  const rows = [];
  orderItem &&
    orderItem.forEach((item, index) => {
      rows.push({
        itemQty: item.orderItem.length,
        id: item.id,
        name: item.name,
        status: item.status,
        totalPrice: item.totalAmount,
      });
    });

  return (
    <div>
      <Navbar classChange="change" />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          className="orderpageStyle"
        />
      </Box>
    </div>
  );
};

export default YourOrders;
