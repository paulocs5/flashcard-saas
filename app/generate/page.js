'use client'
import { Container, TextField, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useUser } from "@clerk/nextjs"
import { writeBatch } from "firebase/firestore"
import { useState } from "react"


export default function Generate() {
      const{isLoaded, isSignedIn, user} = useUser()
      const{flashcards, setFlashcards} = useState([])
      const{flipped, setFlipped} = useState([])
      const{text, setText} = useState('')
      const{name, setName} = useState('')
      const{open, setOpen} = useState(false)
      const router = useRouter()

      const handleSubmit = async () => {
            fetch('api/generate',{
                  method: 'POST',
                  body: text,

            })
            .then ((res) => res.json())
            .then (data > setFlashcards(data))
      }

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

      const setFlashcards = async () => {
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
                        <TextField value={text} onChange{(e) => settleText}></TextField>

                  </Paper>
            </Box>

      </Container>
}