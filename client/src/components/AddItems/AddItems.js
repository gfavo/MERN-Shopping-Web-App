import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Select, MenuItem, InputLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { postItem } from "../../store/actions";
import useStyles from "./styles";

const AddItems = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(postItem(itemData));
  };
  const [itemData, setItemData] = useState({
    title: "",
    description: "",
    department: "",
    price: "",
    image: "",
  });

  return (
    <Paper classname={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          Create an Item
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={itemData.title}
          onChange={(e) =>
            setItemData({ ...itemData, title: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={itemData.description}
          onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
        />
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          fullWidth
          value={itemData.price}
          onChange={(e) =>
            setItemData({ ...itemData, price: e.target.value })
          }
        />
        <InputLabel>Select a Department</InputLabel>
         <Select
    labelId="department"
    id="department"
    value={itemData.department}
    fullWidth
    label="Department"
    onChange={(e) => setItemData({ ...itemData, department: e.target.value })}
  >
    <MenuItem value="clothing">Clothing</MenuItem>
    <MenuItem value="electronics">Electronics</MenuItem>
    <MenuItem value="books">Books</MenuItem>
  </Select>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setItemData({ ...itemData, image: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default AddItems;
