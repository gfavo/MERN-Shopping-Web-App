import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../Item/Item';
import { Grid } from '@mui/material';
import useStyle from './styles';

const ItemsPage = () => {
const classes = useStyle();
const items = useSelector((state) => state.items);

  return (
        <Grid className={classes.mainContainer}>
                {items.map((item) => 
                    <Grid key={item._id} item xs={6} sm={3}>
                        <Item item={item}/>
                    </Grid>
                    )
                    }
            </Grid>
  )
}

export default ItemsPage;