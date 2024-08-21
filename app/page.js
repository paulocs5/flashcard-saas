'use client'
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Toolbar, AppBar, Button, Container, Typography, Grid, Box } from "@mui/material";
import Head from "next/head";
import App from "next/app";

export default function Home() {
  return (
    <Container maxWidth="100vw" >
      <Head>
        <title>Flash Your Knowledge in a Card with FlashyCard</title>
        <meta name="description" content="Create flashcards powered with AI to solve your needs" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"style={{flexGrow: 1}}>
            FlashyCard AI
          </Typography>
          <SignedOut> 
            <Button color="inherit" href="/sign-in"> Login </Button>
            <Button color="inherit" href="sign-up" > Sign Up</Button>
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
        <Typography variant="h4" textAlign={'center'}> Features </Typography>
        <Grid container spacing ={4}>
          <Grid item xs={12} md={4}> 
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
          </Grid>
          <Grid item xs={12} md={4}> 
            <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            > 
              <Typography variant="h6"> Smart Flashcards </Typography> 
              <Typography> 
                {' '}
                Our AI powered assistant Flashy will produce your custom flashcard in real-time.  
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}> 
            <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            > 
              <Typography variant="h6"> Save your work and open anytime & anywhere </Typography> 
              <Typography> 
                {' '}
                Trying to study for an exam? Access your content from any device at anytime.
              </Typography>
            </Box>
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
              <Typography variant="h6" gutterBottom> Basic Plan 💡</Typography> 
              <Typography variant="h5"gutterBottom> $1.99 / Month </Typography> 
              <Typography> 
                {' '}
                - Basic themes for your custom flashcards.
              </Typography>
              <Typography gutterBottom> 
                {' '}
                - Limited storage and imput prompt for flashcard generation.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}} gutterBottom> 
                Select 
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} > 
            <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            > 
              <Typography variant="h6" gutterBottom> Pro Plan 🛠️ </Typography> 
              <Typography variant="h5" gutterBottom> $3.99 / Month </Typography> 
              <Typography> 
                {' '}
                - Unlock access up to 100+ AI generated flashcard template.
              </Typography>
              <Typography gutterBottom> 
                {' '}
                - Unlimited storage for your imaginative creations.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}} gutterBottom> 
                Select 
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box 
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
            > 
              <Typography variant="h6" gutterBottom> Elite Plan 🚀</Typography> 
              <Typography variant="h5" gutterBottom> $4.99 / Month </Typography> 
              <Typography> 
                {' '}
                - Unlock features including, AI Text and Image Generation.
              </Typography> 
              <Typography gutterBottom> 
                {' '}
                - Infinite prompting to our AI assistant, get feedback instantly.
              </Typography>
              <Button variant="contained" color="primary" gutterBottom sx={{mt: 2}}> Select </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
