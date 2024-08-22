'use client'

import { useUser } from "@clerk/nextjs"
import { use, useEffect, useEffectff, useState } from "react"

import { collection, doc, getDoc, setDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { useSearchParams } from "next/navigation"
import { Router } from "next/router"
import { CardActionArea, CardContent, Container, Grid, Typography, Card } from "@mui/material"
import { Coming_Soon } from "next/font/google"

export default function Flashcards() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])
  
    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    useEffect(() => {
        async function getFlashcard() {
            if (!search || !user) return
            const colRef = collection(doc(collection(db, 'users'), user.id, search))
            const docs = await getDocs(colRef)
            const flashcards = []

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || []
                console.log(collections)
                setFlashcards(collections)
            } else {
                await setDoc(docRef, {flashcards: []})
            }
        }
        getFlashcard()
    }, [user])


}