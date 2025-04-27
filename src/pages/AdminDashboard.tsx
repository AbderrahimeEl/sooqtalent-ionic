import { Container, Card, CardContent, Typography, Box, Stack, Paper, Divider, useTheme, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import { users } from '../data/users';

export default function AdminDashboard() {
  const theme = useTheme();
  
  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'medium' }}>
        Admin Dashboard
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {users.map((u) => (
          <Paper
            key={u.id}
            elevation={2}
            sx={{
              width: { xs: '100%', sm: '45%', md: '31%' },
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
              bgcolor: theme.palette.primary.main,
              height: 8
            }} />
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText
                  }}
                >
                  {u.email.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="h6" sx={{ ml: 2, fontWeight: 'medium' }}>
                  User #{u.id}
                </Typography>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} />
                  <Typography variant="body2">
                    {u.email}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BadgeIcon fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} />
                  <Box sx={{
                    display: 'inline-block',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 'medium',
                    bgcolor: 
                      u.role === 'ADMIN' 
                        ? 'error.main' 
                        : u.role === 'CLIENT' 
                          ? 'primary.main' 
                          : 'success.main',
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {u.role}
                  </Box>
                </Box>
              </Stack>
            </CardContent>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}