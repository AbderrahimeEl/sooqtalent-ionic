import { Container, Typography, Card, CardContent, Box, Link, Stack, Paper, Divider, useTheme, Avatar, Chip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useAuth } from '../context/AuthContext';
import { clientProfiles } from '../data/profiles';
import { projects } from '../data/projects';

export default function ClientDashboard() {
  const { user } = useAuth();
  const profile = clientProfiles.find((p) => p.userId === user?.id);
  const myProjects = projects.filter((p) => p.clientId === user?.id);
  const theme = useTheme();

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'medium' }}>
        Client Dashboard
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
          <Box sx={{ px: 3, py: 2.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 'medium', mb: 1 }}>
              {profile.companyName}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Chip 
                label={profile.industry} 
                size="small" 
                sx={{ bgcolor: 'action.hover' }} 
              />
              <Typography variant="body2" sx={{ mx: 1 }}>—</Typography>
              <Link 
                href={profile.companyWebsite} 
                target="_blank" 
                rel="noopener"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 0.5,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                <LanguageIcon fontSize="small" />
                <Typography variant="body2">
                  {profile.companyWebsite.replace(/^https?:\/\//, '')}
                </Typography>
              </Link>
            </Box>

            <Divider sx={{ my: 2 }} />
            
            <Typography sx={{ mt: 2 }}>
              {profile.description}
            </Typography>
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
          <Typography color="text.secondary">You have no projects yet.</Typography>
        </Paper>
      )}
    </Container>
  );
}
