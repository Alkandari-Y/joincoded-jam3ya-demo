import React from 'react'
import { observer } from 'mobx-react'
//Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Jam3yaItem = ({ jam3ya }) => {


    console.log(typeof jam3ya.title)

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="140"
            image={jam3ya.image}
            alt={jam3ya.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {jam3ya.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Organized by: {jam3ya.author.username}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default observer(Jam3yaItem)
