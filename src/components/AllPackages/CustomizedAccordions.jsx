import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ tourPlan }) {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {tourPlan?.map((item, idx) => (
        <Accordion
          sx={{
            border: 0,
            borderBottom: '2px solid white',
            borderTop: '2px solid white',
          }}
          key={idx}
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
        >
          <AccordionSummary
            aria-controls={`panel${idx}d-content`}
            id={`panel${idx}d-header`}
            sx={{ backgroundColor: '#f9c8d9', borderRadius: '8px' }}
          >
            <Typography
              sx={{
                backgroundColor: '#f73378',
                paddingX: '10px',
                paddingY: '4px',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px',
              }}
            >
              Day 0{item?.day}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: 0 }}>
            <Typography sx={{ fontStyle: 'italic', color: '#f50057' }}>
              {item?.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
