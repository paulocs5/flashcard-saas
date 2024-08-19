'use client'
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Toolbar, AppBar, Button, Container, Typography, Grid, Box } from "@mui/material";
import Head from "next/head";
import App from "next/app";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flash Your Knoledge in a Card with FlashyCard</title>
        <meta name="description" content="Create flashcards powered with AI to solve your needs" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"style={{flexGrow: 1}}>
            FlashyCard AI
          </Typography>
          <SignedOut> 
            <Button color="inherit"> Login </Button>
            <Button color="inherit"> Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: 'center',
          my: 4,
        }}
      >
        <Typography variant="h2"> Welcome to FlashyCard </Typography>
        <Typography variant="h5"> 
          {' '}
          Create flashcards powered with AI to solve your needs
        </Typography>
        <Button variant="contained" color="primary" sx= {{mt: 2}}> 
          Create a Card 
        </Button>
      </Box>
      <Box sx = {{my: 6}}> 
        <Typography variant="h4"> Features </Typography>
        <Grid container spacing ={4}>
          <Grid item xs={12} md={4}> 
            <Typography variant="h6"> Handle any Request input </Typography> 
            <Typography> 
              {' '}
              Making a Flashcard has neven been easier, just with type your ideas and let our software do the rest.
            </Typography>
            <Typography variant="h6"> Smart Flashcards </Typography> 
            <Typography> 
              {' '}
              Our AI powered assistant Flashy will produce your custom flashcard in real-time.  
            </Typography>
            <Typography variant="h6"> Save your work and open anytime & anywhere </Typography> 
            <Typography> 
              {' '}
              Trying to study for an exam? Access your content from any device at anytime.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}> 
        <Typography variant="h4"> Pricing </Typography>
        <Grid container spacing ={4}>
          <Grid item xs={12} md={4} > 
            <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            > 
              <Typography variant="h6"> Handle any Request input </Typography> 
              <Typography> 
                {' '}
                Making a Flashcard has neven been easier, just with type your ideas and let our software do the rest.
              </Typography>
            </Box>
            <Typography variant="h6"> Smart Flashcards </Typography> 
            <Typography> 
              {' '}
              Our AI powered assistant Flashy will produce your custom flashcard in real-time.  
            </Typography>
            <Typography variant="h6"> Save your work and open anytime & anywhere </Typography> 
            <Typography> 
              {' '}
              Trying to study for an exam? Access your content from any device at anytime.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
  
  
}
