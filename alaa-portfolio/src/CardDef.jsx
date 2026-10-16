import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardDef() {
  const developer = {
    name: "Alaa Hybet",
    role: "Front-End Developer",
    stack: ["React", "TS", "Next.js"],
    coffee: true,
    hireable: true,
  };

  return (
    <Card className='card' sx={{ Width:'400px', borderRadius: 3 , backgroundColor:'#041430', color:'white', boxShadow:'0px 15px 40px  rgba(109, 109, 151, 0.4)' , display:'flex' ,flexDirection:'column' ,alignItems:'flex-end', }}>
      <CardContent >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
        >
          {developer.name}
        </Typography>

        <Typography
          sx={{ color: 'text', mb: 2 }}
        >
          {developer.role}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          Tech Stack: {developer.stack.join(" • ")}
        </Typography>

        <Typography variant="body2">
          Coffee Lover: {developer.coffee ? "☕ Yes" : "No"}
        </Typography>

        <Typography variant="body2">
          Available for Hire: {developer.hireable ? "✅ Yes" : "❌ No"}
        </Typography>
      </CardContent>

      <CardActions className='intern'>
        <Button
          variant="contained"
          size="small"
          onClick={() => alert("Thanks for your interest!")}
        >
          Contact Me
        </Button>
      </CardActions>
    </Card>
  );
}