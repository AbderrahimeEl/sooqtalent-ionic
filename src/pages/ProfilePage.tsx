import { Container, Card, CardContent, Avatar, Typography, Stack, Box, Divider, Paper, useTheme } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { userProfiles } from '../data/userProfiles';

export default function ProfilePage() {
  const { user } = useAuth();
  const profile = userProfiles.find((p) => p.userId === user?.id);
  const theme = useTheme();

  if (!profile) {
    return (
      <Container sx={{ mt: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            textAlign: 'center',
            borderRadius: 2
          }}
        >
          <Typography variant="h6" color="text.secondary">No profile found.</Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'background.paper'
        }}
      >
        <Box 
          sx={{ 
            height: 120, 
            bgcolor: theme.palette.primary.main,
            position: 'relative'
          }}
        />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: -8 }}>
          <Avatar
            src={profile.profilePictureUrl}
            sx={{ 
              width: 150, 
              height: 150, 
              border: '5px solid white',
              boxShadow: theme.shadows[3]
            }}
          />
          
          <Typography variant="h4" sx={{ mt: 2, fontWeight: 'medium' }}>
            {profile.firstName} {profile.lastName}
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              mt: 1,
              mb: 3,
              px: 4,
              textAlign: 'center'
            }}
          >
            {profile.bio}
          </Typography>
          
          <Divider flexItem sx={{ width: '80%' }} />
          
          <Card 
            variant="outlined" 
            sx={{ 
              mt: 3, 
              mb: 4,
              width: '80%',
              borderRadius: 2
            }}
          >
            <CardContent>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', width: 100 }}>
                    Phone:
                  </Typography>
                  <Typography variant="body1">{profile.phone}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', width: 100 }}>
                    Location:
                  </Typography>
                  <Typography variant="body1">{profile.location}</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Paper>
    </Container>
  );
}
