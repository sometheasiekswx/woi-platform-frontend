import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import LocalLibrary from '@mui/icons-material/LocalLibrary'


const FeaturedCards = (props) => {
    const {title, data, id} = props
    const [articles, setArticles] = useState(data.slice(0, 3))

    const seeAll = () => {
        setArticles(data)
    }

    return (
        <Box
            id={id}
            sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                    backgroundColor: 'primary.dark',
                },
                width: {xs: '100%'},
            }}>
            <Typography
                variant='h4'
                component={'h4'}
                href='/'
                sx={{
                    my: 0,
                    py: 2,
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '.1rem',
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                {title}
            </Typography>
            <Grid
                container
                sx={{pb: 4, width: {xs: '100%'}, pl: 0}}
                direction='row'
                justifyContent='center'
                alignItems='center'
                rowSpacing={{xs: 4}}
                columnSpacing={{xs: 2, md: 0}}
                gap={2}

            >
                {articles.map((d, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`${d.name}-${d.author}-${index}`}>
                        <Card>
                            <CardMedia
                                component='img'
                                alt={`${d.name} ${d.imageLink}`}
                                height='140'
                                image={d.imageLink}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div' sx={{
                                    whiteSpace: 'nowrap', overflowX: 'auto',
                                }}>
                                    {d.name}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    {d.description.Length > 100 ? d.description : `${d.description.slice(0, 100)}...`}
                                </Typography>
                                <Grid container
                                      sx={{mt: 2}}
                                      justifyContent='center'
                                      alignItems='center'>
                                    <Grid item xs={5} sx={{
                                        display: 'flex', alignItems: 'center', flexWrap: 'wrap',
                                    }}>
                                        <LocalLibrary sx={{mr: 1}}/>
                                        <span>{d.views}</span>
                                    </Grid>
                                    <Grid item xs={7} sx={{textAlign: 'right'}}>
                                        {d.author}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>))}
            </Grid>
            {articles.length <= 3 ?
                <Box
                    component='div'
                    sx={{
                        pb: 4, display: 'flex', justifyContent: 'center',
                    }}>
                    <Button variant='contained' color='secondary' onClick={() => {
                        seeAll()

                    }}>See all {title}</Button>
                </Box>
                :
                <></>
            }
        </Box>)
}

export default FeaturedCards