import React from 'react'
// import acardion material ui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Acardion({data, title}) {
  return (
    <section className='py-16 md:py-24'>
        <div className="max-w-7xl px-4 md:px-14">
            <h1 className='text-center capitalize text-3xl md:text-4xl text-[#0f0f0f]'>
                {title}
            </h1>

            <div className=' md:w-[600px] mx-auto my-16'>
            {data.map(d => (
                <Accordion className={`acardion-${d.className}`} key={d.id}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className='text-[#464646] text-3xl '>
                        {d.title}
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='mx-auto'>
                    <Typography>
                        {d.text}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Acardion