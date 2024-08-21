'use client'
import { Container, TextField, Typography, Paper, Box, Button, Grid, Card, CardActionArea, CardContent } from "@mui/material"
import { useRouter } from "next/router"
import { useUser } from "@clerk/nextjs"
import { writeBatch } from "firebase/firestore"
import { useState } from "react"
import { getDoc } from "firebase/firestore"
import { Graduate } from "next/font/google"


export default function Generate() {
      const{isLoaded, isSignedIn, user} = useUser()
      const{flashcards, setFlashcards} = useState([])
      const{flipped, setFlipped} = useState([])
      const{text, setText} = useState('')
      const{name, setName} = useState('')
      const{open, setOpen} = useState(false)
      const router = useRouter

      const handleSubmit = async () => {
            fetch('api/generate',{
                  method: 'POST',
                  body: text,

            })
            .then ((res) => res.json())
            .then (data > setFlashcards(data))
      

            const handleCardClick = (id) => {
                  setFlipped((prev) => ({
                        ...prev,
                        [id]: !prev[id],
                  }))

            }

            const handleOpen = () => {
                  setOpenI(true)
            }

            const handleClose = () => {
                  setOpenI(false)
            }

            const saveFlashcards = async () => {
                  if(!name) {
                        alert('Please enter a name')
                        return
                  }
            }

            const batch = writeBatch(db)
            const userDocRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(userDocRef)

            //if the name already exist 

            if (docSnap.exist()) {
                  const collections = docSnap.data().flashcards || []
                  if (collections.find((f) => f.name === name)) {
                        alert('Flashcard colletion with this name already exist')
                        return
                  } else {
                        collections.push({name})
                        batch.set(userDocRef, {flashcards: collections}, {merge: true})
                  }
            }
            //if docSnap does not exist
            else {
                  batch.set(userDocRef, {flashcards: [{name}]})
            }

            // set any individual flashcard
            const colRef = collection(userDocRef, name)
            flashcards.forEach((flashcard) => {
                  const cardDocRef = doc(colRef)
                  batch.set(cardDocRef, flashcard)
            })

                  await batch.commit()
                  handleClose()
                  router.push('/flashcards')
            }

      return <Container maxWidth="md">
            <Box 
                  sx={{
                         mt: 4,
                        mb: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                  }}
            >
                  <Typography variant="h4"> Generate Flashcards </Typography>
                  <Paper sx={{p: 4, width:'100%'}}>
                        <TextField 
                              value={text} 
                              onChange={(e) => setText(e.target.value)} 
                              label="Enter text" 
                              fullWidth multiline 
                              rows={4} 
                              variant="outlined"
                              sx={{
                                     mb: 2,
                              }}
                        />
                        <Button 
                              variant="contained"
                              color="primary" 
                              onClick={handleSubmit}
                              fullWidth
                        >
                              {' '}
                              Submit to FLashy
                        </Button>

                  </Paper>
            </Box>

            {flashcards.length > 0 && (
                  <Box sx={{mt: 4}}>
                        <Typography variant="h5"> Preview of your Flashcars </Typography>
                        <Grid container spacing={3}> 
                              {flashcards.map((flashcard, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                          <Card>
                                                <CardActionArea
                                                onClick={() => {
                                                      handleCardClick(index)
                                                }}
                                                >
                                                      <CardContent> 
                                                            <Box> 
                                                                  <div> 
                                                                        <div>
                                                                              <Typography variant="h5" component="div">
                                                                                    {flashcard.front}
                                                                              </Typography>
                                                                        </div>
                                                                  </div>
                                                            </Box>
                                                      </CardContent>
                                                </CardActionArea>
                                          </Card>
                                    </Grid>   

                              ))}

                        </Grid>

                  </Box>
            )}
      </Container>
}
