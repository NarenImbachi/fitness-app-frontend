import {Grid, Typography, Card, CardContent} from "@mui/material";
import React, { useEffect , useState} from "react";
import {getActivities} from "../services/api";
import {useNavigate} from "react-router";

const ActivityList = () => {

  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await getActivities();
        setActivities(response.data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <Grid container spacing={2} >
      {activities.map((activity) => (
        <Grid container spacing={{xs:2, md:3}} columns={{xs:4, sm:8, md:12}} >
          <Card sx={{cursor: "pointer"}} onClick={() => navigate(`/activities/${activity.id}`)}>
            <CardContent>
              <Typography variant="h6">{activity.type}</Typography>
              <Typography>Duration: {activity.duration}</Typography>
              <Typography>Calories Burned: {activity.caloriesBurned}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ActivityList;