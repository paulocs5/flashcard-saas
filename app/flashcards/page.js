'use client'

import { useUser } from "@clerk/nextjs"
import { use, useEffect, useEffectff, useState } from "react"

import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useRouter } from "next/navigation"
import { Router } from "next/router"
import { CardActionArea, CardContent, Container, Grid, Typography, Card } from "@mui/material"

export default function Flashcards() {
    // verify user is signed in
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const router = useRouter()

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || []
                console.log(collections)
                setFlashcards(collections)
            } else {
                await setDoc(docRef, {flashcards: []})
            }
        }
        getFlashcards()
    }, [user])

    if (!isLoaded || !isSignedIn) {
        return <></>
    }

    const handleCardClick = (id) => {
        router.push('/flashcard?id=${id}')

    }

    return 
    <Container maxWidth='100vw'> 
        <Grid container spacing={3} sx={{
            mt: 4
        }}> 
            {flashcards.map((flashcard, index) => (
                // eslint-disable-next-line react/jsx-key
                <Grid item xs={12} sm={6} maxWidth={4} keys={index}>
                    <Card> 
                        <CardActionArea
                            onClick={() => {
                                handleCardClick(id)
                            }}
                        >
                            <CardContent> 
                                <Typography variant="h6">
                                    {flashcard.name}
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                    </Card>


                </Grid>
            ))}
        </Grid>

    </Container>
}