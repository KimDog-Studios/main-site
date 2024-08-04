'use client';

import Sidebar from '@/components/Sidebar';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { ImageList, ImageListItem } from '@mui/material';

// Transition component for the dialog
const Transition = React.forwardRef(function Transition(props: any, ref: React.Ref<unknown>) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const itemData = [
  {
    img: '/assets/mods/kimdog-network-mod-pack-ets2/engines/1.png',
  },
  {
    img: '/assets/mods/kimdog-network-mod-pack-ets2/engines/2.png',
  },
  {
    img: '/assets/mods/kimdog-network-mod-pack-ets2/engines/3.png',
  },
  {
    img: '/assets/mods/kimdog-network-mod-pack-ets2/engines/4.png',
  },
  {
    img: '/assets/mods/kimdog-network-mod-pack-ets2/engines/5.png',
  }
];

function Page() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProceed = () => {
    // Open the direct download link in a new tab
    window.open('https://drive.google.com/uc?export=download&id=1f1xUClVc6dmMX-U4EqrrWf6OpAuU8qpz', '_blank');
    setOpen(false);
  };

  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className='flex-1 mt-0 p-8'>
        
        {/* Title */}
        <div className='flex justify-center items-center mt-10'>
          <h1 className='font-bold text-3xl'>KimDog's Mod Pack</h1>
        </div>

        {/* In-Game Images and Description */}
        <div className='flex flex-col md:flex-row mt-10'>
          {/* Images Section */}
          <div className='flex-1 md:mr-8'>
            <div className='w-full flex justify-center ml-56 -mt-11'>
              <ImageList sx={{ width: 800, height: 1250 }} cols={3} rowHeight={256}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <Image
                      src={item.img}
                      alt='Game Image'
                      width={256}
                      height={256}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>

          {/* Description Section */}
          <div className='flex-1'>
            <h2 className='text-xl font-bold mb-4'>Description:</h2>
            <p className='text-lg'>
              This mod pack includes all sorts of Mods inside!<br />
              Engines<br />
              Trucks<br />
              Tuning Parts
            </p>
            <div className='mt-4'>
              <Button variant="contained" onClick={handleClickOpen}>
                Download
              </Button>
            </div>
          </div>
        </div>

        {/* Dialog for Confirmation */}
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Confirm Download
          </DialogTitle>
          <DialogContent>
            <p>Are you sure you want to download the mod pack?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleProceed} color="primary" autoFocus>
              Proceed
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Page;
