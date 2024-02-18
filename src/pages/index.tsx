import Head from 'next/head';
import styles from '../app/page.module.css';
import ResponsiveCard from '../../components/Card';
import CopyrightIcon from '@mui/icons-material/Copyright';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import SearchBox from '../../components/Searchbar';
import commerce from '../../lib/ecommerce';
import ResponsiveGrid from '../../components/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EmptyPlaceholder from '../../components/Placeholder/emptyPlaceholder';
import CustomAppBar from '../../components/Header';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

export async function getStaticProps(context: any) {
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();

  return {
    props: { products, categories },
    revalidate: 30,
  };
}

const Home = ({ products, categories }: any) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any>([])

  const isInCart = (productId: string) => {
    return cartItems.some((item: any) => item.id === productId);
  };

  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (categoryName: string) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((cat: any) => cat !== categoryName)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  const filteredProducts = products.filter((product: any) => {
    const categoryFilter =
      selectedCategories.length === 0 ||
      product.categories.some((category: any) =>
        selectedCategories.includes(category.name)
      );
    const searchFilter = product.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return categoryFilter && searchFilter;
  });

  const handleSubmit = () => {
    setSearchValue(searchValue);
  };

  const addToCart = (product: any) => {
    setCartItems((prevItems: any) => [...prevItems, product]);
  }

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems: any) => prevItems.filter((item: any) => item.id !== productId));
  };

  const content = (
    <Box sx={{ textAlign: 'center' }}>Made by BTM INDUSTRIES</Box>
  );

  const cardMargin = 'auto 16px 20px 16px';
  const cardWidth = '100%';
  const placeHolderText = 'search...';

  return (
    <div className={styles.container}>
      <Head>
        <title>Online Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomAppBar cartItemCount={cartItems.length} />
      <Box sx={{ mt: 5 }}>
        <h2 style={{ textAlign: 'center' }}>All Products</h2>
      </Box>

      <main className={styles.main}>
        <SearchBox
          placeholder={placeHolderText}
          onSearch={handleSubmit}
          onChange={handleChange}
          searchValue={searchValue}
        />
      </main>

      <Box display="flex" justifyContent="center" sx={{ mb: 5 }}>
        <Card sx={{ maxHeight: 300, overflowY: 'auto', width: 300 }}>
          <CardHeader title="Categories" />
          <CardContent>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {categories?.map((item: any, index: any) => {
                return (
                  <>
                    <li key={item.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedCategories.includes(item.name)}
                            onChange={() => handleCategoryChange(item.name)}
                          />
                        }
                        label={item.name}
                      />
                    </li>
                  </>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </Box>

      <ResponsiveGrid>
        {filteredProducts?.map((item: any, index: any) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardMedia
                  sx={{ height: 194 }}
                  image={item.image.url}
                  title={item.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: '#0F1111', fontWeight: 'bold' }}>
                    {item.price.formatted_with_symbol}
                  </Typography>
                </CardContent>
                <CardActions>
                 
                  {isInCart(item.id) ? ( 
                    <Button
                      size="small"
                      variant="contained"
                      color='error'
                      onClick={() => removeFromCart(item.id)}
                      startIcon={<IndeterminateCheckBoxIcon />}
                    >
                      Remove product
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => addToCart(item)}
                      startIcon={<AddShoppingCartIcon />}
                      sx={{
                        background: '#FFD814',
                        color: 'black',
                        '&:hover': {
                          background: '#cca90c',
                        },
                      }}
                    >
                      Add to cart
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          );
        })}

        {filteredProducts?.length === 0 && (
          <EmptyPlaceholder>No products found.</EmptyPlaceholder>
        )}
      </ResponsiveGrid>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'flex-end',
        }}
      >
        <ResponsiveCard
          width={cardWidth}
          margin={cardMargin}
          title={
            <Box sx={{ textAlign: 'center' }} data-testid="copyright-icon">
              <CopyrightIcon />
            </Box>
          }
          content={content}
        />
      </Box>
    </div>
  );
}

export default Home