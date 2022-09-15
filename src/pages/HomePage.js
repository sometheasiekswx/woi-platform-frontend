import React from 'react'
import Stack from '@mui/material/Stack'

import FeaturedCards from '../components/FeaturedCards'

import natureWallpaper from '../images/wallpaperflare.com_wallpaper.jpg'
import articleImg1
    from '../images/Californian-Redwood-Forest-Beech-Forrest-Otways-Great-Ocean-Road16-large-1800x650.jpg'
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";


const featuredArticles = [{
    name: 'Title 1',
    description: 'Random text Random text Random text Random text Random text Random text Random text Random text Random text',
    views: 23,
    author: 'Somethea',
    imageLink: natureWallpaper,
}, {
    name: 'Title 1',
    description: 'Random text Random text Random text',
    views: 234,
    author: 'The Wok',
    imageLink: articleImg1,
}, {
    name: 'Title 1',
    description: 'Random text Random text Random text',
    views: '2k',
    author: 'Zhong Xina',
    imageLink: natureWallpaper,
}, {
    name: 'Title 1',
    description: 'Random text Random text Random text Random text Random text Random text',
    views: '4k',
    author: 'Somethea',
    imageLink: articleImg1,
},]

const featuredTutorials = [{
    name: 'Title 1',
    description: 'Random text Random text Random text',
    views: 2344,
    author: 'Zhong Xina',
    imageLink: natureWallpaper,
}, {
    name: 'Title 1',
    description: 'Random text Random text Random text',
    views: 23,
    author: 'Somethea',
    imageLink: articleImg1,
}, {
    name: 'Title 1',
    description: 'Random text Random text Random text what happens when the text overflows as well as to improve my typing speed.Random text Random text Random text Random text Random text Random text Random text Random text Random text',
    views: 234,
    author: 'Somethea',
    imageLink: natureWallpaper,
}, {
    name: 'Title 1',
    description: 'Random text Random text Random text Random text Random text Random text',
    views: 300,
    author: 'Zhong Xina',
    imageLink: articleImg1,
},]


const HomePage = () => {
    return (
        <Stack spacing={0} direction='column'
               justifyContent='center'
               alignItems='center'
               sx={{
                   backgroundColor: 'primary.dark',
                   '&:hover': {
                       backgroundColor: 'primary.main',
                   },
               }}
        >
            <Card>
                <div style={{position: "relative"}}>
                    <CardMedia
                        component="img"
                        sx={{
                            marginY: {lg: 0},
                            borderRadius: {xs: 0, lg: 1},
                        }}
                        src={natureWallpaper}/>
                    <div style={{
                        position: "absolute",
                        top: '50%',
                        left: "5%",
                    }}>
                        <Typography
                            variant='h2'
                            component='a'
                            href='#feature-article'
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                backgroundColor: 'primary.main',
                                fontWeight: 500,
                                letterSpacing: '.1rem',
                                fontSize: {xs: '2rem', sm: '3rem', md: '3.75rem'},
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Wild Otways Initiative
                        </Typography>
                    </div>
                </div>
            </Card>
            <FeaturedCards id={'feature-article'} title={'Featured articles'} data={featuredArticles}/>
            <FeaturedCards title={'Featured pages'} data={featuredTutorials}/>
        </Stack>
    )
}

export default HomePage