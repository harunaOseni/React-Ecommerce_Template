import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

class Products extends React.Component {
  render() {
    const { products } = this.props;    
    const { classes } = this.props;
    const { addToCart } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} addToCart={addToCart}/> 
            </Grid>
          ))}
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Products);