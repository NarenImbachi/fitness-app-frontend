import { Box, Select, FormControl, InputLabel, MenuItem, TextField, Button } from "@mui/material";
import React from "react";

const ActivityForm = () => {

    const [Activity, setActivity] = React.useState({
        type: "RUNNING",
        duration: '',
        caloriesBurned: '',
        additionalMetrics: {}
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // await addActivity(Activity)
            // onActivityAdd()
            setActivity({
                type: "RUNNING",
                duration: '',
                caloriesBurned: '',

            })
        } catch (error) {
            console.error("Error adding activity:", error)
        }

    }


    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Activity Type</InputLabel>
                <Select
                    value={Activity.type}
                    onChange={(e) => setActivity({ ...Activity, type: e.target.value })}
                >
                    <MenuItem value="RUNNING">Running</MenuItem>
                    <MenuItem value="CYCLING">Cycling</MenuItem>
                    <MenuItem value="SWIMMING">Swimming</MenuItem>
                </Select>
            </FormControl>

            <TextField fullWidth 
                label="Duration (minutes)" 
                type="number" sx={{ mb: 2 }} 
                value={Activity.duration} 
                onChange={(e) => setActivity({ ...Activity, duration: e.target.value })} />
            
            <TextField fullWidth 
                label="Calories Burned" 
                type="number" sx={{ mb: 2 }} 
                value={Activity.caloriesBurned} 
                onChange={(e) => setActivity({ ...Activity, caloriesBurned: e.target.value })} />
            
            <Button variant="contained" type="submit">Add Activity</Button>
        </Box>
    );
}

export default ActivityForm;