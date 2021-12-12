import { Container, TableCell, TableRow, CircularProgress, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Table from './Table'

const List = () => {

    const [loading, setLoading] = useState(false)
    const [persons, setPersons] = useState([])
    useEffect(() => {
        let limit = window.prompt('enter limit', 10)
        const see = async () => {
            setLoading(true)
            const res = await axios.get(`https://forbes400.herokuapp.com/api/forbes400/real-time?limit=${limit > 400 ? 400 : limit || 5}`)
            console.log(res.data)
            setPersons(res.data)
            setLoading(false)
        }
        console.log(loading)
        see()
    }, [])

    return (
        <Container spacing={3}>
            {loading !== true ? (
                <Table>
                {persons.map(person => (
                <TableRow hover key={person.position}>
                    <TableCell>
                        <a href={person.thumbnail || person.squareImage}>
                            <img src={person.squareImage} alt={person.personName} className='avatar' />
                        </a>
                    </TableCell>
                    <TableCell align="center">{person.position}</TableCell>
                    <TableCell component="th" scope="row">
                        <a 
                            href={`https://www.google.com/search?q=${person.personName}`}
                            target="_blank"
                            rel="noreferrer">
                            {person.personName}
                        </a>
                    </TableCell>
                    <TableCell>
                        <a 
                            href={`https://www.google.com/search?q=${person.source}`}
                            target="_blank"
                            rel="noreferrer">
                            {person.source}
                        </a></TableCell>
                    <TableCell align="right">{person.industries[0]}</TableCell>
                </TableRow>
                ))}
            </Table>
            ) : <CircularProgress />}
            {loading !== true && (
                <Typography variant="overline">
                    <small>Men buni shunchaki o'yin kulgi uchun yozdim</small>
                </Typography>
            )}
        </Container>
    )
}

export default List
