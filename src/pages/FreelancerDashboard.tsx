import { Container, Typography, Card, CardContent, Box, Link, Stack, Paper, Divider, useTheme, Avatar, Chip, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAuth } from '../context/AuthContext';
import { freelancerProfiles } from '../data/profiles';
import { projects } from '../data/projects';

export default function FreelancerDashboard() {
  const { user } = useAuth();
  const profile = freelancerProfiles.find((p) => p.userId === user?.id) as { projects: number[]; title: string; education: string; skills: string[]; certifications: string; githubUrl: string; avatarUrl?: string } | undefined;
  const myProjects = projects.filter((p) => profile?.projects.includes(p.id));
  const theme = useTheme();

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'medium' }}>
        Freelancer Dashboard
      </Typography>

      {profile && (
        <Paper
          elevation={3}
          sx={{
            mb: 4,
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Box sx={{ 
            height: 80, 
            bgcolor: theme.palette.primary.main,
            position: 'relative'
          }} />
          <Box sx={{ px: 3, py: 2.5, position: 'relative' }}>
            <Avatar
              src={profile.avatarUrl || "https://mui.com/static/images/avatar/1.jpg"}
              sx={{ 
                width: 64, 
                height: 64,
                position: 'absolute',
                top: -32,
                left: 24,
                border: '3px solid white',
                boxShadow: theme.shadows[2]
              }}
            />
            <Box sx={{ ml: 10 }}>
              <Typography variant="h5" sx={{ fontWeight: 'medium', mb: 1 }}>
                {profile.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.education}
              </Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" color="text.primary" sx={{ mb: 1 }}>
                Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {profile.skills.map((skill, index) => (
                  <Chip key={index} label={skill} size="small" 
                    sx={{ 
                      bgcolor: 'action.hover',
                      '&:hover': { bgcolor: 'action.selected' }
                    }} 
                  />
                ))}
              </Box>
              
              <Typography variant="subtitle2" color="text.primary" sx={{ mt: 2, mb: 1 }}>
                Certifications
              </Typography>
              <Typography variant="body2">
                {profile.certifications}
              </Typography>
              
              <Button
                variant="outlined"
                size="small"
                component={Link}
                href={profile.githubUrl}
                target="_blank"
                rel="noopener"
                sx={{ mt: 2 }}
                startIcon={<GitHubIcon fontSize="small" />}
              >
                GitHub Profile
              </Button>
            </Box>
          </Box>
        </Paper>
      )}

      <Typography variant="h5" sx={{ mt: 4, mb: 3, fontWeight: 'bold' }}>
        Your Projects
      </Typography>
      {myProjects.length > 0 ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {myProjects.map((proj) => (
            <Paper
              key={proj.id}
              elevation={2}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <Box sx={{ 
                p: 0.5, 
                bgcolor: 'primary.main',
                height: 8
              }} />
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="medium" gutterBottom>
                  {proj.title}
                </Typography>
                <Divider sx={{ my: 1.5 }} />
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 3, 
                  mb: 2, 
                  mt: 2 
                }}>
                  <Box sx={{ minWidth: '150px' }}>
                    <Typography variant="caption" color="text.secondary">
                      CATEGORY
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      {proj.category}
                    </Typography>
                  </Box>
                  <Box sx={{ minWidth: '150px' }}>
                    <Typography variant="caption" color="text.secondary">
                      BUDGET
                    </Typography>
                    <Typography variant="body2" fontWeight="medium" sx={{ mt: 0.5 }}>
                      ${proj.budget}
                    </Typography>
                  </Box>
                  <Box sx={{ minWidth: '150px' }}>
                    <Typography variant="caption" color="text.secondary">
                      DEADLINE
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      {proj.deadline}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {proj.description}
                </Typography>
              </CardContent>
            </Paper>
          ))}
        </Box>
      ) : (
        <Paper
          elevation={1}
          sx={{
            p: 3,
            textAlign: 'center',
            borderRadius: 2,
            bgcolor: 'background.paper',
            borderLeft: '4px solid',
            borderColor: 'warning.main'
          }}
        >
          <Typography color="text.secondary">No projects assigned yet.</Typography>
        </Paper>
      )}
    </Container>
  );
}
